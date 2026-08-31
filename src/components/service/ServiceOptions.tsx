import type { ServiceConfig } from "@/config/services";

type ServiceOptionsProps = { service: ServiceConfig };

export default function ServiceOptions({ service }: ServiceOptionsProps) {
  const options = service.options;
  if (!options || options.items.length === 0) return null;

  if (service.theme.optionsLayout === "list") {
    return (
      <section className="scroll-mt-24 bg-[#f4f1ea] py-12 text-[#171714] sm:py-20 md:scroll-mt-36 lg:py-24" id="service-options">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-5 lg:grid-cols-[.76fr_1.24fr] lg:items-end lg:gap-16">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[.28em] text-[#806c35] sm:text-xs">{options.eyebrow}</p>
              <h2 className="mt-4 text-balance text-4xl leading-[.98] tracking-[-.025em] [font-family:var(--font-bebas)] sm:text-5xl lg:text-6xl">{options.title}</h2>
            </div>
            <p className="max-w-xl text-sm leading-7 text-black/62 sm:text-base">{options.description}</p>
          </div>
          <ol className="mt-8 border-t border-black/20 lg:mt-14">
            {options.items.map((item, index) => (
              <li className="grid gap-2 border-b border-black/20 py-4 sm:grid-cols-[3rem_.75fr_1.25fr] sm:gap-6 sm:py-7" key={item.id}>
                <span className="font-mono text-[10px] font-semibold tracking-[.16em] text-[#806c35]">{String(index + 1).padStart(2, "0")}</span>
                <h3 className="text-lg font-semibold tracking-[-.025em] sm:text-xl">{item.title}</h3>
                <div>
                  <p className="text-sm leading-6 text-black/62">{item.description}</p>
                  {item.detail ? <p className="mt-2 text-xs leading-5 text-black/45">{item.detail}</p> : null}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>
    );
  }

  const usesColumnLayout = service.theme.optionsLayout === "columns";
  const gridClass = usesColumnLayout
    ? options.items.length === 5
      ? "md:grid-cols-2 lg:grid-cols-6"
      : options.items.length === 4
      ? "md:grid-cols-2"
      : "md:grid-cols-2 lg:grid-cols-3"
    : "md:grid-cols-2 lg:grid-cols-3";

  return (
    <section className="scroll-mt-24 bg-[#f4f1ea] py-12 text-[#171714] sm:py-20 md:scroll-mt-36 lg:py-24" id="service-options">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-3xl">
          <p className="text-[10px] font-bold uppercase tracking-[.28em] text-[#806c35] sm:text-xs">{options.eyebrow}</p>
          <h2 className="mt-4 text-balance text-4xl leading-[.98] tracking-[-.025em] [font-family:var(--font-bebas)] sm:text-5xl lg:text-6xl">{options.title}</h2>
          <p className="mt-5 max-w-2xl text-sm leading-7 text-black/62 sm:text-base">{options.description}</p>
        </div>
        <ol className={`mt-8 grid border-l border-t border-black/20 lg:mt-14 ${gridClass}`}>
          {options.items.map((item, index) => {
            const isLastOddItem = options.items.length % 2 === 1 && index === options.items.length - 1;
            const usesFiveItemColumns = usesColumnLayout && options.items.length === 5;
            const lastItemSpan = isLastOddItem
              ? usesFiveItemColumns
                ? "md:col-span-2"
                : "md:col-span-2 lg:col-span-1"
              : "";
            const fiveItemColumnSpan = usesFiveItemColumns
              ? index < 3
                ? "lg:col-span-2"
                : "lg:col-span-3"
              : "";

            return (
              <li className={`grid grid-cols-[2rem_1fr] gap-3 border-b border-r border-black/20 p-4 sm:block sm:min-h-48 sm:p-7 lg:min-h-56 ${lastItemSpan} ${fiveItemColumnSpan}`} key={item.id}>
                <span className="font-mono text-[10px] font-semibold tracking-[.16em] text-[#806c35]">{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className="text-lg font-semibold tracking-[-.025em] sm:mt-8 sm:text-2xl">{item.title}</h3>
                  <p className="mt-2 max-w-md text-sm leading-6 text-black/60 sm:mt-3">{item.description}</p>
                  {item.detail ? <p className="mt-3 hidden text-xs leading-5 text-black/43 sm:block">{item.detail}</p> : null}
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
