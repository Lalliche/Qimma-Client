"use client";
import React from "react";
import Header from "@/components/Sections/Header";
import Image from "next/image";
import RCloud from "@/app/assets/RCloud.png";
import LCloud from "@/app/assets/LCloud.png";
import Form from "./Form";
import Footer from "@/components/Sections/Footer";

export const BgBlur = () => {
  return (
    <div
      className="absolute inset-0 top-20 z-[-2] pointer-events-none "
      style={{
        background: "linear-gradient(to bottom, #eef2ff 0%, #D7EBFF 100%)",
        opacity: 0.9,
      }}
    />
  );
};

const LeftCloud = () => {
  return (
    <div className="absolute left-0 md:top-[5%] scale-150 xs:top-[3%] top-[5%]  lg:w-[20%] w-[40%]  overflow-hidden pointer-events-none z-30  ">
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
    <div className="absolute right-0 lg:top-[40%] sm:top-[50%] top-[60%] lg:w-[40%] sm:w-[50%] w-[70%] overflow-hidden pointer-events-none z-0  ">
      <Image
        src={RCloud}
        alt="Right Cloud"
        className="animate-slide-in-right opacity-0 will-change-transform"
      />
    </div>
  );
};

const RegisterPage = () => {
  return (
    <div className="relative  overflow-visible flex flex-col items-center gap-[2em]">
      <div className="relative min-h-screen pt-[10em] gap-[15em]  w-full flex flex-col justify-between items-center overflow-hidden ">
        <BgBlur />
        <LeftCloud />
        <RightCloud />

        <div className=" w-full lg:px-[10em] md:px-[8em] sm:px-[4em]  px-[2em]   ">
          <Form />
        </div>
        <Footer />
      </div>

      <Header forceBlur />
    </div>
  );
  /*  */
};

export default RegisterPage;
