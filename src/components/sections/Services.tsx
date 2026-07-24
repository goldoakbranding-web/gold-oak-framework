import Image from "next/image";
import Link from "next/link";
import SectionAtmosphere from "@/components/ui/SectionAtmosphere";
import { resolveHomepageBackground } from "@/lib/backgrounds";

const services = [
  {
    title: "Roofing",
    description:
      "Premium roof replacements and repairs designed to protect your investment for years to come.",
    image: "/images/services/roofing.jpg",
    href: "/services/roofing",
  },
  {
    title: "Siding",
    description:
      "Beautiful siding systems that improve curb appeal and energy efficiency.",
    image: "/images/services/siding.webp",
    href: "/services/siding",
  },
  {
    title: "Gutters",
    description:
      "Seamless gutter systems that protect your foundation year-round.",
    image: "/images/services/gutters.jpg",
    href: "/services/gutters",
  },
  {
    title: "Soffit & Fascia",
    description:
      "Complete roofline protection with clean, premium finishes.",
    image: "/images/services/soffit-fascia.jpg",
    href: "/services/soffit-fascia",
  },
  {
    title: "Storm Damage",
    description:
      "Fast inspections and repairs after hail, wind, and severe Wisconsin weather.",
    image: "/images/services/storm-damage.jpg",
    href: "/services/storm-damage",
  },
];

