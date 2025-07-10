import React from 'react';
import About from './About';
import Footer from '../footer/Footer';
import { NavLink } from 'react-router-dom';
const Home = () => {
  // Mock FaArrowRight icon for demonstration
  const FaArrowRight = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M5 12h14m-7-7l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  return (
   <>
    <div className="w-full  px-4 py-7  bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 min-w-[320px] dark:from-slate-900 dark:via-gray-900 dark:to-slate-900">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12 max-w-7xl mx-auto">
       
        {/* Left Section */}
        <div className="flex-1 text-center md:text-left space-y-6">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-slate-800 via-blue-700 to-indigo-700 mb-6 leading-tight dark:from-slate-200 dark:via-blue-400 dark:to-indigo-400">
            Welcome user, This is World Atlas, Enjoy
          </h1>
          <p className="text-slate-600 text-lg sm:text-xl mb-8 leading-relaxed font-medium max-w-2xl dark:text-slate-300">
            Explore countries, cultures, and more in one place. Your journey starts here.
          </p>
          <NavLink to="/country">
          <button className="group inline-flex items-center gap-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-2xl text-base sm:text-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-indigo-500/25 focus:outline-none focus:ring-4 focus:ring-indigo-300 dark:focus:ring-indigo-500">
            Start Exploring 
            <span className="transform transition-transform duration-300 group-hover:translate-x-1">
              <FaArrowRight />
            </span>
          </button>
          </NavLink>
        </div>

        {/* Right Section */}
        <div className="flex-1 flex justify-center relative">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
            <img
              src="/images/world.png"
              alt="Hero"
              className="relative w-full max-w-[400px] object-contain drop-shadow-2xl transform transition-transform duration-700 hover:scale-105 hover:rotate-1"
            />
          </div>
        </div>
       
      </div>
    </div>
    <About/>
   
  </>
  );
};

export default Home;