import Image from "next/image";
import type { WhyChooseIcon, WhyChooseItem } from "@/config/whyChoose";

type WhyChooseCardProps = {
  item: WhyChooseItem;
  index: number;
  revealed: boolean;
};

const placementClasses = {
  featured: "min-h-[390px] md:col-span-2 xl:col-span-7 xl:row-span-2 xl:min-h-[500px]",
  primary: "min-h-[270px] xl:col-span-5",
  standard: "min-h-[250px] xl:col-span-4",
};

function CardIcon({ name }: { name: WhyChooseIcon }) {
  const className = "h-6 w-6 fill-none stroke-current stroke-[1.45]";

  switch (name) {
    case "system":
      return (
        <svg aria-hidden="true" className={className} viewBox="0 0 24 24">
          <path d="M4 7.25 12 3l8 4.25L12 11.5 4 7.25Z" />
          <path d="M4 12 12 16.25 20 12" />
          <path d="M4 16.75 12 21l8-4.25" />
        </svg>
      );
    case "craftsmanship":
      return (
        <svg aria-hidden="true" className={className} viewBox="0 0 24 24">
          <path d="m14.8 4.2 5 5" />
          <path d="m4 20 3.3-7.1L15.7 4.5l3.8 3.8-8.4 8.4L4 20Z" />
          <path d="m6.7 17.3 1.6 1.6" />
        </svg>
      );
    case "protection":
      return (
        <svg aria-hidden="true" className={className} viewBox="0 0 24 24">
          <path d="M12 3.25 19 6v5.2c0 4.3-2.85 7.78-7 9.55-4.15-1.77-7-5.25-7-9.55V6l7-2.75Z" />
          <path d="m8.8 11.9 2.1 2.1 4.35-4.35" />
        </svg>
      );
    case "insured":
      return (
        <svg aria-hidden="true" className={className} viewBox="0 0 24 24">
          <path d="M4 20V9l8-5 8 5v11" />
          <path d="M8.5 20v-5h7v5" />
          <path d="M12 7.8v3.7" />
          <path d="M10.15 9.65h3.7" />
        </svg>
      );
    case "storm":
      return (
        <svg aria-hidden="true" className={className} viewBox="0 0 24 24">
          <path d="M7.2 18.7h9.15a3.65 3.65 0 0 0 .6-7.25A5.6 5.6 0 0 0 6.3 9.3 4.75 4.75 0 0 0 7.2 18.7Z" />
          <path d="m12.8 13.1-2.25 4.1h2.3l-1.1 3.1 3.05-4.65h-2.1l.1-2.55Z" />
        </svg>
      );
    case "communication":
      return (
        <svg aria-hidden="true" className={className} viewBox="0 0 24 24">
          <path d="M5 5.25h14v10.2H10l-4.5 3.3v-3.3H5v-10.2Z" />
          <path d="M8 9.25h8" />
          <path d="M8 12.25h5.25" />
        </svg>
      );
  }
}

