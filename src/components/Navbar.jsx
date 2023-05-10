import logo from "../assets/SunshineLogo.png";
import React from "react";
import { FaMapMarkerAlt, FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-6 py-3 md:flex md:justify-between md:items-center">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-xl font-semibold text-gray-800">
            <div className="flex items-center">
              <div className="w-10 h-10 mr-2 rounded-full bg-gray-100 flex items-center justify-center">
                <img
                  className="w-6 h-6"
                  src={logo}
                  alt="Sunshine Coffee Roasters Logo"
                />
              </div>
              <span>Sunshine Coffee Roasters</span>
            </div>
          </Link>
          <button
            className="md:hidden rounded-lg focus:outline-none focus:shadow-outline-gray"
            aria-label="Toggle menu"
          >
            <FaBars className="w-6 h-6" />
          </button>
        </div>
        <div className="md:flex md:items-center md:mt-0 hidden">
          <Link
            to="/about"
            className="block mt-4 md:inline-block md:mt-0 mr-6 text-gray-800 hover:text-gray-600"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="block mt-4 md:inline-block md:mt-0 mr-6 text-gray-800 hover:text-gray-600"
          >
            Contact
          </Link>
          <Link
            to="/beans"
            className="block mt-4 md:inline-block md:mt-0 mr-6 text-gray-800 hover:text-gray-600"
          >
            Beans
          </Link>
          <Link
            to="/locations"
            className="block mt-4 md:inline-block md:mt-0 mr-6 text-gray-800 hover:text-gray-600"
          >
            <FaMapMarkerAlt className="inline-block align-middle mr-2" />
            Locations
          </Link>
          <Link
            to="/order"
            className="bg-yellow-400 rounded-lg px-6 py-2 text-white font-semibold shadow-lg hover:bg-yellow-500 focus:outline-none focus:shadow-outline-yellow transition duration-300"
          >
            Order Now
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
