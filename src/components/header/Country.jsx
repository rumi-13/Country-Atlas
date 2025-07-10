import React, { useEffect, useState } from 'react';
import { getCountryData } from '../../api/postAPI';
import { ImSpinner9 } from 'react-icons/im';
import CountryCard from '../UI/CountryCard';
import SearchFilter from '../UI/SearchFilter'
import Loader from '../UI/Loader';
const Country = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState();
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getCountryData();
        setCountries(response.data);
      } catch (error) {
        console.error("Failed to fetch country data", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  
    const searchCountry = (country) =>{
      if(search){
        return country.name.common.toLowerCase().includes(search.toLowerCase());
      }
      return country
    }
    
    const filterRegion = (country) =>{
      if(filter === "all") return country;
      return country.region === filter
    }
  const filterCountries =  countries.filter((country)=> 
    searchCountry(country) && filterRegion(country));

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:bg-gradient-to-br dark:from-zinc-900 dark:via-gray-900 dark:to-zinc-900 px-4 py-16 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        {loading ? (
          <Loader/>
        ) : (
          <>
          <section className='search-filter'>
           <SearchFilter search={search} setSearch={setSearch} filter={filter} setFilter={setFilter} countries={countries} setCountries = {setCountries}/>
          </section>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">

            {filterCountries.map((currentCountry, index) => (
             <CountryCard country={currentCountry} key={index}/>
            ))}
          </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Country;
