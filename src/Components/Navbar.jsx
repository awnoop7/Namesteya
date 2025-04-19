import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="w-full bg-slate-800 text-white fixed top-0 left-0 z-50 ">
      <div className="flex justify-between md:justify-around items-center px-6 h-16">

        {/* Logo */}
        <a href="/home" className="text-3xl font-bold">
          Namesteya
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-6 text-lg font-semibold">
          <a href="/home" className="hover:text-amber-300">Home</a>
          <a href="/game" className="hover:text-amber-300">Our Game</a>
          <a href="/about" className="hover:text-amber-300">About Us</a>
        </nav>

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile  Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? 'max-h-60' : 'max-h-0'
        }`}
      >
        <div className="flex flex-col gap-4 px-6 py-4 bg-slate-700 text-lg font-medium">
          <a href="/home" onClick={closeMenu} className="hover:text-amber-300">Home</a>
          <a href="/game" onClick={closeMenu} className="hover:text-amber-300">Our Game</a>
          <a href="/about" onClick={closeMenu} className="hover:text-amber-300">About Us</a>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
