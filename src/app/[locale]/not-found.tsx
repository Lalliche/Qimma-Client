"use client";
import { useTranslations } from "next-intl";
import { BgBlur } from "./register/page";
import Header from "@/components/Sections/Header";
import Footer from "@/components/Sections/Footer";
import Button from "@/components/Button";

import Image from "next/image";

export default function NotFound() {
  const t = useTranslations("Errors");

  const handleClick = () => {
    window.location.href = window.location.origin;
  };

  return (
    <div className="relative  w-full flex flex-col overflow-hidden items-center md:gap-[10em] gap-[1em] justify-between text-center">
      <Header forceBlur />
      <BgBlur />

      <div className="relative w-full min-h-screen flex items-center justify-center  px-[2em]">
        {/* Background image */}

        <Image
          src="/assets/404.png"
          alt="404 Not Found"
          fill
          className="object-contain  md:p-[10em] sm:p-[7em] xs:p-[5em] p-[3em]  pointer-events-none z-[1]"
        />

        <div className="flex flex-col z-10 justify-center items-center gap-[4em]  ">
          <p className="sm:text-[4em] xs:text-[3em] text-[2.5em] leading-[1.2em] text-center bg-gradient-to-b from-[#111020] to-[#1E3771] bg-clip-text text-transparent z-[1]">
            <span>{t("notFoundMessageLine1")}</span>
            <br />
            <span>{t("notFoundMessageLine2")}</span>
            <br />
            <span>{t("notFoundMessageLine3")}</span>
          </p>

          <Button
            text={t("cta")}
            className="!w-fit sm:!text-[1em] !text-[0.75em] xs:!text-[1em]  "
            onClick={handleClick}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
