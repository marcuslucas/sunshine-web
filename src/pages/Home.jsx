import React from "react";
import Navbar from "../components/Navbar";
import SectionBelowMain from "../components/SectionBelowMain";
import ImageGrid from "../components/ImageGrid";
import Footer from "../components/Footer";

const Home = (props) => {
  return (
    <div>
      <Navbar />
      <main className="flex-grow flex flex-col lg:flex-row">
        {/* Left section */}
        <div className="bg-white lg:w-2/5 lg:rounded-l-lg px-6 py-12 lg:py-24 lg:px-12 flex flex-col justify-center">
          <h1 className="text-6xl font-bold leading-tight mb-6 text-left">
            Welcome to
            <br />
            Sunshine Coffee Roasters
          </h1>
          <p className="text-gray-700 leading-relaxed mb-6 text-left text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            luctus ligula eget risus ultrices tristique. Mauris eleifend, velit
            vel aliquam commodo, lorem eros facilisis justo, nec semper elit
            purus at orci.
          </p>
          <p className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded">
            Order Now
          </p>
        </div>

        {/* Right section */}
        <div className="bg-blue-200 lg:w-3/5 lg:rounded-r-lg flex items-center justify-center">
          <img
            src="https://via.placeholder.com/500x500"
            alt="Coffee"
            className="h-screen lg:w-3/4 object-cover"
          />
        </div>
      </main>

      {/* Section Below Main */}
      <SectionBelowMain id="section-below-main" />
      <ImageGrid />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
