import { ChangeEvent } from "react";
import { FaSearch } from "react-icons/fa";

interface SearchBarProps {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  darkMode: boolean;
}

const SearchBar = ({
  value,
  onChange,
  darkMode,
}: SearchBarProps) => {
  return (
    <div className="max-w-2xl mx-auto mb-12 relative">

      <FaSearch
        className={`absolute left-5 top-1/2 -translate-y-1/2 ${
          darkMode
            ? "text-slate-500"
            : "text-slate-400"
        }`}
      />

      <input
        type="text"
        placeholder="Search GitHub username..."
        value={value}
        onChange={onChange}
        className={`w-full pl-14 pr-5 py-4 rounded-xl border transition-all duration-300 outline-none focus:ring-2 focus:ring-blue-500 ${
          darkMode
            ? "bg-slate-900 border-slate-700 text-white placeholder:text-slate-500"
            : "bg-white border-slate-300 text-slate-900 placeholder:text-slate-400 shadow-sm"
        }`}
      />
    </div>
  );
};

export default SearchBar;