import React, { useState } from "react";
import FinalLogo from "../assets/newLogo.png";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navClass = ({ isActive }) =>
    `text-xs xl:text-sm transition-all
     ${isActive ? "text-green-500 underline decoration-2" : "text-black"}
     hover:text-green-500 hover:underline hover:decoration-2`;

  return (
    <nav className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-4">

        {/* Top Bar */}
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <img
            src={FinalLogo}
            alt="Quick Creatives"
            className="mr-4 h-40 w-40"
          />

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-13 font-medium">
            <NavLink to="/" className={navClass}>Home</NavLink>
            <NavLink to="/services" className={navClass}>Services</NavLink>
            <NavLink to="/about" className={navClass}>About Us</NavLink>
            <NavLink to="/contact" className={navClass}>Contact</NavLink>
          </div>
          
          <button className="bg-black text-white px-6 py-2 rounded-md hover:bg-white hover:text-black hover:border transition">
              Let’s Discuss
            </button>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden text-2xl"
          >
            ☰
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="lg:hidden flex flex-col gap-4 pb-6 font-medium">

            <NavLink to="/" className={navClass}>Home</NavLink>
            <NavLink to="/services" className={navClass}>Services</NavLink>
            <NavLink to="/about" className={navClass}>About Us</NavLink>
            <NavLink to="/contact" className={navClass}>Contact</NavLink>

            <button className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 w-28 text-xs">
              Let’s Discuss
            </button>
          </div>
        )}

      </div>
    </nav>
  );
}
