export default function Home() {
  return (
    <main className="min-h-screen bg-[#0B0B0B] text-white">
      {/* Hero Section */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden">

        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop')",
          }}
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/70" />

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-6xl px-6 text-center">

          <p className="mb-6 text-sm font-semibold uppercase tracking-[0.35em] text-gray-300">
            CM Roofing
          </p>

          <h1 className="mb-8 text-6xl font-extrabold uppercase leading-none md:text-8xl">
            Roofing
            <br />
            Built To Last
          </h1>

          <p className="mx-auto mb-10 max-w-2xl text-lg text-gray-300 md:text-xl">
            Protecting Wisconsin homes with premium roofing systems,
            exceptional craftsmanship, and service you can trust.
          </p>

          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <button className="rounded-full bg-white px-8 py-4 font-semibold text-black transition duration-300 hover:scale-105 hover:bg-gray-200">
              Get Free Estimate
            </button>

            <button className="rounded-full border border-white px-8 py-4 font-semibold text-white transition duration-300 hover:bg-white hover:text-black">
              View Our Work
            </button>
          </div>

        </div>

      </section>
    </main>
  );
}