"use client";
import React from "react";
import Image from "next/image";
import RightCloud from "@/app/assets/RCloud.png";
import LeftCloud from "@/app/assets/LCloud.png";
import { useTranslations } from "next-intl";
import ScrollRevealOnce from "@/hooks/ScrollRevealOnce";

const Content = ({ title, description, isFirst, isLast }) => {
  return (
    <div className="relative flex flex-col justify-between py-[1.5em] lg:py-0 items-center px-[1.5em] gap-[1em] ">
      {/* Mobile gradient borders */}
      {isFirst && (
        <>
          {/* bottom-right corner gradient border */}
          <div
            className="absolute bottom-0 right-0 lg:hidden w-[60%] h-[2px]"
            style={{
              background:
                "linear-gradient(to right, transparent, #458AEF, #A1D0EC)",
            }}
          />
          <div
            className="absolute bottom-0 right-0 lg:hidden h-[60%] w-[2px]"
            style={{
              background:
                "linear-gradient(to bottom, transparent, #458AEF, #A1D0EC)",
            }}
          />
        </>
      )}
      {isLast && (
        <>
          {/* top-left corner gradient border */}
          <div
            className="absolute top-0 left-0 lg:hidden w-[60%] h-[2px]"
            style={{
              background:
                "linear-gradient(to left, transparent, #458AEF, #A1D0EC)",
            }}
          />
          <div
            className="absolute top-0 left-0 lg:hidden h-[60%] w-[2px]"
            style={{
              background:
                "linear-gradient(to top, transparent, #458AEF, #A1D0EC)",
            }}
          />
        </>
      )}

      <p className="text-[2em] text-center">{title}</p>

      <p
        className="text-[1.25em] font-light text-black/45"
        style={{ fontFamily: "var(--font-subtitle)" }}
      >
        {description}
      </p>
    </div>
  );
};

const WhyUs = () => {
  const t = useTranslations("WhyUs");
  const gradientBorder = {
    background:
      "linear-gradient(to bottom, #A1D0EC 0%, #458AEF 50%, #A1D0EC 99%)",
  };
  return (
    <div className="relative w-full flex flex-col overflow-hidden  items-center gap-[4em] py-[4em] lg:px-[6em] px-[2em]  ">
      <ScrollRevealOnce className="duration-1000 delay-75">
        <p className="text-[3em] text-center bg-gradient-to-b from-[#111020] to-[#1E3771] bg-clip-text text-transparent">
          {t("title")}
        </p>
      </ScrollRevealOnce>

      {/* Left Cloud */}
      <div className="absolute  lg:top-[10%] sm:-left-[10em] -left-[5em]  top-[10%]  w-[40%]  overflow-hidden pointer-events-none z-30  ">
        <Image
          src={LeftCloud}
          alt="Left Cloud"
          className=" opacity-0 will-change-transform  animate-slide-in-left z-30"
        />
      </div>

      {/* Background and Content Wrapper */}
      <div
        className="relative w-full rounded-[1.5em] overflow-hidden  "
        style={{
          boxShadow: "0px 0px 44px rgba(30, 55, 113, 0.07)",
        }}
      >
        {/* Background Blur + Gradient */}
        <div
          className="absolute inset-0 z-[19] backdrop-blur-md"
          style={{
            background:
              "radial-gradient(circle, rgba(255,255,255,0.5) 0%, rgba(207,241,255,0.3) 100%)",
          }}
        />

        {/* Foreground Content */}
        <div
          className="
  w-full relative z-20 
  px-[1.5em] lg:px-[2.5em] py-[4em] text-center 
  border border-white/50 rounded-[24px] 
   lg:flex lg:flex-row 
  grid lg:grid-cols-none grid-cols-2 gap-[2em] lg:gap-0
  
"
        >
          <Content
            isFirst
            title={
              <>
                {t("points.byYouth.title1")}
                <br />
                {t("points.byYouth.title2")}
              </>
            }
            description={t("points.byYouth.desc")}
          />
          <div className="w-[4px] hidden  lg:block" style={gradientBorder} />

          <Content
            title={t("points.learnByDoing.title")}
            description={t("points.learnByDoing.desc")}
          />
          <div className="w-[4px] hidden lg:block" style={gradientBorder} />

          <Content
            title={t("points.flexible.title")}
            description={t("points.flexible.desc")}
          />
          <div className="w-[4px] hidden lg:block" style={gradientBorder} />

          <Content
            title={t("points.livingSpace.title")}
            description={t("points.livingSpace.desc")}
            isLast
          />
        </div>
      </div>

      {/* Right Cloud */}
      <div className="absolute  right-0 lg:top-[25%] top-[50%] lg:w-[40%] w-[50%] overflow-hidden pointer-events-none z-0  ">
        <Image
          src={RightCloud}
          alt="Right Cloud"
          className="animate-slide-in-right opacity-0 will-change-transform"
        />
      </div>
    </div>
  );
};

export default WhyUs;
