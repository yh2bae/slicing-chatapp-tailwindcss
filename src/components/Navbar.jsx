import React, { useEffect, useState } from "react";
import Button from "./shared/Button";

import { CgMenuRight, CgClose } from "react-icons/cg";
const Navbar = () => {
  const menu = [
    {
      title: "Product",
    },
    {
      title: "Resources",
    },
    {
      title: "Get a Demo",
    },
    {
      title: "Contact",
    },
    {
      title: "Login",
    },
  ];

  const [toggle, setToggle] = useState(true);

  const [changeNavbar, setChangeNavbar] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () =>
        setChangeNavbar(window.pageYOffset > 90)
      );
    }
  }, []);

  return (
    <div
      className={`top-0 left-0 w-full flex items-center z-10 ${
        changeNavbar ? "fixed bg-blue-500 shadow-lg" : "fixed bg-transparent"
      }`}
    >
      <div className="container">
        <div className="flex items-center justify-between relative">
          <div className="px-4">
            <a
              href="#home"
              className="font-bold text-2xl text-white block py-6"
            >
              chat<span className="text-aqua-500">app</span>
            </a>
          </div>
          <div className="flex items-center px-4">
            <div className="hidden md:block">
              <ul className="flex items-center">
                {menu.map((menu, i) => (
                  <li className="py-4" key={i}>
                    <a
                      href="#"
                      className="font-medium text-white py-2 mx-8 hover:text-gray-200 hover:border-b-2 hover:border-gray-200"
                    >
                      {menu.title}
                    </a>
                  </li>
                ))}
                <Button variant="aqua">Try if free</Button>
              </ul>
            </div>
            <button
              className="block absolute right-4 lg:hidden"
              onClick={() => setToggle(!toggle)}
            >
              {toggle ? (
                <CgMenuRight className="text-white text-3xl" />
              ) : (
                <>
                  <CgClose className="text-white text-3xl" />
                </>
              )}
            </button>
            {!toggle ? (
              <div class="absolute py-5 bg-white shadow-lg rounded-lg max-w-[250px] w-full right-4 top-16">
                <ul className="block">
                  {menu.map((menu, i) => (
                    <li className="py-4" key={i}>
                      <a
                        href="#"
                        className="font-medium text-blues-500 py-2 mx-8 hover:text-blues-900 hover:border-b-2 hover:border-blues-900"
                      >
                        {menu.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
