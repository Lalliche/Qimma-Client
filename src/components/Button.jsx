"use client";
import React, { useState, useEffect } from "react";

export default function Button({ text = "Button", onClick, className = "" }) {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 850) {
      setIsSmallScreen(true);
    }
  }, []);
  return (
    <div
      onClick={onClick}
      className={`group md:text-[1em] sm:text-[1.5em] text-[1.75em]  flex flex-row w-full justify-between items-center rounded-full bg-[#090812] px-[0.8125em] py-[0.625em] cursor-pointer relative ${className}`}
    >
      <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-[#69D2FF] via-[#00CFFF] via-[#458AEF] to-[#833CFE] transition-opacity duration-300 z-[-1] opacity-100 md:opacity-0 md:group-hover:opacity-100" />

      {/* Icon outer circle */}
      <div
        className="size-[2.625em] rounded-full flex items-center justify-center p-[0.375em] text-black 
        md:bg-[#9d9c9f] group-hover:bg-white bg-white transition-all duration-300 ease-in-out"
      >
        {/* Icon inner circle */}
        <div
          className={`group relative inline-block rounded-full p-[0.25em] m-2
    bg-black
    transition-all duration-300 ease-in-out
    md:group-hover:bg-[linear-gradient(to_right,#69D2FF_0%,#00CFFF_21%,#458AEF_62%,#833CFE_100%)]
  `}
          style={{
            background: isSmallScreen
              ? "linear-gradient(to right, #69D2FF 0%, #00CFFF 21%, #458AEF 62%, #833CFE 100%)"
              : undefined,
          }}
        >
          <div
            className="size-[1.625em] rounded-full 
            md:bg-[#9d9c9f] group-hover:bg-white bg-white
            transition-all duration-300 ease-in-out"
          />
        </div>
      </div>

      {/* Text */}
      <div
        className="text-[1.25em] flex items-center justify-center px-[1.5em]
    bg-clip-text text-transparent
    transition-all duration-300 ease-in-out
    "
        style={{
          backgroundImage: isSmallScreen
            ? "linear-gradient(to bottom, #FFFFFF, #8D8D8D)"
            : "linear-gradient(to bottom, #FFFFFF, #3A3A3A)",
        }}
      >
        {text}
      </div>
    </div>
  );
}
