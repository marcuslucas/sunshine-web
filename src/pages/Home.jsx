import React from "react";
import Navbar from "../components/Navbar";

import ImageGrid from "../components/ImageGrid";
import Footer from "../components/Footer";
// import storeFront from "../assets/storefront.jpg";

const Home = (props) => {
  return (
    <div className="bg-white">
      <header className="fixed top-0 left-0 w-full z-10 bg-white h-16">
        <Navbar />
        {/* Navbar content */}
      </header>
      {/* Image grid */}
      <ImageGrid />
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;

// <main className="flex flex-col lg:flex-row mt-4 lg:mt-4 xl:mt-4">
//     {/* Left section */}
//     <div className="bg-white lg:w-2/5 lg:rounded-l-lg px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 flex flex-col justify-center">
//       <h1 className="text-lg sm:text-3xl md:text-4xl font-bold leading-tight mb-4 sm:mb-6 text-left">
//         Welcome to <br />
//         Sunshine Coffee Roasters
//       </h1>
//       <p className="text-gray-700 leading-relaxed mb-4 sm:mb-6 text-left sm:text-base md:text-lg lg:text-xl">
//         Sunshine Coffee Roasters is a small-batch coffee roaster founded
//         with a passion for crafting exceptional coffee experiences. At the
//         helm of the company is master roaster John, who brings decades of
//         experience and expertise to every batch of coffee. With a commitment
//         to quality and a dedication to sustainability, John and his team
//         work tirelessly to source the finest beans and roast them to
//         perfection.
//       </p>
//       <button className="bg-yellow-400 hover:bg-yellow-600 text-white font-bold py-2 sm:py-3 md:py-4 px-4 sm:px-6 md:px-8 rounded-lg text-center sm:text-left">
//         Order Now
//       </button>
//     </div>

//     {/* Right section */}
//     <div className="bg-white lg:w-3/5 lg:rounded-r-lg flex items-center justify-center">
//       <img
//         src={storeFront}
//         alt="Coffee"
//         className="h-64 sm:h-80 lg:h-auto w-full object-cover lg:w-3/4 lg:rounded-r-lg"
//       />
//     </div>
//   </main>
