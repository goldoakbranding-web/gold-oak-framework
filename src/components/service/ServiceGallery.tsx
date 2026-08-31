"use client";

import Image from "next/image";
import type { CSSProperties } from "react";
import { useEffect, useRef, useState } from "react";
import type { ServiceConfig, ServiceImage } from "@/config/services";

type ServiceGalleryProps = { service: ServiceConfig };

function focalPoint(image: ServiceImage) {
  return {
    "--image-position-mobile": image.mobileObjectPosition,
    "--image-position-desktop": image.objectPosition,
  } as CSSProperties;
}

function tileClass(count: number, index: number) {
  if (count === 1) return "col-span-2 aspect-[16/10] lg:col-span-12 lg:aspect-[21/9]";
  if (count === 2) return "col-span-1 aspect-[4/5] lg:col-span-6 lg:aspect-[4/3]";
  if (index === 0) return "col-span-2 aspect-[16/10] lg:col-span-7 lg:row-span-2 lg:aspect-auto";
  if (index === 1 || index === 2) return "col-span-1 aspect-square lg:col-span-5 lg:aspect-auto";
  if (count % 2 === 0 && index === count - 1) return "col-span-2 aspect-[16/10] lg:col-span-4 lg:aspect-auto";
  return "col-span-1 aspect-square lg:col-span-4 lg:aspect-auto";
}

function imageSizes(count: number, index: number) {
  if (index === 0 && count > 2) return "(max-width: 1023px) calc(100vw - 2.5rem), 58vw";
  if (count > 2 && count % 2 === 0 && index === count - 1) {
    return "(max-width: 1023px) calc(100vw - 2.5rem), 34vw";
  }
  return "(max-width: 1023px) calc(50vw - 1.75rem), 34vw";
}

export default function ServiceGallery({ service }: ServiceGalleryProps) {
  const gallery = service.gallery;
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const openerIndexRef = useRef<number | null>(null);
  const thumbnailRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const images = gallery?.images ?? [];
  const selectedImage = selectedIndex === null ? undefined : images[selectedIndex];

  function openGallery(index: number) {
    openerIndexRef.current = index;
    setSelectedIndex(index);
  }

  function closeGallery() {
    const openerIndex = openerIndexRef.current;
    setSelectedIndex(null);
    openerIndexRef.current = null;

    window.requestAnimationFrame(() => {
      if (openerIndex !== null) thumbnailRefs.current[openerIndex]?.focus();
    });
  }

  useEffect(() => {
    if (selectedIndex === null || !selectedImage) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        closeGallery();
        return;
      }
      if (event.key === "ArrowRight") setSelectedIndex((current) => current === null ? null : (current + 1) % images.length);
      if (event.key === "ArrowLeft") setSelectedIndex((current) => current === null ? null : (current - 1 + images.length) % images.length);
      if (event.key === "Tab") {
        const focusable = Array.from(dialogRef.current?.querySelectorAll<HTMLElement>("button:not([disabled]), a[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex='-1'])") ?? []);
        const first = focusable[0];
        const last = focusable.at(-1);

        if (!first || !last) return;

        if (event.shiftKey && (document.activeElement === first || !dialogRef.current?.contains(document.activeElement))) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && (document.activeElement === last || !dialogRef.current?.contains(document.activeElement))) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [images.length, selectedImage, selectedIndex]);

  if (!gallery || images.length === 0) return null;

  return (
    <section className="scroll-mt-24 bg-[#0a0a09] py-12 sm:py-20 md:scroll-mt-36 lg:py-24" id="service-gallery">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-5 lg:grid-cols-[1fr_.65fr] lg:items-end lg:gap-16">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[.28em] text-[#d8bd79] sm:text-xs">{gallery.eyebrow}</p>
            <h2 className="mt-4 max-w-3xl text-balance text-4xl leading-[.98] tracking-[-.025em] text-white [font-family:var(--font-bebas)] sm:text-5xl lg:text-6xl">{gallery.title}</h2>
          </div>
          <p className="max-w-xl text-sm leading-7 text-white/58 sm:text-base">{gallery.description}</p>
        </div>

        <div className={`mt-8 grid grid-cols-2 gap-2.5 sm:gap-4 lg:mt-14 lg:grid-cols-12 ${images.length > 2 ? "lg:auto-rows-[260px]" : ""}`}>
          {images.map((image, index) => (
            <button
              aria-label={`Open photograph ${index + 1}: ${image.alt}`}
              className={`group relative overflow-hidden bg-[#171714] text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ead7a3] ${tileClass(images.length, index)}`}
              key={image.src}
              onClick={() => openGallery(index)}
              ref={(element) => { thumbnailRefs.current[index] = element; }}
              style={focalPoint(image)}
              type="button"
            >
              <Image
                alt={image.alt}
                className="object-cover transition duration-700 group-hover:scale-[1.025] group-hover:brightness-110 motion-reduce:transform-none [object-position:var(--image-position-mobile)] lg:[object-position:var(--image-position-desktop)]"
                fill
                sizes={imageSizes(images.length, index)}
                src={image.src}
              />
              <span aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <span className="absolute bottom-3 left-3 right-3 flex items-end justify-between gap-3 text-[8px] font-bold uppercase tracking-[.13em] text-white/78 sm:bottom-4 sm:left-4 sm:right-4 sm:text-[9px]">
                <span>{image.caption ?? `Project view ${String(index + 1).padStart(2, "0")}`}</span>
                <span className="text-[#ead7a3] opacity-0 transition group-hover:opacity-100">View</span>
              </span>
            </button>
          ))}
        </div>
      </div>

      {selectedIndex !== null && selectedImage ? (
        <div
          aria-label="Expanded project photograph"
          aria-modal="true"
          className="fixed inset-0 z-[90] flex items-center justify-center bg-black/94 p-4 sm:p-6"
          onMouseDown={closeGallery}
          role="dialog"
        >
          <div className="relative h-[min(82vh,900px)] w-full max-w-6xl" onMouseDown={(event) => event.stopPropagation()} ref={dialogRef}>
            <Image alt={selectedImage.alt} className="object-contain" fill sizes="min(100vw - 2rem, 1152px)" src={selectedImage.src} />
            <button aria-label="Close expanded photograph" autoFocus className="absolute right-0 top-0 flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-black/70 text-xl text-white transition hover:border-[#ead7a3] hover:text-[#ead7a3] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ead7a3]" onClick={closeGallery} type="button">×</button>
            {images.length > 1 ? (
              <div className="absolute inset-x-0 bottom-0 flex justify-center gap-3">
                <button aria-label="Previous photograph" className="flex h-11 min-w-11 items-center justify-center border border-white/25 bg-black/70 px-4 text-white transition hover:border-[#ead7a3] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#ead7a3]" onClick={() => setSelectedIndex((selectedIndex - 1 + images.length) % images.length)} type="button">←</button>
                <span className="flex h-11 items-center bg-black/70 px-4 font-mono text-[10px] tracking-[.14em] text-white/70">{selectedIndex + 1} / {images.length}</span>
                <button aria-label="Next photograph" className="flex h-11 min-w-11 items-center justify-center border border-white/25 bg-black/70 px-4 text-white transition hover:border-[#ead7a3] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#ead7a3]" onClick={() => setSelectedIndex((selectedIndex + 1) % images.length)} type="button">→</button>
              </div>
            ) : null}
          </div>
        </div>
      ) : null}
    </section>
  );
}
