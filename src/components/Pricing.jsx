import React from "react";
import pricingImg from "../assets/pricing.png";
import Button from "./shared/Button";
import ThreeCircle from "./shared/ThreeCircle";
import { RiStarSFill } from "react-icons/ri";
const Pricing = () => {
  return (
    <>
      <div className="pt-2 pb-5 bg-blues-500 bg-opacity-10">
        <div className="w-full px-4 flex flex-wrap">
          <div className="md:w-1/2">
            <div className="rounded-md">
              <img
                src={pricingImg}
                alt=""
                className="w-full relative right-14 overflow-hidden"
              />
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="flex gap-x-2 items-center mb-4 pt-16">
              <ThreeCircle />
            </div>
            <div className="overflow-hidden">
              <h2 className="text-black font-medium lg:text-4xl text-3xl mb-4">
                Perfect Solution for small businesses
              </h2>
              <p className="font-reguler text-medium text-gray-700 mb-16">
                Pricing plans that fit like glove
              </p>
            </div>
            <Button variant="outline-blues">Demo</Button>
            <div className="flex pt-12">
              <span className="border-b border-2 border-[#9EB7EA] w-52"></span>
            </div>
            <div className="flex pt-6 items-center">
              <RiStarSFill size={40} className="text-yellow-500" />
              <RiStarSFill size={40} className="text-yellow-500" />
              <RiStarSFill size={40} className="text-yellow-500" />
              <RiStarSFill size={40} className="text-yellow-500" />
              <RiStarSFill size={40} className="text-yellow-500" />
              <p className="text-gray-500 ml-5 text-sm lg:w-1/3">
                5,200 businesses use chatapp and they rate it 5-start
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pricing;
