"use client";

import Image from "next/image";
import type { KeyboardEvent } from "react";
import { useRef, useState } from "react";
import {
  gentekColors,
  gentekProfiles,
  soffitFasciaProductContent,
  type GentekProfile,
} from "@/config/services/soffitFasciaProducts";

function nextIndex(current: number, length: number, direction: number) {
  return (current + direction + length) % length;
}

function profileSpecifications(profile: GentekProfile) {
  if (profile.kind === "soffit") {
    return [
      { label: "Profile type", value: "Aluminum soffit" },
      { label: "Exposure", value: `${profile.exposureInches}\" per panel` },
      { label: "Panel length", value: `${profile.lengthFeet}'` },
      { label: "Finish", value: profile.finish },
      { label: "Texture", value: profile.texture },
      {
        label: "Ventilation",
        value:
          profile.ventilation.kind === "vented"
            ? `${profile.ventilation.squareInchesPerLinealFoot} sq. in. per lineal ft.`
            : "Solid profile",
      },
    ];
  }

  return [
    { label: "Profile type", value: "Deluxe aluminum fascia" },
    { label: "Nominal width", value: `${profile.nominalWidthInches}\"` },
    { label: "Finish", value: profile.finish },
    { label: "Texture", value: profile.texture },
  ];
}

