import type { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";

type ProjectView = {
  id: string;
  label: string;
  title: string;
  description: string;
  image: string;
  alt: string;
  desktopPosition: string;
  mobilePosition: string;
};

type ProjectImageStyle = CSSProperties & {
  "--project-position-desktop": string;
  "--project-position-mobile": string;
};

const projectViews: ProjectView[] = [
  {
    id: "completed-roof-aerial",
    label: "Completed roof replacement",
    title: "The Full Roof System in View",
    description:
      "A wide aerial view documents completed shingle fields, ridges, and connected roof sections across the home.",
    image: "/images/services/roofing/projects/completed-roof-replacement-aerial.jpg",
    alt: "Wide aerial view of a completed gray shingle roof replacement",
    desktopPosition: "50% 50%",
    mobilePosition: "50% 50%",
  },
  {
    id: "late-stage-installation",
    label: "Late-stage installation",
    title: "New Roof Taking Shape",
    description:
      "With the new shingles installed across most of the roof, the project is nearing completion while our crew finishes the final details.",
    image: "/images/services/roofing/after-image-4.jpg",
    alt: "Aerial view of broad installed shingle fields with crew, equipment, ladders, and a debris trailer still present",
    desktopPosition: "55% 49%",
    mobilePosition: "59% 50%",
  },
  {
    id: "finished-roof-detail",
    label: "Finished roof detail",
    title: "Shingles, Ridges, and Roof Vents",
    description:
      "A close aerial view of finished gray shingles, ridge caps, and a roof vent on a residential project.",
    image: "/images/projects/project-3.jpg",
    alt: "Close aerial view of finished gray roof shingles, ridge caps, and a roof vent",
    desktopPosition: "50% 60%",
    mobilePosition: "50% 65%",
  },
];

function projectImageStyle(project: ProjectView): ProjectImageStyle {
  return {
    "--project-position-desktop": project.desktopPosition,
    "--project-position-mobile": project.mobilePosition,
  };
}

export default function RecentProjects() {
  return (
    <section
      className="relative scroll-mt-24 overflow-hidden bg-[#090908] py-20 sm:py-28 md:scroll-mt-36 lg:py-36"
      id="projects"
    >
      <div className="pointer-events-none absolute inset-0 opacity-[.2] [background-image:linear-gradient(rgba(255,255,255,.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.035)_1px,transparent_1px)] [background-size:72px_72px]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#d8bd79]/45 to-transparent" />
      <div className="pointer-events-none absolute -right-40 top-12 h-96 w-96 rounded-full bg-[#d8bd79]/[.045] blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(280px,.58fr)] lg:items-end lg:gap-16">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[.32em] text-[#d8bd79] sm:text-xs sm:tracking-[.42em]">
              Our Recent Work
            </p>
            <h2 className="mt-4 max-w-4xl text-balance text-4xl leading-[.95] tracking-[-.025em] text-white [font-family:var(--font-bebas)] sm:mt-5 sm:text-5xl md:text-6xl lg:text-7xl">
              Real Roofing Work,
              <br />
              From Installation to Finish.
            </h2>
          </div>

          <div className="lg:pb-1">
            <p className="max-w-xl text-sm leading-7 text-white/62 sm:text-base sm:leading-8">
              Real residential roofing photography, documented across active installation and finished details.
            </p>
            <Link
              className="mt-6 inline-flex min-h-11 items-center gap-3 border-b border-[#d8bd79]/55 pb-1 text-[10px] font-bold uppercase tracking-[.18em] text-[#ead7a3] transition-colors hover:border-[#ead7a3] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ead7a3]"
              href="/services/roofing#service-gallery"
              prefetch={false}
            >
              View Roofing Gallery
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>

        <div
          aria-label="CM Roofing project photographs"
          className="-mx-5 mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto overscroll-x-contain px-5 pb-5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:-mx-8 sm:mt-12 sm:px-8 md:mx-0 md:grid md:grid-cols-2 md:gap-5 md:overflow-visible md:px-0 md:pb-0 lg:mt-16 lg:grid-cols-12 lg:auto-rows-[250px] xl:auto-rows-[285px]"
        >
          {projectViews.map((project, index) => (
            <article
              className={`group relative aspect-[4/5] w-[84vw] max-w-[22rem] shrink-0 snap-center overflow-hidden rounded-[26px] border border-white/10 bg-[#151512] shadow-[0_22px_65px_rgba(0,0,0,.32)] md:w-auto md:max-w-none md:rounded-[30px] ${
                index === 0
                  ? "md:col-span-2 md:aspect-[16/9] lg:col-span-7 lg:row-span-2 lg:aspect-auto"
                  : "md:aspect-[4/3] lg:col-span-5 lg:aspect-auto"
              }`}
              key={project.id}
              style={projectImageStyle(project)}
            >
              <Image
                alt={project.alt}
                className="object-cover [object-position:var(--project-position-mobile)] transition-transform duration-700 ease-out group-hover:scale-[1.025] motion-reduce:transform-none motion-reduce:transition-none lg:[object-position:var(--project-position-desktop)]"
                fill
                loading="lazy"
                sizes={
                  index === 0
                    ? "(max-width: 767px) 84vw, (max-width: 1023px) calc(100vw - 4rem), (max-width: 1279px) 58vw, 730px"
                    : "(max-width: 767px) 84vw, (max-width: 1023px) calc(50vw - 2.5rem), (max-width: 1279px) 38vw, 510px"
                }
                src={project.image}
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-black/18 to-transparent" />
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/35 to-transparent" />

              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7 lg:p-8">
                <div className="mb-4 flex items-center gap-3">
                  <span className="h-px w-8 bg-[#d8bd79]" />
                  <p className="text-[9px] font-bold uppercase tracking-[.2em] text-[#ead7a3]">
                    {project.label}
                  </p>
                </div>
                <h3 className={`${index === 0 ? "lg:text-4xl" : "lg:text-2xl"} text-2xl font-semibold leading-tight tracking-[-.035em] text-white sm:text-3xl`}>
                  {project.title}
                </h3>
                <p className={`${index === 0 ? "lg:max-w-xl" : "lg:max-w-md"} mt-3 max-w-md text-sm leading-6 text-white/68`}>
                  {project.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-2 text-[9px] font-semibold uppercase tracking-[.17em] text-white/38 md:hidden">
          Swipe to view project photography
        </p>
      </div>
    </section>
  );
}
