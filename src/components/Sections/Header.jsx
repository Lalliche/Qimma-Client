"use client";
import React, { useEffect, useRef, useState } from "react";
import LogoWhite from "../../app/assets/Logo-White.png";
import LogoColored from "../../app/assets/Logo-Colored.png";
import Image from "next/image";
import TranslationButton from "@/components/TranslationButton";
import MenuButton from "@/components/MenuButton";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = ({ forceBlur = false }) => {
  const [blurBg, setBlurBg] = useState(forceBlur);
  const [logoAnim, setLogoAnim] = useState("");
  const prevBlur = useRef(forceBlur);

  const pathname = usePathname();
  const currentLocale = pathname.split("/")[1] || "en";

  useEffect(() => {
    if (forceBlur) return;

    const hero = document.getElementById("Hero");
    if (!hero) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const isNowBlurred = !entry.isIntersecting;

        if (prevBlur.current !== isNowBlurred) {
          setLogoAnim("animate-logo-pulse");
          setTimeout(() => setLogoAnim(""), 600);
        }

        setBlurBg(isNowBlurred);
        prevBlur.current = isNowBlurred;
      },
      { threshold: 0.1 }
    );

    observer.observe(hero);
    return () => observer.disconnect();
  }, [forceBlur]);

  return (
    <div className="fixed md:top-[1em] md:inset-x-[1em] inset-x-[3em] top-[3em] z-50">
      {/* Blur background layer */}
      <div
        className={`absolute rounded-full inset-0 z-[-1] pointer-events-none transition-all duration-500 ease-in-out ${
          blurBg
            ? "opacity-100 backdrop-blur-[4px] border-2 border-white/15 "
            : "opacity-0 backdrop-blur-0"
        }`}
        style={{
          background:
            "radial-gradient(circle, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.1) 100%)",
        }}
      />

      {/* Header content */}
      <div className="w-full px-[1.25em] py-[0.5em] flex items-center justify-between transition-all duration-500 ease-in-out">
        <div className={`transition-all duration-500 ease-in-out ${logoAnim}`}>
          <Link href={`/${currentLocale}`}>
            <Image
              src={blurBg ? LogoColored : LogoWhite}
              alt="Logo"
              className="size-[3.5em] cursor-pointer"
              priority
            />
          </Link>
        </div>

        <div className="flex flex-row gap-[1em] items-center sm:w-fit w-[55%] justify-between sm:justify-center">
          <TranslationButton />
          <MenuButton />
        </div>
      </div>
    </div>
  );
};

export default Header;
