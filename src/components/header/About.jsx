import React, { useState } from 'react';
import { FaSuitcaseRolling, FaBook, FaMapMarkedAlt } from 'react-icons/fa';

const About = () => {
  const [selected, setSelected] = useState(null);
  const labels = ['Wanderer', 'History Buff', 'Map Geek'];
  const icons = [<FaSuitcaseRolling />, <FaBook />, <FaMapMarkedAlt />];
  const taglines = {
    Wanderer: "Perfect. You’re in the right place.",
    'History Buff': "Perfect. You’re in the right place.",
    'Map Geek': "Perfect. You’re in the right place.",
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-zinc-900 dark:via-gray-900 dark:to-zinc-900 px-4 py-16 transition-colors duration-300">
      <div className="max-w-7xl mx-auto space-y-24">

        {/* 1. Hook & Purpose */}
        <section className="text-center space-y-6">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-slate-800 via-blue-700 to-indigo-700 dark:from-slate-200 dark:via-blue-400 dark:to-indigo-400">
            The World Is More Than Maps — It's Stories, Cultures, and Journeys.
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Ever dreamed of wandering alleyways of ancient cities, or watching sunsets from forgotten ruins?
            <span className="font-semibold text-indigo-600 dark:text-indigo-400"> Country Atlas </span>
            isn’t just data — it’s your passport to history, culture, and everything in between.
          </p>
        </section>

        {/* 2. Engagement Prompt */}
        <section className="text-center space-y-6">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 dark:text-white">Are you a traveler? A dreamer? A curious soul?</h2>
          <div className="flex justify-center gap-4 flex-wrap">
            {labels.map((label, index) => (
              <button
                key={label}
                onClick={() => setSelected(label)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full border border-indigo-500 text-indigo-700 dark:text-indigo-300 dark:border-indigo-400 shadow-sm transition hover:bg-indigo-100 dark:hover:bg-indigo-900 ${
                  selected === label ? 'bg-indigo-100 dark:bg-indigo-800' : ''
                }`}
              >
                {icons[index]} {label}
              </button>
            ))}
          </div>
          {selected && (
            <p className="text-indigo-600 dark:text-indigo-400 text-lg font-medium transition-all">
              {taglines[selected]}
            </p>
          )}
        </section>

        {/* 3. Timeline: Cradles of Civilization */}
        <section className="space-y-12">
          <h2 className="text-center text-2xl sm:text-3xl font-bold text-gray-800 dark:text-white">
            Cradles of Civilization 🌍
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Egypt */}
            <div className="bg-white/70 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 rounded-2xl p-6 shadow-md hover:shadow-xl transition-all hover:scale-[1.02]">
              <h3 className="text-xl font-bold text-indigo-700 dark:text-indigo-300 mb-2">🇪🇬 Egypt</h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                Birthplace of pyramids, pharaohs, and the mysterious Nile. Ancient Egypt shaped calendars, medicine, and monumental architecture.
              </p>
            </div>
            {/* Iran */}
            <div className="bg-white/70 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 rounded-2xl p-6 shadow-md hover:shadow-xl transition-all hover:scale-[1.02]">
              <h3 className="text-xl font-bold text-indigo-700 dark:text-indigo-300 mb-2">🇮🇷 Iran (Persia)</h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                The Persian Empire introduced algebra, libraries, and breathtaking poetry. Persepolis still whispers stories of ancient glory.
              </p>
            </div>
            {/* Greece */}
            <div className="bg-white/70 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 rounded-2xl p-6 shadow-md hover:shadow-xl transition-all hover:scale-[1.02]">
              <h3 className="text-xl font-bold text-indigo-700 dark:text-indigo-300 mb-2">🇬🇷 Greece</h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                Home to democracy, philosophy, and the Olympic Games. Greece gave the world myths, logic, and the foundations of Western thought.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
