import type { ResolvedHomepageBackground } from "@/config/backgrounds";
import BackgroundImageLayer from "./BackgroundImageLayer";

type AtmosphereVariant = "hero" | "services" | "roof" | "warm" | "editorial" | "process" | "contact";

type AtmosphereStyle = {
  ambient: string;
  directional: string;
  texture: string;
  edge: string;
  exit: string;
};

const atmosphereStyles: Record<AtmosphereVariant, AtmosphereStyle> = {
  hero: {
    ambient:
      "bg-[radial-gradient(ellipse_at_50%_38%,rgba(216,189,121,.11),transparent_32%),radial-gradient(ellipse_at_12%_78%,rgba(255,255,255,.04),transparent_30%)]",
    directional: "bg-[linear-gradient(118deg,rgba(0,0,0,.16),transparent_46%,rgba(0,0,0,.12))]",
    texture:
      "bg-[linear-gradient(rgba(255,255,255,.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.025)_1px,transparent_1px)] [background-size:118px_118px] [mask-image:linear-gradient(to_bottom,transparent,black_35%,transparent_83%)]",
    edge: "bg-gradient-to-r from-transparent via-[#ead7a3]/34 to-transparent",
    exit: "bg-gradient-to-b from-transparent via-[#0b0b0a]/54 to-[#111111]",
  },
  services: {
    ambient:
      "bg-[radial-gradient(ellipse_at_18%_20%,rgba(216,189,121,.1),transparent_34%),radial-gradient(ellipse_at_88%_58%,rgba(255,255,255,.055),transparent_32%)]",
    directional:
      "bg-[linear-gradient(118deg,transparent_16%,rgba(255,255,255,.035)_43%,transparent_62%)]",
    texture:
      "bg-[linear-gradient(rgba(216,189,121,.035)_1px,transparent_1px),linear-gradient(90deg,rgba(216,189,121,.035)_1px,transparent_1px)] [background-size:96px_96px] [mask-image:linear-gradient(to_bottom,transparent,black_20%,transparent_80%)]",
    edge: "bg-gradient-to-r from-transparent via-[#ead7a3]/35 to-transparent",
    exit: "bg-gradient-to-b from-transparent via-[#080807]/45 to-[#080807]",
  },
  roof: {
    ambient:
      "bg-[radial-gradient(ellipse_at_50%_4%,rgba(216,189,121,.11),transparent_37%),radial-gradient(ellipse_at_8%_78%,rgba(110,138,150,.06),transparent_31%)]",
    directional:
      "bg-[linear-gradient(90deg,transparent_4%,rgba(255,255,255,.035)_46%,transparent_76%)]",
    texture:
      "bg-[linear-gradient(rgba(255,255,255,.028)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.028)_1px,transparent_1px)] [background-size:108px_108px] [mask-image:radial-gradient(ellipse_at_50%_33%,black,transparent_72%)]",
    edge: "bg-gradient-to-r from-transparent via-[#d8bd79]/42 to-transparent",
    exit: "bg-gradient-to-b from-transparent via-[#090908]/54 to-[#090908]",
  },
  warm: {
    ambient:
      "bg-[radial-gradient(ellipse_at_12%_34%,rgba(216,189,121,.13),transparent_35%),radial-gradient(ellipse_at_84%_76%,rgba(255,255,255,.04),transparent_34%)]",
    directional:
      "bg-[linear-gradient(132deg,transparent_18%,rgba(216,189,121,.055)_48%,transparent_72%)]",
    texture:
      "bg-[repeating-linear-gradient(145deg,transparent_0,transparent_44px,rgba(255,255,255,.026)_45px,transparent_46px)] [mask-image:linear-gradient(to_bottom,transparent,black_26%,transparent_82%)]",
    edge: "bg-gradient-to-r from-transparent via-[#ead7a3]/42 to-transparent",
    exit: "bg-gradient-to-b from-transparent via-[#080807]/52 to-[#080807]",
  },
  editorial: {
    ambient:
      "bg-[radial-gradient(ellipse_at_50%_18%,rgba(255,255,255,.075),transparent_35%),radial-gradient(ellipse_at_18%_88%,rgba(216,189,121,.075),transparent_30%)]",
    directional:
      "bg-[linear-gradient(90deg,rgba(255,255,255,.025),transparent_28%,transparent_72%,rgba(216,189,121,.035))]",
    texture:
      "bg-[linear-gradient(rgba(255,255,255,.025)_1px,transparent_1px)] [background-size:100%_78px] [mask-image:linear-gradient(to_bottom,transparent,black_24%,transparent_82%)]",
    edge: "bg-gradient-to-r from-transparent via-white/24 to-transparent",
    exit: "bg-gradient-to-b from-transparent via-[#090908]/52 to-[#090908]",
  },
  process: {
    ambient:
      "bg-[radial-gradient(ellipse_at_16%_35%,rgba(216,189,121,.1),transparent_30%),radial-gradient(ellipse_at_82%_68%,rgba(255,255,255,.045),transparent_32%)]",
    directional:
      "bg-[linear-gradient(102deg,transparent_20%,rgba(216,189,121,.065)_47%,transparent_70%)]",
    texture:
      "bg-[repeating-linear-gradient(90deg,transparent_0,transparent_91px,rgba(255,255,255,.024)_92px,transparent_93px)] [mask-image:linear-gradient(to_bottom,transparent,black_22%,transparent_78%)]",
    edge: "bg-gradient-to-r from-transparent via-[#d8bd79]/45 to-transparent",
    exit: "bg-gradient-to-b from-transparent via-[#090908]/48 to-[#090908]",
  },
  contact: {
    ambient:
      "bg-[radial-gradient(ellipse_at_14%_20%,rgba(216,189,121,.085),transparent_31%),radial-gradient(ellipse_at_86%_35%,rgba(255,255,255,.055),transparent_36%)]",
    directional:
      "bg-[linear-gradient(122deg,transparent_26%,rgba(255,255,255,.028)_50%,transparent_71%)]",
    texture:
      "bg-[linear-gradient(rgba(255,255,255,.024)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.024)_1px,transparent_1px)] [background-size:116px_116px] [mask-image:linear-gradient(to_bottom,transparent,black_24%,transparent_85%)]",
    edge: "bg-gradient-to-r from-transparent via-[#ead7a3]/30 to-transparent",
    exit: "bg-gradient-to-b from-transparent via-[#080807]/45 to-[#080807]",
  },
};

type SectionAtmosphereProps = {
  variant: AtmosphereVariant;
  background?: ResolvedHomepageBackground;
  preload?: boolean;
};

/** Lightweight, CSS-only background depth for premium section transitions. */
export default function SectionAtmosphere({ background, preload, variant }: SectionAtmosphereProps) {
  const style = atmosphereStyles[variant];

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      {background?.image && <BackgroundImageLayer background={background} preload={preload} />}
      <div className={`absolute inset-0 ${style.ambient}`} />
      <div className={`absolute -inset-x-1/3 inset-y-0 ${style.directional}`} />
      <div className={`absolute inset-0 opacity-70 ${style.texture}`} />
      <div className={`absolute inset-x-[12%] top-0 h-px ${style.edge}`} />
      <div className={`absolute inset-x-0 bottom-0 h-36 sm:h-48 ${style.exit}`} />
      <div className="atmosphere-grain absolute inset-0" />
    </div>
  );
}
