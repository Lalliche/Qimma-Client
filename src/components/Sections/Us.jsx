"use client";
import React from "react";
import AnimationCard from "../Card";
import { PiLampPendantFill } from "react-icons/pi";
import { FaUsers } from "react-icons/fa6";
import { VscSparkleFilled } from "react-icons/vsc";
import ScrollRevealOnce from "@/hooks/ScrollRevealOnce";
import { useTranslations } from "next-intl";

// ShadCN Carousel imports
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Us = () => {
  const dir = typeof document !== "undefined" ? document?.dir : "ltr";

  const t = useTranslations("About");
  const cards = [
    {
      title: t("cards.team.title"),
      description: t("cards.team.desc"),
      icon: <FaUsers className="w-full h-full object-contain" />,
    },
    {
      title: t("cards.practice.title"),
      description: t("cards.practice.desc"),
      icon: <PiLampPendantFill className="w-full h-full object-contain" />,
    },
    {
      title: t("cards.creativity.title"),
      description: t("cards.creativity.desc"),
      icon: <VscSparkleFilled className="w-full h-full object-contain" />,
    },
  ];

  return (
    <div className="w-full flex flex-col justify-center items-center gap-[4em] py-[4em]">
      {/* Title */}
      <div className="flex flex-col justify-center items-center sm:gap-[1em] gap-[2.5em]  ">
        {/*   <ScrollRevealOnce className="duration-1000 delay-200"> */}
        <p className="text-[2.75em] text-center bg-gradient-to-b from-[#111020] to-[#1E3771] bg-clip-text text-transparent">
          {t("title")}
        </p>
        {/* </ScrollRevealOnce> */}
        {/* <ScrollRevealOnce className="duration-1000 delay-200"> */}
        <p
          className="text-[1.25em] font-light text-center sm:w-fill w-full px-[5em]  "
          style={{ fontFamily: "var(--font-outfit)" }}
        >
          {t("subtitle1")}
          <br />
          {t("subtitle2")}
        </p>
        {/* </ScrollRevealOnce> */}
      </div>

      {/* Grid layout for md+ */}
      <div className="w-full hidden md:grid grid-cols-3 gap-[1.5em] px-[4em]">
        {cards.map((card, i) => (
          <ScrollRevealOnce
            key={i}
            className={`duration-1000 delay-${200 + i * 300}`}
          >
            <AnimationCard
              title={card.title}
              description={card.description}
              icon={<div className="size-[4.5em]">{card.icon}</div>}
            />
          </ScrollRevealOnce>
        ))}
      </div>

      {/* Carousel for small screens */}
      <div className="w-full  md:hidden px-[6em]">
        <Carousel className="w-full max-w-full" dir={"ltr"}>
          <CarouselContent>
            {cards.map((card, i) => (
              <CarouselItem
                key={i}
                className="px-[1.5em] border-2 border-black "
              >
                <AnimationCard
                  title={card.title}
                  description={card.description}
                  icon={<div className="size-[4.5em]">{card.icon}</div>}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
};

export default Us;
