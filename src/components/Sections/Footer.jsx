import React from "react";
import FooterText from "@/app/assets/Footer.png";
import Mountain from "@/app/assets/mountain.png";
import Image from "next/image";
import SocialLinks from "../SocialLinks";
import ScrollRevealOnce from "@/hooks/ScrollRevealOnce";
import { useTranslations } from "next-intl";

const Footer = () => {
  const t = useTranslations("Footer");
  const topics = [t("learning"), t("digital"), t("events")];
  return (
    <div className="relative w-full flex flex-col justify-center items-center sm:gap-[1.75em] gap-[3em] sm:px-[5em] px-[1em]  py-[1.75em] overflow-visible">
      {/* Footer Text Image */}
      <ScrollRevealOnce className="duration-1000 delay-200">
        <div className="sm:w-[25em] w-[20em] ">
          <Image
            src={FooterText}
            alt="Footer Text"
            className="w-full h-auto object-cover"
            priority
          />
        </div>
      </ScrollRevealOnce>

      {/* Footer tags */}
      <ScrollRevealOnce className="  duration-1000 delay-200">
        <div className="flex  flex-row justify-center items-center gap-[0.5em]">
          {topics.map((text, index) => (
            <React.Fragment key={text}>
              <p
                className="text-[#090812] text-[1.25em] font-light"
                style={{  fontFamily: "var(--font-subtitle)", }}
              >
                {text}
              </p>
              {index < 2 && (
                <div className="size-[0.25em] rounded-full bg-[#090812]" />
              )}
            </React.Fragment>
          ))}
        </div>
      </ScrollRevealOnce>

      {/* Social icons */}
      <ScrollRevealOnce className="duration-1000 delay-200">
        {" "}
        <SocialLinks />
      </ScrollRevealOnce>

      <ScrollRevealOnce className="duration-1000 delay-200">
        <p
          className="text-[#090812] text-[1.25em] font-light"
          style={{  fontFamily: "var(--font-subtitle)",}}
        >
          {t("desc")}
        </p>
      </ScrollRevealOnce>
      <ScrollRevealOnce className="duration-1000 delay-200">
        <p
          className="text-[#090812] text-[1.25em] font-light"
          style={{ fontFamily: "var(--font-subtitle)", }}
        >
          {t("rights")}
        </p>
      </ScrollRevealOnce>

      {/* Mountain Image in Bottom Center */}

      <div className="absolute inset-0 overflow-visible z-[-3] pointer-events-none">
        <div className="absolute bottom-0 left-1/2  sm:scale-100 scale-150 transform -translate-x-1/2 w-full animate-slide-in-up">
          <Image
            src={Mountain}
            alt="Mountain"
            className="w-full h-auto object-contain"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
