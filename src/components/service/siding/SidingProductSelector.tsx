"use client";

import Image from "next/image";
import type { KeyboardEvent } from "react";
import { useRef, useState } from "react";
import { business } from "@/config/business";
import {
  sidingProductSelector,
  type SidingProductColor,
  type SidingProductFeature,
} from "@/config/services/sidingProducts";

const sidingColorCount = sidingProductSelector.profiles.reduce(
  (count, profile) => Math.max(count, profile.colors.length),
  0,
);

function nextIndex(current: number, length: number, direction: number) {
  return (current + direction + length) % length;
}

function FeatureIcon({ id }: { id: SidingProductFeature["id"] }) {
  if (id === "colors") {
    return (
      <svg aria-hidden="true" className="h-6 w-6" fill="none" viewBox="0 0 24 24">
        <path d="M4 5h7v6H4zM13 5h7v6h-7zM4 13h7v6H4zM13 13h7v6h-7z" stroke="currentColor" strokeWidth="1.4" />
      </svg>
    );
  }

  if (id === "profiles") {
    return (
      <svg aria-hidden="true" className="h-6 w-6" fill="none" viewBox="0 0 24 24">
        <path d="M4 5.5h16v3H4zM4 10.5h16v3H4zM4 15.5h16v3H4z" stroke="currentColor" strokeWidth="1.4" />
      </svg>
    );
  }

  if (id === "sample") {
    return (
      <svg aria-hidden="true" className="h-6 w-6" fill="none" viewBox="0 0 24 24">
        <path d="M5 3.5h11l3 3V20.5H5zM16 3.5v4h3M8 13l2.2 2.2L16 9.8" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.4" />
      </svg>
    );
  }

  return (
    <svg aria-hidden="true" className="h-6 w-6" fill="none" viewBox="0 0 24 24">
      <path d="m3 11 9-7 9 7M5.5 10v9.5h13V10M9 19.5v-5h6v5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.4" />
    </svg>
  );
}

