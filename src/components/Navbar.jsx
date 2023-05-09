import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import Hamburger2 from "./ui/Hamburger2";
import logo from "../assets/SunshineLogo.png";

const Navbar = () => {
  const [mobileView, setMobileView] = useState();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 900) {
        setMobileView(false);
      } else if (window.innerWidth < 900) {
        setMobileView(true);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 flex items-center justify-between bg-blue-800 h-24 px-4 z-10">
      <div className="flex items-center">
        <img
          src={logo}
          alt="Sunshine Coffee Roasters logo"
          className="w-12 h-12 rounded-full object-cover mr-2"
        />
        <NavLink to="/" className="text-yellow-400 font-medium text-xl">
          Sunshine Coffee Roasters
        </NavLink>
      </div>
      <div className="hidden lg:block">
        <ul className="flex space-x-4">
          <li>
            <NavLink
              exact
              to="/order"
              className="text-white hover:text-yellow-400 font-medium"
              activeClassName="text-yellow-400"
            >
              Order Now
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className="text-white hover:text-yellow-400 font-medium"
              activeClassName="text-yellow-400"
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className="text-white hover:text-yellow-400 font-medium"
              activeClassName="text-yellow-400"
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="lg:hidden">
        <Hamburger2 />
      </div>
    </div>
  );
};

export default Navbar;
