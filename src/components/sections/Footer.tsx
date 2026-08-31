import Image from "next/image";
import Link from "next/link";
import { business } from "@/config/business";

const facebookPageUrl = business.socialLinks.find((link) => link.label === "Facebook")?.href;

const serviceLinks = [
  { label: "Roofing", href: "/services/roofing" },
  { label: "Siding", href: "/services/siding" },
  { label: "Gutters", href: "/services/gutters" },
  { label: "Soffit & Fascia", href: "/services/soffit-fascia" },
  { label: "Storm Damage", href: "/services/storm-damage" },
  { label: "Insurance Claim Assistance", href: "/services/insurance-claims" },
];

const homepageLinks = [
  { label: "Home", href: "/" },
  { label: "Why CM", href: "/why-choose-cm-roofing" },
  { label: "How It Works", href: "/#process" },
  { label: "Recent Work", href: "/#projects" },
  { label: "Contact", href: "/#contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#070706] px-5 pb-8 pt-14 sm:px-8 sm:pt-16" id="site-footer">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-2 gap-x-8 gap-y-12 border-b border-white/10 pb-12 lg:grid-cols-[1.15fr_.7fr_.8fr_1fr] lg:gap-10 lg:pb-14">
          <div className="col-span-2 max-w-sm lg:col-span-1">
            <Link className="inline-flex rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d8bd79]" href="/">
              <Image
                alt={`${business.name} logo`}
                className="h-14 w-auto"
                height={110}
                src="/images/branding/logo-white.png"
                width={110}
              />
            </Link>
            <p className="mt-5 text-sm leading-6 text-white/55">
              {business.serviceAreas?.summary ?? `Serving Central Wisconsin from ${business.city}, WI.`}
            </p>
            {facebookPageUrl ? (
              <a
                aria-label="Follow CM Roofing on Facebook"
                className="mt-6 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/12 text-[#d8bd79] transition-colors hover:border-[#d8bd79]/55 hover:bg-[#d8bd79]/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d8bd79]"
                href={facebookPageUrl}
                rel="noopener noreferrer"
                target="_blank"
              >
                <svg aria-hidden="true" className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                  <path d="M13.6 21v-8h2.7l.4-3.1h-3.1v-2c0-.9.25-1.5 1.55-1.5h1.65V3.63c-.29-.04-1.27-.13-2.42-.13-2.4 0-4.04 1.46-4.04 4.15V9.9H7.63V13h2.71v8h3.26Z" />
                </svg>
              </a>
            ) : null}
          </div>

          <nav aria-label="Homepage links">
            <p className="text-[10px] font-bold uppercase tracking-[.2em] text-white">Explore</p>
            <ul className="mt-5 space-y-3">
              {homepageLinks.map((link) => (
                <li key={link.label}>
                  <Link className="text-sm text-white/55 transition-colors hover:text-[#d8bd79]" href={link.href}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Service links">
            <p className="text-[10px] font-bold uppercase tracking-[.2em] text-white">Services</p>
            <ul className="mt-5 space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <Link className="text-sm text-white/55 transition-colors hover:text-[#d8bd79]" href={link.href}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="col-span-2 sm:col-span-1 lg:col-span-1">
            <p className="text-[10px] font-bold uppercase tracking-[.2em] text-white">Contact</p>
            <div className="mt-5 space-y-4 text-sm leading-6 text-white/55">
              {business.phone.href && business.phone.value && (
                <a className="block transition-colors hover:text-[#d8bd79]" href={business.phone.href}>
                  {business.phone.value}
                </a>
              )}
              {business.email.href && business.email.value && (
                <a className="block break-all transition-colors hover:text-[#d8bd79]" href={business.email.href}>
                  {business.email.value}
                </a>
              )}
              {business.address.value && <p>{business.address.value}</p>}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 pt-7 text-[10px] uppercase tracking-[.14em] text-white/34 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {business.name}</p>
          <p>Roofing built to last.</p>
        </div>
      </div>
    </footer>
  );
}
