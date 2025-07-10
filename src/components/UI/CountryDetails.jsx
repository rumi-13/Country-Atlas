import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getIndividualCountry } from '../../api/postAPI';

import Loader from './Loader';

function CountryDetails() {
  const { id } = useParams();
  const [country, setCountry] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCountry = async () => {
      try {
        const res = await getIndividualCountry(id);
        setCountry(res.data[0]);
      } catch (err) {
        console.error('Failed to fetch country data', err);
      } finally {
        setLoading(false);
      }
    };

    fetchCountry();
  }, [id]);

  if (loading) {
    return (
     <Loader/>
    );
  }

  if (!country) {
    return (
      <div className="flex justify-center items-center h-screen text-red-500 font-extrabold text-xl text-center pt-20 bg-gradient-to-br from-gray-50 to-indigo-100 dark:from-gray-950 dark:to-black transition-all duration-500 ease-in-out">
        Oops! Failed to load country data. Please try again.
      </div>
    );
  }

  const {
    name,
    flags,
    capital,
    population,
    region,
    tld,
    currencies,
    languages,
    borders,
  } = country;

  const currency = currencies ? Object.values(currencies)[0] : null;
  const languageList = languages ? Object.values(languages).join(', ') : 'N/A';

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-indigo-100 dark:from-gray-950 dark:to-black text-gray-900 dark:text-gray-100 transition-all duration-500 ease-in-out">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row gap-12 items-center md:items-start bg-white bg-opacity-90 dark:bg-zinc-800 dark:bg-opacity-70 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 transition-all duration-300 ease-in-out transform hover:scale-[1.005]">
          <img
            src={flags?.svg}
            alt={name?.common}
            className="w-full md:w-2/3 lg:w-[500px] h-auto rounded-xl object-cover shadow-2xl hover:scale-105 hover:ring-4 hover:ring-purple-600 dark:hover:ring-teal-400 transition-all duration-500 ease-in-out aspect-video"
          />
          <div className="flex-1 space-y-4 text-base sm:text-lg lg:text-xl min-w-0 break-words overflow-hidden">
            <h1 className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 mb-6 drop-shadow-md">
              {name?.common || 'N/A'}
            </h1>
            <p><span className="font-bold text-gray-800 dark:text-gray-300">Capital:</span> <span className="text-gray-600 dark:text-gray-400">{capital?.[0] || 'N/A'}</span></p>
            <p><span className="font-bold text-gray-800 dark:text-gray-300">Population:</span> <span className="text-gray-600 dark:text-gray-400">{population?.toLocaleString() || 'N/A'}</span></p>
            <p><span className="font-bold text-gray-800 dark:text-gray-300">Region:</span> <span className="text-gray-600 dark:text-gray-400">{region || 'N/A'}</span></p>
            {/* Subregion removed */}
            <p><span className="font-bold text-gray-800 dark:text-gray-300">Top-level Domain:</span> <span className="text-gray-600 dark:text-gray-400">{tld?.[0] || 'N/A'}</span></p>
            <p><span className="font-bold text-gray-800 dark:text-gray-300">Currency:</span> <span className="text-gray-600 dark:text-gray-400">{currency ? `${currency.name} (${currency.symbol})` : 'N/A'}</span></p>
            <p><span className="font-bold text-gray-800 dark:text-gray-300">Languages:</span> <span className="text-gray-600 dark:text-gray-400">{languageList}</span></p>
            <p className="font-bold text-gray-800 dark:text-gray-300">Border Countries:</p>
            <div className="flex flex-wrap gap-2">
              {borders?.length ? (
                borders.map((border, index) => (
                  <span
                    key={index}
                    // Minimalistic styling for borders
                    className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-md px-3 py-1 text-sm shadow-sm"
                  >
                    {border}
                  </span>
                ))
              ) : (
                <span className="text-gray-500 text-sm italic">No bordering countries.</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CountryDetails;