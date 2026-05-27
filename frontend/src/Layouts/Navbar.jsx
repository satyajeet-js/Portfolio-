import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

function Navbar() {
  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Skills", path: "/skills" },
    { name: "Projects", path: "/project" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <div className="fixed top-6 left-0 w-full flex justify-center z-50 px-4">
      
      <nav className="w-full max-w-6xl flex items-center justify-between px-8 py-3 rounded-full 
      bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_8px_30px_rgba(255,255,255,0.05)]">

        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-3">
          <img
            src="https://img.icons8.com/?size=100&id=7pfou8kR7aMF&format=png&color=ffffff"
            className="w-8 h-8 opacity-80"
            alt="logo"
          />
          <span className="text-lg font-medium text-white tracking-wide">
            Portfolio
          </span>
        </NavLink>

        {/* Menu */}
        <ul className="flex items-center gap-8 text-sm">
          {navItems.map((item) => (
            <li key={item.path} className="relative">
              <NavLink to={item.path}>
                {({ isActive }) => (
                  <div className="relative px-4 py-2">
                    
                    {/* Active Pill Background */}
                    {isActive && (
                      <motion.div
                        layoutId="navActive"
                        className="absolute inset-0 bg-white rounded-full"
                        transition={{ type: "spring", stiffness: 300, damping: 25 }}
                      />
                    )}

                    {/* Text */}
                    <span
                      className={`relative z-10 transition ${
                        isActive
                          ? "text-black font-medium"
                          : "text-white/60 hover:text-white"
                      }`}
                    >
                      {item.name}
                    </span>

                  </div>
                )}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;