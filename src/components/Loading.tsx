interface LoadingProps {
  darkMode: boolean;
}

const Loading = ({ darkMode }: LoadingProps) => {
  return (
    <div className="mt-12 space-y-8 animate-pulse">

      {/* User Card Skeleton */}
      <div
        className={`rounded-3xl border p-8 ${
          darkMode
            ? "bg-slate-900 border-slate-700"
            : "bg-white border-slate-300"
        }`}
      >
        <div className="flex flex-col md:flex-row gap-8 items-center">

          <div
            className={`w-36 h-36 rounded-full ${
              darkMode
                ? "bg-slate-700"
                : "bg-slate-300"
            }`}
          ></div>

          <div className="flex-1 w-full">

            <div
              className={`h-8 rounded w-56 mb-4 ${
                darkMode
                  ? "bg-slate-700"
                  : "bg-slate-300"
              }`}
            ></div>

            <div
              className={`h-5 rounded w-40 mb-6 ${
                darkMode
                  ? "bg-slate-700"
                  : "bg-slate-300"
              }`}
            ></div>

            <div
              className={`h-4 rounded w-full mb-3 ${
                darkMode
                  ? "bg-slate-700"
                  : "bg-slate-300"
              }`}
            ></div>

            <div
              className={`h-4 rounded w-11/12 mb-3 ${
                darkMode
                  ? "bg-slate-700"
                  : "bg-slate-300"
              }`}
            ></div>

            <div
              className={`h-4 rounded w-9/12 ${
                darkMode
                  ? "bg-slate-700"
                  : "bg-slate-300"
              }`}
            ></div>

          </div>

        </div>
      </div>

      {/* Repository Skeletons */}
      <div className="grid md:grid-cols-2 gap-6">

        {[1, 2, 3, 4].map((item) => (
          <div
            key={item}
            className={`rounded-2xl border p-6 ${
              darkMode
                ? "bg-slate-900 border-slate-700"
                : "bg-white border-slate-300"
            }`}
          >

            <div
              className={`h-6 rounded w-48 mb-5 ${
                darkMode
                  ? "bg-slate-700"
                  : "bg-slate-300"
              }`}
            ></div>

            <div className="space-y-3">

              <div
                className={`h-4 rounded ${
                  darkMode
                    ? "bg-slate-700"
                    : "bg-slate-300"
                }`}
              ></div>

              <div
                className={`h-4 rounded w-11/12 ${
                  darkMode
                    ? "bg-slate-700"
                    : "bg-slate-300"
                }`}
              ></div>

              <div
                className={`h-4 rounded w-8/12 ${
                  darkMode
                    ? "bg-slate-700"
                    : "bg-slate-300"
                }`}
              ></div>

            </div>

            <div className="flex gap-4 mt-6">

              <div
                className={`w-20 h-8 rounded-full ${
                  darkMode
                    ? "bg-slate-700"
                    : "bg-slate-300"
                }`}
              ></div>

              <div
                className={`w-16 h-8 rounded-full ${
                  darkMode
                    ? "bg-slate-700"
                    : "bg-slate-300"
                }`}
              ></div>

            </div>

            <div className="flex justify-between mt-8">

              <div
                className={`w-24 h-4 rounded ${
                  darkMode
                    ? "bg-slate-700"
                    : "bg-slate-300"
                }`}
              ></div>

              <div
                className={`w-20 h-4 rounded ${
                  darkMode
                    ? "bg-slate-700"
                    : "bg-slate-300"
                }`}
              ></div>

            </div>

          </div>
        ))}

      </div>
    </div>
  );
};

export default Loading;