"use client";

import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    "Home",
    "Enterprise",
    "Programs",
    "About",
    "Contact",
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        <h1 className="text-2xl font-bold text-blue-600 cursor-pointer">
          Accredian
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link}
              href="#"
              className="text-gray-700 hover:text-blue-600 transition font-medium"
            >
              {link}
            </a>
          ))}

          <button className="bg-blue-600 hover:bg-blue-700 hover:scale-105 transition-all duration-300 text-white px-5 py-2 rounded-lg shadow-md">
            Get Started
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t">
          {links.map((link) => (
            <a
              key={link}
              href="#"
              className="block px-6 py-4 text-gray-700 hover:bg-blue-50"
            >
              {link}
            </a>
          ))}

          <div className="px-6 pb-6">
            <button className="w-full bg-blue-600 hover:bg-blue-700 transition text-white py-3 rounded-lg shadow-md">
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}