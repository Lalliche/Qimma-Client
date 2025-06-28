"use client";
import { useEffect, useRef, useState } from "react";
import "../../app/globals.css";
import LogoWhite from "../../app/assets/Logo-White.png";
import Image from "next/image";
import Button from "../Button";
import ScrollRevealOnce from "@/hooks/ScrollRevealOnce";
import { useTranslations } from "next-intl";

export default function BlobGradient() {
  const t = useTranslations("Hero");
  useEffect(() => {
    const overlay = document.getElementById("dot-overlay");
    if (!overlay) return;

    const dotSize = 4;
    const spacing = 20;
    const cols = Math.floor(overlay.offsetWidth / spacing);
    const rows = Math.floor(overlay.offsetHeight / spacing);
    const fragment = document.createDocumentFragment();

    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < cols; x++) {
        const dot = document.createElement("div");
        dot.style.position = "absolute";
        dot.style.width = `${dotSize}px`;
        dot.style.height = `${dotSize}px`;
        dot.style.borderRadius = "50%";
        dot.style.backgroundColor = "rgba(255,255,255,0.06)";
        dot.style.left = `${x * spacing}px`;
        dot.style.top = `${y * spacing}px`;
        fragment.appendChild(dot);
      }
    }

    overlay.innerHTML = "";
    overlay.appendChild(fragment);
  }, []);

  return (
    <div
      className="blob-bg md:h-[120vh] h-[100vh] sm:text-[1em] text-[0.625em] relative overflow-hidden  "
      style={{ borderRadius: "1.5em" }}
    >
      <div className="absolute w-full px-[4em]  h-full  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 flex flex-col items-center justify-center md:gap-[2.5em] gap-[6em]  ">
        <ScrollRevealOnce className="duration-1000 delay-200">
          <div className=" flex flex-col md:text-[1.0625em]  text-[1.5em] items-center justify-center gap-[1.625em]">
            <Image
              src={LogoWhite}
              alt="Logo"
              className="size-[13em] "
              priority
            />
            <p className="text-[3.5em] text-center text-white leading-tight">
              {t("title1")}
              <br />
              {t("title2")}
            </p>
            <p
              className="text-white font-light text-center "
              style={{ fontFamily: "var(--font-outfit)" }}
            >
              {t("subtitle")}
            </p>
          </div>
        </ScrollRevealOnce>
        <ScrollRevealOnce className="duration-1000 delay-400">
          <Button
            text={t("cta")}
            className="!w-fit  "
            icon={
              <div className="relative inline-block rounded-full p-[0.25em] m-2 bg-[linear-gradient(to_right,#69D2FF_0%,#00CFFF_21%,#458AEF_62%,#833CFE_100%)]">
                <div className="size-[1.625em] rounded-full bg-white  " />
              </div>
            }
          />
        </ScrollRevealOnce>
      </div>

      {/* Dot Overlay */}
      <div
        className="dot-overlay pointer-events-none absolute inset-0 z-10  "
        id="dot-overlay"
      />

      {/* Glows and Lines */}
      <div className="ellipse-blur top-glow" />
      <div className="ellipse-blur bottom-glow" />
      <div className="absolute bottom-0 left-0 w-[2px] origin-bottom xxl:rotate-[37deg] xl:rotate-[28deg] md:rotate-[20deg] rotate-[12deg] bg-gradient-to-t from-white to-transparent opacity-75 animate-line-95" />
      <div className="absolute bottom-0 right-0 w-[2px] origin-bottom xxl:rotate-[-37deg] xl:rotate-[-28deg] md:rotate-[-20deg] rotate-[-12deg]   bg-gradient-to-t from-white to-transparent opacity-75 animate-line-95" />
      <div className="absolute bottom-0 left-1/2 w-[2px] origin-bottom -translate-x-1/2 bg-gradient-to-t from-white to-transparent opacity-75 animate-line-75" />

      {/* Gradient Blobs */}
      <div className="gradient blob1" style={{ top: "0%", left: "0%" }} />
      <div className="gradient blob1" style={{ top: "20%", left: "80%" }} />
      <div className="gradient blob2" style={{ top: "-40%", left: "70%" }} />
      <div className="gradient blob3" style={{ top: "10%", left: "50%" }} />
      <div className="gradient blob3" style={{ top: "30%", left: "90%" }} />
    </div>
  );
}
