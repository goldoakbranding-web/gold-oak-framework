"use client";

import Image from "next/image";
import Link from "next/link";
import { business } from "@/config/business";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full">
      <div className="mx-auto mt-6 flex max-w-7xl items-center justify-between rounded-full border border-white/10 bg-black/50 px-10 py-4 shadow-2xl backdrop-blur-xl">

        {/* Logo */}
        <Link href="/" className="transition hover:scale-105">
          <Image
            src="/images/branding/logo-white.png"
            alt={`${business.name} logo`}
            width={110}
            height={110}
            priority
            className="h-16 w-auto"
          />
        </Link>

        {/* Navigation */}
        <nav className="hidden items-center gap-12 md:flex">
          <Link
            href="/"
            className="text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:text-[#C8A24D]"
          >
            Home
          </Link>

          <Link
            href="#services"
            className="text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:text-[#C8A24D]"
          >
            Services
          </Link>

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

        {/* CTA */}
        <Link href="#contact" className="rounded-full bg-[#C8A24D] px-8 py-3 text-sm font-bold uppercase tracking-wider text-black transition duration-300 hover:scale-105 hover:bg-[#D8B35B]">
          Free Estimate
        </Link>

      </div>
    </header>
  );
}
