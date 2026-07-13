import type { GithubRepo } from "../types/github";
import {
  FaCodeBranch,
  FaStar,
  FaExternalLinkAlt,
  FaCircle,
} from "react-icons/fa";

interface RepoCardProps {
  repo: GithubRepo;
  darkMode: boolean;
}

const RepoCard = ({
  repo,
  darkMode,
}: RepoCardProps) => {
  return (
    <div
      className={`rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-blue-500 ${
        darkMode
          ? "bg-slate-900 border-slate-700"
          : "bg-white border-slate-300 shadow-sm"
      }`}
    >
      {/* Repository Name */}
      <h3
        className={`text-2xl font-bold ${
          darkMode
            ? "text-white"
            : "text-slate-900"
        }`}
      >
        {repo.name}
      </h3>

      {/* Description */}
      <p
        className={`mt-4 min-h-[70px] leading-7 ${
          darkMode
            ? "text-slate-400"
            : "text-slate-600"
        }`}
      >
        {repo.description || "No description available."}
      </p>

      {/* Language */}
      {repo.language && (
        <div className="mt-5">
          <span
            className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium ${
              darkMode
                ? "bg-blue-500/20 text-blue-400"
                : "bg-blue-100 text-blue-700"
            }`}
          >
            <FaCircle className="text-[10px]" />
            {repo.language}
          </span>
        </div>
      )}

      {/* Stats */}
      <div
        className={`flex items-center gap-6 mt-6 text-sm ${
          darkMode
            ? "text-slate-300"
            : "text-slate-700"
        }`}
      >
        <div className="flex items-center gap-2">
          <FaStar className="text-yellow-400" />
          <span>{repo.stargazers_count}</span>
        </div>

        <div className="flex items-center gap-2">
          <FaCodeBranch className="text-green-500" />
          <span>{repo.forks_count}</span>
        </div>
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center mt-8">

        <small
          className={
            darkMode
              ? "text-slate-500"
              : "text-slate-500"
          }
        >
          Updated{" "}
          {new Date(repo.updated_at).toLocaleDateString()}
        </small>

        <a
          href={repo.html_url}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 text-blue-500 hover:text-blue-600 font-semibold transition"
        >
          View Repo
          <FaExternalLinkAlt size={12} />
        </a>

      </div>
    </div>
  );
};

export default RepoCard;