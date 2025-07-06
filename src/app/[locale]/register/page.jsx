"use client";
import React from "react";
import Header from "@/components/Sections/Header";
import Image from "next/image";
import RCloud from "@/app/assets/RCloud.png";
import LCloud from "@/app/assets/LCloud.png";
import Form from "./Form";
import Footer from "@/components/Sections/Footer";
import BgBlur from "@/components/BgBlur";
import CountDown from "./CountDown";
import Details from "./Details";
import { useTranslations } from "next-intl";
import ComingSoon from "@/components/ComingSoon";

/* const LeftCloud = () => {
  return (
    <div className="absolute left-0  scale-150  top-[0%]  lg:w-[20%] w-[40%]  overflow-hidden pointer-events-none z-30  ">
      <Image
        src={LCloud}
        alt="Left Cloud"
        className=" opacity-0 will-change-transform  animate-slide-in-left z-30"
      />
    </div>
  );
};

const RightCloud = () => {
  return (
    <div className="absolute right-0 md:top-[35%] sm:top-[30%] xs:top-[37%] top-[40%] lg:w-[40%] sm:w-[50%] w-[70%] overflow-hidden pointer-events-none z-0  ">
      <Image
        src={RCloud}
        alt="Right Cloud"
        className="animate-slide-in-right opacity-0 will-change-transform"
      />
    </div>
  );
}; */

const RegisterPage = () => {
  const t = useTranslations("Register");
  return <ComingSoon />;
  {
    /* <div className="relative  overflow-visible flex flex-col items-center gap-[2em]">
      <div className="relative min-h-screen pt-[10em] gap-[8em]  w-full flex flex-col justify-between items-center overflow-hidden ">
        <BgBlur />
        <LeftCloud />
        <RightCloud />

        <div className=" w-full lg:px-[10em] md:px-[8em] sm:px-[4em]  px-[2em]   ">
          <Form />
        </div>
        <div className=" w-full flex flex-col gap-[4em] lg:px-[10em] md:px-[8em] sm:px-[4em]  px-[2em]   ">
          <CountDown
            title={
              <>
                <p className="text-[4em] font-semibold bg-gradient-to-b from-[#111020] to-[#1E3771] bg-clip-text text-transparent">
                  {t("clockTitle1")}
                </p>
                <p className="text-[4em] font-semibold bg-gradient-to-b from-[#111020] to-[#1E3771] bg-clip-text text-transparent">
                  {t("clockTitle2")}
                </p>
              </>
            }
            description={
              <p
                className="text-[#11102] mt-[1.5em]"
                style={{ fontFamily: "var(--font-subtitle)" }}
              >
                {t("clockDesc")}
              </p>
            }
            EndDate="2025-07-06T00:00:00"
          />
          <Details />
        </div>

        <Footer />
      </div>

      <Header forceBlur />
    </div> */
  }

  /*  */
};

export default RegisterPage;
