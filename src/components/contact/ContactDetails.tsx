"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import type { BusinessConfig, BusinessContactValue } from "@/config/business";
import type { ContactConfig } from "@/config/contact";
import ContactTrustItems from "./ContactTrustItems";

type ContactDetailsProps = {
  business: BusinessConfig;
  config: ContactConfig;
};

function BusinessDetail({ contact }: { contact: BusinessContactValue }) {
  const content = contact.value ?? contact.placeholder;

  return (
    <div>
      <dt className="text-[9px] font-semibold uppercase tracking-[.2em] text-[#d8bd79]">{contact.label}</dt>
      <dd className="mt-2 text-sm leading-6 text-white/72">
        {contact.href && contact.value ? (
          <a className="transition hover:text-[#ead7a3] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ead7a3]" href={contact.href}>
            {content}
          </a>
        ) : (
          <span className="text-white/48">{content}</span>
        )}
      </dd>
    </div>
  );
}

export default function ContactDetails({ business, config }: ContactDetailsProps) {
  const detailsRef = useRef<HTMLDivElement>(null);
  const inView = useInView(detailsRef, { amount: 0.2, margin: "0px 0px -8%", once: true });
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      animate={inView || shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: shouldReduceMotion ? 0 : 26 }}
      ref={detailsRef}
      transition={{ duration: shouldReduceMotion ? 0 : 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <p className="text-[10px] font-semibold uppercase tracking-[.48em] text-[#d8bd79] sm:text-xs sm:tracking-[.62em]">{config.eyebrow}</p>
      <h2 className="mt-5 max-w-3xl text-balance text-4xl font-semibold tracking-[-.05em] text-white sm:mt-7 sm:text-5xl md:text-6xl">{config.headline}</h2>
      <p className="mt-6 max-w-2xl text-pretty text-base leading-7 text-white/62 sm:mt-8 sm:text-lg sm:leading-8">{config.description}</p>

      {config.image && (
        <figure className="group relative mt-10 aspect-[16/8] overflow-hidden rounded-[24px] border border-white/10 bg-black shadow-[0_24px_66px_rgba(0,0,0,.28)] sm:rounded-[28px] lg:mt-12">
          <Image
            alt={config.image.alt}
            className="object-cover brightness-[.78] transition-transform duration-[1400ms] ease-out group-hover:scale-[1.035] motion-reduce:transform-none motion-reduce:transition-none"
            fill
            sizes="(max-width: 1023px) calc(100vw - 2.5rem), 48vw"
            src={config.image.src}
            style={{ objectPosition: config.image.position }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a09]/74 via-transparent to-black/10" />
          <figcaption className="absolute bottom-4 left-5 text-[9px] font-semibold uppercase tracking-[.16em] text-white/70 sm:bottom-5 sm:left-6">
            Your project, thoughtfully planned
          </figcaption>
        </figure>
      )}

      <dl className="mt-10 grid gap-x-8 gap-y-7 border-t border-white/10 pt-8 sm:grid-cols-2 lg:mt-12">
        <BusinessDetail contact={business.phone} />
        <BusinessDetail contact={business.email} />
        <BusinessDetail contact={business.address} />
        {business.hours?.length ? (
          <div>
            <dt className="text-[9px] font-semibold uppercase tracking-[.2em] text-[#d8bd79]">Hours</dt>
            <dd className="mt-2 text-sm leading-6 text-white/48">{business.hours.join(" · ")}</dd>
          </div>
        ) : null}
        {business.serviceAreas ? (
          <div className="sm:col-span-2">
            <dt className="text-[9px] font-semibold uppercase tracking-[.2em] text-[#d8bd79]">{business.serviceAreas.label}</dt>
            <dd className="mt-2 text-sm leading-6 text-white/48">{business.serviceAreas.summary}</dd>
          </div>
        ) : null}
      </dl>

      <ContactTrustItems items={config.trustItems} />
    </motion.div>
  );
}
