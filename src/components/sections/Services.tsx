import Image from "next/image";
import Link from "next/link";

type HomepageService = {
  number: string;
  title: string;
  description: string;
  cta: string;
  href: string;
  image: string;
  imageAlt: string;
  imagePosition?: string;
  layout: string;
  sizes: string;
  featured?: boolean;
};

const services: HomepageService[] = [
  {
    number: "01",
    title: "Roofing",
    description: "Residential and commercial roof replacement, repair, asphalt, metal, and new-construction roofing.",
    cta: "Explore Roofing",
    href: "/services/roofing",
    image: "/images/services/roofing.jpg",
    imageAlt: "Aerial view of a residential roofing installation in progress",
    imagePosition: "center 48%",
    layout: "lg:col-span-7 lg:row-span-2",
    sizes: "(max-width: 639px) 40vw, (max-width: 1023px) 34vw, 58vw",
    featured: true,
  },
  {
    number: "02",
    title: "Siding",
    description: "Vinyl and steel siding installation, replacement, and exterior upgrades.",
    cta: "Explore Siding",
    href: "/services/siding",
    image: "/images/services/siding.webp",
    imageAlt: "Blue siding and white trim on a finished home exterior",
    layout: "lg:col-span-5",
    sizes: "(max-width: 639px) 40vw, (max-width: 1023px) 34vw, 42vw",
  },
  {
    number: "03",
    title: "Gutters",
    description: "Seamless gutters, replacements, downspouts, and gutter protection solutions.",
    cta: "Explore Gutters",
    href: "/services/gutters",
    image: "/images/services/gutters.jpg",
    imageAlt: "Dark metal gutter and downspout installed along a roofline",
    layout: "lg:col-span-5",
    sizes: "(max-width: 639px) 40vw, (max-width: 1023px) 34vw, 42vw",
  },
  {
    number: "04",
    title: "Soffit & Fascia",
    description: "Installation, repairs, replacement, and ventilation improvements at the roofline.",
    cta: "Explore Soffit & Fascia",
    href: "/services/soffit-fascia",
    image: "/images/services/soffit-fascia.jpg",
    imageAlt: "Finished soffit and fascia beneath a residential roofline",
    layout: "lg:col-span-4",
    sizes: "(max-width: 639px) 40vw, (max-width: 1023px) 34vw, 34vw",
  },
  {
    number: "05",
    title: "Storm Damage",
    description: "Storm damage assessment, restoration planning, and roof or exterior repairs.",
    cta: "Explore Storm Damage",
    href: "/services/storm-damage",
    image: "/images/services/storm-damage.jpg",
    imageAlt: "Residential roof deck prepared during an active roofing project",
    imagePosition: "center 60%",
    layout: "lg:col-span-4",
    sizes: "(max-width: 639px) 40vw, (max-width: 1023px) 34vw, 34vw",
  },
  {
    number: "06",
    title: "Insurance Claim Assistance",
    description: "Construction-side documentation and project support when insurance is involved.",
    cta: "Explore Claim Assistance",
    href: "/services/insurance-claims",
    image: "/images/projects/project-4.jpg",
    imageAlt: "Overhead view documenting an active residential roof project",
    imagePosition: "center 48%",
    layout: "lg:col-span-4",
    sizes: "(max-width: 639px) 40vw, (max-width: 1023px) 34vw, 34vw",
  },
];

