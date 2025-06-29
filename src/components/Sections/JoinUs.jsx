"use client";
import React from "react";
import Button from "../Button";
import ScrollRevealOnce from "@/hooks/ScrollRevealOnce";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { useLocale } from "next-intl";

const JoinUs = () => {
  const t = useTranslations("Join");
  const router = useRouter();
  const locale = useLocale();
  const handleClick = () => {
    router.push(`/register`);
  };
  return (
    <div className="w-full text-center md:text-left  flex md:flex-row flex-col justify-between items-center px-[2em] sm:px-[6em] md:px-[10em] md:gap-[2em] gap-[4em]  xl:px-[15em] py-[8em]">
      {/* <ScrollRevealOnce className="duration-1000 delay-200"> */}
      <p className="text-[4em] bg-gradient-to-b from-[#111020] to-[#1E3771] bg-clip-text text-transparent">
        {t("title1")}
        <br />
        {t("title2")}
      </p>
      {/* </ScrollRevealOnce> */}
      {/*  <ScrollRevealOnce className="duration-1000 delay-400"> */}
      <Button
        text={t("cta")}
        className="!w-fit md:!text-[1em] !text-[1.25em] "
        onClick={handleClick}
      />
      {/* </ScrollRevealOnce> */}
    </div>
  );
};

export default JoinUs;
