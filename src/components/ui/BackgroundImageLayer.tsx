"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import type { BackgroundContentAlignment, ResolvedHomepageBackground } from "@/config/backgrounds";

type BackgroundImageLayerProps = {
  background: ResolvedHomepageBackground;
  preload?: boolean;
};

const contentFade: Record<BackgroundContentAlignment, string> = {
  start: "linear-gradient(90deg, rgba(0, 0, 0, .32), transparent 72%)",
  center: "radial-gradient(ellipse at 50% 45%, rgba(0, 0, 0, .06), rgba(0, 0, 0, .32) 100%)",
  end: "linear-gradient(270deg, rgba(0, 0, 0, .32), transparent 72%)",
};

export default function BackgroundImageLayer({ background, preload }: BackgroundImageLayerProps) {
  const layerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: layerRef, offset: ["start end", "end start"] });
  const parallaxDistance = background.parallaxEnabled && !shouldReduceMotion ? ["-4%", "4%"] : ["0%", "0%"];
  const y = useTransform(scrollYProgress, [0, 1], parallaxDistance);

  if (!background.image) return null;

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" data-background-source={background.source} ref={layerRef}>
      <motion.div className="absolute -inset-y-[7%] inset-x-0" style={{ y }}>
        <Image
          alt={background.image.alt}
          className="object-cover"
          fill
          preload={preload}
          sizes="100vw"
          src={background.image.src}
          style={{
            filter: `brightness(${background.brightness}) blur(${background.blurPx}px)`,
            objectPosition: background.image.objectPosition ?? background.objectPosition,
            transform: background.blurPx > 0 ? "scale(1.03)" : undefined,
          }}
        />
      </motion.div>
      <div className="absolute inset-0 bg-black" style={{ opacity: background.overlayOpacity }} />
      <div className="absolute inset-0" style={{ backgroundImage: background.gradientOverlay }} />
      <div className="absolute inset-0" style={{ backgroundImage: contentFade[background.contentAlignment] }} />
    </div>
  );
}
