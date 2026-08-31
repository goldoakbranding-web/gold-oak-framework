import type { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/sections/Footer";
import { business } from "@/config/business";
import {
  whyChoosePage,
  type WhyChoosePageImage,
} from "@/config/whyChoosePage";

type ImagePositionStyle = CSSProperties & {
  "--why-image-position-mobile": string;
  "--why-image-position-desktop": string;
};

function imagePositionStyle(image: WhyChoosePageImage): ImagePositionStyle {
  return {
    "--why-image-position-mobile": image.mobileObjectPosition,
    "--why-image-position-desktop": image.objectPosition,
  };
}

function WhyHero() {
  const { hero } = whyChoosePage;

  return (
    <section
      className="relative isolate flex min-h-[700px] items-end overflow-hidden bg-[#090908] pb-12 pt-28 sm:min-h-[760px] sm:pb-16 sm:pt-32 lg:min-h-[820px] lg:pb-20"
      id="why-top"
      style={imagePositionStyle(hero.image)}
    >
      <Image
        alt={hero.image.alt}
        className="object-cover [object-position:var(--why-image-position-mobile)] lg:[object-position:var(--why-image-position-desktop)]"
        fill
        preload
        sizes="100vw"
        src={hero.image.src}
      />

      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,5,4,.28)_0%,rgba(5,5,4,.46)_34%,rgba(5,5,4,.94)_100%)] lg:bg-[linear-gradient(90deg,rgba(5,5,4,.94)_0%,rgba(5,5,4,.74)_47%,rgba(5,5,4,.2)_82%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-[.16] [background-image:linear-gradient(rgba(255,255,255,.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.04)_1px,transparent_1px)] [background-size:72px_72px]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#d8bd79]/65 to-transparent" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 sm:px-8">
        <div className="max-w-4xl">
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-2 text-[9px] font-bold uppercase tracking-[.18em] text-white/55 sm:text-[10px]"
          >
            <Link
              className="transition-colors hover:text-[#ead7a3] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ead7a3]"
              href="/"
            >
              Home
            </Link>
            <span aria-hidden="true" className="text-[#d8bd79]">
              /
            </span>
            <span aria-current="page" className="text-white/80">
              Why CM Roofing
            </span>
          </nav>

          <p className="mt-6 text-[10px] font-bold uppercase tracking-[.32em] text-[#ead7a3] sm:text-xs sm:tracking-[.42em]">
            {hero.eyebrow}
          </p>
          <h1 className="mt-4 max-w-3xl text-balance text-[3.7rem] leading-[.86] tracking-[-.018em] text-white [font-family:var(--font-bebas)] sm:text-7xl md:text-8xl lg:text-[7.25rem]">
            {hero.title}
          </h1>
          <p className="mt-6 max-w-2xl text-pretty text-[15px] leading-7 text-white/72 sm:text-lg sm:leading-8">
            {hero.description}
          </p>

          <div className="mt-8 grid gap-3 sm:flex sm:flex-wrap">
            <Link
              className="inline-flex min-h-14 items-center justify-between gap-6 bg-[#d8bd79] px-6 text-[10px] font-bold uppercase tracking-[.16em] text-[#17130a] transition-colors hover:bg-[#ead7a3] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ead7a3] sm:px-8"
              href="/#contact"
            >
              Request an Estimate
              <span aria-hidden="true" className="text-base font-normal">
                →
              </span>
            </Link>
            <Link
              className="inline-flex min-h-14 items-center justify-between gap-6 border border-white/30 bg-black/25 px-6 text-[10px] font-bold uppercase tracking-[.16em] text-white backdrop-blur-sm transition-colors hover:border-white/65 hover:bg-black/45 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:px-8"
              href="#owner"
            >
              Meet the Owner
              <span aria-hidden="true" className="text-base font-normal">
                ↓
              </span>
            </Link>
          </div>
        </div>

        <div className="mt-10 flex items-center gap-4 border-t border-white/15 pt-5 text-[9px] font-bold uppercase tracking-[.15em] text-white/54 sm:mt-12 sm:max-w-xl sm:text-[10px]">
          <span className="h-px w-10 shrink-0 bg-[#d8bd79]" />
          {business.category} · {business.city}, {business.state}
        </div>
      </div>
    </section>
  );
}

