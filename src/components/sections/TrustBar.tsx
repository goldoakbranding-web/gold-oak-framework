export default function TrustBar() {
  const items = [
    "Free Estimates",
    "Fully Insured",
    "Premium Materials",
    "Serving Northeast Wisconsin",
  ];

  return (
    <section className="relative overflow-hidden border-y border-white/10 bg-[#111111]">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(216,189,121,.1),transparent_55%),linear-gradient(90deg,transparent,rgba(255,255,255,.028),transparent)]" />
      <div aria-hidden="true" className="atmosphere-grain pointer-events-none absolute inset-0" />
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-[16%] top-0 h-px bg-gradient-to-r from-transparent via-[#ead7a3]/45 to-transparent" />
      <div className="relative z-10 mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-8 px-6 py-5">
        {items.map((item) => (
          <div
            key={item}
            className="text-center text-sm font-semibold uppercase tracking-[0.18em] text-white/90"
          >
            ✓ {item}
          </div>
        ))}
      </div>
    </section>
  );
}
