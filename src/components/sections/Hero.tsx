import SectionAtmosphere from "@/components/ui/SectionAtmosphere";
import { resolveHomepageBackground } from "@/lib/backgrounds";

export default function Hero() {
  const background = resolveHomepageBackground("hero");

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-32 sm:pt-36 lg:pt-40">
      <SectionAtmosphere background={background} preload={background.preload} variant="hero" />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/58" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_42%,rgba(216,189,121,.14),transparent_28%),radial-gradient(ellipse_at_50%_46%,transparent_10%,rgba(0,0,0,.17)_44%,rgba(0,0,0,.8)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(118deg,rgba(0,0,0,.72)_4%,transparent_43%,rgba(0,0,0,.42)_100%)]" />
      <div className="pointer-events-none absolute left-1/2 top-[28%] h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-[#d8bd79]/[.1] blur-[150px]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[34%] bg-gradient-to-b from-transparent via-[#0b0b0a]/54 to-[#111111]" />
      <div className="pointer-events-none absolute inset-x-[10%] bottom-0 h-px bg-gradient-to-r from-transparent via-[#ead7a3]/35 to-transparent" />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 sm:px-8">

        <div className="relative mx-auto max-w-5xl text-center">
          <div className="pointer-events-none absolute left-1/2 top-1/3 -z-10 h-72 w-[min(90vw,760px)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-black/28 blur-3xl" />

          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.45em] text-[#C8A24D] sm:text-sm">
            NORTHEAST WISCONSIN ROOFING EXPERTS
          </p>

          <h1 className="font-black uppercase leading-[0.9] text-white text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl">
            Roofing
            <br />
            Built To Last
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-base leading-7 text-white/80 sm:text-lg md:text-xl md:leading-8">
            Professional roofing, siding, gutters, and soffit & fascia
            installation throughout Northeast Wisconsin. Quality craftsmanship,
            premium materials, and dependable service that protects your home
            for years to come.
          </p>

          {/* Buttons */}
          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">

            <a href="#contact" className="w-full max-w-xs rounded-full bg-[#C8A24D] px-8 py-4 font-bold text-black transition duration-300 hover:scale-105 hover:bg-[#D6B25C]">
              Get Free Estimate
            </a>

            <button className="w-full max-w-xs rounded-full border border-white/30 bg-white/10 px-8 py-4 font-bold text-white backdrop-blur-md transition duration-300 hover:bg-white/20">
              View Projects
            </button>

          </div>

        </div>

        {/* Stats */}
        <div className="mx-auto mt-24 grid max-w-6xl grid-cols-2 gap-8 border-t border-white/10 pt-10 md:grid-cols-4">

          <div className="text-center">
            <h3 className="text-3xl font-black text-[#C8A24D] md:text-5xl">
              1000+
            </h3>
            <p className="mt-2 text-sm text-white/70">
              Projects Completed
            </p>
          </div>

          <div className="text-center">
            <h3 className="text-3xl font-black text-[#C8A24D] md:text-5xl">
              20+
            </h3>
            <p className="mt-2 text-sm text-white/70">
              Years Experience
            </p>
          </div>

          <div className="text-center">
            <h3 className="text-3xl font-black text-[#C8A24D] md:text-5xl">
              Fully
            </h3>
            <p className="mt-2 text-sm text-white/70">
              Insured
            </p>
          </div>

          <div className="text-center">
            <h3 className="text-3xl font-black text-[#C8A24D] md:text-5xl">
              Free
            </h3>
            <p className="mt-2 text-sm text-white/70">
              Estimates
            </p>
          </div>

        </div>

        {/* Scroll Indicator */}
        <div className="mt-16 flex justify-center">

          <div className="flex h-12 w-7 justify-center rounded-full border border-white/30">

            <div className="mt-2 h-3 w-1 animate-bounce rounded-full bg-white" />

          </div>

        </div>

      </div>

    </section>
  );
}
