import React from "react";
import kcalprologo from "../assets/kcalprologo.jpg";
import { NavLink } from "react-router-dom";

const Navbar = ({ query, setQuery }) => {
  return (
    <div
      className="
        flex items-center justify-between px-8 py-4 
        bg-gradient-to-r from-[#A8E6CF] via-[#D1F5D3] to-[#A0CED9] 
        shadow-[0_4px_20px_rgba(0,0,0,0.15)] sticky top-0 z-50
      "
    >
      <NavLink to="/home" end>
        <img
          src={kcalprologo}
          alt="logo"
          className="h-12 w-auto cursor-pointer hover:scale-110 transition-transform duration-300"
        />
      </NavLink>

      <input
        type="text"
        placeholder="Search food..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="
          px-4 py-2 w-72 rounded-xl
          bg-white/80 text-[#2F3E46] placeholder-[#5C6B73]
          focus:outline-none focus:ring-2 focus:ring-green-400
          shadow-inner transition-all duration-300
        "
      />

      <NavLink
        to="/tracker"
        end
        className={({ isActive }) =>
          `
          relative text-lg font-medium px-3 py-1 rounded-lg 
          transition-all duration-300 
          ${isActive ? "text-green-700" : "text-gray-700 hover:text-green-600"}
          after:content-[''] after:absolute after:-bottom-1 after:left-0 
          after:w-0 after:h-[2px] after:bg-green-600 
          hover:after:w-full after:transition-all after:duration-300
        `
        }
      >
        Tracker
      </NavLink>
    </div>
  );
};

export default Navbar;
