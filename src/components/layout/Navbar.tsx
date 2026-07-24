"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { business } from "@/config/business";
import { serviceConfigs } from "@/config/services";

export default function Navbar() {
  const [desktopServicesOpen, setDesktopServicesOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const desktopServicesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const closeOnOutsideClick = (event: PointerEvent) => {
      if (desktopServicesRef.current?.contains(event.target as Node)) return;
      setDesktopServicesOpen(false);
    };

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setDesktopServicesOpen(false);
      setMobileMenuOpen(false);
      setMobileServicesOpen(false);
    };

    window.addEventListener("pointerdown", closeOnOutsideClick);
    window.addEventListener("keydown", closeOnEscape);

    return () => {
      window.removeEventListener("pointerdown", closeOnOutsideClick);
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, []);

  function closeMobileMenu() {
    setMobileMenuOpen(false);
    setMobileServicesOpen(false);
  }

  return (
    <header className="fixed top-0 left-0 z-50 w-full max-md:px-3">
      <div className="mx-auto mt-6 flex max-w-7xl items-center justify-between rounded-full border border-white/10 bg-black/50 px-10 py-4 shadow-2xl backdrop-blur-xl max-md:mt-3 max-md:min-h-16 max-md:rounded-2xl max-md:px-3 max-md:py-2">

        {/* Logo */}
        <Link href="/" className="transition hover:scale-105">
          <Image
            src="/images/branding/logo-white.png"
            alt={`${business.name} logo`}
            width={110}
            height={110}
            priority
            className="h-16 w-auto max-md:h-11"
          />
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden items-center gap-12 md:flex">
          <Link
            href="/"
            className="text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:text-[#C8A24D]"
          >
            Home
          </Link>

          <div
            className="relative"
            onBlur={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget)) setDesktopServicesOpen(false);
            }}
            onFocus={() => setDesktopServicesOpen(true)}
            onMouseEnter={() => setDesktopServicesOpen(true)}
            onMouseLeave={() => setDesktopServicesOpen(false)}
            ref={desktopServicesRef}
          >
            <button
              aria-controls="desktop-services-menu"
              aria-expanded={desktopServicesOpen}
              aria-haspopup="menu"
              className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:text-[#C8A24D] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C8A24D]"
              onClick={() => setDesktopServicesOpen((isOpen) => !isOpen)}
              type="button"
            >
              Services
              <span aria-hidden="true" className={`text-xs transition-transform ${desktopServicesOpen ? "rotate-180" : ""}`}>⌄</span>
            </button>

            {desktopServicesOpen && (
              <div className="absolute left-1/2 top-full z-50 w-64 -translate-x-1/2 pt-3">
                <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#10100f]/95 p-2 shadow-2xl backdrop-blur-xl" id="desktop-services-menu" role="menu">
                  {serviceConfigs.map((service) => (
                    <Link
                      className="flex min-h-11 items-center rounded-xl px-4 text-sm font-semibold text-white/80 transition hover:bg-white/10 hover:text-[#C8A24D] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C8A24D]"
                      href={`/services/${service.slug}`}
                      key={service.slug}
                      onClick={() => setDesktopServicesOpen(false)}
                      role="menuitem"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <Link
            href="#projects"
            className="text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:text-[#C8A24D]"
          >
            Projects
          </Link>

          <Link
            href="#about"
            className="text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:text-[#C8A24D]"
          >
            About
          </Link>

          <Link
            href="#contact"
            className="text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:text-[#C8A24D]"
          >
            Contact
          </Link>
        </nav>

        <button
          aria-controls="mobile-navigation"
          aria-expanded={mobileMenuOpen}
          aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          className="hidden h-11 w-11 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-white transition hover:border-[#C8A24D] hover:text-[#C8A24D] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C8A24D] max-md:inline-flex"
          onClick={() => setMobileMenuOpen((isOpen) => !isOpen)}
          type="button"
        >
          <span aria-hidden="true" className="relative block h-4 w-5">
            <span className={`absolute left-0 top-0 h-px w-5 bg-current transition-transform ${mobileMenuOpen ? "translate-y-[7px] rotate-45" : ""}`} />
            <span className={`absolute left-0 top-[7px] h-px w-5 bg-current transition-opacity ${mobileMenuOpen ? "opacity-0" : ""}`} />
            <span className={`absolute bottom-0 left-0 h-px w-5 bg-current transition-transform ${mobileMenuOpen ? "-translate-y-[7px] -rotate-45" : ""}`} />
          </span>
        </button>

        {/* CTA */}
        <Link href="#contact" className="rounded-full bg-[#C8A24D] px-8 py-3 text-sm font-bold uppercase tracking-wider text-black transition duration-300 hover:scale-105 hover:bg-[#D8B35B] max-md:inline-flex max-md:min-h-11 max-md:items-center max-md:px-4 max-md:py-2 max-md:text-[10px] max-md:tracking-[.08em] max-md:whitespace-nowrap">
          Free Estimate
        </Link>

      </div>

      {mobileMenuOpen && (
        <nav aria-label="Mobile navigation" className="absolute left-3 right-3 top-[calc(100%+0.5rem)] overflow-hidden rounded-2xl border border-white/10 bg-[#10100f]/95 p-3 shadow-2xl backdrop-blur-xl md:hidden" id="mobile-navigation">
          <div className="space-y-1">
            <Link className="flex min-h-11 items-center rounded-xl px-4 text-sm font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-white/10 hover:text-[#C8A24D] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C8A24D]" href="/" onClick={closeMobileMenu}>
              Home
            </Link>

            <div>
              <button
                aria-controls="mobile-services-menu"
                aria-expanded={mobileServicesOpen}
                className="flex min-h-11 w-full items-center justify-between rounded-xl px-4 text-left text-sm font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-white/10 hover:text-[#C8A24D] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C8A24D]"
                onClick={() => setMobileServicesOpen((isOpen) => !isOpen)}
                type="button"
              >
                Services
                <span aria-hidden="true" className={`text-base transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`}>⌄</span>
              </button>

              {mobileServicesOpen && (
                <div className="mt-1 space-y-1 border-l border-white/10 pl-3" id="mobile-services-menu">
                  {serviceConfigs.map((service) => (
                    <Link
                      className="flex min-h-11 items-center rounded-xl px-4 text-sm font-medium text-white/75 transition hover:bg-white/10 hover:text-[#C8A24D] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C8A24D]"
                      href={`/services/${service.slug}`}
                      key={service.slug}
                      onClick={closeMobileMenu}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link className="flex min-h-11 items-center rounded-xl px-4 text-sm font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-white/10 hover:text-[#C8A24D] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C8A24D]" href="#projects" onClick={closeMobileMenu}>
              Projects
            </Link>
            <Link className="flex min-h-11 items-center rounded-xl px-4 text-sm font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-white/10 hover:text-[#C8A24D] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C8A24D]" href="#about" onClick={closeMobileMenu}>
              About
            </Link>
            <Link className="flex min-h-11 items-center rounded-xl px-4 text-sm font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-white/10 hover:text-[#C8A24D] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C8A24D]" href="#contact" onClick={closeMobileMenu}>
              Contact
            </Link>
            <Link className="mt-2 flex min-h-11 items-center justify-center rounded-xl bg-[#C8A24D] px-4 text-sm font-bold uppercase tracking-[0.12em] text-black transition hover:bg-[#D8B35B] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C8A24D]" href="#contact" onClick={closeMobileMenu}>
              Free Estimate
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
