"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";

const navLinks = [
  { title: "About", path: "#about" },
  { title: "Expertise", path: "#expertise" },
  { title: "Projects", path: "#projects" },
  { title: "Experience", path: "#experience" },
  { title: "Publication", path: "#publications" },
  { title: "Extra's", path: "#extras" },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  // Close menu on scroll or resize
  useEffect(() => {
    const handleScroll = () => setNavbarOpen(false);
    const handleResize = () => setNavbarOpen(false);

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-30 bg-[#121212]">
      <div className="flex items-center justify-between px-4 py-3 container mx-auto">
        <Link
          href="/"
          className="text-xl md:text-2xl text-white font-semibold"
        >
          Hello_World//
        </Link>

        {/* Mobile hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setNavbarOpen(true)}
            className="p-2 rounded-md bg-[#1f1f1f] hover:bg-[#333]"
            aria-label="Open Menu"
          >
            <Bars3Icon className="h-6 w-6 text-white" />
          </button>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:block">
          <ul className="flex space-x-8">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Slide-in Menu */}
      {navbarOpen && (
        <MenuOverlay links={navLinks} closeMenu={() => setNavbarOpen(false)} />
      )}
    </nav>
  );
};

export default Navbar;
