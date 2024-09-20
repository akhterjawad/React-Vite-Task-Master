import React from 'react'
import ThemeSwitcher from './ThemeSwitcher'


const Navbar = () => {
  return (
    <>
      <div className="navbar bg-[#4a00ff] mb-4 sm:mb-6">
        <div className="flex-1">
          <a className="btn btn-ghost text-[1.1rem] sm:text-xl">Innovatrix Academy</a>
        </div>
        <div className="text-center btn-ghost rounded-full w-[42px] h-[42px]">
          < ThemeSwitcher/>
        </div>
      </div>
    </>
  )
}

export default Navbar
