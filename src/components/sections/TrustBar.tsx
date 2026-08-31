import { business } from "@/config/business";

type MobileTrustIcon = "shield" | "award" | "home" | "communication";

type MobileTrustItem = {
  title: string;
  description: string;
  icon: MobileTrustIcon;
};

const mobileItems: MobileTrustItem[] = [
  {
    title: "Quality Craftsmanship",
    description: "Careful workmanship with attention to the details.",
    icon: "shield",
  },
  {
    title: "Premium Materials",
    description: "Quality materials selected with the project and home in view.",
    icon: "award",
  },
  {
    title: "Local & Reliable",
    description: `Based in ${business.city} and serving Central Wisconsin.`,
    icon: "home",
  },
  {
    title: "Honest Communication",
    description: "Straight answers and dependable project communication.",
    icon: "communication",
  },
];

function MobileTrustIcon({ icon }: { icon: MobileTrustIcon }) {
  const iconClass = "h-7 w-7 fill-none stroke-current stroke-[1.45]";

  switch (icon) {
    case "shield":
      return (
        <svg aria-hidden="true" className={iconClass} viewBox="0 0 24 24">
          <path d="M12 3.25 19 6v5.2c0 4.3-2.85 7.78-7 9.55-4.15-1.77-7-5.25-7-9.55V6l7-2.75Z" />
          <path d="m8.8 11.9 2.1 2.1 4.35-4.35" />
        </svg>
      );
    case "award":
      return (
        <svg aria-hidden="true" className={iconClass} viewBox="0 0 24 24">
          <circle cx="12" cy="9" r="5.25" />
          <path d="m8.8 13.1-1.15 7.15L12 17.9l4.35 2.35-1.15-7.15" />
          <path d="m12 6.1.9 1.8 2 .3-1.45 1.4.35 2-1.8-.95-1.8.95.35-2-1.45-1.4 2-.3.9-1.8Z" />
        </svg>
      );
    case "home":
      return (
        <svg aria-hidden="true" className={iconClass} viewBox="0 0 24 24">
          <path d="m3.5 11 8.5-7 8.5 7" />
          <path d="M5.75 9.5v10.25h12.5V9.5" />
          <path d="M9.6 19.75v-5.5h4.8v5.5" />
        </svg>
      );
    case "communication":
      return (
        <svg aria-hidden="true" className={iconClass} viewBox="0 0 24 24">
          <path d="M4 5.25h16v11.5H9.25L4 20v-14.75Z" />
          <path d="M7.5 9h9M7.5 12.5h6" />
        </svg>
      );
  }
}

export default function TrustBar() {
  return (
    <section className="relative scroll-mt-24 overflow-hidden border-y border-white/10 bg-[#111111]" id="why-choose">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(216,189,121,.1),transparent_55%),linear-gradient(90deg,transparent,rgba(255,255,255,.028),transparent)]" />
      <div aria-hidden="true" className="atmosphere-grain pointer-events-none absolute inset-0" />
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-[16%] top-0 h-px bg-gradient-to-r from-transparent via-[#ead7a3]/45 to-transparent" />

      <h2 className="sr-only">Why homeowners choose CM Roofing</h2>

      <ul className="relative z-10 mx-auto grid max-w-[46rem] grid-cols-4 px-3 py-5 md:hidden min-[390px]:px-4 min-[430px]:py-6">
        {mobileItems.map((item, index) => (
          <li
            className={`relative flex min-w-0 flex-col items-center px-2 text-center min-[430px]:px-3 ${
              index > 0
                ? "before:absolute before:inset-y-1 before:left-0 before:w-px before:bg-gradient-to-b before:from-transparent before:via-white/16 before:to-transparent"
                : ""
            }`}
            key={item.title}
          >
            <span className="flex h-9 items-center justify-center text-[#D8B35B]">
              <MobileTrustIcon icon={item.icon} />
            </span>
            <h3 className="mt-2.5 text-[10px] font-bold uppercase leading-[1.35] tracking-[0.06em] text-white min-[430px]:tracking-[0.08em]">
              {item.title}
            </h3>
            <p className="mt-2 text-[10px] leading-[1.45] text-white/58 min-[430px]:leading-[1.5]">
              {item.description}
            </p>
          </li>
        ))}
      </ul>

      <ul className="relative z-10 mx-auto hidden max-w-7xl grid-cols-4 px-8 py-8 md:grid lg:px-10 lg:py-9">
        {mobileItems.map((item, index) => (
          <li
            className={`relative flex min-w-0 items-start gap-4 px-5 lg:px-7 ${
              index > 0
                ? "before:absolute before:inset-y-0 before:left-0 before:w-px before:bg-gradient-to-b before:from-transparent before:via-white/16 before:to-transparent"
                : ""
            }`}
            key={item.title}
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center text-[#D8B35B]">
              <MobileTrustIcon icon={item.icon} />
            </span>
            <div>
              <h3 className="text-[10px] font-bold uppercase leading-[1.4] tracking-[0.12em] text-white lg:text-xs">
                {item.title}
              </h3>
              <p className="mt-2 max-w-[14rem] text-[11px] leading-5 text-white/55 lg:text-xs">
                {item.description}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
