import React from 'react'
import Navbar_img from '../assets/Frame 2 1.png';
const Navbar = () => {
    return (
        <>
            {/* Navbar */}
            <div className="navbar bg-base-100">
                <div className="flex-1">
                    <img className="mt-1 sm:ml-20 ml-3" src={Navbar_img} alt="no img" />
                </div>

                {/* Menu for larger screens */}
                <div className="hidden sm:flex flex-none mr-5">
                    <ul className="menu menu-horizontal px-1">
                        <li><a className="uppercase font-bold">Home</a></li>
                        <li><a className="uppercase font-bold">About</a></li>
                        <li><a className="uppercase font-bold">Contact</a></li>
                    </ul>
                </div>

                {/* Dropdown menu for smaller screens */}
                <div className="sm:hidden flex-none mr-5">
                    <div className="dropdown dropdown-end">
                        <button tabIndex={0} className="btn m-1">Menu</button>
                        <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box w-52 p-2 shadow">
                            <li><a className="uppercase font-bold">Home</a></li>
                            <li><a className="uppercase font-bold">About</a></li>
                            <li><a className="uppercase font-bold">Contact</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar
