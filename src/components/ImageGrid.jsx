import React from "react";

const ImageGrid = () => {
  return (
    <div>
      {/* Big section with text on top of an image */}
      <div className="relative h-screen bg-gray-800">
        <div className="absolute inset-0 bg-opacity-75 bg-yellow-300"></div>
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
      <div className="flex">
        <div className="w-1/2 h-screen bg-white relative">
          <div className="absolute ml-4 mr-4 my-4 inset-0 bg-opacity-75 bg-blue-600"></div>
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
        <div className="w-1/2 h-screen bg-white relative">
          <div className="absolute mr-4 ml-2 my-4 inset-0 bg-opacity-75 bg-green-600"></div>
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
        <div className="absolute inset-0 bg-opacity-75 bg-yellow-600"></div>
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
