import React from "react";
import Navbar from "./Navbar";
import Button from "./shared/Button";

import heroImg from "../assets/hero.png";
import ThreeCircle from './shared/ThreeCircle';
const Hero = () => {
  return (
    <div className="bg-blues-500 py-14">
      <div className="container mx-auto">
        <Navbar />
      </div>
      <div className="container mx-auto pt-20">
        <div className="flex flex-wrap">
          <div className="w-full self-center px-4 lg:w-1/2">
            <div className="flex gap-x-2 items-center">
              <ThreeCircle />
            </div>
            <h1 className="block uppercase lg:text-6xl text-4xl font-bold text-white my-2">
              Have your
            </h1>
            <h1 className="block lg:text-6xl text-4xl font-bold text-white mb-2">
              best chat
            </h1>
            <p className="text-white mb-10">
              Fast, easy & unlimeted chat with you friend
            </p>
            <div className="flex items-center gap-x-4">
              <Button variant="aqua">Try it free</Button>
              <Button variant="outline-white">Demo</Button>
            </div>
          </div>
          <div className="w-full self-end px-4 lg:w-1/2">
            <div className="mt-10">
              <img src={heroImg} alt="hero" className="max-w-full mx-auto" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
