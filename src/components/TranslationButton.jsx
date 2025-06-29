"use client";

import React, { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { IoLanguage } from "react-icons/io5";
import { setCookie } from "cookies-next";

const TranslationButton = () => {
  const [isHovered, setHovered] = useState(false);
  const [open, setOpen] = useState(false);

  const router = useRouter();
  const pathname = usePathname();

  const segments = pathname.split("/");
  const currentLocale = segments[1];
  const restOfPath = segments.slice(2).join("/");

  const handleSwitch = (targetLocale) => {
    if (targetLocale === currentLocale) return;

    setCookie("NEXT_LOCALE", targetLocale, {
      maxAge: 60 * 60 * 24 * 30,
      path: "/",
      sameSite: "strict",
      secure: process.env.NODE_ENV === "production",
    });

    const newPath = `/${targetLocale}/${restOfPath}`;
    router.push(newPath);
    setOpen(false);
  };

  return (
    <div className="relative z-50">
      {/* SVG Gradient Definition */}
      <svg width="0" height="0" className="absolute pointer-events-none">
        <linearGradient id="icon-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop stopColor="#69D2FF" offset="0%" />
          <stop stopColor="#00CFFF" offset="21%" />
          <stop stopColor="#458AEF" offset="62%" />
          <stop stopColor="#833CFE" offset="100%" />
        </linearGradient>
      </svg>

      {/* Button with gradient border */}
      <div
        onClick={() => setOpen(!open)}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="group flex items-center justify-center p-[0.625em] aspect-square bg-black rounded-full 
                   transition-all duration-300 ease-in-out cursor-pointer relative"
      >
        {/* Gradient border */}
        <div
          className={`absolute -inset-0.5 rounded-full bg-gradient-to-r from-[#69D2FF] via-[#00CFFF] via-[#458AEF] to-[#833CFE] transition-opacity duration-300 z-[-1] ${
            isHovered ? "opacity-100" : "opacity-0"
          } md:opacity-0 md:group-hover:opacity-100 opacity-100`}
        />

        {/* Icon wrapper */}
        <div className="flex items-center justify-center p-[0.5em] aspect-square bg-white rounded-full transition-all duration-300 ease-in-out">
          <IoLanguage
            className="sm:text-[1.5em] text-[1.25em] "
            style={{
              fill: "url(#icon-gradient)",
              transition: "fill 0.3s ease-in-out",
            }}
          />
        </div>
      </div>

      {/* Dropdown */}
      {open && (
        <div
          className={`absolute mt-[0.5em] w-fit min-w-[7em] bg-[#090812] text-white rounded-[1em] shadow-lg p-2 z-50 animate-dropdown ${
            currentLocale === "ar"
              ? "left-[2.2em] xs:left-0"
              : " right-[2.2em] xs:right-0 "
          }`}
        >
          <button
            onClick={() => handleSwitch("en")}
            className={`w-full text-left px-[0.75em] py-[0.5em] rounded-[0.75em] transition-colors flex items-center justify-center gap-2 ${
              currentLocale === "en"
                ? "bg-white/10 font-bold"
                : "hover:bg-white/5"
            }`}
          >
            English
          </button>
          <button
            onClick={() => handleSwitch("ar")}
            className={`w-full text-left mt-[0.25em] px-[0.75em] py-[0.5em] rounded-[0.75em] transition-colors flex items-center justify-center gap-2 ${
              currentLocale === "ar"
                ? "bg-white/15 font-bold"
                : "hover:bg-white/8"
            }`}
            style={{
              fontFamily: "RH-ZAK",
            }}
          >
            العربية
          </button>
        </div>
      )}
    </div>
  );
};

export default TranslationButton;
