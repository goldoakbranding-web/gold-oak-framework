type ProcessIconName = "estimate" | "plan" | "install" | "review";

type HomepageProcessStep = {
  number: string;
  title: string;
  description: string;
  icon: ProcessIconName;
  offset: string;
};

const processSteps: HomepageProcessStep[] = [
  {
    number: "01",
    title: "Get Your Free Estimate",
    description: "We review your project, answer questions, and outline the appropriate next steps.",
    icon: "estimate",
    offset: "lg:mt-8",
  },
  {
    number: "02",
    title: "Plan Your Project",
    description: "Choose materials, colors, scope, and the project direction that fits your home.",
    icon: "plan",
    offset: "lg:mt-20",
  },
  {
    number: "03",
    title: "Professional Installation",
    description: "Your project is completed with careful workmanship, property protection, and cleanup.",
    icon: "install",
    offset: "lg:mt-8",
  },
  {
    number: "04",
    title: "Final Project Review",
    description: "We review the completed work with you and confirm it meets the agreed scope and our standards.",
    icon: "review",
    offset: "lg:mt-20",
  },
];

function ProcessIcon({ icon }: { icon: ProcessIconName }) {
  const className = "h-5 w-5 fill-none stroke-current stroke-[1.5]";

  switch (icon) {
    case "estimate":
      return (
        <svg aria-hidden="true" className={className} viewBox="0 0 24 24">
          <path d="M5 4.5h14v15H5z" />
          <path d="M8 8h8M8 12h5M8 16h7" />
          <path d="M9 2.75h6v3.5H9z" />
        </svg>
      );
    case "plan":
      return (
        <svg aria-hidden="true" className={className} viewBox="0 0 24 24">
          <path d="m4 17.5 9.75-9.75 2.5 2.5L6.5 20H4v-2.5Z" />
          <path d="m12.25 9.25 2.5 2.5M15.5 6l1.75-1.75 2.5 2.5L18 8.5" />
          <path d="M4 4h7M4 8h4" />
        </svg>
      );
    case "install":
      return (
        <svg aria-hidden="true" className={className} viewBox="0 0 24 24">
          <path d="m3.5 11.5 8.5-7 8.5 7" />
          <path d="M5.75 10v9.5h12.5V10" />
          <path d="m9 14 2 2 4-4" />
        </svg>
      );
    case "review":
      return (
        <svg aria-hidden="true" className={className} viewBox="0 0 24 24">
          <path d="M12 3.25 19 6v5.2c0 4.3-2.85 7.78-7 9.55-4.15-1.77-7-5.25-7-9.55V6l7-2.75Z" />
          <path d="m8.8 11.9 2.1 2.1 4.35-4.35" />
        </svg>
      );
  }
}

export default function Process() {
  return (
    <section className="relative isolate overflow-hidden bg-[#0a0a09] py-24 sm:py-28 lg:py-36" id="process">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_15%_30%,rgba(216,179,91,.09),transparent_33%),radial-gradient(ellipse_at_88%_84%,rgba(255,255,255,.035),transparent_30%)]" />
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-[8%] top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      <div aria-hidden="true" className="pointer-events-none absolute -right-24 top-28 hidden text-[18rem] font-black leading-none tracking-[-.08em] text-white/[.018] lg:block">
        04
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">
        <header className="grid gap-7 lg:grid-cols-[minmax(0,1.2fr)_minmax(280px,.55fr)] lg:items-end lg:gap-20">
          <div>
            <div className="flex items-center gap-4">
              <span aria-hidden="true" className="h-px w-8 bg-[#d8b35b]" />
              <p className="text-[10px] font-semibold uppercase tracking-[.4em] text-[#d8b35b] sm:text-xs sm:tracking-[.55em]">
                How It Works
              </p>
            </div>
            <h2 className="mt-6 max-w-4xl text-balance text-4xl font-semibold leading-[.98] tracking-[-.055em] text-white sm:text-5xl md:text-6xl lg:text-7xl">
              Simple. Transparent. Stress-Free.
            </h2>
          </div>

          <p className="max-w-md text-pretty text-sm leading-6 text-white/58 sm:text-base sm:leading-7 lg:pb-1">
            A clear four-step path from the first conversation through final review.
          </p>
        </header>

        <div className="relative mt-14 sm:mt-16 lg:mt-24">
          <div aria-hidden="true" className="absolute bottom-8 left-[1.4375rem] top-8 w-px bg-gradient-to-b from-[#d8b35b]/70 via-white/16 to-transparent md:hidden lg:bottom-auto lg:left-[12.5%] lg:right-[12.5%] lg:top-[1.4375rem] lg:block lg:h-px lg:w-auto lg:bg-gradient-to-r lg:from-transparent lg:via-[#d8b35b]/45 lg:to-transparent" />

          <ol className="relative grid gap-9 md:grid-cols-2 md:gap-x-10 md:gap-y-12 lg:grid-cols-4 lg:gap-7">
            {processSteps.map((step) => (
              <li className="relative grid grid-cols-[2.875rem_minmax(0,1fr)] gap-5 md:block" key={step.number}>
                <div className="relative z-10 flex h-[2.875rem] w-[2.875rem] items-center justify-center rounded-full border border-[#d8b35b]/55 bg-[#11100d] text-[#ead7a3] shadow-[0_0_0_7px_rgba(10,10,9,.96)] lg:mx-auto">
                  <ProcessIcon icon={step.icon} />
                </div>

                <article className={`border-b border-white/10 pb-8 md:mt-5 md:border-b-0 md:border-t md:pb-0 md:pt-6 lg:mt-0 ${step.offset}`}>
                  <p className="font-mono text-[9px] tracking-[.22em] text-[#d8b35b]">{step.number}</p>
                  <h3 className="mt-3 max-w-xs text-xl font-semibold leading-tight tracking-[-.03em] text-white sm:text-2xl">
                    {step.title}
                  </h3>
                  <p className="mt-3 max-w-sm text-sm leading-6 text-white/56">
                    {step.description}
                  </p>
                </article>
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-12 flex justify-end sm:mt-14 lg:mt-20">
          <a
            className="group inline-flex min-h-12 items-center gap-4 border-b border-[#d8b35b]/55 px-1 pb-2 text-[10px] font-bold uppercase tracking-[.18em] text-white transition hover:border-[#ead7a3] hover:text-[#ead7a3] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d8b35b] motion-reduce:transition-none sm:text-[11px]"
            href="#contact"
          >
            Start Your Project
            <span aria-hidden="true" className="text-base text-[#d8b35b] transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transform-none">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
