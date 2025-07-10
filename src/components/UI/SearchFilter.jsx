import React from "react";

function SearchFilter({
  search,
  setSearch,
  filter,
  setFilter,
  countries,
  setCountries,
}) {
  const handleInputChange = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  const handleSelectChange = (e) => {
    e.preventDefault();
    setFilter(e.target.value);
  };

  const sortCountries = (value) => {
    const sortCountry = [...countries].sort((a, b) => {
      return value === "asc"
        ? a.name.common.localeCompare(b.name.common)
        : b.name.common.localeCompare(a.name.common);
    });
    setCountries(sortCountry);
  };

  return (
    <section className="mb-10">
      <div className="flex flex-col sm:flex-row flex-wrap sm:flex-nowrap items-center justify-between gap-4 bg-gray-100/80 dark:bg-slate-800/80 backdrop-blur-md shadow-md rounded-xl p-4 border border-slate-200 dark:border-slate-600 transition-colors duration-300">
        {/* Search Input */}
        <input
          type="text"
          placeholder="Search country..."
          value={search}
          onChange={handleInputChange}
          className="w-full sm:w-1/3 px-4 py-2 text-sm rounded-lg border border-gray-300 dark:border-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-slate-900 dark:text-white"
        />

        {/* Sort Buttons */}
        <div className="flex gap-2">
          <button
            onClick={() => sortCountries("asc")}
            className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md text-sm transition"
          >
            Ascending
          </button>
          <button
            onClick={() => sortCountries("des")}
            className="px-4 py-2 bg-purple-500 hover:bg-purple-600 text-white rounded-md text-sm transition"
          >
            Descending
          </button>
        </div>

        {/* Region Filter */}
        <select
          value={filter}
          onChange={handleSelectChange}
          className="w-full sm:w-1/4 px-4 py-2 rounded-lg border border-gray-300 dark:border-slate-600 focus:outline-none focus:ring-2 focus:ring-purple-400 dark:bg-slate-900 dark:text-white"
        >
          <option value="all">All</option>
          <option value="Asia">Asia</option>
          <option value="Africa">Africa</option>
          <option value="Europe">Europe</option>
          <option value="Antarctic">Antarctic</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
    </section>
  );
}

export default SearchFilter;