export default function SoffitFasciaProductSelector() {
  const [activeIndex, setActiveIndex] = useState(0);
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const activeProfile = gentekProfiles[activeIndex];
  const specifications = profileSpecifications(activeProfile);

  function selectProfile(index: number, focus = false) {
    setActiveIndex(index);
    if (focus) tabRefs.current[index]?.focus();
  }

  function handleKeyDown(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    let targetIndex: number | undefined;

    if (event.key === "ArrowRight" || event.key === "ArrowDown") {
      targetIndex = nextIndex(index, gentekProfiles.length, 1);
    } else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
      targetIndex = nextIndex(index, gentekProfiles.length, -1);
    } else if (event.key === "Home") {
      targetIndex = 0;
    } else if (event.key === "End") {
      targetIndex = gentekProfiles.length - 1;
    }

    if (targetIndex === undefined) return;
    event.preventDefault();
    selectProfile(targetIndex, true);
  }

  return (
    <>
      <section
        aria-labelledby="gentek-profile-selector-title"
        className="scroll-mt-24 border-y border-white/8 bg-[#0b0b0a] py-14 text-white sm:py-20 md:scroll-mt-36 lg:py-24"
        id="gentek-profile-selector"
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-7 border-t border-[#d8bd79]/35 pt-6 lg:grid-cols-[.72fr_1.28fr] lg:gap-20 lg:pt-8">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[.3em] text-[#d8bd79] sm:text-xs">
                {soffitFasciaProductContent.selector.eyebrow}
              </p>
              <p className="mt-4 hidden font-mono text-[9px] uppercase tracking-[.17em] text-white/55 lg:block">
                05 soffit / 02 fascia
              </p>
            </div>

            <div>
              <p className="mb-3 text-[9px] font-bold uppercase tracking-[.2em] text-white/55 sm:text-[10px]">
                {soffitFasciaProductContent.productLine}
              </p>
              <h2
                className="max-w-3xl text-balance text-4xl leading-[.94] tracking-[-.025em] [font-family:var(--font-bebas)] sm:text-5xl lg:text-6xl"
                id="gentek-profile-selector-title"
              >
                {soffitFasciaProductContent.selector.title}
              </h2>
              <p className="mt-5 max-w-2xl text-sm leading-7 text-white/62 sm:text-base sm:leading-8">
                {soffitFasciaProductContent.selector.description}
              </p>
              <a
                className="mt-6 inline-flex min-h-12 w-full items-center justify-center bg-[#d8bd79] px-6 text-center text-[9px] font-bold uppercase tracking-[.15em] text-[#17130a] transition-colors hover:bg-[#ead7a3] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ead7a3] motion-reduce:transition-none sm:w-auto sm:text-[10px]"
                href="#service-estimate"
              >
                Request a Free Soffit &amp; Fascia Estimate
              </a>
            </div>
          </div>

          <div className="mt-10 overflow-hidden border border-white/12 bg-[#121210] shadow-[0_28px_80px_rgba(0,0,0,.24)] sm:mt-14">
            <div className="border-b border-white/10 p-3 sm:p-5">
              <div aria-label="Gentek soffit and fascia profiles" className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7" role="tablist">
                {gentekProfiles.map((profile, index) => {
                  const isActive = index === activeIndex;

                  return (
                    <button
                      aria-controls="gentek-profile-panel"
                      aria-selected={isActive}
                      className={`min-h-16 min-w-0 border px-2 py-3 text-left transition-[background-color,border-color,color,transform] duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ead7a3] motion-reduce:transform-none motion-reduce:transition-none sm:min-h-[4.75rem] sm:px-3 ${
                        isActive
                          ? "border-[#d8bd79] bg-[#d8bd79] text-[#17130a]"
                          : "border-white/12 bg-white/[.025] text-white/68 hover:-translate-y-0.5 hover:border-white/30 hover:text-white"
                      }`}
                      id={`gentek-profile-tab-${profile.id}`}
                      key={profile.id}
                      onClick={() => selectProfile(index)}
                      onKeyDown={(event) => handleKeyDown(event, index)}
                      ref={(element) => {
                        tabRefs.current[index] = element;
                      }}
                      role="tab"
                      tabIndex={isActive ? 0 : -1}
                      type="button"
                    >
                      <span className={`block text-[8px] font-bold uppercase tracking-[.14em] ${isActive ? "text-black/55" : "text-[#d8bd79]"}`}>
                        {profile.kind}
                      </span>
                      <span className="mt-1.5 block text-[9px] font-bold uppercase leading-4 tracking-[.055em] sm:text-[10px]">
                        {profile.tabLabel}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div
              aria-labelledby={`gentek-profile-tab-${activeProfile.id}`}
              className="grid lg:grid-cols-[minmax(0,1.15fr)_minmax(20rem,.85fr)]"
              id="gentek-profile-panel"
              role="tabpanel"
            >
              <div className="border-b border-white/10 p-3 sm:p-5 lg:border-b-0 lg:border-r">
                <figure className="overflow-hidden border border-white/10 bg-[#ebe8df]">
                  <div className="relative aspect-[5/4] overflow-hidden">
                    <Image
                      alt={activeProfile.alt}
                      className="object-contain transition-opacity duration-300 motion-reduce:transition-none"
                      fill
                      key={activeProfile.id}
                      loading="lazy"
                      sizes="(max-width: 1023px) calc(100vw - 4rem), 56vw"
                      src={activeProfile.image}
                    />
                  </div>
                  <figcaption className="border-t border-black/10 bg-[#f1efe9] p-4 text-[#171714] sm:p-5">
                    <p className="text-[8px] font-bold uppercase tracking-[.2em] text-[#806c35]">Selected profile</p>
                    <div className="mt-2 flex flex-wrap items-end justify-between gap-2">
                      <h3 className="text-xl font-semibold leading-tight tracking-[-.025em] sm:text-2xl">{activeProfile.name}</h3>
                      <p className="font-mono text-[8px] uppercase tracking-[.13em] text-black/42">Bright White reference</p>
                    </div>
                  </figcaption>
                </figure>
                <p className="mt-4 border-l border-[#d8bd79]/65 pl-4 text-xs leading-5 text-white/55 sm:text-sm sm:leading-6">
                  {soffitFasciaProductContent.selector.imageNote}
                </p>
              </div>

              <div className="p-4 sm:p-6 lg:p-7">
                <p className="text-[9px] font-bold uppercase tracking-[.24em] text-[#d8bd79] sm:text-[10px]">Profile details</p>
                <h3 className="mt-3 text-2xl font-semibold tracking-[-.025em] text-white sm:text-3xl">{activeProfile.name}</h3>
                <p className="mt-4 text-sm leading-7 text-white/54">{activeProfile.description}</p>

                <dl className="mt-7 grid grid-cols-2 border-l border-t border-white/12">
                  {specifications.map((specification) => (
                    <div className="min-w-0 border-b border-r border-white/12 p-3 sm:p-4" key={specification.label}>
                      <dt className="text-[8px] font-bold uppercase leading-4 tracking-[.15em] text-white/55">{specification.label}</dt>
                      <dd className="mt-2 text-xs font-semibold leading-5 text-white/82 sm:text-sm">{specification.value}</dd>
                    </div>
                  ))}
                </dl>

                <p aria-live="polite" className="mt-5 text-xs leading-5 text-white/55">
                  Profile {activeIndex + 1} of {gentekProfiles.length}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="gentek-colors-title" className="bg-[#f1efe9] py-14 text-[#171714] sm:py-20 lg:py-24" id="gentek-colors">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-6 lg:grid-cols-[.72fr_1.28fr] lg:gap-20">
            <p className="text-[10px] font-bold uppercase tracking-[.28em] text-[#806c35] sm:text-xs">
              {soffitFasciaProductContent.colors.eyebrow}
            </p>
            <div>
              <h2 className="max-w-3xl text-balance text-4xl leading-[.96] tracking-[-.025em] [font-family:var(--font-bebas)] sm:text-5xl lg:text-6xl" id="gentek-colors-title">
                {soffitFasciaProductContent.colors.title}
              </h2>
              <p className="mt-5 max-w-2xl text-sm leading-7 text-black/62 sm:text-base sm:leading-8">
                {soffitFasciaProductContent.colors.description}
              </p>
              <p className="mt-4 max-w-2xl text-xs leading-5 text-black/60">
                These swatches are display-only and do not change the Bright White profile preview above.
              </p>
            </div>
          </div>

          <div className="mt-9 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 md:grid-cols-4 lg:mt-12 lg:grid-cols-6">
            {gentekColors.map((color) => (
              <figure className="min-w-0 overflow-hidden border border-black/14 bg-white" key={color.id}>
                <div className="relative aspect-square overflow-hidden bg-[#e4e0d6]">
                  <Image
                    alt=""
                    className="object-cover"
                    fill
                    loading="lazy"
                    sizes="(max-width: 639px) 46vw, (max-width: 767px) 30vw, (max-width: 1023px) 23vw, 15vw"
                    src={color.image}
                  />
                </div>
                <figcaption className="flex min-h-14 items-center border-t border-black/10 px-3 py-2 text-[9px] font-bold uppercase leading-4 tracking-[.08em] text-black/74 sm:text-[10px]">
                  {color.name}
                </figcaption>
              </figure>
            ))}
          </div>

          <div className="mt-8 grid gap-5 border-t border-black/18 pt-6 sm:mt-10 lg:grid-cols-[.8fr_1.2fr] lg:gap-16">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[.24em] text-[#806c35]">{soffitFasciaProductContent.colors.coordinationTitle}</p>
              <p className="mt-3 max-w-lg text-sm leading-7 text-black/62">{soffitFasciaProductContent.colors.coordinationDescription}</p>
            </div>
            <div className="grid gap-3 text-xs leading-5 text-black/65 sm:grid-cols-2 sm:gap-6">
              <p className="border-l border-[#806c35]/55 pl-4">{soffitFasciaProductContent.colors.disclaimer}</p>
              <p className="border-l border-black/20 pl-4">{soffitFasciaProductContent.colors.availabilityNote}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
