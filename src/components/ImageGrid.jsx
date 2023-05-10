import React from "react";
import image1 from "../assets/espresso-unsplash.jpeg";
import image2 from "../assets/coffeeBeans.jpeg";
import image3 from "../assets/pour-unsplash.jpeg";
import image4 from "../assets/wide-unsplash.jpeg";
import logo from "../assets/SunshineLogo.png";

const ImageGrid = () => {
  return (
    <div>
      {/* First Section */}
      <div className="relative mt-4 h-screen bg-gray-800">
        <img
          src={image1}
          alt="coffee roast"
          className="absolute inset-0 object-cover w-full h-full"
        />
        <div className="absolute inset-0 grid grid-cols-2">
          <div className="flex items-center justify-center">
            <div className="h-80 w-80 bg-white rounded-full">
              <img src={logo} alt="SunshineCoffeeLogo" />
            </div>
          </div>
          <div className="flex items-center justify-start p-8">
            <div>
              <h2 className="text-4xl font-bold text-white mb-4">
                Sunshine Coffee Roasters
              </h2>
              <p className="text-xl text-white">
                Sunshine Coffee Roasters crafts exceptional coffee experiences
                with sustainably sourced, expertly roasted beans by master
                roaster John.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Two adjacent sections that are half the width and height of the first section */}

      {/* Right */}
      <div className="flex">
        <div className="w-1/2 h-screen bg-white relative ml-4 mr-2 my-4 hover:scale-105 transition-all duration-500">
          <img
            src={image2}
            alt="coffee roast"
            className="absolute inset-0 object-cover w-full h-full"
          />
          <div className="absolute inset-0 flex justify-center items-center">
            <div className="text-center">
              <h2 className="text-4xl font-bold text-white mb-4">
                Discover Our Coffee Roasts
              </h2>
              <p className="text-xl text-white">
                Embark on a journey of rich flavors and unparalleled aroma with
                our handcrafted coffee roasts.
              </p>
            </div>
          </div>
        </div>
        {/* Left */}
        <div className="w-1/2 h-screen bg-white relative ml-2 mr-4 my-4 hover:scale-105 transition-all duration-500">
          <img
            src={image3}
            alt="coffee roast"
            className="absolute inset-0 object-cover w-full h-full"
          />
          <div className="absolute inset-0 flex justify-center items-center">
            <div className="text-center">
              <h2 className="text-4xl font-bold text-white mb-4">
                Beautifully Roasted Beans Create the Perfect Cup
              </h2>
              <p className="text-xl text-white"></p>
            </div>
          </div>
        </div>
      </div>

      {/* One more section that is identical to the first section */}
      <div className="relative h-screen bg-gray-800">
        <img
          src={image4}
          alt="coffee roast"
          className="absolute inset-0 object-cover w-full h-full"
        />
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="text-left">
            <h2 className="text-4xl font-bold text-white mb-4">
              Experience the sunshine in every sip with our specialty coffee
            </h2>
            <p className="text-xl text-white">
              Indulge in the rich and flavorful notes of our expertly roasted
              beans and let Sunshine Coffee brighten up your day, one sip at a
              time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageGrid;
