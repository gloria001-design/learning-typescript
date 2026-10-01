interface NavbarProps {
  darkMode: boolean;
}

const Navbar = ({ darkMode }: NavbarProps) => {
  return (
    <nav
      className={`sticky top-0 z-50 border-b transition-all duration-300 ${
        darkMode
          ? "bg-slate-950 border-slate-800"
          : "bg-white border-slate-200 shadow-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-5 flex justify-between items-center">

        <h1
          className={`text-2xl font-bold ${
            darkMode ? "text-white" : "text-slate-900"
          }`}
        >
          Dev<span className="text-blue-500">Finder</span>
        </h1>

        <div
          className={`flex gap-4 md:gap-6 text-sm md:text-base ${
            darkMode ? "text-slate-300" : "text-slate-700"
          }`}
        >
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-500 transition"
          >
            GitHub
          </a>

          <a
            href="https://docs.github.com/en/rest"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-500 transition"
          >
            API Docs
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;