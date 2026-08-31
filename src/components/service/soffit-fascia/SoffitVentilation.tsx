import { soffitFasciaProductContent } from "@/config/services/soffitFasciaProducts";

function AirflowDiagram() {
  return (
    <figure className="overflow-hidden border border-black/16 bg-[#151512] p-3 text-white sm:p-5">
      <svg
        aria-labelledby="soffit-airflow-title soffit-airflow-description"
        className="h-auto w-full"
        role="img"
        viewBox="0 0 720 430"
      >
        <title id="soffit-airflow-title">Soffit intake and roof exhaust airflow</title>
        <desc id="soffit-airflow-description">
          Outside air enters through vented soffit at the eaves, moves through the attic and rafter space, and exits through roof exhaust ventilation.
        </desc>
        <defs>
          <marker id="soffit-air-arrow" markerHeight="8" markerWidth="8" orient="auto" refX="6" refY="3">
            <path d="M0,0 L0,6 L7,3 z" fill="#d8bd79" />
          </marker>
          <linearGradient id="soffit-attic-fill" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0" stopColor="#d8bd79" stopOpacity=".13" />
            <stop offset="1" stopColor="#d8bd79" stopOpacity=".025" />
          </linearGradient>
        </defs>

        <path d="M104 244 360 76l256 168" fill="none" stroke="#f4f0e7" strokeLinecap="round" strokeWidth="6" />
        <path d="M132 244 360 103l228 141Z" fill="url(#soffit-attic-fill)" stroke="#ffffff" strokeOpacity=".16" />
        <path d="M152 245v132h416V245" fill="none" stroke="#ffffff" strokeOpacity=".28" strokeWidth="3" />
        <path d="M95 246h104M521 246h104" stroke="#d8bd79" strokeLinecap="round" strokeWidth="9" />

        <g fill="#d8bd79">
          {[112, 132, 152, 172].map((x) => <circle cx={x} cy="246" key={`left-${x}`} r="3" />)}
          {[548, 568, 588, 608].map((x) => <circle cx={x} cy="246" key={`right-${x}`} r="3" />)}
        </g>

        <g fill="none" markerEnd="url(#soffit-air-arrow)" stroke="#d8bd79" strokeLinecap="round" strokeWidth="4">
          <path d="M36 314c48 0 66-42 112-58" />
          <path d="M684 314c-48 0-66-42-112-58" />
          <path d="M167 231c45-64 102-83 151-94" />
          <path d="M553 231c-45-64-102-83-151-94" />
          <path d="M360 137V38" />
        </g>

        <g fill="#ffffff" fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace" fontSize="12" fontWeight="700" letterSpacing="1.5">
          <text x="18" y="350">OUTSIDE AIR</text>
          <text x="592" y="350">OUTSIDE AIR</text>
          <text textAnchor="middle" x="360" y="203">ATTIC / RAFTER AIRFLOW</text>
          <text textAnchor="middle" x="360" y="24">ROOF EXHAUST</text>
        </g>
        <g fill="#d8bd79" fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace" fontSize="11" fontWeight="700" letterSpacing="1.25">
          <text x="91" y="275">SOFFIT INTAKE</text>
          <text x="523" y="275">SOFFIT INTAKE</text>
        </g>
      </svg>
      <figcaption className="border-t border-white/10 px-2 pb-1 pt-4 text-xs leading-5 text-white/45 sm:px-3">
        Simplified airflow concept. The actual intake-and-exhaust plan depends on the home&apos;s roof and eave construction.
      </figcaption>
    </figure>
  );
}

export default function SoffitVentilation() {
  const { ventilation } = soffitFasciaProductContent;

  return (
    <section className="bg-[#e9e5dc] py-14 text-[#171714] sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-[.84fr_1.16fr] lg:gap-20">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[.28em] text-[#806c35] sm:text-xs">{ventilation.eyebrow}</p>
            <h2 className="mt-4 max-w-xl text-balance text-4xl leading-[.96] tracking-[-.025em] [font-family:var(--font-bebas)] sm:text-5xl lg:text-6xl">
              {ventilation.title}
            </h2>
            <p className="mt-5 max-w-xl text-sm leading-7 text-black/64 sm:text-base sm:leading-8">{ventilation.description}</p>

            <ul className="mt-8 grid grid-cols-2 border-l border-t border-black/18">
              {ventilation.benefits.map((benefit, index) => (
                <li className="min-w-0 border-b border-r border-black/18 p-4 text-xs leading-5 text-black/65 sm:p-5 sm:text-sm sm:leading-6" key={benefit}>
                  <span className="mb-3 block font-mono text-[9px] font-bold tracking-[.14em] text-[#806c35]">0{index + 1}</span>
                  {benefit}
                </li>
              ))}
            </ul>
          </div>

          <AirflowDiagram />
        </div>

        <p className="mt-8 max-w-4xl border-l border-[#806c35]/55 pl-5 text-xs leading-6 text-black/55 sm:text-sm">
          {ventilation.note}
        </p>
      </div>
    </section>
  );
}
