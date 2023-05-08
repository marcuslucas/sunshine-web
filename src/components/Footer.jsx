import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 sm:mt-10 pt-10">
      <div className="max-w-6xl m-auto text-gray-800 flex flex-wrap justify-left">
        {/* Get in touch section */}
        <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12">
          <div className="text-xs uppercase text-gray-400 font-medium mb-6">
            Get in Touch
          </div>
          <div className="text-white-500 text-sm">
            <p className="text-white">
              <span className="text-gray-400 mr-2">
                <i className="fa fa-map-marker"></i>
              </span>{" "}
              1932 Palmer Ave, Larchmont, NY 10538
            </p>
            <p className="mt-2 text-white">
              <span className="text-gray-400 mr-2">
                <i className="fa fa-envelope"></i>
              </span>{" "}
              sunshinecoffeeroaster@gmail.com
            </p>
            <p className="mt-2 text-white">
              <span className="text-gray-400 mr-2">
                <i className="fa fa-envelope"></i>
              </span>{" "}
              (914) 341-1899
            </p>
          </div>
        </div>

        {/* Social icons section */}
        <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12 ">
          <div className="text-xs uppercase text-gray-400 font-medium mb-6">
            Social Media
          </div>
          <div className="flex text-white">
            <div className="flex-initial mr-4">
              <a
                href="https://www.facebook.com/SunshineCoffeeRoast/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="text-gray-400 hover:text-white">
                  <i className="fab fa-facebook-square fa-2x"></i>
                </span>
                Facebook
              </a>
            </div>
            <div className="flex-initial mr-4">
              <a
                href="https://www.instagram.com/sunshineroasters/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="text-gray-400 hover:text-white">
                  <i className="fab fa-instagram fa-2x"></i>
                </span>
                Instagram
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom section */}
      <div className="pt-2">
        <div
          className="flex pb-5 px-3 m-auto pt-5 
                            border-t border-gray-500 text-gray-400 
                            text-sm flex-col md:flex-row max-w-6xl"
        >
          <div className="mt-2 text-gray-400">
            © 2023 Sunshine Coffee Roasters
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
