// src/components/Navbar.jsx
import React, { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Menu, X } from "lucide-react";
import { navLinks } from "../data";
import { motion } from "framer-motion";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setOpen(!open);

  const linkClass = "text-gray-300 hover:text-white cursor-pointer";

  return (
    <motion.nav
      className={`fixed w-full z-50 transition-all ${scrolled ? "bg-black/70 backdrop-blur" : "bg-transparent"}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container flex items-center justify-between py-4">
        <div className="text-2xl font-bold gradient-text">MG</div>
        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <li key={link.id}>
              <ScrollLink
                to={link.id}
                smooth={true}
                duration={500}
                offset={-70}
                className={linkClass}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </ScrollLink>
            </li>
          ))}
          <li>
            {/* <a href="/resume.pdf" className="px-4 py-2 bg-purple-600 rounded hover:bg-purple-500 transition-colors" download>
              Resume
            </a> */}
          </li>
        </ul>
        {/* Mobile Hamburger */}
        <div className="md:hidden" onClick={toggleMenu}>
          {open ? <X size={28} color="#fff" /> : <Menu size={28} color="#fff" />}
        </div>
      </div>
      {/* Mobile Menu */}
      {open && (
        <motion.ul
          className="md:hidden bg-black/90 backdrop-blur p-4 space-y-4"
          initial={{ height: 0 }}
          animate={{ height: "auto" }}
          exit={{ height: 0 }}
        >
          {navLinks.map((link) => (
            <li key={link.id}>
              <ScrollLink
                to={link.id}
                smooth={true}
                duration={500}
                offset={-70}
                className={linkClass}
                onClick={toggleMenu}
              >
                {link.label}
              </ScrollLink>
            </li>
          ))}
          {/* <li>
            <a href="/resume.pdf" className="block w-full text-center px-4 py-2 bg-purple-600 rounded hover:bg-purple-500 transition-colors" download>
              Resume
            </a>
          </li> */}
        </motion.ul>
      )}
    </motion.nav>
  );
};

export default Navbar;
