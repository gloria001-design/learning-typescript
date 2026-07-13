import { FaMoon, FaSun } from "react-icons/fa";

interface ThemeToggleProps {
  darkMode: boolean;
  toggleTheme: () => void;
}

const ThemeToggle = ({
  darkMode,
  toggleTheme,
}: ThemeToggleProps) => {
  return (
    <button
      onClick={toggleTheme}
      className="bg-slate-800 hover:bg-slate-700 text-white p-3 rounded-full transition-all duration-300"
    >
      {darkMode ? <FaSun /> : <FaMoon />}
    </button>
  );
};

export default ThemeToggle;