export default function SidingProductSelector() {
  const { profiles } = sidingProductSelector;
  const availableProfileIndexes = profiles.flatMap((profile, index) =>
    profile.status === "available" && profile.colors.length > 0 ? [index] : [],
  );
  const [activeProfileIndex, setActiveProfileIndex] = useState(availableProfileIndexes[0] ?? 0);
  const initialProfile = profiles[availableProfileIndexes[0] ?? 0];
  const [activeColorId, setActiveColorId] = useState(initialProfile.colors[0]?.id ?? "");
  const profileRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const colorRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const activeProfile = profiles[activeProfileIndex];
  const activeColor =
    activeProfile.colors.find((color) => color.id === activeColorId) ?? activeProfile.colors[0];
  const activeColorIndex = activeProfile.colors.findIndex((color) => color.id === activeColor?.id);

  if (!activeColor) return null;

  function selectProfile(index: number, focus = false) {
    const profile = profiles[index];
    if (profile.status !== "available" || profile.colors.length === 0) return;

    setActiveProfileIndex(index);
    setActiveColorId((currentColorId) =>
      profile.colors.some((color) => color.id === currentColorId)
        ? currentColorId
        : profile.colors[0].id,
    );
    if (focus) profileRefs.current[index]?.focus();
  }

  function handleProfileKeyDown(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    const availablePosition = availableProfileIndexes.indexOf(index);
    if (availablePosition < 0 || availableProfileIndexes.length === 0) return;

    let targetPosition: number | undefined;

    if (event.key === "ArrowRight" || event.key === "ArrowDown") {
      targetPosition = nextIndex(availablePosition, availableProfileIndexes.length, 1);
    } else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
      targetPosition = nextIndex(availablePosition, availableProfileIndexes.length, -1);
    } else if (event.key === "Home") {
      targetPosition = 0;
    } else if (event.key === "End") {
      targetPosition = availableProfileIndexes.length - 1;
    }

    if (targetPosition === undefined) return;
    event.preventDefault();
    selectProfile(availableProfileIndexes[targetPosition], true);
  }

  function selectColor(color: SidingProductColor, index: number, focus = false) {
    setActiveColorId(color.id);
    if (focus) colorRefs.current[index]?.focus();
  }

  function handleColorKeyDown(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    const { colors } = activeProfile;
    let targetIndex: number | undefined;

    if (event.key === "ArrowRight" || event.key === "ArrowDown") {
      targetIndex = nextIndex(index, colors.length, 1);
    } else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
      targetIndex = nextIndex(index, colors.length, -1);
    } else if (event.key === "Home") {
      targetIndex = 0;
    } else if (event.key === "End") {
      targetIndex = colors.length - 1;
    }

    if (targetIndex === undefined) return;
    event.preventDefault();
    selectColor(colors[targetIndex], targetIndex, true);
  }

  return (
    <section
      aria-labelledby="siding-product-selector-title"
      className="scroll-mt-24 overflow-hidden border-y border-white/8 bg-[#0b0b0a] py-14 text-white sm:py-20 md:scroll-mt-36 lg:py-24"
      id="siding-product-selector"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-6 border-t border-[#d8bd79]/35 pt-6 lg:grid-cols-[.76fr_1.24fr] lg:gap-20 lg:pt-8">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[.3em] text-[#d8bd79] sm:text-xs">
              {sidingProductSelector.eyebrow}
            </p>
            <p className="mt-4 hidden text-[9px] font-bold uppercase tracking-[.22em] text-white/30 lg:block">
              03 profiles / {String(sidingColorCount).padStart(2, "0")} colors
            </p>
          </div>

          <div>
            <p className="mb-3 text-[9px] font-bold uppercase tracking-[.2em] text-white/34 sm:text-[10px]">
              {sidingProductSelector.productLine}
            </p>
            <h2
              className="max-w-3xl text-balance text-4xl leading-[.94] tracking-[-.025em] [font-family:var(--font-bebas)] sm:text-5xl lg:text-6xl"
              id="siding-product-selector-title"
            >
              {sidingProductSelector.title}
            </h2>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-white/62 sm:text-base sm:leading-8">
              {sidingProductSelector.description}
            </p>
            <a
              className="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-3 bg-[#d8bd79] px-6 text-center text-[9px] font-bold uppercase tracking-[.15em] text-[#17130a] transition-colors hover:bg-[#ead7a3] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ead7a3] motion-reduce:transition-none sm:w-auto sm:text-[10px]"
              href={sidingProductSelector.introAction.href}
            >
              {sidingProductSelector.introAction.label}
              <span aria-hidden="true" className="text-sm leading-none">↓</span>
            </a>
          </div>
        </div>

        <ul className="mt-8 grid gap-px border-y border-white/12 bg-white/10 sm:grid-cols-2 lg:mt-10 lg:grid-cols-4">
          {sidingProductSelector.features.map((feature) => (
            <li className="flex items-start gap-4 bg-[#0b0b0a] px-3 py-5 sm:px-5" key={feature.id}>
              <span className="flex h-10 w-10 shrink-0 items-center justify-center border border-[#d8bd79]/45 text-[#d8bd79]">
                <FeatureIcon id={feature.id} />
              </span>
              <div>
                <h3 className="text-sm font-semibold leading-5 tracking-[-.02em] text-white">{feature.title}</h3>
                <p className="mt-1.5 text-xs leading-5 text-white/44">{feature.description}</p>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-12 sm:mt-16" id="siding-product-explorer">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[.28em] text-[#d8bd79] sm:text-xs">
                {sidingProductSelector.explorerEyebrow}
              </p>
              <h3 className="mt-3 text-3xl leading-none tracking-[-.02em] [font-family:var(--font-bebas)] sm:text-4xl">
                Compare Blue Door profiles and colors.
              </h3>
            </div>
            <p className="font-mono text-[9px] uppercase tracking-[.14em] text-white/32">Select profile / select color</p>
          </div>

          <div className="mt-6 overflow-hidden border border-white/12 bg-[#121210] shadow-[0_28px_80px_rgba(0,0,0,.24)]">
            <div className="border-b border-white/10 p-3 sm:p-5">
              <div aria-label="Blue Door siding profiles" className="grid grid-cols-3 gap-2 sm:gap-3" role="tablist">
                {profiles.map((profile, index) => {
                  const isAvailable = profile.status === "available" && profile.colors.length > 0;
                  const isActive = index === activeProfileIndex;

                  return (
                    <button
                      aria-controls={isAvailable ? "siding-product-panel" : undefined}
                      aria-disabled={!isAvailable}
                      aria-label={isAvailable ? profile.label : `${profile.label}; product imagery not yet available`}
                      aria-selected={isActive}
                      className={`flex min-h-14 min-w-0 items-center border p-2 text-left transition-[background-color,border-color,color,transform] duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ead7a3] motion-reduce:transform-none motion-reduce:transition-none sm:min-h-16 sm:p-3 ${
                        isActive
                          ? "border-[#d8bd79] bg-[#d8bd79] text-[#17130a]"
                          : isAvailable
                            ? "border-white/12 bg-white/[.025] text-white/65 hover:-translate-y-0.5 hover:border-white/30 hover:text-white"
                            : "cursor-not-allowed border-white/8 bg-white/[.015] text-white/30"
                      }`}
                      disabled={!isAvailable}
                      id={`siding-product-tab-${profile.id}`}
                      key={profile.id}
                      onClick={() => selectProfile(index)}
                      onKeyDown={(event) => handleProfileKeyDown(event, index)}
                      ref={(element) => {
                        profileRefs.current[index] = element;
                      }}
                      role="tab"
                      tabIndex={isActive ? 0 : -1}
                      type="button"
                    >
                      <span className="min-w-0 flex-1 text-center">
                        <span className="block text-[8px] font-bold uppercase leading-4 tracking-[.11em] sm:text-[10px] sm:tracking-[.14em]">
                          {profile.tabLabel}
                        </span>
                        <span className={`mt-1 hidden text-[8px] uppercase tracking-[.1em] sm:block ${isActive ? "text-black/55" : "text-white/28"}`}>
                          {isAvailable ? `${profile.colors.length} colors` : "Coming next"}
                        </span>
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div
              aria-labelledby={`siding-product-tab-${activeProfile.id}`}
              className="grid lg:grid-cols-[minmax(0,1.18fr)_minmax(20rem,.82fr)]"
              id="siding-product-panel"
              role="tabpanel"
            >
              <div className="border-b border-white/10 p-3 sm:p-5 lg:border-b-0 lg:border-r">
                <figure className="overflow-hidden border border-white/10 bg-[#0d0d0b]">
                  <div className="relative aspect-[3/2] overflow-hidden bg-black">
                    <Image
                      alt={activeColor.alt}
                      className="object-contain transition-opacity duration-300 motion-reduce:transition-none"
                      fill
                      key={activeColor.id}
                      loading="lazy"
                      sizes="(max-width: 1023px) calc(100vw - 4rem), 58vw"
                      src={activeColor.image}
                    />
                  </div>
                  <figcaption className="grid gap-3 border-t border-white/10 bg-[#10100e] p-4 sm:grid-cols-[1fr_auto] sm:items-end sm:p-5">
                    <div>
                      <p className="text-[8px] font-bold uppercase tracking-[.2em] text-[#d8bd79] sm:text-[9px]">Selected color</p>
                      <p className="mt-2 text-xl font-semibold leading-tight tracking-[-.025em] text-white sm:text-2xl">
                        {activeColor.name}
                      </p>
                    </div>
                    <div className="sm:text-right">
                      <p className="font-mono text-[8px] uppercase tracking-[.13em] text-white/36">{sidingProductSelector.productLine}</p>
                      <p className="mt-1 text-[10px] font-bold uppercase tracking-[.13em] text-white/62">{activeProfile.label}</p>
                    </div>
                  </figcaption>
                </figure>

                <div className="mt-4 flex items-start gap-3 border-l border-[#d8bd79]/60 pl-4">
                  <span aria-hidden="true" className="mt-[.45rem] h-1.5 w-1.5 shrink-0 rounded-full bg-[#d8bd79]" />
                  <p className="max-w-2xl text-xs leading-5 text-white/44 sm:text-sm sm:leading-6">
                    {sidingProductSelector.disclaimer}
                  </p>
                </div>
              </div>

              <div className="p-4 sm:p-5 lg:p-6">
                <div className="flex items-end justify-between gap-4">
                  <div>
                    <p className="text-[9px] font-bold uppercase tracking-[.24em] text-[#d8bd79] sm:text-[10px]">
                      Colors for {activeProfile.label}
                    </p>
                    <h4 className="mt-2 text-lg font-semibold tracking-[-.025em] sm:text-xl">Select a color</h4>
                  </div>
                  <p className="font-mono text-[9px] tracking-[.13em] text-white/32">
                    {String(activeProfile.colors.length).padStart(2, "0")}
                  </p>
                </div>

                <div aria-label={`${activeProfile.label} siding colors`} className="mt-4 grid grid-cols-2 gap-2" role="radiogroup">
                  {activeProfile.colors.map((color, index) => {
                    const isActive = color.id === activeColor.id;

                    return (
                      <button
                        aria-checked={isActive}
                        className={`group/color flex min-h-14 min-w-0 items-center gap-2 border px-2 py-2 text-left transition-[background-color,border-color,transform] duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ead7a3] motion-reduce:transform-none motion-reduce:transition-none sm:min-h-16 sm:gap-3 sm:px-2.5 ${
                          isActive
                            ? "border-[#d8bd79] bg-[#d8bd79]/10"
                            : "border-white/10 bg-white/[.025] hover:border-white/28 hover:bg-white/[.045]"
                        }`}
                        key={color.id}
                        onClick={() => selectColor(color, index)}
                        onKeyDown={(event) => handleColorKeyDown(event, index)}
                        ref={(element) => {
                          colorRefs.current[index] = element;
                        }}
                        role="radio"
                        tabIndex={isActive ? 0 : -1}
                        type="button"
                      >
                        <span className={`font-mono text-[8px] tracking-[.12em] ${isActive ? "text-[#d8bd79]" : "text-white/28"}`}>
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <span className="min-w-0 flex-1 text-[9px] font-semibold uppercase leading-4 tracking-[.055em] text-white/82 sm:text-[10px]">
                          {color.name}
                        </span>
                        <span
                          aria-hidden="true"
                          className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border text-[10px] ${
                            isActive ? "border-[#d8bd79] bg-[#d8bd79] text-[#17130a]" : "border-white/18 text-white/36"
                          }`}
                        >
                          {isActive ? "✓" : "›"}
                        </span>
                      </button>
                    );
                  })}
                </div>

                <div aria-live="polite" className="mt-4 border border-[#d8bd79]/28 bg-[#d8bd79]/[.055] p-4">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-[8px] font-bold uppercase tracking-[.2em] text-[#d8bd79]">Selected color</p>
                      <p className="mt-2 text-sm font-semibold leading-5 tracking-[-.015em] text-white">{activeColor.name}</p>
                    </div>
                    <p className="shrink-0 font-mono text-[8px] uppercase tracking-[.12em] text-white/35">
                      {activeColorIndex + 1} / {activeProfile.colors.length}
                    </p>
                  </div>
                  <p className="mt-3 border-t border-white/10 pt-3 text-xs leading-5 text-white/46">{activeProfile.description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 sm:mt-20">
          <div className="grid gap-3 border-t border-white/14 pt-6 sm:grid-cols-[1fr_auto] sm:items-end">
            <h3 className="max-w-2xl text-3xl leading-none tracking-[-.02em] [font-family:var(--font-bebas)] sm:text-4xl">
              {sidingProductSelector.allColorsTitle}
            </h3>
            <p className="max-w-lg text-xs leading-5 text-white/38 sm:text-right">{sidingProductSelector.sourceNote}</p>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-2.5 sm:grid-cols-3 sm:gap-4 md:grid-cols-4">
            {activeProfile.colors.map((color, index) => {
              const isActive = color.id === activeColor.id;

              return (
                <button
                  aria-label={`Select ${color.name} from ${activeProfile.label}`}
                  aria-pressed={isActive}
                  className={`group/swatch relative min-w-0 overflow-hidden border bg-[#121210] text-left transition-[border-color,transform,box-shadow] duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ead7a3] motion-reduce:transform-none motion-reduce:transition-none sm:hover:-translate-y-1 ${
                    isActive
                      ? "border-[#d8bd79] shadow-[0_12px_35px_rgba(216,189,121,.12)]"
                      : "border-white/10 hover:border-white/28"
                  }`}
                  key={`${activeProfile.id}-${color.id}`}
                  onClick={() => selectColor(color, index)}
                  type="button"
                >
                  <span className="relative block aspect-[16/9] overflow-hidden bg-black">
                    <Image
                      alt=""
                      className="object-cover object-top transition-transform duration-400 ease-out motion-reduce:transition-none sm:group-hover/swatch:scale-[1.035]"
                      fill
                      loading="lazy"
                      sizes="(max-width: 639px) 46vw, (max-width: 767px) 30vw, (max-width: 1023px) 23vw, 22vw"
                      src={color.image}
                    />
                    <span aria-hidden="true" className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-black/45 to-transparent" />
                    {isActive ? (
                      <span className="absolute right-2 top-2 flex h-6 w-6 items-center justify-center rounded-full bg-[#d8bd79] text-[10px] font-bold text-[#17130a] shadow-md">✓</span>
                    ) : null}
                  </span>
                  <span className="block min-h-[4rem] p-3">
                    <span className="block text-[9px] font-semibold uppercase leading-4 tracking-[.07em] text-white/82 sm:text-[10px]">{color.name}</span>
                    <span className="mt-1.5 block text-[8px] uppercase tracking-[.12em] text-white/28">{activeProfile.label}</span>
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="relative mt-14 overflow-hidden border border-[#d8bd79]/38 bg-[#121210] p-6 sm:mt-20 sm:p-8 lg:p-10">
          <div aria-hidden="true" className="absolute -right-24 -top-28 h-72 w-72 rounded-full bg-[#d8bd79]/[.055] blur-3xl" />
          <div className="relative grid gap-7 lg:grid-cols-[1fr_auto] lg:items-center lg:gap-12">
            <div>
              <p className="text-[9px] font-bold uppercase tracking-[.25em] text-[#d8bd79] sm:text-[10px]">Siding guidance</p>
              <h3 className="mt-3 max-w-2xl text-balance text-3xl leading-[.98] tracking-[-.02em] [font-family:var(--font-bebas)] sm:text-4xl lg:text-5xl">
                {sidingProductSelector.finalCta.title}
              </h3>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-white/58 sm:text-base">{sidingProductSelector.finalCta.description}</p>
            </div>

            <div className="grid gap-3 sm:flex sm:flex-wrap lg:justify-end">
              <a
                className="inline-flex min-h-13 items-center justify-center bg-[#d8bd79] px-6 text-center text-[9px] font-bold uppercase tracking-[.14em] text-[#17130a] transition-colors hover:bg-[#ead7a3] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ead7a3] motion-reduce:transition-none sm:text-[10px]"
                href={sidingProductSelector.finalCta.href}
              >
                {sidingProductSelector.finalCta.estimateLabel}
              </a>
              {business.phone.href && business.phone.value ? (
                <a
                  aria-label={`${sidingProductSelector.finalCta.callLabel} at ${business.phone.value}`}
                  className="inline-flex min-h-13 items-center justify-center gap-3 border border-white/24 px-6 text-center text-[9px] font-bold uppercase tracking-[.14em] text-white transition-[background-color,border-color] hover:border-white/55 hover:bg-white/[.045] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white motion-reduce:transition-none sm:text-[10px]"
                  href={business.phone.href}
                >
                  {sidingProductSelector.finalCta.callLabel}
                  <span aria-hidden="true" className="hidden h-3 w-px bg-white/22 sm:block" />
                  <span className="hidden tracking-[.05em] text-white/58 sm:block">{business.phone.value}</span>
                </a>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
