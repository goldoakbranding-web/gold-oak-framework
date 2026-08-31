"use client";

import dynamic from "next/dynamic";
import {
  Component,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import type { ReactNode } from "react";
import { roofLayers } from "@/config/roofLayers";
import RoofControls from "./RoofControls";
import RoofFallback from "./RoofFallback";
import RoofInfoCard from "./RoofInfoCard";
import RoofLabels from "./RoofLabels";

const RoofScene = dynamic(() => import("./RoofScene"), {
  loading: () => <RoofFallback status="loading" />,
  ssr: false,
});

type SceneStatus = "deferred" | "checking" | "ready" | "unsupported" | "error";

type ManualOverride =
  | { kind: "complete" }
  | { kind: "exploded" }
  | { kind: "layer"; id: string; progress: number }
  | null;

type SceneBoundaryProps = {
  children: ReactNode;
  fallback: ReactNode;
  onError: () => void;
  resetKey: number;
};

type SceneBoundaryState = {
  hasError: boolean;
};

class RoofSceneErrorBoundary extends Component<SceneBoundaryProps, SceneBoundaryState> {
  state: SceneBoundaryState = { hasError: false };

  static getDerivedStateFromError(): SceneBoundaryState {
    return { hasError: true };
  }

  componentDidCatch() {
    this.props.onError();
  }

  componentDidUpdate(previousProps: SceneBoundaryProps) {
    if (previousProps.resetKey !== this.props.resetKey && this.state.hasError) {
      this.setState({ hasError: false });
    }
  }

  render() {
    return this.state.hasError ? this.props.fallback : this.props.children;
  }
}

const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max);
const smoothstep = (value: number) => value * value * (3 - 2 * value);

function supportsWebGL() {
  try {
    const canvas = document.createElement("canvas");
    canvas.width = 1;
    canvas.height = 1;
    const options: WebGLContextAttributes = {
      alpha: true,
      antialias: false,
      failIfMajorPerformanceCaveat: false,
      powerPreference: "low-power",
    };

    const context = canvas.getContext("webgl2", options) ?? canvas.getContext("webgl", options);
    if (!context || context.isContextLost()) return false;

    return Boolean(context.getParameter(context.VERSION));
  } catch {
    return false;
  }
}

function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    const updateMatch = () => setMatches(media.matches);
    updateMatch();
    media.addEventListener("change", updateMatch);
    return () => media.removeEventListener("change", updateMatch);
  }, [query]);

  return matches;
}