export default function Services() {
  return (
    <section className="relative isolate overflow-hidden bg-[#080807] py-24 sm:py-28 lg:py-36" id="services">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_8%_10%,rgba(216,179,91,.09),transparent_33%),radial-gradient(ellipse_at_92%_72%,rgba(255,255,255,.04),transparent_32%)]" />
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-[8%] top-0 h-px bg-gradient-to-r from-transparent via-[#d8b35b]/45 to-transparent" />
      <div aria-hidden="true" className="pointer-events-none absolute left-[7%] top-24 hidden h-40 w-px bg-gradient-to-b from-[#d8b35b]/50 to-transparent lg:block" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">
        <header className="grid gap-7 border-b border-white/10 pb-10 sm:pb-12 lg:grid-cols-[minmax(180px,.52fr)_minmax(0,1.48fr)] lg:gap-16 lg:pb-16">
          <div className="flex items-start gap-4">
            <span aria-hidden="true" className="mt-[0.45rem] h-px w-8 bg-[#d8b35b]" />
            <p className="text-[10px] font-semibold uppercase tracking-[.4em] text-[#d8b35b] sm:text-xs sm:tracking-[.55em]">
              Our Services
            </p>
          </div>

          <div>
            <h2 className="max-w-4xl text-balance text-4xl font-semibold tracking-[-.05em] text-white sm:text-5xl md:text-6xl lg:text-7xl">
              Roofing &amp; Exterior Services
            </h2>
            <p className="mt-5 max-w-2xl text-pretty text-sm leading-6 text-white/60 sm:mt-7 sm:text-base sm:leading-7">
              Choose the service that matches your project and go straight to the details that matter.
            </p>
          </div>
        </header>

        <ol className="mt-8 grid gap-4 sm:mt-10 sm:grid-cols-2 sm:gap-5 md:grid-cols-3 lg:auto-rows-[17rem] lg:grid-cols-12 lg:gap-6">
          {services.map((service) => (
            <li className={service.layout} key={service.href}>
              <Link
                aria-label={`${service.cta}: ${service.description}`}
                className="group relative grid min-h-[9.75rem] grid-cols-[40%_60%] overflow-hidden rounded-[22px] border border-white/10 bg-[#11110f] shadow-[0_18px_55px_rgba(0,0,0,.2)] transition duration-500 hover:-translate-y-1 hover:border-[#d8b35b]/45 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d8b35b] motion-reduce:transform-none motion-reduce:transition-none sm:block sm:min-h-0 sm:rounded-[28px] lg:h-full"
                href={service.href}
              >
                <div className="relative min-h-full overflow-hidden sm:aspect-[16/9] sm:min-h-0 lg:absolute lg:inset-0 lg:aspect-auto">
                  <Image
                    alt={service.imageAlt}
                    className="object-cover brightness-[.78] saturate-[.86] transition duration-700 group-hover:scale-[1.035] group-hover:brightness-[.88] motion-reduce:transform-none motion-reduce:transition-none"
                    fill
                    sizes={service.sizes}
                    src={service.image}
                    style={{ objectPosition: service.imagePosition }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/8 to-black/18 sm:bg-gradient-to-t sm:from-black/38 sm:via-transparent sm:to-black/5 lg:from-[#090908]/95 lg:via-[#090908]/25 lg:to-black/10" />
                </div>

                <div className="relative z-10 flex min-w-0 flex-col justify-center p-4 sm:min-h-[9.5rem] sm:p-6 lg:absolute lg:inset-x-0 lg:bottom-0 lg:min-h-0 lg:bg-gradient-to-t lg:from-[#080807] lg:via-[#080807]/88 lg:to-transparent lg:p-7 lg:pt-20">
                  <div className="flex items-center justify-between gap-4">
                    <span className="font-mono text-[9px] tracking-[.2em] text-[#d8b35b]">{service.number}</span>
                    <span aria-hidden="true" className="h-px flex-1 bg-gradient-to-r from-[#d8b35b]/55 to-transparent" />
                  </div>

                  <h3 className={`mt-3 font-semibold leading-[1.05] tracking-[-.035em] text-white ${service.featured ? "text-2xl sm:text-3xl lg:text-5xl" : "text-xl sm:text-2xl lg:text-3xl"}`}>
                    {service.title}
                  </h3>
                  <p className={`mt-2.5 text-[11px] leading-[1.55] text-white/58 sm:text-sm sm:leading-6 ${service.featured ? "lg:max-w-lg lg:text-base" : "lg:max-w-sm"}`}>
                    {service.description}
                  </p>

                  <span className="mt-3 inline-flex items-center gap-2 text-[9px] font-bold uppercase tracking-[.15em] text-[#ead7a3] sm:mt-5 sm:text-[10px]">
                    {service.cta}
                    <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transform-none">→</span>
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