function WhyOverview() {
  const { overview } = whyChoosePage;

  return (
    <section className="bg-[#e9e5dc] py-16 text-[#171714] sm:py-24 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[minmax(0,.92fr)_minmax(360px,.68fr)] lg:gap-24">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[.28em] text-[#806c35] sm:text-xs">
            {overview.eyebrow}
          </p>
          <h2 className="mt-4 max-w-3xl text-balance text-4xl leading-[.96] tracking-[-.025em] [font-family:var(--font-bebas)] sm:text-5xl lg:text-6xl">
            {overview.title}
          </h2>
          <p className="mt-6 max-w-2xl text-pretty text-base leading-7 text-black/62 sm:text-lg sm:leading-8">
            {overview.description}
          </p>
        </div>

        <dl className="border-t border-black/20">
          {overview.facts.map((fact, index) => (
            <div
              className="grid grid-cols-[2.5rem_minmax(0,1fr)] gap-4 border-b border-black/20 py-5 sm:grid-cols-[3rem_.72fr_1.28fr] sm:items-center sm:gap-6 sm:py-6"
              key={fact.label}
            >
              <span className="font-mono text-[10px] font-semibold tracking-[.16em] text-[#806c35]">
                {String(index + 1).padStart(2, "0")}
              </span>
              <dt className="text-xs font-bold uppercase tracking-[.11em] text-black/48">
                {fact.label}
              </dt>
              <dd className="col-start-2 text-sm font-semibold leading-6 text-black/82 sm:col-start-auto">
                {fact.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

function OwnerSection() {
  const { owner } = whyChoosePage;

  return (
    <section
      className="relative scroll-mt-24 overflow-hidden bg-[#0c0c0b] py-16 sm:py-24 md:scroll-mt-36 lg:py-32"
      id="owner"
    >
      <div className="pointer-events-none absolute -left-52 top-24 h-[34rem] w-[34rem] rounded-full bg-[#d8bd79]/[.055] blur-[150px]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#d8bd79]/40 to-transparent" />

      <div className="relative mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[minmax(0,1.08fr)_minmax(360px,.82fr)] lg:items-start lg:gap-20 xl:gap-28">
        <figure
          className="relative aspect-[4/5] overflow-hidden rounded-[28px] border border-white/10 bg-[#171714] shadow-[0_30px_90px_rgba(0,0,0,.38)] sm:aspect-[16/11] lg:aspect-auto lg:min-h-[650px] lg:rounded-[34px]"
          style={imagePositionStyle(owner.image)}
        >
          <Image
            alt={owner.image.alt}
            className="object-cover [object-position:var(--why-image-position-mobile)] lg:[object-position:var(--why-image-position-desktop)]"
            fill
            loading="lazy"
            sizes="(max-width: 639px) calc(100vw - 2.5rem), (max-width: 1023px) calc(100vw - 4rem), 55vw"
            src={owner.image.src}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/72 via-transparent to-black/10" />
          <figcaption className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
            <p className="text-2xl font-semibold tracking-[-.035em] text-white sm:text-3xl">
              {owner.name}
            </p>
            <p className="mt-1 text-[9px] font-bold uppercase tracking-[.18em] text-[#ead7a3] sm:text-[10px]">
              {owner.role}
            </p>
          </figcaption>
        </figure>

        <div className="lg:py-8">
          <p className="text-[10px] font-bold uppercase tracking-[.3em] text-[#d8bd79] sm:text-xs">
            {owner.eyebrow}
          </p>
          <h2 className="mt-4 max-w-2xl text-balance text-4xl leading-[.96] tracking-[-.025em] text-white [font-family:var(--font-bebas)] sm:text-5xl lg:text-6xl">
            {owner.title}
          </h2>
          <div className="mt-6 max-w-2xl space-y-4 text-pretty text-sm leading-7 text-white/62 sm:text-base sm:leading-8">
            {owner.biography.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <blockquote className="relative mt-8 max-w-2xl border-y border-white/12 py-7 pl-7 sm:mt-10 sm:py-8 sm:pl-9">
            <span aria-hidden="true" className="absolute bottom-7 left-0 top-7 w-px bg-[#d8bd79] sm:bottom-8 sm:top-8" />
            <span aria-hidden="true" className="absolute -left-1 top-4 text-5xl leading-none text-[#d8bd79]/32 [font-family:var(--font-bebas)] sm:top-5 sm:text-6xl">
              &ldquo;
            </span>
            <p className="text-balance text-xl font-medium leading-8 tracking-[-.025em] text-white sm:text-2xl sm:leading-9">
              {owner.quote}
            </p>
            <footer className="mt-5 text-[9px] font-bold uppercase tracking-[.2em] text-[#ead7a3] sm:text-[10px]">
              {owner.quoteAttribution}
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
}

function PrinciplesSection() {
  const { principles } = whyChoosePage;

  return (
    <section className="bg-[#e9e5dc] py-16 text-[#171714] sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(300px,.58fr)] lg:items-end lg:gap-20">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[.28em] text-[#806c35] sm:text-xs">
              {principles.eyebrow}
            </p>
            <h2 className="mt-4 max-w-3xl text-balance text-4xl leading-[.96] tracking-[-.025em] [font-family:var(--font-bebas)] sm:text-5xl lg:text-6xl">
              {principles.title}
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-7 text-black/58 sm:text-base sm:leading-8">
            {principles.description}
          </p>
        </div>

        <ol className="mt-12 border-t border-black/20 lg:mt-16">
          {principles.items.map((item, index) => (
            <li
              className="grid gap-4 border-b border-black/20 py-7 sm:grid-cols-[3rem_.7fr_1.3fr] sm:items-start sm:gap-8 sm:py-8"
              key={item.id}
            >
              <span className="font-mono text-[10px] font-semibold tracking-[.16em] text-[#806c35]">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="text-xl font-semibold tracking-[-.03em] sm:text-2xl">
                {item.title}
              </h3>
              <p className="text-sm leading-7 text-black/58 sm:text-base">
                {item.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function LocalCommitment() {
  const { local } = whyChoosePage;

  return (
    <section className="relative overflow-hidden bg-[#11110f] py-16 sm:py-24 lg:py-28">
      <div className="pointer-events-none absolute right-[-2rem] top-1/2 -translate-y-1/2 text-[17rem] leading-none text-white/[.018] [font-family:var(--font-bebas)] sm:text-[24rem] lg:right-[4%]">
        WI
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-[8%] w-px bg-gradient-to-b from-transparent via-[#d8bd79]/20 to-transparent" />

      <div className="relative mx-auto grid max-w-7xl gap-9 px-5 sm:px-8 lg:grid-cols-[minmax(0,1fr)_minmax(320px,.64fr)] lg:items-end lg:gap-20">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[.3em] text-[#d8bd79] sm:text-xs">
            {local.eyebrow}
          </p>
          <h2 className="mt-4 max-w-3xl text-balance text-4xl leading-[.96] tracking-[-.025em] text-white [font-family:var(--font-bebas)] sm:text-5xl lg:text-6xl">
            {local.title}
          </h2>
          <p className="mt-6 max-w-2xl text-pretty text-base leading-7 text-white/62 sm:text-lg sm:leading-8">
            {local.description}
          </p>
        </div>

        <div className="border-t border-white/16">
          {business.serviceAreas ? (
            <div className="border-b border-white/16 py-4">
              <span className="block text-[9px] font-bold uppercase tracking-[.16em] text-white/38">
                General Service Reach
              </span>
              <span className="mt-1 block text-sm font-semibold text-white sm:text-base">
                Approximately {business.serviceAreas.approximateRadiusMiles} miles from {business.city}
              </span>
              <span className="mt-1 block text-xs leading-5 text-white/45">
                Property location and project scope determine availability.
              </span>
            </div>
          ) : null}

          {business.phone.href && business.phone.value ? (
            <a
              className="group flex min-h-16 items-center justify-between gap-5 border-b border-white/16 py-4 text-sm font-semibold text-white transition-colors hover:text-[#ead7a3] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d8bd79] sm:text-base"
              href={business.phone.href}
            >
              <span>
                <span className="block text-[9px] font-bold uppercase tracking-[.16em] text-white/38">
                  Call CM Roofing
                </span>
                <span className="mt-1 block">{business.phone.value}</span>
              </span>
              <span aria-hidden="true" className="text-[#d8bd79] transition-transform group-hover:translate-x-1">
                →
              </span>
            </a>
          ) : null}

          {business.email.href && business.email.value ? (
            <a
              className="group flex min-h-16 items-center justify-between gap-5 border-b border-white/16 py-4 text-sm font-semibold text-white transition-colors hover:text-[#ead7a3] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d8bd79] sm:text-base"
              href={business.email.href}
            >
              <span className="min-w-0">
                <span className="block text-[9px] font-bold uppercase tracking-[.16em] text-white/38">
                  Email CM Roofing
                </span>
                <span className="mt-1 block break-all">{business.email.value}</span>
              </span>
              <span aria-hidden="true" className="shrink-0 text-[#d8bd79] transition-transform group-hover:translate-x-1">
                →
              </span>
            </a>
          ) : null}
        </div>
      </div>
    </section>
  );
}

function ProjectProof() {
  const { projects } = whyChoosePage;

  return (
    <section
      className="relative scroll-mt-24 overflow-hidden bg-[#080807] py-16 sm:py-24 md:scroll-mt-36 lg:py-32"
      id="project-proof"
    >
      <div className="pointer-events-none absolute inset-0 opacity-[.18] [background-image:linear-gradient(rgba(255,255,255,.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.035)_1px,transparent_1px)] [background-size:72px_72px]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#d8bd79]/45 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(300px,.58fr)] lg:items-end lg:gap-20">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[.3em] text-[#d8bd79] sm:text-xs">
              {projects.eyebrow}
            </p>
            <h2 className="mt-4 max-w-3xl text-balance text-4xl leading-[.96] tracking-[-.025em] text-white [font-family:var(--font-bebas)] sm:text-5xl lg:text-6xl">
              {projects.title}
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-7 text-white/58 sm:text-base sm:leading-8">
            {projects.description}
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:mt-16 lg:grid-cols-12 lg:grid-rows-[280px_280px] lg:gap-5">
          {projects.items.map((project, index) => (
            <article
              className={`group relative overflow-hidden rounded-[26px] border border-white/10 bg-[#171714] shadow-[0_24px_70px_rgba(0,0,0,.32)] sm:rounded-[30px] ${
                index === 0
                  ? "aspect-[4/5] lg:col-span-5 lg:row-span-2 lg:aspect-auto"
                  : index === 1
                    ? "aspect-[4/5] lg:col-span-7 lg:aspect-auto"
                    : "aspect-[16/10] md:col-span-2 lg:col-span-7 lg:aspect-auto"
              }`}
              key={project.id}
              style={imagePositionStyle(project.image)}
            >
              <Image
                alt={project.image.alt}
                className="object-cover [object-position:var(--why-image-position-mobile)] transition-transform duration-700 ease-out group-hover:scale-[1.025] motion-reduce:transform-none motion-reduce:transition-none lg:[object-position:var(--why-image-position-desktop)]"
                fill
                loading="lazy"
                sizes={
                  index === 0
                    ? "(max-width: 767px) calc(100vw - 2.5rem), (max-width: 1023px) calc(50vw - 2.5rem), 42vw"
                    : index === 1
                      ? "(max-width: 767px) calc(100vw - 2.5rem), (max-width: 1023px) calc(50vw - 2.5rem), 58vw"
                      : "(max-width: 1023px) calc(100vw - 4rem), 58vw"
                }
                src={project.image.src}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7 lg:p-8">
                <div className="mb-3 flex items-center gap-3">
                  <span className="h-px w-8 bg-[#d8bd79]" />
                  <p className="text-[9px] font-bold uppercase tracking-[.18em] text-[#ead7a3]">
                    {project.label}
                  </p>
                </div>
                <h3 className="text-2xl font-semibold leading-tight tracking-[-.035em] text-white sm:text-3xl">
                  {project.title}
                </h3>
                <p className="mt-3 max-w-xl text-xs leading-5 text-white/64 sm:text-sm sm:leading-6">
                  {project.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        <Link
          className="mt-8 inline-flex min-h-11 items-center gap-3 border-b border-[#d8bd79]/55 pb-1 text-[10px] font-bold uppercase tracking-[.18em] text-[#ead7a3] transition-colors hover:border-[#ead7a3] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ead7a3]"
          href="/services/roofing#service-gallery"
          prefetch={false}
        >
          View More Roofing Work
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </section>
  );
}

function EstimateCallout() {
  return (
    <section className="bg-[#e9e5dc] px-5 py-16 text-[#171714] sm:px-8 sm:py-24 lg:py-28">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[28px] bg-[#11110f] px-6 py-12 text-white shadow-[0_30px_90px_rgba(0,0,0,.24)] sm:rounded-[34px] sm:px-10 sm:py-16 lg:grid lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end lg:gap-16 lg:px-16 lg:py-20">
        <div className="pointer-events-none absolute inset-0 opacity-25 [background-image:linear-gradient(rgba(255,255,255,.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.035)_1px,transparent_1px)] [background-size:64px_64px]" />
        <div className="pointer-events-none absolute -right-28 -top-28 h-72 w-72 rounded-full border border-[#d8bd79]/15" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#ead7a3]/75 to-transparent" />

        <div className="relative max-w-3xl">
          <p className="text-[10px] font-bold uppercase tracking-[.35em] text-[#d8bd79] sm:text-xs">
            Start the Conversation
          </p>
          <h2 className="mt-5 max-w-3xl text-balance text-4xl leading-[.96] tracking-[-.025em] text-white [font-family:var(--font-bebas)] sm:text-5xl lg:text-6xl">
            Ready to Talk Through Your Roofing Project?
          </h2>
          <p className="mt-5 max-w-xl text-sm leading-7 text-white/60 sm:text-base sm:leading-8">
            Share the property details and the roofing work you would like to discuss. CM Roofing will follow up about the project and next steps.
          </p>
        </div>

        <div className="relative mt-8 grid gap-3 sm:max-w-sm lg:mt-0 lg:w-[21rem]">
          <Link
            className="flex min-h-14 items-center justify-between bg-[#d8bd79] px-6 text-[10px] font-bold uppercase tracking-[.14em] text-[#17130a] transition-colors hover:bg-[#ead7a3] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ead7a3]"
            href="/#contact"
          >
            Request an Estimate
            <span aria-hidden="true" className="text-base font-normal">
              →
            </span>
          </Link>
          {business.phone.href && business.phone.value ? (
            <a
              className="flex min-h-14 items-center justify-between border border-white/25 bg-black/15 px-6 text-[10px] font-bold uppercase tracking-[.12em] text-white transition-colors hover:border-[#d8bd79]/65 hover:bg-[#d8bd79]/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d8bd79]"
              href={business.phone.href}
            >
              Call {business.phone.value}
              <span aria-hidden="true" className="text-base font-normal">
                →
              </span>
            </a>
          ) : null}
        </div>
      </div>
    </section>
  );
}

export default function WhyChoosePage() {
  return (
    <>
      <Navbar />
      <main>
        <WhyHero />
        <WhyOverview />
        <OwnerSection />
        <PrinciplesSection />
        <LocalCommitment />
        <ProjectProof />
        <EstimateCallout />
      </main>
      <Footer />
    </>
  );
}
