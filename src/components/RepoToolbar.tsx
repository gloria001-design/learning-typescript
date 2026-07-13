interface RepoToolbarProps {
  darkMode: boolean;
  sortBy: string;
  setSortBy: (value: string) => void;
  language: string;
  setLanguage: (value: string) => void;
  languages: string[];
}

const RepoToolbar = ({
  darkMode,
  sortBy,
  setSortBy,
  language,
  setLanguage,
  languages,
}: RepoToolbarProps) => {
  return (
    <div className="flex flex-col md:flex-row justify-between gap-4 mb-8">

      <select
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
        className={`rounded-xl px-5 py-3 border outline-none transition-all duration-300 ${
          darkMode
            ? "bg-slate-900 border-slate-700 text-white"
            : "bg-white border-slate-300 text-slate-900 shadow-sm"
        }`}
      >
        <option value="updated">Recently Updated</option>
        <option value="stars">Most Stars</option>
        <option value="name">Name (A-Z)</option>
      </select>

      <select
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
        className={`rounded-xl px-5 py-3 border outline-none transition-all duration-300 ${
          darkMode
            ? "bg-slate-900 border-slate-700 text-white"
            : "bg-white border-slate-300 text-slate-900 shadow-sm"
        }`}
      >
        {languages.map((lang) => (
          <option key={lang} value={lang}>
            {lang}
          </option>
        ))}
      </select>

    </div>
  );
};

export default RepoToolbar;