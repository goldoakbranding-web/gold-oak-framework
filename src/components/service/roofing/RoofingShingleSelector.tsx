"use client";

import Image from "next/image";
import type { KeyboardEvent } from "react";
import { useRef, useState } from "react";
import { business } from "@/config/business";
import {
  roofingShingleSelector,
  type RoofingShingleColor,
  type RoofingShingleFeature,
} from "@/config/services/roofingShingles";

const allShingleColors = roofingShingleSelector.boards.flatMap((board, boardIndex) =>
  board.colors.map((color) => ({ board, boardIndex, color })),
);

function nextIndex(current: number, length: number, direction: number) {
  return (current + direction + length) % length;
}

function splitColorName(name: string) {
  if (name.startsWith("MAX DEF ")) {
    return { prefix: "MAX DEF", color: name.slice("MAX DEF ".length) };
  }

  return { prefix: null, color: name };
}

function FeatureIcon({ id }: { id: RoofingShingleFeature["id"] }) {
  if (id === "colors") {
    return (
      <svg aria-hidden="true" className="h-6 w-6" fill="none" viewBox="0 0 24 24">
        <path d="M4 5h7v6H4zM13 5h7v6h-7zM4 13h7v6H4zM13 13h7v6h-7z" stroke="currentColor" strokeWidth="1.4" />
      </svg>
    );
  }

  if (id === "boards") {
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

export default function RoofingShingleSelector() {
  const { boards } = roofingShingleSelector;
  const [activeBoardIndex, setActiveBoardIndex] = useState(0);
  const [activeColorId, setActiveColorId] = useState(boards[0].colors[0].id);
  const boardRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const colorRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const activeBoard = boards[activeBoardIndex];
  const activeColor =
    activeBoard.colors.find((color) => color.id === activeColorId) ?? activeBoard.colors[0];
  const activeColorIndex = activeBoard.colors.findIndex((color) => color.id === activeColor.id);

  function selectBoard(index: number, focus = false) {
    const board = boards[index];
    setActiveBoardIndex(index);
    setActiveColorId(board.colors[0].id);
    if (focus) boardRefs.current[index]?.focus();
  }

  function handleBoardKeyDown(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    let targetIndex: number | undefined;

    if (event.key === "ArrowRight" || event.key === "ArrowDown") {
      targetIndex = nextIndex(index, boards.length, 1);
    } else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
      targetIndex = nextIndex(index, boards.length, -1);
    } else if (event.key === "Home") {
      targetIndex = 0;
    } else if (event.key === "End") {
      targetIndex = boards.length - 1;
    }

    if (targetIndex === undefined) return;
    event.preventDefault();
    selectBoard(targetIndex, true);
  }

  function selectColor(color: RoofingShingleColor, index: number, focus = false) {
    setActiveColorId(color.id);
    if (focus) colorRefs.current[index]?.focus();
  }

  function handleColorKeyDown(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    const { colors } = activeBoard;
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

  function selectFromAllColors(boardIndex: number, color: RoofingShingleColor) {
    setActiveBoardIndex(boardIndex);
    setActiveColorId(color.id);
  }

  const activeName = splitColorName(activeColor.name);

  return (
    <section
      aria-labelledby="roofing-shingle-selector-title"
      className="scroll-mt-24 overflow-hidden border-y border-white/8 bg-[#0b0b0a] py-14 text-white sm:py-20 md:scroll-mt-36 lg:py-24"
      id="roofing-shingle-selector"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-6 border-t border-[#d8bd79]/35 pt-6 lg:grid-cols-[.76fr_1.24fr] lg:gap-20 lg:pt-8">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[.3em] text-[#d8bd79] sm:text-xs">
              {roofingShingleSelector.eyebrow}
            </p>
            <p className="mt-4 hidden text-[9px] font-bold uppercase tracking-[.22em] text-white/30 lg:block">
              03 boards / 12 colors
            </p>
          </div>

          <div>
            <h2
              className="max-w-3xl text-balance text-4xl leading-[.94] tracking-[-.025em] [font-family:var(--font-bebas)] sm:text-5xl lg:text-6xl"
              id="roofing-shingle-selector-title"
            >
              {roofingShingleSelector.title}
            </h2>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-white/62 sm:text-base sm:leading-8">
              {roofingShingleSelector.description}
            </p>
            <a
              className="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-3 bg-[#d8bd79] px-6 text-center text-[9px] font-bold uppercase tracking-[.15em] text-[#17130a] transition-colors hover:bg-[#ead7a3] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ead7a3] motion-reduce:transition-none sm:w-auto sm:text-[10px]"
              href={roofingShingleSelector.introAction.href}
            >
              {roofingShingleSelector.introAction.label}
              <span aria-hidden="true" className="text-sm leading-none">↓</span>
            </a>
          </div>
        </div>

        <ul className="mt-8 grid gap-px border-y border-white/12 bg-white/10 sm:grid-cols-2 lg:mt-10 lg:grid-cols-4">
          {roofingShingleSelector.features.map((feature) => (
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

        <div className="mt-12 sm:mt-16">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[.28em] text-[#d8bd79] sm:text-xs">
                {roofingShingleSelector.explorerEyebrow}
              </p>
              <h3 className="mt-3 text-3xl leading-none tracking-[-.02em] [font-family:var(--font-bebas)] sm:text-4xl">
                Compare each supplied texture.
              </h3>
            </div>
            <p className="font-mono text-[9px] uppercase tracking-[.14em] text-white/32">Select board / select color</p>
          </div>

          <div className="mt-6 overflow-hidden border border-white/12 bg-[#121210] shadow-[0_28px_80px_rgba(0,0,0,.24)]">
            <div className="border-b border-white/10 p-3 sm:p-5">
              <div
                aria-label="Shingle sample boards"
                className="grid grid-cols-3 gap-2 sm:gap-3"
                role="tablist"
              >
                {boards.map((board, index) => {
                  const isActive = index === activeBoardIndex;

                  return (
                    <button
                      aria-controls="roofing-shingle-panel"
                      aria-selected={isActive}
                      className={`group/board flex min-h-14 min-w-0 items-center gap-2 border p-2 text-left transition-[background-color,border-color,color,transform] duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ead7a3] motion-reduce:transform-none motion-reduce:transition-none sm:gap-3 sm:p-3 ${
                        isActive
                          ? "border-[#d8bd79] bg-[#d8bd79] text-[#17130a]"
                          : "border-white/12 bg-white/[.025] text-white/65 hover:-translate-y-0.5 hover:border-white/30 hover:text-white"
                      }`}
                      id={`roofing-shingle-tab-${board.id}`}
                      key={board.id}
                      onClick={() => selectBoard(index)}
                      onKeyDown={(event) => handleBoardKeyDown(event, index)}
                      ref={(element) => {
                        boardRefs.current[index] = element;
                      }}
                      role="tab"
                      tabIndex={isActive ? 0 : -1}
                      type="button"
                    >
                      <span className={`relative hidden h-10 w-12 shrink-0 overflow-hidden border sm:block sm:h-12 sm:w-16 ${isActive ? "border-black/20" : "border-white/12"}`}>
                        <Image
                          alt=""
                          className="object-cover object-top transition-transform duration-300 motion-reduce:transition-none group-hover/board:scale-[1.025]"
                          fill
                          loading="lazy"
                          sizes="64px"
                          src={board.image}
                        />
                      </span>
                      <span className="min-w-0 flex-1 text-center sm:text-left">
                        <span className="block truncate text-[9px] font-bold uppercase tracking-[.14em] sm:text-[10px]">
                          {board.label}
                        </span>
                        <span className={`mt-1 hidden text-[8px] uppercase tracking-[.1em] sm:block ${isActive ? "text-black/55" : "text-white/30"}`}>
                          {board.colors.length} colors
                        </span>
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div
              aria-labelledby={`roofing-shingle-tab-${activeBoard.id}`}
              className="grid lg:grid-cols-[minmax(0,1.18fr)_minmax(20rem,.82fr)]"
              id="roofing-shingle-panel"
              role="tabpanel"
            >
              <div className="border-b border-white/10 p-3 sm:p-5 lg:border-b-0 lg:border-r">
                <figure className="group overflow-hidden border border-white/10 bg-[#0d0d0b]">
                  <div className="relative aspect-[3/2] overflow-hidden">
                    <Image
                      alt={activeColor.alt}
                      className="object-cover transition-[filter,transform] duration-500 ease-out motion-reduce:transition-none sm:group-hover:scale-[1.01]"
                      fill
                      key={activeColor.id}
                      loading="lazy"
                      sizes="(max-width: 1023px) calc(100vw - 4rem), 58vw"
                      src={activeColor.image}
                    />
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,.02)_46%,rgba(0,0,0,.78)_100%)]"
                    />
                    <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-4 sm:p-6">
                      <div>
                        <div className="min-h-3">
                          {activeName.prefix ? (
                            <p className="text-[9px] font-bold uppercase tracking-[.24em] text-[#d8bd79] sm:text-[10px]">
                              {activeName.prefix}
                            </p>
                          ) : null}
                        </div>
                        <p className="mt-1.5 max-w-xl text-xl font-semibold leading-tight tracking-[-.025em] text-white sm:text-2xl">
                          {activeName.color}
                        </p>
                      </div>
                      <span className="shrink-0 font-mono text-[8px] uppercase tracking-[.13em] text-white/45 sm:text-[9px]">
                        {activeBoard.label}
                      </span>
                    </figcaption>
                  </div>
                </figure>

                <div className="mt-4 flex items-start gap-3 border-l border-[#d8bd79]/60 pl-4">
                  <span aria-hidden="true" className="mt-[.45rem] h-1.5 w-1.5 shrink-0 rounded-full bg-[#d8bd79]" />
                  <p className="max-w-2xl text-xs leading-5 text-white/44 sm:text-sm sm:leading-6">
                    {roofingShingleSelector.disclaimer}
                  </p>
                </div>
              </div>

              <div className="p-4 sm:p-5 lg:p-6">
                <div className="flex items-end justify-between gap-4">
                  <div>
                    <p className="text-[9px] font-bold uppercase tracking-[.24em] text-[#d8bd79] sm:text-[10px]">
                      Colors on {activeBoard.label}
                    </p>
                    <h4 className="mt-2 text-lg font-semibold tracking-[-.025em] sm:text-xl">Select a color</h4>
                  </div>
                  <p className="font-mono text-[9px] tracking-[.13em] text-white/32">
                    {String(activeBoard.colors.length).padStart(2, "0")}
                  </p>
                </div>

                <div
                  aria-label={`${activeBoard.label} shingle colors`}
                  className="mt-4 grid gap-2"
                  role="radiogroup"
                >
                  {activeBoard.colors.map((color, index) => {
                    const isActive = color.id === activeColor.id;
                    const colorName = splitColorName(color.name);

                    return (
                      <button
                        aria-checked={isActive}
                        className={`group/color flex min-h-14 min-w-0 items-center gap-3 border px-2.5 py-2 text-left transition-[background-color,border-color,transform] duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ead7a3] motion-reduce:transform-none motion-reduce:transition-none sm:min-h-16 sm:px-3 ${
                          isActive
                            ? "border-[#d8bd79] bg-[#d8bd79]/10"
                            : "border-white/10 bg-white/[.025] hover:translate-x-0.5 hover:border-white/28 hover:bg-white/[.045]"
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
                        <span className="relative h-10 w-10 shrink-0 overflow-hidden border border-white/12 bg-black sm:h-11 sm:w-11">
                          <Image
                            alt=""
                            className="object-cover transition-transform duration-300 motion-reduce:transition-none group-hover/color:scale-[1.04]"
                            fill
                            loading="lazy"
                            sizes="44px"
                            src={color.image}
                          />
                        </span>
                        <span className="min-w-0 flex-1">
                          {colorName.prefix ? (
                            <span className="block min-h-3 text-[8px] font-bold uppercase tracking-[.15em] text-[#d8bd79]">
                              {colorName.prefix}
                            </span>
                          ) : (
                            <span aria-hidden="true" className="block min-h-3" />
                          )}
                          <span className="mt-1 block text-[10px] font-semibold uppercase leading-4 tracking-[.08em] text-white/82 sm:text-xs">
                            {colorName.color}
                          </span>
                        </span>
                        <span
                          aria-hidden="true"
                          className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border text-[10px] ${
                            isActive
                              ? "border-[#d8bd79] bg-[#d8bd79] text-[#17130a]"
                              : "border-white/18 text-white/36"
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
                      {activeColorIndex + 1} / {activeBoard.colors.length}
                    </p>
                  </div>
                  <p className="mt-3 border-t border-white/10 pt-3 text-xs leading-5 text-white/46">
                    {activeBoard.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 sm:mt-20">
          <div className="grid gap-3 border-t border-white/14 pt-6 sm:grid-cols-[1fr_auto] sm:items-end">
            <h3 className="max-w-2xl text-3xl leading-none tracking-[-.02em] [font-family:var(--font-bebas)] sm:text-4xl">
              {roofingShingleSelector.allColorsTitle}
            </h3>
            <p className="max-w-lg text-xs leading-5 text-white/38 sm:text-right">
              {roofingShingleSelector.sourceNote}
            </p>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-2.5 sm:grid-cols-3 sm:gap-4 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
            {allShingleColors.map(({ board, boardIndex, color }) => {
              const isActive = boardIndex === activeBoardIndex && color.id === activeColor.id;
              const colorName = splitColorName(color.name);

              return (
                <button
                  aria-label={`Select ${color.name} from ${board.label}`}
                  aria-pressed={isActive}
                  className={`group/swatch relative min-w-0 overflow-hidden border bg-[#121210] text-left transition-[border-color,transform,box-shadow] duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ead7a3] motion-reduce:transform-none motion-reduce:transition-none sm:hover:-translate-y-1 ${
                    isActive
                      ? "border-[#d8bd79] shadow-[0_12px_35px_rgba(216,189,121,.12)]"
                      : "border-white/10 hover:border-white/28"
                  }`}
                  key={`${board.id}-${color.id}`}
                  onClick={() => selectFromAllColors(boardIndex, color)}
                  type="button"
                >
                  <span className="relative block aspect-[3/2] overflow-hidden bg-black">
                    <Image
                      alt=""
                      className="object-cover transition-transform duration-400 ease-out motion-reduce:transition-none sm:group-hover/swatch:scale-[1.035]"
                      fill
                      loading="lazy"
                      sizes="(max-width: 639px) 46vw, (max-width: 767px) 30vw, (max-width: 1023px) 23vw, (max-width: 1279px) 18vw, 15vw"
                      src={color.image}
                    />
                    <span aria-hidden="true" className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-black/45 to-transparent" />
                    {isActive ? (
                      <span className="absolute right-2 top-2 flex h-6 w-6 items-center justify-center rounded-full bg-[#d8bd79] text-[10px] font-bold text-[#17130a] shadow-md">
                        ✓
                      </span>
                    ) : null}
                  </span>
                  <span className="block min-h-[4.4rem] p-3">
                    {colorName.prefix ? (
                      <span className="block min-h-3 text-[8px] font-bold uppercase tracking-[.16em] text-[#d8bd79]">
                        {colorName.prefix}
                      </span>
                    ) : (
                      <span aria-hidden="true" className="block min-h-3" />
                    )}
                    <span className="mt-1.5 block text-[9px] font-semibold uppercase leading-4 tracking-[.08em] text-white/82 sm:text-[10px]">
                      {colorName.color}
                    </span>
                    <span className="mt-1 block text-[8px] uppercase tracking-[.12em] text-white/28">{board.label}</span>
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="relative mt-14 overflow-hidden border border-[#d8bd79]/38 bg-[#121210] p-6 sm:mt-20 sm:p-8 lg:p-10">
          <div
            aria-hidden="true"
            className="absolute -right-24 -top-28 h-72 w-72 rounded-full bg-[#d8bd79]/[.055] blur-3xl"
          />
          <div className="relative grid gap-7 lg:grid-cols-[1fr_auto] lg:items-center lg:gap-12">
            <div>
              <p className="text-[9px] font-bold uppercase tracking-[.25em] text-[#d8bd79] sm:text-[10px]">Color guidance</p>
              <h3 className="mt-3 max-w-2xl text-balance text-3xl leading-[.98] tracking-[-.02em] [font-family:var(--font-bebas)] sm:text-4xl lg:text-5xl">
                {roofingShingleSelector.finalCta.title}
              </h3>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-white/58 sm:text-base">
                {roofingShingleSelector.finalCta.description}
              </p>
            </div>

            <div className="grid gap-3 sm:flex sm:flex-wrap lg:justify-end">
              <a
                className="inline-flex min-h-13 items-center justify-center bg-[#d8bd79] px-6 text-center text-[9px] font-bold uppercase tracking-[.14em] text-[#17130a] transition-colors hover:bg-[#ead7a3] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ead7a3] motion-reduce:transition-none sm:text-[10px]"
                href="#service-estimate"
              >
                {roofingShingleSelector.finalCta.estimateLabel}
              </a>
              {business.phone.href && business.phone.value ? (
                <a
                  aria-label={`${roofingShingleSelector.finalCta.callLabel} at ${business.phone.value}`}
                  className="inline-flex min-h-13 items-center justify-center gap-3 border border-white/24 px-6 text-center text-[9px] font-bold uppercase tracking-[.14em] text-white transition-[background-color,border-color] hover:border-white/55 hover:bg-white/[.045] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white motion-reduce:transition-none sm:text-[10px]"
                  href={business.phone.href}
                >
                  {roofingShingleSelector.finalCta.callLabel}
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
