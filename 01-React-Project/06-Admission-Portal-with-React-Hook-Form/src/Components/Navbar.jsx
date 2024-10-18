import React from 'react'
import ThemeSwitcher from './ThemeSwitcher'


const Navbar = () => {
  function reloader() {
    window.location.reload()
  }
  return (
    <>
      <div className="navbar bg-[#4a00ff] mb-4 sm:mb-6">
        <div className="flex-1">
          <p onClick={reloader} className="btn btn-ghost text-[1.1rem] sm:text-xl">Innovatrix Academy</p>
        </div>
        <div className="text-center btn-ghost rounded-full w-[42px] h-[42px]">
          < ThemeSwitcher/>
        </div>
      </div>
    </>
  )
}

export default Navbar
