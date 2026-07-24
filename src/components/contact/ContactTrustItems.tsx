import type { ContactTrustItem } from "@/config/contact";

type ContactTrustItemsProps = {
  items: ContactTrustItem[];
};

export default function ContactTrustItems({ items }: ContactTrustItemsProps) {
  return (
    <ul className="mt-8 grid gap-3 border-t border-white/10 pt-6 sm:grid-cols-3 lg:grid-cols-1">
      {items.map((item) => (
        <li className="flex items-center gap-2.5 text-[10px] font-semibold uppercase tracking-[.14em] text-white/58" key={item.id}>
          <span aria-hidden="true" className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#d8bd79] shadow-[0_0_14px_rgba(216,189,121,.78)]" />
          {item.label}
        </li>
      ))}
    </ul>
  );
}
