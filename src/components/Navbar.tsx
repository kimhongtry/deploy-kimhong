import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/logo.jpg";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  return (
    <nav className="bg-white fixed w-full top-0 z-50 shadow-lg transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img className="w-20" src={logo} alt="Logo" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-6 px-4 py-2 border border-pink-700 rounded-full font-BlackAndWhitePicture">
            <Link to="/" className="hover:text-green-400">
              Home
            </Link>
            <Link to="/stories" className="hover:text-green-400">
              Stories
            </Link>
            <Link to="/favorites" className="hover:text-green-400">
              Favorites
            </Link>
          </div>

          {/* Login Section */}
          <div className="hidden lg:flex space-x-6 text-pink-700 font-BlackAndWhitePicture">
            <Link to="/login" className="hover:text-green-400">
              Login
            </Link>
            <Link to="/registerform" className="hover:text-green-400">
              Register
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? (
                <FaTimes className="text-2xl" />
              ) : (
                <FaBars className="text-2xl" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Fixed Mobile Menu */}
      <div
        className={`lg:hidden fixed top-16 left-0 w-full bg-white shadow-md z-50 ${
          menuOpen ? "block" : "hidden"
        }`}
      >
        <ul className="flex flex-col items-center space-y-4 py-4">
          <li>
            <Link
              to="/"
              className="hover:text-green-400"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/stories"
              className="hover:text-green-400"
              onClick={() => setMenuOpen(false)}
            >
              Stories
            </Link>
          </li>
          <li>
            <Link
              to="/favorites"
              className="hover:text-green-400"
              onClick={() => setMenuOpen(false)}
            >
              Favorites
            </Link>
          </li>
          <li>
            <Link
              to="/login"
              className="hover:text-green-400 text-pink-700"
              onClick={() => setMenuOpen(false)}
            >
              Login
            </Link>
          </li>
          <li>
            <Link
              to="/registerform"
              className="hover:text-green-400 text-pink-700"
              onClick={() => setMenuOpen(false)}
            >
              Register
            </Link>
          </li>
          <li>
            <input
              type="text"
              placeholder="Search..."
              className="px-4 py-2 border border-gray-600 rounded-md focus:outline-none focus:ring focus:ring-green-500"
            />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
