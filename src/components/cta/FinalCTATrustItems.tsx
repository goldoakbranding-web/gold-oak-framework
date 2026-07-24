import type { FinalCtaTrustItem } from "@/config/finalCTA";

type FinalCTATrustItemsProps = {
  items: FinalCtaTrustItem[];
};

export default function FinalCTATrustItems({ items }: FinalCTATrustItemsProps) {
  return (
    <div className="mt-9 flex flex-wrap justify-center gap-x-5 gap-y-3 sm:mt-10 lg:justify-start">
      {items.map((item) => (
        <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[.16em] text-white/78" key={item.id}>
          <span aria-hidden="true" className="flex h-4 w-4 items-center justify-center rounded-full border border-[#d8bd79]/40 bg-[#d8bd79]/10 text-[#ead7a3]">
            <svg className="h-2.5 w-2.5 fill-none stroke-current stroke-[2]" viewBox="0 0 12 12">
              <path d="m2.25 6.1 2.2 2.15 5.3-4.8" />
            </svg>
          </span>
          <span>{item.label}</span>
        </div>
      ))}
    </div>
  );
}
