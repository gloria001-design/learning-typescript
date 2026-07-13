import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import UserCard from "../components/UserCard";
import RepoCard from "../components/RepoCard";
import Loading from "../components/Loading";
import ErrorMessage from "../components/ErrorMessage";
import RepoToolbar from "../components/RepoToolbar";
import githubApi from "../services/githubApi";
import useDebounce from "../hooks/useDebounce";
import type { GithubUser, GithubRepo } from "../types/github";

const Home = () => {
  const [username, setUsername] = useState("gloria001-design");
  const [user, setUser] = useState<GithubUser | null>(null);
  const [repos, setRepos] = useState<GithubRepo[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [sortBy, setSortBy] = useState("updated");
  const [language, setLanguage] = useState("All");

  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") !== "light";
  });

  const [recentSearches, setRecentSearches] = useState<string[]>(() => {
    const saved = localStorage.getItem("recentSearches");
    return saved ? JSON.parse(saved) : [];
  });

  const debouncedUsername = useDebounce(username, 500);

  const toggleTheme = () => {
    const next = !darkMode;
    setDarkMode(next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  useEffect(() => {
    if (!debouncedUsername.trim()) return;

    const fetchUser = async () => {
      try {
        setLoading(true);
        setError("");

        const [userResponse, repoResponse] = await Promise.all([
          githubApi.get(`/users/${debouncedUsername}`),
          githubApi.get(`/users/${debouncedUsername}/repos`),
        ]);

        setUser(userResponse.data);

        const sortedRepos = repoResponse.data.sort(
          (a: GithubRepo, b: GithubRepo) =>
            new Date(b.updated_at).getTime() -
            new Date(a.updated_at).getTime()
        );

        setRepos(sortedRepos);

        // Save recent searches
        setRecentSearches((prev) => {
          const updated = [
            debouncedUsername,
            ...prev.filter((item) => item !== debouncedUsername),
          ].slice(0, 5);

          localStorage.setItem(
            "recentSearches",
            JSON.stringify(updated)
          );

          return updated;
        });
      } catch (err) {
        console.error(err);

        setUser(null);
        setRepos([]);
        setError("GitHub user not found.");
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [debouncedUsername]);

  const languages = [
    "All",
    ...new Set(
      repos
        .map((repo) => repo.language)
        .filter((lang): lang is string => Boolean(lang))
    ),
  ];

  const filteredRepos = [...repos]
    .filter((repo) =>
      language === "All"
        ? true
        : repo.language === language
    )
    .sort((a, b) => {
      switch (sortBy) {
        case "stars":
          return b.stargazers_count - a.stargazers_count;

        case "name":
          return a.name.localeCompare(b.name);

        default:
          return (
            new Date(b.updated_at).getTime() -
            new Date(a.updated_at).getTime()
          );
      }
    });

  return (
    <div
      className={`min-h-screen transition-all duration-300 ${
        darkMode
          ? "bg-slate-950"
          : "bg-slate-100"
      }`}
    >
      <Navbar darkMode={darkMode} />

      <div className="max-w-7xl mx-auto px-6 py-12">

        {/* Theme Toggle */}
        <div className="flex justify-end mb-8">
          <button
            onClick={toggleTheme}
            className={`p-3 rounded-full transition shadow-lg ${
              darkMode
                ? "bg-slate-800 text-yellow-400"
                : "bg-white text-slate-800"
            }`}
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
        </div>

        {/* Hero */}
        <div className="text-center mb-12">

          <h1
            className={`text-5xl font-bold ${
              darkMode
                ? "text-white"
                : "text-slate-900"
            }`}
          >
            Find Any{" "}
            <span className="text-blue-500">
              GitHub Developer
            </span>
          </h1>

          <p
            className={`mt-5 max-w-2xl mx-auto ${
              darkMode
                ? "text-slate-400"
                : "text-slate-600"
            }`}
          >
            Search GitHub usernames to explore profiles,
            repositories, followers, languages and more.
          </p>

        </div>

        <SearchBar
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          darkMode={darkMode}
        />

        {/* Recent Searches */}
        {recentSearches.length > 0 && (
          <div className="flex flex-wrap justify-center gap-3 mb-10">

            <span
              className={`font-semibold ${
                darkMode
                  ? "text-slate-400"
                  : "text-slate-600"
              }`}
            >
              Recent:
            </span>

            {recentSearches.map((item) => (
              <button
                key={item}
                onClick={() => setUsername(item)}
                className={`px-4 py-2 rounded-full transition ${
                  darkMode
                    ? "bg-slate-800 text-white hover:bg-blue-600"
                    : "bg-white border border-slate-300 hover:bg-blue-600 hover:text-white"
                }`}
              >
                {item}
              </button>
            ))}

          </div>
        )}

    {loading && (
  <Loading darkMode={darkMode} />
)}

        {!loading && error && (
          <ErrorMessage message={error} />
        )}

        {!loading && user && (
          <>
            <UserCard
              user={user}
              darkMode={darkMode}
            />

            <section className="mt-14">

              <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">

                <h2
                  className={`text-3xl font-bold ${
                    darkMode
                      ? "text-white"
                      : "text-slate-900"
                  }`}
                >
                  Public Repositories
                </h2>

                <span className="bg-blue-500/20 text-blue-500 px-4 py-2 rounded-full">
                  {filteredRepos.length} Repositories
                </span>

              </div>

              <RepoToolbar
                darkMode={darkMode}
                sortBy={sortBy}
                setSortBy={setSortBy}
                language={language}
                setLanguage={setLanguage}
                languages={languages}
              />

              {filteredRepos.length > 0 ? (
                <div className="grid md:grid-cols-2 gap-6">
                  {filteredRepos.map((repo) => (
                    <RepoCard
                      key={repo.id}
                      repo={repo}
                      darkMode={darkMode}
                    />
                  ))}
                </div>
              ) : (
                <div
                  className={`rounded-xl border p-10 text-center ${
                    darkMode
                      ? "bg-slate-900 border-slate-700 text-slate-400"
                      : "bg-white border-slate-300 text-slate-700"
                  }`}
                >
                  <div className="text-5xl mb-4">📂</div>

                  <h3 className="text-2xl font-bold">
                    No repositories found
                  </h3>

                  <p className="mt-3">
                    Try another GitHub user or change the
                    language filter.
                  </p>

                </div>
              )}
            </section>
          </>
        )}
      </div>
    </div>
  );
};

export default Home;