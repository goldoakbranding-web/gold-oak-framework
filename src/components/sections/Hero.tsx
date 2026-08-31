import SectionAtmosphere from "@/components/ui/SectionAtmosphere";
import { business } from "@/config/business";
import { resolveHomepageBackground } from "@/lib/backgrounds";

export default function Hero() {
  const background = resolveHomepageBackground("hero");
  const responsiveBackground = background.image
    ? {
        ...background,
        image: {
          ...background.image,
          objectPosition: "var(--homepage-hero-position)",
        },
      }
    : background;

  return (
    <section
      className="relative flex min-h-[100svh] items-stretch overflow-hidden pt-0 md:min-h-screen md:items-center md:pt-36 lg:pt-40"
      id="homepage-hero"
    >
      <style>{`
        #homepage-hero {
          --homepage-hero-position: 40% 50%;
        }

        @media (min-width: 390px) and (max-width: 429.98px) {
          #homepage-hero {
            --homepage-hero-position: 40% 50%;
          }
        }

        @media (min-width: 430px) and (max-width: 767.98px) {
          #homepage-hero {
            --homepage-hero-position: 40% 50%;
          }
        }

        @media (max-width: 767.98px) {
          #homepage-hero [data-background-source] > div {
            transform: none !important;
          }

          #homepage-hero [data-background-source] img {
            filter: brightness(1.08) !important;
          }
        }

        @media (min-width: 768px) {
          #homepage-hero {
            --homepage-hero-position: center;
          }
        }
      `}</style>

      <SectionAtmosphere background={responsiveBackground} preload={background.preload} variant="hero" />

      {/* Mobile-only cinematic treatment */}
      <div className="pointer-events-none absolute inset-0 z-[1] bg-[linear-gradient(90deg,rgba(3,3,3,.68)_0%,rgba(3,3,3,.34)_56%,rgba(3,3,3,.06)_100%)] md:hidden" />
      <div className="pointer-events-none absolute inset-0 z-[1] bg-[linear-gradient(180deg,rgba(4,4,4,.02)_0%,rgba(4,4,4,.05)_26%,rgba(4,4,4,.32)_61%,rgba(4,4,4,.72)_100%)] md:hidden" />

      {/* Mobile content */}
      <div className="relative z-10 flex w-full flex-col px-6 pb-10 pt-[clamp(14rem,32svh,19rem)] min-[430px]:px-7 md:hidden">
        <div className="max-w-[25rem]">
          <p className="mb-5 text-[10px] font-bold uppercase leading-[1.7] tracking-[0.32em] text-[#D8B35B] min-[390px]:text-[11px]">
            <span className="block">Central Wisconsin</span>
            <span className="block">Roofing Experts</span>
          </p>

          <h1 className="text-[clamp(3.6rem,15vw,5.2rem)] font-black uppercase leading-[0.89] tracking-[-0.045em] text-white">
            <span className="block">Roofing</span>
            <span className="block">Built To</span>
            <span className="block">Last</span>
          </h1>

          <div aria-hidden="true" className="mt-7 h-0.5 w-14 bg-[#C8A24D]" />

          <p className="mt-7 max-w-[22rem] text-[17px] leading-[1.55] text-white/82 min-[390px]:text-lg">
            Premium roofing and exterior craftsmanship built to protect Central Wisconsin homes for years to come.
          </p>

          <div className="mt-8 flex w-full max-w-[23rem] flex-col gap-3">
            <a
              className="flex h-[60px] w-full items-center justify-between rounded-full bg-[#C8A24D] px-6 text-sm font-bold uppercase tracking-[0.11em] text-black transition-colors duration-200 hover:bg-[#D6B25C] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#EAD7A3] active:bg-[#B9923D]"
              href="#contact"
            >
              <span>Get Free Estimate</span>
              <span aria-hidden="true" className="text-xl font-normal">→</span>
            </a>

            <a
              className="flex h-[60px] w-full items-center justify-between rounded-full border border-white/40 bg-black/20 px-6 text-sm font-bold uppercase tracking-[0.11em] text-white transition-colors duration-200 hover:border-white/65 hover:bg-black/35 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#EAD7A3] active:bg-black/45"
              href="#projects"
            >
              <span>View Projects</span>
              <span aria-hidden="true" className="text-xl font-normal">→</span>
            </a>
          </div>
        </div>
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 hidden bg-black/58 md:block" />
      <div className="absolute inset-0 hidden bg-[radial-gradient(ellipse_at_50%_42%,rgba(216,189,121,.14),transparent_28%),radial-gradient(ellipse_at_50%_46%,transparent_10%,rgba(0,0,0,.17)_44%,rgba(0,0,0,.8)_100%)] md:block" />
      <div className="absolute inset-0 hidden bg-[linear-gradient(118deg,rgba(0,0,0,.72)_4%,transparent_43%,rgba(0,0,0,.42)_100%)] md:block" />
      <div className="pointer-events-none absolute left-1/2 top-[28%] hidden h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-[#d8bd79]/[.1] blur-[150px] md:block" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 hidden h-[34%] bg-gradient-to-b from-transparent via-[#0b0b0a]/54 to-[#111111] md:block" />
      <div className="pointer-events-none absolute inset-x-[10%] bottom-0 hidden h-px bg-gradient-to-r from-transparent via-[#ead7a3]/35 to-transparent md:block" />

      {/* Desktop content */}
      <div className="relative z-10 mx-auto hidden w-full max-w-7xl px-6 sm:px-8 md:block">

        <div className="relative mx-auto max-w-5xl text-center">
          <div className="pointer-events-none absolute left-1/2 top-1/3 -z-10 h-72 w-[min(90vw,760px)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-black/28 blur-3xl" />

          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.45em] text-[#C8A24D] sm:text-sm">
            CENTRAL WISCONSIN ROOFING EXPERTS
          </p>

          <h1 className="font-black uppercase leading-[0.9] text-white text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl">
            Roofing
            <br />
            Built To Last
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-base leading-7 text-white/80 sm:text-lg md:text-xl md:leading-8">
            Professional roofing, siding, gutters, and soffit & fascia
            installation throughout Central Wisconsin. Quality materials,
            professional crews, honest communication, and dependable service
            for homes and businesses.
          </p>

          {/* Buttons */}
          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">

            <a href="#contact" className="w-full max-w-xs rounded-full bg-[#C8A24D] px-8 py-4 font-bold text-black transition duration-300 hover:scale-105 hover:bg-[#D6B25C]">
              Get Free Estimate
            </a>

            <a href="#projects" className="w-full max-w-xs rounded-full border border-white/30 bg-white/10 px-8 py-4 font-bold text-white backdrop-blur-md transition duration-300 hover:bg-white/20">
              View Projects
            </a>

          </div>

        </div>

        {/* Stats */}
        <div className="mx-auto mt-24 grid max-w-6xl grid-cols-2 gap-8 border-t border-white/10 pt-10 md:grid-cols-4">

          <div className="text-center">
            <h3 className="text-3xl font-black text-[#C8A24D] md:text-5xl">
              {business.verifiedFacts.minimumCompletedProjects}+
            </h3>
            <p className="mt-2 text-sm text-white/70">
              Projects Completed
            </p>
          </div>

          <div className="text-center">
            <h3 className="text-3xl font-black text-[#C8A24D] md:text-5xl">
              Fully
            </h3>
            <p className="mt-2 text-sm text-white/70">
              Licensed &amp; Insured
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

          <div className="text-center">
            <h3 className="text-3xl font-black text-[#C8A24D] md:text-5xl">
              {business.verifiedFacts.workmanshipWarrantyYears}-Year
            </h3>
            <p className="mt-2 text-sm text-white/70">
              Workmanship Warranty
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
