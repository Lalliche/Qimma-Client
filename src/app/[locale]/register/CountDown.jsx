"use client";
import React, { useEffect, useState } from "react";
import { useTranslations } from "next-intl";

const Separation = () => {
  return (
    <div
      className="h-[7em] w-[2px]"
      style={{
        background: "linear-gradient(to top, transparent, #458AEF, #A1D0EC)",
      }}
    />
  );
};

const TimeUnit = ({ value, label }) => {
  return (
    <div className="flex-1 flex flex-col justify-center items-center">
      <p
        className="bg-gradient-to-b  from-[#111020] to-[#1E3771] bg-clip-text text-transparent sm:text-[5em] text-[3em] "
        style={{ fontFamily: "var(--font-cal-sans)" }}
      >
        {value.toString().padStart(2, "0")}
      </p>
      <p className="bg-gradient-to-b from-[#111020] to-[#1E3771] bg-clip-text text-transparent opacity-45 sm:text-[1.5em] text-[0.75em] ">
        {label}
      </p>
    </div>
  );
};

const Clock = ({ endDate }) => {
  const t = useTranslations("Register");

  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const distance = new Date(endDate).getTime() - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((distance / (1000 * 60)) % 60);
    const seconds = Math.floor((distance / 1000) % 60);

    return distance > 0
      ? { days, hours, minutes, seconds }
      : { days: 0, hours: 0, minutes: 0, seconds: 0 };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true); // Prevents hydration mismatch
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, [endDate]);

  if (!hasMounted) return null; // Don't render until after mount

  return (
    <div className="flex flex-row sm:gap-[1em] gap-[0.5em] justify-between overflow-hidden w-full items-center">
      <TimeUnit value={timeLeft.days} label={t("day")} />
      <Separation />
      <TimeUnit value={timeLeft.hours} label={t("hour")} />
      <Separation />
      <TimeUnit value={timeLeft.minutes} label={t("minute")} />
      <Separation />
      <TimeUnit value={timeLeft.seconds} label={t("second")} />
    </div>
  );
};

const CountDown = ({ title, description, EndDate }) => {
  return (
    <div className="w-full flex lg:flex-row flex-col lg:gap-0 gap-[2em] justify-between items-center">
      <div className=" flex flex-col justify-center text-center lg:text-left  lg:items-start items-center w-full ">
        {title}
        {description}
      </div>
      <Clock endDate={EndDate} />
    </div>
  );
};

export default CountDown;
