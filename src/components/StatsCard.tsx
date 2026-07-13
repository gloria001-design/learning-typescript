import type { ReactNode } from "react";

interface StatsCardProps {
  title: string;
  value: number | string;
  icon: ReactNode;
  darkMode: boolean;
}

const StatsCard = ({
  title,
  value,
  icon,
  darkMode,
}: StatsCardProps) => {
  return (
    <div
      className={`rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 ${
        darkMode
          ? "bg-slate-900 border-slate-700"
          : "bg-white border-slate-300 shadow-sm"
      }`}
    >
      <div className="flex items-center justify-between">

        <div>

          <p
            className={`text-sm ${
              darkMode
                ? "text-slate-400"
                : "text-slate-500"
            }`}
          >
            {title}
          </p>

          <h3
            className={`text-3xl font-bold mt-2 ${
              darkMode
                ? "text-white"
                : "text-slate-900"
            }`}
          >
            {value}
          </h3>

        </div>

        <div className="text-4xl text-blue-500">
          {icon}
        </div>

      </div>
    </div>
  );
};

export default StatsCard;