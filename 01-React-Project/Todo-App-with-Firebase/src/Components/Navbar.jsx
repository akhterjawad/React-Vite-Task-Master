import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-neutral-600 rounded-lg shadow-lg">
      <div className="container mx-auto p-5 flex justify-between items-center">
        <div className="text-white text-2xl font-bold">MyApp</div>

        {/* Mobile Menu Button */}
        <button 
          className="text-white block lg:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        {/* Links */}
        <div className={`lg:flex ${isOpen ? "block" : "hidden"} transition-all duration-300 ease-in-out`}>
          <Link to="/" className="text-white px-4 py-2 text-lg hover:bg-purple-700 rounded-lg transition duration-300">Home</Link>
          <Link to="/login" className="text-white px-4 py-2 text-lg hover:bg-purple-700 rounded-lg transition duration-300">Login</Link>
          <Link to="/register" className="text-white px-4 py-2 text-lg hover:bg-purple-700 rounded-lg transition duration-300">Register</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
