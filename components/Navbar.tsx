"use client";

import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    "Home",
    "Enterprise",
    "Programs",
    "About",
    "Contact",
  ];

  return (
    <nav className="bg-white shadow-sm px-6 py-5">
      <div className="max-w-6xl mx-auto flex items-center justify-between">

        <h1 className="text-2xl font-bold text-blue-600">
          Accredian
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-gray-700">
          {links.map((link) => (
            <a
              key={link}
              className="hover:text-blue-600 cursor-pointer"
            >
              {link}
            </a>
          ))}
        </div>

        <button className="hidden md:block bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700">
          Get Started
        </button>


        {/* Mobile Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>

      </div>


      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden mt-5 space-y-4 text-gray-700">
          {links.map((link) => (
            <a
              key={link}
              className="block hover:text-blue-600 cursor-pointer"
            >
              {link}
            </a>
          ))}

          <button className="bg-blue-600 text-white px-5 py-2 rounded-lg">
            Get Started
          </button>
        </div>
      )}

    </nav>
  );
}