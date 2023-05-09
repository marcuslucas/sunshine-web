import React from "react";
import Navbar from "../components/Navbar";

import ImageGrid from "../components/ImageGrid";
import Footer from "../components/Footer";
import storeFront from "../assets/storefront.jpg";

const Home = (props) => {
  return (
    <div>
      <header className="fixed top-0 left-0 w-full z-10 bg-white">
        <Navbar />
        {/* Navbar content */}
      </header>

      <main className="flex-grow flex flex-col lg:flex-row mt-16 lg:mt-0">
        {/* Left section */}
        <div className="bg-white lg:w-2/5 lg:rounded-l-lg px-6 py-12 lg:py-24 lg:px-12 flex flex-col justify-center">
          <h1 className="text-6xl font-bold leading-tight mb-6 text-left">
            Welcome to
            <br />
            Sunshine Coffee Roasters
          </h1>
          <p className="text-gray-700 leading-relaxed mb-6 text-left text-xl">
            Sunshine Coffee Roasters is a small-batch coffee roaster founded
            with a passion for crafting exceptional coffee experiences. At the
            helm of the company is master roaster John, who brings decades of
            experience and expertise to every batch of coffee. With a commitment
            to quality and a dedication to sustainability, John and his team
            work tirelessly to source the finest beans and roast them to
            perfection.
          </p>
          <p className="bg-yellow-400 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded">
            Order Now
          </p>
        </div>

        {/* Right section */}
        <div className="bg-white lg:w-3/5 lg:rounded-r-lg flex items-center justify-center">
          <img
            src={storeFront}
            alt="Coffee"
            className="h-screen lg:w-3/4 object-cover"
          />
        </div>
      </main>

      {/* Image grid */}
      <ImageGrid />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
