export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-black/40 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-8">

        {/* Logo */}
        <h1 className="text-2xl font-bold tracking-wide text-white">
          CM Roofing
        </h1>

        {/* Navigation */}
        <nav className="hidden gap-10 text-sm font-medium text-white md:flex">
          <a href="#" className="transition hover:text-yellow-400">
            Home
          </a>

          <a href="#" className="transition hover:text-yellow-400">
            Services
          </a>

          <a href="#" className="transition hover:text-yellow-400">
            Gallery
          </a>

          <a href="#" className="transition hover:text-yellow-400">
            Contact
          </a>
        </nav>

        {/* Button */}
        <button className="rounded-full bg-yellow-400 px-6 py-3 font-semibold text-black transition hover:scale-105">
          Free Estimate
        </button>

      </div>
    </header>
  );
}