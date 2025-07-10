import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FaBars, FaTimes, FaMoon, FaSun } from 'react-icons/fa'
import { IoEarthOutline } from 'react-icons/io5';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem('theme') === 'dark'
  )

  const toggleMenu = () => setIsOpen(!isOpen)

  const toggleDarkMode = () => {
    const newMode = !darkMode
    setDarkMode(newMode)
    localStorage.setItem('theme', newMode ? 'dark' : 'light')
    document.documentElement.classList.toggle('dark', newMode)
  }

  useEffect(() => {
    const html = document.documentElement
    if (darkMode) {
      html.classList.add('dark')
    } else {
      html.classList.remove('dark')
    }
  }, [darkMode])

  return (
    <nav className="bg-gradient-to-r from-slate-900 via-gray-900 to-slate-900 backdrop-blur-md shadow-2xl border-b border-slate-700/50 sticky top-0 z-50 w-full">
      <div className="flex items-center justify-between px-4 py-4 md:px-8">
        <div className="font-black text-transparent  bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 text-xl md:text-2xl lg:text-4xl tracking-wide">
        <span className='flex items-center justify-center gap-2' >            <IoEarthOutline className="text-3xl text-purple-400" /> <span>Country Atlas</span></span>  
        </div>

        {/* Desktop + Mobile Nav Links */}
        <div className="hidden md:flex gap-x-8 font-semibold text-slate-300 text-base md:text-lg lg:text-xl">
          {['/', '/about', '/country', '/contact'].map((path, index) => {
            const names = ['Home', 'About', 'Country', 'Contact']
            return (
              <Link
                key={path}
                to={path}
                className="relative py-2 px-1 hover:text-blue-400 transition-all duration-300 ease-in-out group dark:hover:text-blue-300"
              >
                {names[index]}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 transition-all duration-300 ease-in-out group-hover:w-full"></span>
              </Link>
            )
          })}
        </div>

        {/* Always visible icons */}
        <div className="flex items-center  gap-4">
          <button
            onClick={toggleDarkMode}
            className="text-slate-300 hover:text-yellow-300 dark:text-slate-400 dark:hover:text-yellow-400 text-xl"
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>

          {/* Hamburger: only on mobile */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-slate-300 hover:text-blue-400 text-2xl dark:hover:text-blue-300"
            aria-label="Toggle Menu"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {/* Mobile Menu */}
<div
  className={`md:hidden absolute top-full left-0 w-full z-40 transition-all duration-300 ${
    isOpen ? 'opacity-100 max-h-96' : 'opacity-0 max-h-0 overflow-hidden'
  }`}
>
  <div className="flex flex-col bg-white/95 backdrop-blur-md border-t border-slate-200/50 px-4 pt-3 pb-4 shadow-xl w-full text-base rounded-b-2xl dark:bg-slate-800/95 dark:border-slate-600/50">
    {['/', '/about', '/country', '/contact'].map((path, index) => {
      const names = ['Home', 'About', 'Country', 'Contact']
      return (
        <Link
          key={path}
          to={path}
          className="py-3 px-2 text-slate-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-300 ease-in-out font-medium dark:text-slate-300 dark:hover:text-blue-400 dark:hover:bg-slate-700/50"
          onClick={() => setIsOpen(false)}
        >
          {names[index]}
        </Link>
      )
    })}
  </div>
</div>

    </nav>
  )
}

export default Navbar
