import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="fixed top-0 left-1/2 max-w-[1360px] w-full transform -translate-x-1/2 h-[80px] flex items-center justify-end z-50 mix-blend-difference">
      <nav className="flex space-x-6">
        <NavLink 
          to="/" 
          className={({ isActive }) => 
            `transition-all ${isActive ? "text-white font-bold" : "text-zinc-400 hover:text-zinc-200"}`
          }
        >
          Home
        </NavLink>
        <NavLink 
          to="/resume" 
          className={({ isActive }) => 
            `transition-all ${isActive ? "text-white font-bold" : "text-zinc-400 hover:text-zinc-200"}`
          }
        >
          Resume
        </NavLink>
      </nav>
    </header>
  );
}
