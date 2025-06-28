"use client";
import React from "react";
import Image from "next/image";
import LogoColored from "../../app/assets/Logo-Colored.png";
import { ServicesCard } from "../ServicesCard";
import { useTranslations } from "next-intl";
import ScrollRevealOnce from "@/hooks/ScrollRevealOnce";

const Services = () => {
  const t = useTranslations("Services");

  return (
    <div className="w-full flex flex-col items-center gap-[4em] py-[2em] overflow-hidden ">
      <div className="relative z-10 flex flex-col items-center gap-[4em] w-full">
        {/* Heading */}
        <div className="flex flex-col justify-center items-center gap-[1em] px-[2em] text-center">
          <p className="text-[3em] bg-gradient-to-b from-[#111020] to-[#1E3771] bg-clip-text text-transparent">
            {t("title")}
          </p>
          <p
            className="md:text-[1.25em] text-[2em]  font-light"
            style={{ fontFamily: "var(--font-outfit)" }}
          >
            {t("subtitle")}
          </p>
        </div>

        {/* Cards */}
        <div className="relative grid sm:grid-cols-2 grid-cols-1 items-stretch gap-[2.5em] w-full md:px-[7em] sm:px-[4.5em] px-[2.5em] ">
          <Image
            src={LogoColored}
            alt="Qimma Logo"
            fill
            className="absolute inset-0 sm:scale-100 xs:scale-150 scale-200 object-contain z-[-10] animate-rotate-in"
          />

          <ScrollRevealOnce className="duration-1000 delay-200">
            <ServicesCard
              title={t("cards.camp.title")}
              description={t("cards.camp.description")}
              slogan={t("cards.camp.slogan")}
            />
          </ScrollRevealOnce>
          <ScrollRevealOnce className="duration-1000 delay-500">
            <ServicesCard
              title={t("cards.courses.title")}
              description={t("cards.courses.description")}
              slogan={t("cards.courses.slogan")}
            />
          </ScrollRevealOnce>
          <ScrollRevealOnce className="duration-1000 delay-700">
            <ServicesCard
              title={t("cards.events.title")}
              description={t("cards.events.description")}
              slogan={t("cards.events.slogan")}
            />
          </ScrollRevealOnce>
          <ScrollRevealOnce className="duration-1000 delay-1000">
            <ServicesCard
              title={t("cards.studio.title")}
              description={t("cards.studio.description")}
              slogan={t("cards.studio.slogan")}
            />
          </ScrollRevealOnce>
        </div>
      </div>
    </div>
  );
};

export default Services;
