import React from "react";
import image1 from "../assets/espresso-unsplash.jpeg";
import image2 from "../assets/coffeeBeans.jpeg";
import image3 from "../assets/pour-unsplash.jpeg";
import image4 from "../assets/wide-unsplash.jpeg";

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
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-white mb-4">
              Discover Our Coffee Roasts
            </h2>
            <p className="text-xl text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at
              velit maximus, molestie est a, tempor magna.
            </p>
          </div>
        </div>
      </div>

      {/* Two adjacent sections that are half the width and height of the first section */}
      {/* Right */}
      <div className="flex">
        <div className="w-1/2 h-screen bg-white relative ml-4 mr-2 my-4">
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at
                velit maximus, molestie est a, tempor magna.
              </p>
            </div>
          </div>
        </div>
        {/* Left */}
        <div className="w-1/2 h-screen bg-white relative ml-2 mr-4 my-4">
          <img
            src={image3}
            alt="coffee roast"
            className="absolute inset-0 object-cover w-full h-full"
          />
          <div className="absolute inset-0 flex justify-center items-center">
            <div className="text-center">
              <h2 className="text-4xl font-bold text-white mb-4">
                Discover Our Coffee Roasts
              </h2>
              <p className="text-xl text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at
                velit maximus, molestie est a, tempor magna.
              </p>
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
          <div className="text-center">
            <h2 className="text-4xl font-bold text-white mb-4">
              Discover Our Coffee Roasts
            </h2>
            <p className="text-xl text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at
              velit maximus, molestie est a, tempor magna.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageGrid;
