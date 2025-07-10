import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";

function CountryCard({ country }) {
  return (
    <>
      <div className="group bg-white/70 backdrop-blur-sm dark:bg-zinc-900/70 dark:text-white rounded-2xl shadow-xl hover:shadow-2xl hover:shadow-indigo-300/20 dark:hover:shadow-black/40 border border-slate-200/50 dark:border-zinc-700/50 p-6 hover:scale-[1.03] hover:-translate-y-1 hover:ring-1 hover:ring-indigo-400/50 transition-all duration-500 min-w-0 break-words">
        <div className="relative overflow-hidden rounded-xl mb-6 group-hover:ring-2 group-hover:ring-indigo-300/50 transition-all duration-300">
          <img
            src={country.flags?.svg}
            alt={country.name?.common}
            className="w-full h-40 object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>

        <div className="space-y-3">
          <h2 className="text-xl font-bold text-slate-800 dark:text-slate-100 leading-tight tracking-wide group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300">
            {country.name?.common || "Unknown"}
          </h2>

          <div className="space-y-2">
            <p className="text-sm text-slate-600 dark:text-slate-300 flex items-center gap-2">
              <span className="inline-block w-2 h-2 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full"></span>
              <span className="font-semibold uppercase tracking-wide text-xs">
                Capital:
              </span>
              <span className="font-medium">
                {country.capital ? country.capital[0] : "N/A"}
              </span>
            </p>

            <p className="text-sm text-slate-600 dark:text-slate-300 flex items-center gap-2">
              <span className="inline-block w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></span>
              <span className="font-semibold uppercase tracking-wide text-xs">
                Population:
              </span>
              <span className="font-medium">
                {country.population?.toLocaleString() || "N/A"}
              </span>
            </p>

            <p className="text-sm text-slate-600 dark:text-slate-300 flex items-start gap-2">
              <span className="inline-block w-2 h-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-full mt-1.5 flex-shrink-0"></span>
              <span className="font-semibold uppercase tracking-wide text-xs">
                Languages:
              </span>
              <span className="font-medium leading-relaxed">
                {country.languages
                  ? Object.values(country.languages).join(", ")
                  : "N/A"}
              </span>
            </p>
          </div>
        </div>

        <NavLink to={`/country/${encodeURIComponent(country.name.common)}`}>

            <button className="inline-flex items-center gap-1 border border-gray-400 dark:border-gray-600 text-gray-800 dark:text-gray-100 text-xs px-2 py-1 rounded hover:bg-gray-100 dark:hover:bg-zinc-800 transition-all duration-200 mt-5">
          Read More
          <FaArrowRight className="text-[10px]" />
        </button>
        </NavLink>
        
      </div>
    </>
  );
}

export default CountryCard;
