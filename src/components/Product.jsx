import React from "react";
import ThreeCircle from "./shared/ThreeCircle";

import product1 from "../assets/product-1.png";
import product2 from "../assets/product-2.png";

const Product = () => {
  return (
    <>
      <div className="pt-28 pb-16">
        <div className="container">
          <div className="w-full px-4">
            <div className="max-w-xl mx-auto text-center mb-16">
              <div className="flex gap-x-2 items-center justify-center mb-2">
                <ThreeCircle />
              </div>
              <h2 className="text-black font-medium text-4xl mb-4">
                Instant team chat
              </h2>
              <p className="font-reguler text-medium text-gray-700">
                Loremn is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever.
              </p>
            </div>
          </div>
          <div className="w-full px-4 flex flex-wrap justify-center">
            <div className="mb 12 p-4 md:w-1/2">
              <div className="rounded-md shadow-md overflow-hidden">
                <img src={product1} alt="" className="w-full" />
              </div>
            </div>
            <div className="mb 12 p-4 md:w-1/2">
              <div className="rounded-md shadow-md overflow-hidden">
                <img src={product2} alt="" className="w-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