export default function Services() {
  const background = resolveHomepageBackground("services");

  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#080808] py-40"
    >
      {/* Premium Background */}

      <div className="absolute inset-0 overflow-hidden">

        {/* Blueprint */}

        <Image
          src="/images/backgrounds/blueprint.png"
          alt=""
          fill
          sizes="100vw"
          className="pointer-events-none select-none object-cover opacity-[0.09] mix-blend-screen"
        />

        {/* Main Overlay */}

        <div className="absolute inset-0 bg-[#090909]/78" />

        {/* Spotlight */}

        <div className="absolute left-1/2 top-0 h-[1500px] w-[1500px] -translate-x-1/2 rounded-full bg-white/10 blur-[260px]" />

        {/* Secondary Glow */}

        <div className="absolute right-[-250px] top-[-150px] h-[900px] w-[900px] rounded-full bg-white/5 blur-[240px]" />

        {/* Gold Glow */}

        <div className="absolute bottom-[-300px] left-[-150px] h-[700px] w-[700px] rounded-full bg-[#C3A35B]/5 blur-[240px]" />

        {/* Vignette */}

        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black" />

      </div>

      <SectionAtmosphere background={background} variant="services" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="mb-28 text-center">

          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.7em] text-[#C3A35B]">
            OUR SERVICES
          </p>

          <h2 className="text-5xl font-black tracking-tight text-white md:text-7xl">
            Complete Exterior
            <br />
            Solutions
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-white/60">
            Premium roofing, siding, gutters, soffit & fascia, and storm damage
            restoration throughout Northeast Wisconsin.
          </p>

          <div className="mx-auto mt-12 h-px w-48 overflow-hidden rounded-full bg-white/10">

            <div className="h-full w-20 animate-pulse bg-[#C3A35B]" />

          </div>

        </div>

        <div className="grid gap-8 lg:grid-cols-12">

          {/* Featured Roofing */}

          <div className="group relative col-span-12 h-[680px] overflow-hidden rounded-[38px] border border-white/10 backdrop-blur-md shadow-[0_35px_90px_rgba(0,0,0,.45)] transition-all duration-700 hover:-translate-y-4 hover:border-white/25">

            <Link aria-label="Explore Roofing" className="absolute inset-0 z-20 rounded-[38px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C3A35B]" href={services[0].href} />

            <Image
              src={services[0].image}
              alt={services[0].title}
              fill
              sizes="(max-width:768px) 100vw,1200px"
              className="object-cover brightness-[0.92] transition duration-700 group-hover:scale-[1.08] group-hover:brightness-110"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-transparent transition duration-500 group-hover:from-black/90" />

            <div className="absolute bottom-0 left-0 p-14">

              <div className="mb-6 h-1 w-20 rounded-full bg-[#C3A35B] transition-all duration-500 group-hover:w-44" />

              <h3 className="text-6xl font-black text-white">
                Roofing
              </h3>

              <p className="mt-6 max-w-xl text-lg leading-8 text-white/75">
                Premium roof replacements and repairs built to protect your
                investment for decades with superior craftsmanship and premium
                materials.
              </p>

              <button className="mt-10 rounded-full border border-white/20 bg-white/10 px-9 py-4 font-semibold text-white backdrop-blur-xl transition-all duration-300 hover:bg-white hover:text-black">
                Explore Roofing →
              </button>

            </div>

          </div>          {/* Remaining Service Cards */}

          {services.slice(1).map((service) => (
            <div
              key={service.title}
              className="group relative col-span-12 h-[360px] overflow-hidden rounded-[34px] border border-white/10 backdrop-blur-md shadow-[0_35px_90px_rgba(0,0,0,.45)] transition-all duration-700 hover:-translate-y-4 hover:border-white/25 md:col-span-6"
            >
              <Link aria-label={`Explore ${service.title}`} className="absolute inset-0 z-20 rounded-[34px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C3A35B]" href={service.href} />
              <Image
                src={service.image}
                alt={service.title}
                fill
                sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 600px"
                className="object-cover brightness-[0.92] transition duration-700 group-hover:scale-[1.08] group-hover:brightness-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-transparent transition duration-500 group-hover:from-black/90" />

              {/* Animated Accent */}
              <div className="absolute left-0 top-0 h-full w-[3px] origin-top scale-y-0 bg-[#C3A35B] transition-transform duration-500 group-hover:scale-y-100" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 p-8">

                <div className="mb-5 h-1 w-14 rounded-full bg-[#C3A35B] transition-all duration-500 group-hover:w-28" />

                <h3 className="text-3xl font-bold text-white transition duration-300 group-hover:-translate-y-1">
                  {service.title}
                </h3>

                <p className="mt-4 max-w-sm leading-7 text-white/70">
                  {service.description}
                </p>

                <div className="mt-6 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-white opacity-0 transition-all duration-500 group-hover:translate-x-2 group-hover:opacity-100">
                  Learn More
                  <span>→</span>
                </div>

              </div>

              {/* Subtle Hover Glow */}
              <div className="absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100">
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent" />
              </div>

            </div>
          ))}

        </div>

        {/* Premium Divider */}

        <div className="relative mt-32 mb-20 flex justify-center">

          <div className="h-px w-full max-w-3xl bg-gradient-to-r from-transparent via-white/15 to-transparent" />

          <div className="absolute -top-[2px] h-[5px] w-28 rounded-full bg-[#C3A35B]/70 blur-sm" />

        </div>        {/* Call To Action */}

        <div className="relative mt-8 overflow-hidden rounded-[42px] border border-white/10 bg-gradient-to-br from-[#111111] via-[#0F0F0F] to-[#090909] p-12 shadow-[0_40px_120px_rgba(0,0,0,.45)]">

          {/* Background Glow */}

          <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/5 blur-[180px]" />

          <div className="relative z-10 mx-auto max-w-4xl text-center">

            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.6em] text-[#C3A35B]">
              BUILT TO LAST
            </p>

            <h2 className="text-4xl font-black tracking-tight text-white md:text-6xl">
              Protect Your Home With
              <br />
              Premium Craftsmanship
            </h2>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-white/65">
              From complete roof replacements and siding installations to
              gutters, soffit & fascia, and storm damage restoration, CM
              Roofing delivers dependable craftsmanship and exceptional service
              across Northeast Wisconsin.
            </p>

            <div className="mt-12 flex flex-col items-center justify-center gap-5 sm:flex-row">

              <button className="rounded-full bg-white px-10 py-5 font-semibold text-black transition-all duration-300 hover:-translate-y-1 hover:bg-[#C3A35B]">
                Get Your Free Estimate
              </button>

              <button className="rounded-full border border-white/20 bg-white/5 px-10 py-5 font-semibold text-white backdrop-blur-md transition-all duration-300 hover:bg-white/10">
                View Recent Projects
              </button>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
