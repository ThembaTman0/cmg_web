import React from "react";

const Hero = () => {
  return (
    <div className="bg-black text-white flex flex-col items-center justify-center h-screen">
      <h1 className="text-5xl font-bold mb-4">Welcome to My Landing Page</h1>
      <p className="text-lg mb-8">
        Learn more about my services and request a price quote
      </p>
      <div className="flex items-center justify-center">
        <button className=" bg-white hover:bg-gray-75 text-black font-bold py-2 px-4 rounded-full">
          Get Started
        </button>
        <button className="bg-gray-75 text-black hover:bg-amber text-ember-800 font-bold py-2 px-4 rounded-full ml-4">
          Request Price
        </button>
      </div>
    </div>
  );
};

export default Hero;
