import { NavLink } from "react-router-dom";
// import Hamburger from "../ui/Hamburger";
// import InlineLinks from "../ui/InlineLinks";

import { useEffect, useState } from "react";
import Hamburger from "./ui/Hamburger";

const Navbar = () => {
  const [mobileView, setMobileView] = useState();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 900) {
        setMobileView(false);
        // console.log("not mobile");
      } else if (window.innerWidth < 900) {
        setMobileView(true);
        // console.log("this is mobile");
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 flex items-center justify-between bg-blue-900 h-24 px-4 z-10">
      <div className="flex items-center">
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
      {/* <div className="lg:hidden">
      <Hamburger />
    </div> */}
    </div>
  );
};

export default Navbar;