export default function RoofViewer() {
  const viewerRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);
  const scrollFrameRef = useRef(0);
  const manualOverrideRef = useRef<ManualOverride>(null);
  const manualScrollAnchorRef = useRef<number | null>(null);

  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const reducedMotion = useMediaQuery("(prefers-reduced-motion: reduce)");

  const [hoveredLayerId, setHoveredLayerId] = useState<string | null>(null);
  const [isDocumentVisible, setIsDocumentVisible] = useState(true);
  const [isSceneVisible, setIsSceneVisible] = useState(false);
  const [manualOverride, setManualOverrideState] = useState<ManualOverride>(null);
  const [probeNonce, setProbeNonce] = useState(0);
  const [sceneReady, setSceneReady] = useState(false);
  const [sceneStatus, setSceneStatus] = useState<SceneStatus>("deferred");
  const [scrollProgress, setScrollProgress] = useState(0);
  const [shouldLoadScene, setShouldLoadScene] = useState(false);

  useEffect(() => {
    const visual = visualRef.current;
    if (!visual) return;

    if (typeof IntersectionObserver === "undefined") {
      const timeout = setTimeout(() => {
        setShouldLoadScene(true);
        setIsSceneVisible(true);
      }, 0);
      return () => clearTimeout(timeout);
    }

    const preloadObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoadScene(true);
          preloadObserver.disconnect();
        }
      },
      { rootMargin: "600px 0px" },
    );
    const visibilityObserver = new IntersectionObserver(
      ([entry]) => setIsSceneVisible(entry.isIntersecting),
      { threshold: 0.01 },
    );

    preloadObserver.observe(visual);
    visibilityObserver.observe(visual);

    return () => {
      preloadObserver.disconnect();
      visibilityObserver.disconnect();
    };
  }, []);

  useEffect(() => {
    const updateVisibility = () => setIsDocumentVisible(document.visibilityState === "visible");
    updateVisibility();
    document.addEventListener("visibilitychange", updateVisibility);
    return () => document.removeEventListener("visibilitychange", updateVisibility);
  }, []);

  useEffect(() => {
    if (!shouldLoadScene) return;

    let cancelled = false;
    const timeout = window.setTimeout(() => {
      if (cancelled) return;
      setSceneStatus("checking");

      const available = supportsWebGL();
      if (!cancelled) setSceneStatus(available ? "ready" : "unsupported");
    }, 0);

    return () => {
      cancelled = true;
      window.clearTimeout(timeout);
    };
  }, [probeNonce, shouldLoadScene]);

  useEffect(() => {
    const updateProgress = () => {
      const viewer = viewerRef.current;
      const stage = stageRef.current;
      if (!viewer || !stage) return;

      const scrollY = window.scrollY;
      const manualAnchor = manualScrollAnchorRef.current;
      if (
        manualOverrideRef.current &&
        manualAnchor !== null &&
        Math.abs(scrollY - manualAnchor) > 18
      ) {
        manualOverrideRef.current = null;
        manualScrollAnchorRef.current = null;
        setManualOverrideState(null);
      }

      const bounds = viewer.getBoundingClientRect();
      let rawProgress: number;

      if (isDesktop) {
        const stickyTop = 80;
        const runway = Math.max(viewer.offsetHeight - stage.offsetHeight, window.innerHeight * 0.55);
        rawProgress = (stickyTop - bounds.top) / runway;
      } else {
        const runway = Math.max(bounds.height + window.innerHeight * 0.12, 1);
        rawProgress = (window.innerHeight * 0.78 - bounds.top) / runway;
      }

      const nextProgress = smoothstep(clamp(rawProgress, 0, 1));
      setScrollProgress((current) => (Math.abs(current - nextProgress) > 0.002 ? nextProgress : current));
    };

    const requestProgressUpdate = () => {
      window.cancelAnimationFrame(scrollFrameRef.current);
      scrollFrameRef.current = window.requestAnimationFrame(updateProgress);
    };

    updateProgress();
    window.addEventListener("scroll", requestProgressUpdate, { passive: true });
    window.addEventListener("resize", requestProgressUpdate);

    return () => {
      window.cancelAnimationFrame(scrollFrameRef.current);
      window.removeEventListener("scroll", requestProgressUpdate);
      window.removeEventListener("resize", requestProgressUpdate);
    };
  }, [isDesktop]);

  const applyManualOverride = useCallback((nextOverride: ManualOverride) => {
    manualOverrideRef.current = nextOverride;
    manualScrollAnchorRef.current = window.scrollY;
    setManualOverrideState(nextOverride);
  }, []);

  const handleLayerChange = useCallback(
    (id: string) => {
      const index = roofLayers.findIndex((layer) => layer.id === id);
      const layerProgress = index < 0 ? 0 : (index + 1) / roofLayers.length;
      applyManualOverride({ id, kind: "layer", progress: layerProgress });
    },
    [applyManualOverride],
  );

  const handleSceneError = useCallback(() => {
    setSceneReady(false);
    setSceneStatus("error");
  }, []);

  const retryScene = useCallback(() => {
    setSceneReady(false);
    setSceneStatus("checking");
    setProbeNonce((current) => current + 1);
  }, []);

  const sceneProgress = useMemo(() => {
    if (manualOverride?.kind === "complete") return 0;
    if (manualOverride?.kind === "exploded") return 1;
    if (manualOverride?.kind === "layer") return manualOverride.progress;
    if (reducedMotion) return 1;
    return scrollProgress;
  }, [manualOverride, reducedMotion, scrollProgress]);

  const activeLayerId = useMemo(() => {
    if (manualOverride?.kind === "layer") return manualOverride.id;

    const stageProgress = manualOverride?.kind === "complete" ? 0 : sceneProgress;
    const index = Math.min(
      roofLayers.length - 1,
      Math.floor(clamp(stageProgress, 0, 0.9999) * roofLayers.length),
    );
    return roofLayers[index]?.id ?? roofLayers[0].id;
  }, [manualOverride, sceneProgress]);

  const displayedLayer =
    roofLayers.find((layer) => layer.id === (hoveredLayerId ?? activeLayerId)) ?? roofLayers[0];
  const controlMode =
    manualOverride?.kind === "complete"
      ? "complete"
      : manualOverride?.kind === "exploded"
        ? "exploded"
        : "scroll";
  const isSceneActive = isDocumentVisible && isSceneVisible;
  const fallbackStatus =
    sceneStatus === "unsupported" ? "unsupported" : sceneStatus === "error" ? "error" : "loading";

  return (
    <div className="mx-auto max-w-[1240px] lg:min-h-[205vh]" ref={viewerRef}>
      <div className="lg:sticky lg:top-20" ref={stageRef}>
        <div className="mb-5 flex flex-wrap items-center justify-between gap-4 px-1">
          <div className="flex items-center gap-3 text-[10px] font-medium uppercase tracking-[.18em] text-white/50">
            <span className="inline-flex h-2 w-2 rounded-full bg-[#d8bd79] shadow-[0_0_12px_#d8bd79]" />
            {reducedMotion ? "Static interactive view" : "Scroll-driven system view"}
          </div>
          <RoofControls
            mode={controlMode}
            onExplode={() => applyManualOverride({ kind: "exploded" })}
            onShowComplete={() => applyManualOverride({ kind: "complete" })}
          />
        </div>

        <div className="relative overflow-hidden rounded-[30px] border border-white/10 bg-[#11110e] shadow-[0_30px_100px_rgba(0,0,0,.48)] sm:rounded-[38px]">
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.045)_1px,transparent_1px)] bg-[size:36px_36px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_76%)]" />
          <div className="pointer-events-none absolute -left-24 top-0 h-72 w-72 rounded-full bg-[#d8bd79]/10 blur-[100px]" />
          <div className="pointer-events-none absolute -right-36 bottom-0 h-80 w-80 rounded-full bg-[#6b93a7]/10 blur-[110px]" />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#e9d6a4]/70 to-transparent" />

          <div className="relative grid lg:grid-cols-[minmax(0,1fr)_360px]">
            <div
              className="relative min-h-[440px] overflow-hidden border-b border-white/10 sm:min-h-[520px] lg:min-h-[680px] lg:border-b-0 lg:border-r"
              ref={visualRef}
            >
              {sceneStatus === "ready" ? (
                <RoofSceneErrorBoundary
                  fallback={<RoofFallback activeLayerId={activeLayerId} onRetry={retryScene} status="error" />}
                  onError={handleSceneError}
                  resetKey={probeNonce}
                >
                  <RoofScene
                    activeLayerId={activeLayerId}
                    dimInactiveLayers={manualOverride?.kind === "layer" || hoveredLayerId !== null}
                    hoveredLayerId={hoveredLayerId}
                    isActive={isSceneActive}
                    isReady={sceneReady || reducedMotion}
                    onHoverChange={setHoveredLayerId}
                    onLayerChange={handleLayerChange}
                    onReady={() => setSceneReady(true)}
                    onWebGLError={handleSceneError}
                    quality={isDesktop ? "desktop" : "mobile"}
                    reducedMotion={reducedMotion}
                    separation={sceneProgress}
                  />
                </RoofSceneErrorBoundary>
              ) : (
                <RoofFallback
                  activeLayerId={activeLayerId}
                  onRetry={sceneStatus === "error" || sceneStatus === "unsupported" ? retryScene : undefined}
                  status={fallbackStatus}
                />
              )}

              <div className="pointer-events-none absolute inset-x-0 top-0 flex items-start justify-between gap-3 p-5 sm:p-7">
                <div className="rounded-full border border-white/10 bg-black/30 px-3 py-1.5 text-[9px] font-medium uppercase tracking-[.15em] text-white/50 backdrop-blur-md">
                  {reducedMotion ? "Select a layer to explore" : "Scroll to separate layers"}
                </div>
                <div className="shrink-0 font-mono text-[10px] tracking-[.16em] text-white/38">
                  LAYER {displayedLayer.number} / {String(roofLayers.length).padStart(2, "0")}
                </div>
              </div>

              <div className="pointer-events-none absolute bottom-4 left-5 right-5 flex items-center justify-between gap-5 sm:bottom-7 sm:left-7 sm:right-7">
                <p className="text-[9px] uppercase tracking-[.15em] text-white/42 sm:text-[10px]">
                  Tap a hotspot or choose a layer
                </p>
                <div className="h-px w-16 shrink-0 bg-gradient-to-r from-transparent via-[#d8bd79] to-transparent sm:w-28" />
              </div>
            </div>

            <aside className="relative z-20 bg-[#0d0d0b]/78 p-5 backdrop-blur-xl sm:p-7 lg:flex lg:min-h-[680px] lg:flex-col lg:p-6">
              <RoofInfoCard layer={displayedLayer} totalLayers={roofLayers.length} />

              <div className="mt-6 border-t border-white/10 pt-5 lg:mt-auto">
                <p className="mb-3 text-[9px] font-semibold uppercase tracking-[.22em] text-white/40">Select a roof layer</p>
                <RoofLabels
                  activeLayerId={activeLayerId}
                  hoveredLayerId={hoveredLayerId}
                  onHoverChange={setHoveredLayerId}
                  onLayerChange={handleLayerChange}
                />
              </div>
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
}
