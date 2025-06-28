"use client";
import React from "react";

export default function Button({ text = "Button", onClick, className = "" }) {
  return (
    <div
      onClick={onClick}
      className={`group md:text-[1em] text-[1.75em]  flex flex-row w-full justify-between items-center rounded-full bg-[#090812] px-[0.8125em] py-[0.625em] cursor-pointer relative ${className}`}
    >
      {/* Gradient border on hover */}
      <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-[#69D2FF] via-[#00CFFF] via-[#458AEF] to-[#833CFE] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-[-1]" />

      {/* Icon outer circle */}
      <div
        className="size-[2.625em] rounded-full flex items-center justify-center p-[0.375em] text-black 
        bg-[#9d9c9f] group-hover:bg-white transition-all duration-300 ease-in-out"
      >
        {/* Icon inner circle */}
        <div
          className="relative inline-block rounded-full p-[0.25em] m-2 
          bg-black group-hover:bg-[linear-gradient(to_right,#69D2FF_0%,#00CFFF_21%,#458AEF_62%,#833CFE_100%)]
          transition-all duration-300 ease-in-out"
        >
          <div
            className="size-[1.625em] rounded-full 
            bg-[#9d9c9f] group-hover:bg-white 
            transition-all duration-300 ease-in-out"
          />
        </div>
      </div>

      {/* Text */}
      <div
        className="text-[1.25em] flex items-center justify-center px-[1.5em] 
        bg-gradient-to-b from-[#FFFFFF] to-[#3A3A3A] group-hover:to-[#8D8D8D] 
        bg-clip-text text-transparent 
        transition-all duration-300 ease-in-out"
      >
        {text}
      </div>
    </div>
  );
}
