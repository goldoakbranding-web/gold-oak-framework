"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import type { ServiceConfig } from "@/config/services";
import type { ServiceVisuals } from "@/lib/service-images";

type ServiceGalleryProps = { service: ServiceConfig; visuals: ServiceVisuals };

const galleryLayouts = {
  masonry: ["md:col-span-2 md:row-span-2", "", "", "md:col-span-2"],
  panorama: ["md:col-span-3", "", "", "md:col-span-3"],
  frames: ["md:col-span-2", "", "", "md:col-span-2"],
} as const;

const placeholderTitles = ["System detail", "Material study", "Finished elevation", "Crafted edge"];

export default function ServiceGallery({ service, visuals }: ServiceGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const images = visuals.gallery.slice(0, 4);

  useEffect(() => {
    if (selectedIndex === null) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedIndex(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex]);

  return (
    <section className="relative overflow-hidden bg-[#090908] py-28 sm:py-36 lg:py-44" id="service-gallery">
      <div className="pointer-events-none absolute left-[8%] top-16 h-80 w-80 rounded-full bg-[#d8bd79]/[.06] blur-[130px]" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col gap-7 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="text-[10px] font-semibold uppercase tracking-[.48em] text-[#d8bd79] sm:text-xs sm:tracking-[.62em]">{service.gallery.eyebrow}</p>
            <h2 className="mt-5 text-balance text-4xl font-semibold tracking-[-.05em] text-white sm:mt-7 sm:text-5xl md:text-6xl">{service.gallery.title}</h2>
          </div>
          <p className="max-w-sm text-sm leading-6 text-white/52">{service.gallery.description}</p>
        </div>

        <div className={`mt-14 grid auto-rows-[190px] grid-cols-1 gap-4 sm:mt-16 sm:grid-cols-2 md:auto-rows-[220px] md:grid-cols-3 ${service.theme.galleryLayout === "frames" ? "lg:auto-rows-[245px]" : "lg:auto-rows-[230px]"}`}>
          {Array.from({ length: Math.max(images.length, 4) }, (_, index) => {
            const image = images[index];
            const title = image ? `Project image ${index + 1}` : placeholderTitles[index];
            return (
              <button
                aria-label={image ? `Expand ${title}` : `${title} placeholder`}
                className={`group relative overflow-hidden rounded-[20px] border border-white/10 bg-[#12110f] text-left shadow-[0_20px_60px_rgba(0,0,0,.26)] transition duration-500 hover:-translate-y-1 hover:border-[#d8bd79]/45 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ead7a3] motion-reduce:transform-none sm:rounded-[24px] ${galleryLayouts[service.theme.galleryLayout][index] ?? ""}`}
                disabled={!image}
                key={image?.src ?? title}
                onClick={() => image && setSelectedIndex(index)}
                type="button"
              >
                {image ? (
                  <Image alt={image.alt} className="object-cover brightness-[.72] transition duration-[1300ms] group-hover:scale-[1.045] group-hover:brightness-[.9] motion-reduce:transform-none" fill sizes="(max-width: 639px) calc(100vw - 2.5rem), (max-width: 1023px) calc(50vw - 1.75rem), 33vw" src={image.src} />
                ) : (
                  <>
                    <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(216,189,121,.12),transparent_44%),linear-gradient(45deg,#14130f,#090908_72%)]" />
                    <div className="absolute inset-[16%] border border-white/[.09] [clip-path:polygon(13%_0,100%_13%,88%_100%,0_82%)]" />
                  </>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/78 via-black/5 to-transparent" />
                <div className="absolute inset-x-5 bottom-5 flex items-end justify-between gap-4">
                  <span className="text-[10px] font-semibold uppercase tracking-[.17em] text-white/72">{title}</span>
                  <span className="text-[9px] font-semibold uppercase tracking-[.15em] text-[#ead7a3] opacity-0 transition group-hover:opacity-100">{image ? "View" : "Ready"}</span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {selectedIndex !== null && images[selectedIndex] ? (
        <div aria-label="Expanded project photograph" aria-modal="true" className="fixed inset-0 z-[80] flex items-center justify-center bg-black/88 p-5 backdrop-blur-xl" onMouseDown={() => setSelectedIndex(null)} role="dialog">
          <div className="relative h-[min(76vh,880px)] w-full max-w-6xl overflow-hidden rounded-[24px] border border-white/16 bg-[#11110f] shadow-2xl" onMouseDown={(event) => event.stopPropagation()}>
            <Image alt={images[selectedIndex].alt} className="object-contain" fill sizes="min(100vw - 2.5rem, 1152px)" src={images[selectedIndex].src} />
            <button aria-label="Close expanded project photograph" className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full border border-white/18 bg-black/55 text-lg text-white backdrop-blur-md transition hover:border-[#ead7a3] hover:text-[#ead7a3] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ead7a3]" onClick={() => setSelectedIndex(null)} type="button">×</button>
          </div>
        </div>
      ) : null}
    </section>
  );
}
