import React from 'react';
import { FaGithub, FaInstagram, FaLinkedin, FaHeart } from 'react-icons/fa';

import { IoCompassOutline } from 'react-icons/io5';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-slate-100 via-slate-200 to-slate-100 dark:from-zinc-900 dark:via-gray-900 dark:to-zinc-900 text-slate-700 dark:text-gray-300 px-6 py-6 text-sm border-t border-slate-300/40 dark:border-gray-700/50 transition-all duration-300">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">

        {/* Tagline */}
        <div className="flex items-center gap-2">
          <IoCompassOutline className="text-2xl text-indigo-500 dark:text-indigo-400" />
          <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base  font-medium">
            Your journey doesn’t end here — it begins.
          </p>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-5 justify-center">
          <a href="https://github.com/rumi-13" target='_blank' className="hover:text-indigo-500 dark:hover:text-indigo-300 transition text-lg sm:text-xl md:text-2xl">
            <FaGithub />
          </a>
          <a href="https://instagram.com" target='_blank' className="hover:text-indigo-500 dark:hover:text-indigo-300 transition text-lg sm:text-xl md:text-2xl">
            <FaInstagram />
          </a>
          <a href="https://www.linkedin.com/in/rumi18/" target='_blank' className="hover:text-indigo-500 dark:hover:text-indigo-300 transition text-lg sm:text-xl md:text-2xl">
    <FaLinkedin />
  </a>
        </div>

        {/* Credits */}
        <div className="text-sm sm:text-base text-gray-500 dark:text-gray-400 space-y-1">
          <p>
            Built with <FaHeart className="inline-block text-red-500 mx-1" /> by Asgar Rashid.
          </p>
          <p>Data from REST Countries API.</p>

        </div>

      </div>
    </footer>
  );
};

export default Footer;
