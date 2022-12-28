import React from "react";
import { UilAngleDoubleDown } from "@iconscout/react-unicons";

const Hero = () => {
  return (
    <div className="bg-black text-white flex flex-col items-center justify-center h-screen">
      <h1 className="text-5xl font-bold mb-4">
        Welcome to Creative Mi<span className="text-ember">nds Gra</span>phics
      </h1>
      <p className="text-lg mb-8">
        Where your Imagination Powers your Creation
      </p>
      <div className="flex items-center justify-center">
        <button className=" bg-white hover:bg-gray-75 text-black font-bold py-2 px-4 rounded-full">
          Get Started
        </button>
        <button className="bg-gray-75 text-b hover:bg-ember text-ember-800 font-bold py-2 px-4 rounded-full ml-4">
          Request Price
        </button>
      </div>
      <button
        onClick={() => {
          window.scrollTo({
            top: window.innerHeight,
            behavior: "smooth",
          });
        }}
        className="bg-black hover:bg-ember text-white font-bold py-2 px-4 rounded-full fixed bottom-0 mb-8 mr-8"
      >
        <UilAngleDoubleDown />
      </button>
    </div>
  );
};

export default Hero;