export default function WhyChooseCard({ item, index, revealed }: WhyChooseCardProps) {
  const isFeatured = item.variant === "featured";
  const isPrimary = item.variant === "primary";
  const hasImage = Boolean(item.image && item.imageAlt);
  const imageLayout = item.imageLayout ?? "top";
  const hasTopImage = hasImage && imageLayout === "top";
  const hasBottomImage = hasImage && imageLayout === "bottom";
  const hasCornerImage = hasImage && imageLayout === "corner";
  const imageSizes = "(max-width: 767px) calc(100vw - 2.5rem), (max-width: 1279px) calc(50vw - 2rem), 440px";

  return (
    <article
      className={`group relative overflow-hidden rounded-[26px] border border-white/[.1] bg-[#11110f]/78 p-6 shadow-[0_22px_60px_rgba(0,0,0,.2)] backdrop-blur-sm transition-[transform,border-color,box-shadow,opacity] duration-700 ease-out hover:-translate-y-1 hover:border-[#d8bd79]/45 hover:shadow-[0_30px_75px_rgba(0,0,0,.34)] motion-reduce:transform-none motion-reduce:transition-none sm:rounded-[30px] sm:p-7 ${placementClasses[item.variant]} ${
        hasBottomImage ? "min-h-[410px] pb-44 sm:pb-48" : ""
      } ${hasTopImage ? "min-h-[365px]" : ""} ${hasCornerImage ? "min-h-[390px]" : ""} ${
        revealed ? "translate-y-0 opacity-100" : "translate-y-7 opacity-0"
      }`}
      style={{ transitionDelay: revealed ? `${index * 75}ms` : "0ms" }}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_100%_0%,rgba(216,189,121,.1),transparent_29%)] opacity-0 transition-opacity duration-700 group-hover:opacity-100 motion-reduce:transition-none" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent opacity-60" />

      {isFeatured && (
        <>
          <div className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full bg-[#d8bd79]/[.09] blur-[90px]" />
          <div className="pointer-events-none absolute bottom-0 right-0 h-[78%] w-[58%] opacity-35 [background-image:linear-gradient(rgba(255,255,255,.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.06)_1px,transparent_1px)] [background-size:28px_28px] [mask-image:linear-gradient(to_top_left,black,transparent_78%)]" />
        </>
      )}

      {hasCornerImage && item.image && item.imageAlt && (
        <figure className="absolute right-0 top-0 h-36 w-[52%] overflow-hidden border-b border-l border-white/10 sm:h-40">
          <Image
            alt={item.imageAlt}
            className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105 motion-reduce:transform-none motion-reduce:transition-none"
            fill
            sizes={imageSizes}
            src={item.image}
            style={{ objectPosition: item.imagePosition }}
          />
          <div className="absolute inset-0 bg-gradient-to-l from-black/5 via-black/15 to-[#11110f]/70" />
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#11110f]/75 to-transparent" />
        </figure>
      )}

      <div className={`relative flex items-start justify-between gap-4 ${hasCornerImage ? "max-w-[43%]" : ""}`}>
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/12 bg-white/[.045] text-[#d8bd79] transition duration-500 group-hover:-translate-y-1 group-hover:border-[#d8bd79]/50 group-hover:bg-[#d8bd79]/10 motion-reduce:transform-none motion-reduce:transition-none">
          <CardIcon name={item.icon} />
        </div>
        <span className="font-mono text-[10px] tracking-[.18em] text-white/33">{item.number}</span>
      </div>

      {hasTopImage && item.image && item.imageAlt && (
        <figure className="relative mt-6 aspect-[16/6] overflow-hidden rounded-2xl border border-white/10 bg-black/20">
          <Image
            alt={item.imageAlt}
            className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105 motion-reduce:transform-none motion-reduce:transition-none"
            fill
            sizes={imageSizes}
            src={item.image}
            style={{ objectPosition: item.imagePosition }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#11110f]/70 via-transparent to-black/10" />
          <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#d8bd79]/65 to-transparent" />
        </figure>
      )}

      <div className={`relative ${isFeatured ? "mt-12 max-w-[28rem] sm:mt-16" : hasTopImage ? "mt-6" : hasCornerImage ? "mt-20 sm:mt-[5.5rem]" : "mt-8"}`}>
        <p className="text-[9px] font-semibold uppercase tracking-[.2em] text-[#d8bd79]">
          {isFeatured ? "System-first approach" : "Better by design"}
        </p>
        <h3 className={`${isFeatured ? "mt-3 text-3xl sm:text-4xl" : "mt-3 text-xl sm:text-2xl"} font-semibold tracking-[-.035em] text-white`}>
          {item.title}
        </h3>
        <p className={`${isFeatured ? "mt-5 max-w-xl text-base leading-7 sm:text-lg" : "mt-4 text-sm leading-6"} text-white/67`}>
          {item.description}
        </p>
      </div>

      <div className={`relative border-white/10 ${isFeatured ? "mt-8 max-w-xl border-t pt-5" : "mt-6 border-t pt-4"}`}>
        <p className="text-xs leading-5 text-white/46">{item.detail}</p>
      </div>

      {hasBottomImage && item.image && item.imageAlt && (
        <figure className="absolute inset-x-0 bottom-0 h-36 overflow-hidden border-t border-white/10 bg-black/30 sm:h-40">
          <Image
            alt={item.imageAlt}
            className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105 motion-reduce:transform-none motion-reduce:transition-none"
            fill
            sizes={imageSizes}
            src={item.image}
            style={{ objectPosition: item.imagePosition }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-[#11110f]/35" />
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#d8bd79]/65 to-transparent" />
        </figure>
      )}

      {isPrimary && <div className="absolute bottom-0 left-0 h-px w-0 bg-[#d8bd79] transition-all duration-700 group-hover:w-full motion-reduce:transition-none" />}
    </article>
  );
}
