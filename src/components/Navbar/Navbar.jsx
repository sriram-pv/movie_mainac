import "./Navbar.css";
import React, { useState } from "react";
import Fire from "../../assets/fire.png";
import DarkMode from "../../assets/DarkMode/DarkMode";
import Star from "../../assets/glowing-star.png";
import Party from "../../assets/partying-face.png";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const theme = document.documentElement.getAttribute("data-theme");

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <div className=" sticky top-0 z-10 w-full max-w-full">
    <nav
      className={`navbar ${
        theme === "light" ? "bg-white text-black" : "bg-black text-white "
      } w-full`}
    >
      {/* Title */}
      <h1 className="text-2xl font-bold text-yellow-400">MovieManiac</h1>

      {/* Navbar Links and Dark Mode Toggle */}
      <div
        className={`navbar_links lg:flex flex-col lg:flex-row items-center lg:ml-auto lg:space-x-6 transition-all delay-500 ease-in-out `}
      >
        {/* Dark Mode Toggle - Placed to the left of the links */}
        <div className="flex items-center mr-4 lg:mr-0">
          <DarkMode />
        </div>

        {/* Links */}
        <a href="#popular" className="hidden lg:flex items-center text-xl font-medium no-underline">
          Popular
          <img src={Fire} alt="fire-emoji" className="navbar_emoji w-6 h-6" />
        </a>
        <a href="#top_rated" className="hidden lg:flex items-center text-xl font-medium no-underline">
          Top Rated
          <img src={Star} alt="star-emoji" className="navbar_emoji w-6 h-6" />
        </a>
        <a href="#upcoming" className="hidden lg:flex items-center text-xl font-medium no-underline">
          Upcoming
          <img src={Party} alt="party-emoji" className="navbar_emoji w-6 h-6" />
        </a>

        {menuOpen && (
          <div className="flex flex-col items-start space-y-2 lg:hidden w-full max-w-full">
            <a href="#popular" className="text-xl font-medium">
              Popular
            </a>
            <a href="#top_rated" className="text-xl font-medium">
              Top Rated
            </a>
            <a href="#upcoming" className="text-xl font-medium">
              Upcoming
            </a>
          </div>
        )}
      </div>

      {/* Hamburger Menu */}
      <button
        className=" lg:hidden "
        onClick={toggleMenu}
        aria-label={menuOpen ? "Close Menu" : "Open Menu"}
      >
        {menuOpen ? (
          <XMarkIcon className="h-6 w-6 text-current" />
        ) : (
          <Bars3Icon className="h-6 w-6 text-current" />
        )}
      </button>
    </nav>
    </div>
  );
};

export default Navbar;
