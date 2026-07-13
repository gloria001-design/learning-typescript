import type { GithubUser } from "../types/github";
import {
  FaUsers,
  FaBook,
  FaMapMarkerAlt,
  FaGithub,
} from "react-icons/fa";
import StatsCard from "./StatsCard";

interface UserCardProps {
  user: GithubUser;
  darkMode: boolean;
}

const UserCard = ({
  user,
  darkMode,
}: UserCardProps) => {
  return (
    <section className="mt-12">

      <div
        className={`rounded-3xl p-8 border shadow-xl transition-all duration-300 ${
          darkMode
            ? "bg-slate-900 border-slate-700"
            : "bg-white border-slate-300"
        }`}
      >

        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">

          {/* Avatar */}
          <div className="flex-shrink-0">

            <img
              src={user.avatar_url}
              alt={user.login}
              className="w-40 h-40 rounded-full border-4 border-blue-500 object-cover shadow-lg"
            />

          </div>

          {/* User Info */}
          <div className="flex-1 text-center lg:text-left">

            <h2
              className={`text-4xl font-bold ${
                darkMode
                  ? "text-white"
                  : "text-slate-900"
              }`}
            >
              {user.name || user.login}
            </h2>

            <p className="text-blue-500 text-lg mt-2">
              @{user.login}
            </p>

            {user.bio && (
              <p
                className={`mt-5 leading-8 max-w-3xl ${
                  darkMode
                    ? "text-slate-300"
                    : "text-slate-700"
                }`}
              >
                {user.bio}
              </p>
            )}

            {user.location && (
              <div
                className={`flex items-center justify-center lg:justify-start gap-2 mt-5 ${
                  darkMode
                    ? "text-slate-400"
                    : "text-slate-600"
                }`}
              >
                <FaMapMarkerAlt />
                <span>{user.location}</span>
              </div>
            )}

            <a
              href={user.html_url}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 mt-8 bg-blue-600 hover:bg-blue-700 transition px-6 py-3 rounded-xl text-white font-semibold"
            >
              <FaGithub />
              Visit GitHub
            </a>

          </div>

        </div>

      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">

        <StatsCard
          title="Followers"
          value={user.followers}
          icon={<FaUsers />}
          darkMode={darkMode}
        />

        <StatsCard
          title="Following"
          value={user.following}
          icon={<FaUsers />}
          darkMode={darkMode}
        />

        <StatsCard
          title="Repositories"
          value={user.public_repos}
          icon={<FaBook />}
          darkMode={darkMode}
        />

      </div>

    </section>
  );
};

export default UserCard;