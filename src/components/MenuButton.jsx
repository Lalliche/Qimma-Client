"use client";
import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import Link from "next/link";
import { useTranslations } from "next-intl";

const MenuButton = () => {
  const t = useTranslations("Menu");
  const [open, setOpen] = useState(false);
  const [isHovered, setHovered] = useState(false);

  const links = [
    { text: t("AboutUs"), redirection: "#AboutUs" },
    { text: t("Services"), redirection: "#Services" },
    { text: t("WhyUs"), redirection: "#WhyUs" },
    { text: t("JoinUs"), redirection: "#JoinUs" },
  ];

  return (
    <div className="relative z-50  ">
      {/* Gradient Def */}
      <svg width="0" height="0" className="absolute pointer-events-none">
        <linearGradient
          id="menu-icon-gradient"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="0%"
        >
          <stop stopColor="#69D2FF" offset="0%" />
          <stop stopColor="#00CFFF" offset="21%" />
          <stop stopColor="#458AEF" offset="62%" />
          <stop stopColor="#833CFE" offset="100%" />
        </linearGradient>
      </svg>

      {/* Button */}
      <div
        onClick={() => setOpen(!open)}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="group flex items-center justify-between rounded-full bg-[#090812] px-[0.8125em] py-[0.625em] cursor-pointer relative transition-all duration-300 ease-in-out w-fit"
      >
        {/* Gradient border */}
        <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-[#69D2FF] via-[#00CFFF] via-[#458AEF] to-[#833CFE] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-[-1]" />

        {/* Icon (FiMenu) with gradient fill on hover */}
        <div className="flex items-center justify-center p-[0.5em] aspect-square bg-white  rounded-full transition-all duration-300 ease-in-out">
          <FaBars
            size={24}
            style={{
              fill: isHovered ? "url(#menu-icon-gradient)" : "#000000",
              transition: "fill 0.3s ease-in-out",
            }}
          />
        </div>

        {/* Text */}
        <div
          className="text-[1.25em] items-center justify-center px-[1.5em] 
          bg-clip-text text-transparent transition-all duration-300 ease-in-out
          sm:block hidden
          "
          style={{
            backgroundImage: isHovered
              ? "linear-gradient(to bottom, #FFFFFF, #8D8D8D)"
              : "linear-gradient(to bottom, #FFFFFF, #3A3A3A)",
          }}
        >
          {t("title")}
        </div>
      </div>

      {/* Dropdown */}
      {open && (
        <div className="absolute right-0 mt-[0.5em] w-full min-w-[12em] bg-[#090812] text-white rounded-[1.5em] shadow-lg p-4 z-50 origin-top-right animate-dropdown">
          <ul className="flex flex-col gap-2">
            {links.map(({ text, redirection }) => (
              <Link
                key={text}
                href={redirection}
                className="block px-3 py-2 rounded-[0.75em] hover:bg-white/5 transition-colors"
              >
                {text}
              </Link>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default MenuButton;
