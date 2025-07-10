import React from 'react'
import { ImSpinner9 } from 'react-icons/im';
function Loader() {
    return (
        <>
        <div className="flex flex-col justify-center items-center h-64 space-y-4">
            <div className="relative">
              <ImSpinner9 className="animate-spin text-5xl text-indigo-500" />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur-2xl opacity-20 animate-pulse"></div>
            </div>
        
          </div>
        </>
    )
}

export default Loader
