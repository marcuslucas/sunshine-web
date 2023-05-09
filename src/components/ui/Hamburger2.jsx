import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Hamburger = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex justify-end items-center md:hidden">
      <button
        className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600"
        onClick={handleToggle}
      >
        <svg
          className="h-6 w-6 fill-current"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className={!isOpen ? "block" : "hidden"}
            d="M4 6h16M4 12h16M4 18h16"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            className={isOpen ? "block" : "hidden"}
            d="M6 18L18 6M6 6l12 12"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } absolute top-12 right-0 w-48 py-2 mt-2 bg-white rounded-lg shadow-xl z-20`}
      >
        <NavLink
          exact
          to="/about"
          className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
          activeClassName="bg-gray-100 text-gray-900"
          onClick={() => setIsOpen(false)}
        >
          About
        </NavLink>
        <NavLink
          exact
          to="/contact"
          className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
          activeClassName="bg-gray-100 text-gray-900"
          onClick={() => setIsOpen(false)}
        >
          Contact
        </NavLink>
      </div>
    </div>
  );
};

export default Hamburger;
