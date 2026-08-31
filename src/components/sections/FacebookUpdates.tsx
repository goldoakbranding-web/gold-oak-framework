import { business } from "@/config/business";

export default function FacebookUpdates() {
  const facebookPageUrl = business.socialLinks.find((link) => link.label === "Facebook")?.href;

  if (!facebookPageUrl) return null;

  return (
    <section className="relative overflow-hidden border-y border-white/8 bg-[#0b0b0a] py-16 sm:py-24 lg:py-32" id="facebook">
      <div className="pointer-events-none absolute inset-0 opacity-25 [background-image:linear-gradient(rgba(255,255,255,.028)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.028)_1px,transparent_1px)] [background-size:72px_72px]" />
      <div className="pointer-events-none absolute -left-40 top-1/3 h-96 w-96 rounded-full bg-[#d8bd79]/[.055] blur-[140px]" />

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-9 px-5 sm:gap-12 sm:px-8 lg:grid-cols-[minmax(0,.74fr)_minmax(430px,1fr)] lg:gap-16 xl:gap-24">
        <div className="max-w-xl">
          <p className="text-[10px] font-semibold uppercase tracking-[.45em] text-[#d8bd79] sm:text-xs sm:tracking-[.58em]">
            On Facebook
          </p>
          <h2 className="mt-5 text-balance text-4xl font-semibold tracking-[-.05em] text-white sm:mt-7 sm:text-5xl lg:text-6xl">
            See Our Latest Updates
          </h2>
          <p className="mt-6 max-w-lg text-pretty text-base leading-7 text-white/62 sm:text-lg sm:leading-8">
            Follow recent CM Roofing projects, completed work, job-site updates, and company news on our official Facebook page.
          </p>

          <a
            className="mt-10 hidden min-h-12 items-center justify-center rounded-full bg-[#d8b34f] px-7 text-[11px] font-bold uppercase tracking-[0.14em] text-black transition duration-300 hover:-translate-y-0.5 hover:bg-[#e1bf68] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ead7a3] motion-reduce:transform-none motion-reduce:transition-none sm:inline-flex"
            href={facebookPageUrl}
            rel="noopener noreferrer"
            target="_blank"
          >
            Follow CM Roofing on Facebook <span aria-hidden="true" className="ml-3">↗</span>
          </a>
        </div>

        <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[#11110f] p-6 shadow-[0_30px_90px_rgba(0,0,0,.4)] sm:rounded-[32px] sm:p-10 lg:p-12">
          <div className="pointer-events-none absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.035)_1px,transparent_1px)] [background-size:56px_56px]" />
          <div className="pointer-events-none absolute -right-16 -top-16 h-52 w-52 rounded-full bg-[#d8bd79]/[.08] blur-[70px]" />
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#ead7a3]/65 to-transparent" />

          <div className="relative">
            <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-5">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#d8bd79]/25 bg-[#d8bd79]/10 text-[#d8bd79]">
                  <svg aria-hidden="true" className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                    <path d="M13.6 21v-8h2.7l.4-3.1h-3.1v-2c0-.9.25-1.5 1.55-1.5h1.65V3.63c-.29-.04-1.27-.13-2.42-.13-2.4 0-4.04 1.46-4.04 4.15V9.9H7.63V13h2.71v8h3.26Z" />
                  </svg>
                </span>
                <div>
                  <p className="text-sm font-semibold text-white">CM Roofing</p>
                  <p className="mt-0.5 text-[9px] uppercase tracking-[.14em] text-white/38">Official Facebook page</p>
                </div>
              </div>
              <span className="h-2 w-2 rounded-full bg-[#d8bd79]" aria-label="Official page link available" />
            </div>

            <p className="mt-8 text-[10px] font-semibold uppercase tracking-[.2em] text-[#d8bd79]">Current company activity</p>
            <h3 className="mt-4 max-w-lg text-2xl font-semibold leading-tight tracking-[-.04em] text-white sm:text-4xl">
              Real work. Current updates.
            </h3>
            <p className="mt-5 max-w-xl text-sm leading-7 text-white/58 sm:text-base">
              Follow CM Roofing for recent projects, company updates, and completed work directly from the official source.
            </p>

            <div className="mt-7 grid grid-cols-3 gap-2 border-y border-white/10 py-5 text-[8px] font-semibold uppercase leading-4 tracking-[.1em] text-white/45 sm:mt-8 sm:gap-5 sm:py-6 sm:text-[10px] sm:tracking-[.14em]">
              <span>Project progress</span>
              <span>Completed work</span>
              <span>Company news</span>
            </div>

            <a
              className="mt-7 inline-flex min-h-12 w-full items-center justify-between rounded-full border border-[#d8bd79]/35 bg-[#d8bd79]/10 px-6 text-[10px] font-bold uppercase tracking-[.14em] text-[#ead7a3] transition-colors hover:border-[#ead7a3] hover:bg-[#d8bd79]/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d8bd79] sm:hidden"
              href={facebookPageUrl}
              rel="noopener noreferrer"
              target="_blank"
            >
              View latest updates <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
