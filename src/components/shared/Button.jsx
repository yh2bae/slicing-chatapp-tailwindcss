import React from "react";

const Button = ({ children, className, variant }) => {
  const addClassName = className ? `${className}` : "";

  const variants = {
    "aqua": "bg-aqua-500 text-white hover:bg-aqua-300 focus:bg-aqua-300",
    "outline-blues": "border border-blues-500 text-blues-500 hover:bg-blues-900 hover:text-white focus:bg-blues-900 focus:text-blues-500",
    "outline-white": "border border-white text-white hover:bg-white hover:text-aqua-500 focus:bg-white focus:text-aqua-500",
  };
  const pickVariant = variants[variant];

  return (
    <a
      href="#"
      className={`py-2 px-8 w-max-full text-center font-semibold text-lg rounded-full inline-block font-mono ${pickVariant} ${addClassName}`}
    >
      {children}
    </a>
  );
};

export default Button;
