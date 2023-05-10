import { FaFacebook, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white mt-4">
      <div className="container mx-auto flex flex-wrap justify-between py-8">
        <div className="w-full lg:w-1/2">
          <h2 className="text-xl font-bold mb-4">Get in Touch</h2>
          <ul className="text-sm">
            <li className="mb-2">
              <i className="fas fa-map-marker-alt mr-2"></i>1932 Palmer Ave,
              Larchmont, NY 10538
            </li>
            <li className="mb-2">
              <i className="fas fa-envelope mr-2"></i>
              sunshinecoffeeroaster@gmail.com
            </li>
            <li>
              <i className="fas fa-phone mr-2"></i>(914) 341-1899
            </li>
          </ul>
        </div>
        <div className="w-full lg:w-1/2 text-center">
          <h2 className="text-xl font-bold mb-4">Socials</h2>
          <div className="flex justify-center">
            <a
              href="https://www.facebook.com/SunshineCoffeeRoast/"
              target="_blank"
              rel="noreferrer"
              className="text-white mx-4 hover:text-gray-400"
            >
              <FaFacebook size={32} />
            </a>
            <a
              href="https://www.instagram.com/sunshineroasters/"
              target="_blank"
              rel="noreferrer"
              className="text-white mx-4 hover:text-gray-400"
            >
              <FaInstagram size={32} />
            </a>
          </div>
        </div>
      </div>
      <div className="bg-gray-900 py-4">
        <p className="text-sm text-center text-gray-400">
          © 2023 Sunshine Coffee Roasters. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
