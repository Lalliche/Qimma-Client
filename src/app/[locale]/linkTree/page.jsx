"use client";
import React from "react";
import LCloud from "@/app/assets/LCloud.png";
import Mountain from "@/app/assets/mountain.png";
import Logo from "@/app/assets/Logo-Colored.png";
import Image from "next/image";
import BgBlur from "@/components/BgBlur";
import { useTranslations } from "next-intl";
import {
  FaInstagram,
  FaLinkedin,
  FaFacebook,
  FaDiscord,
  FaTiktok,
} from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import Link from "next/link";
import { usePathname } from "next/navigation";

const TreeList = ({ title, icon: Icon, link }) => {
  return (
    <Link
      href={link}
      target="_blank"
      className="relative w-full h-full rounded-[1.5em] overflow-hidden p-[1.25em] flex flex-col items-center gap-[1.5em] border-2 border-white/50 backdrop-blur-md transition-transform hover:scale-[1.02]"
      style={{
        background:
          "radial-gradient(circle, rgba(255,255,255,0.2) 0%, rgba(207,241,255,0.9) 100%)",
        boxShadow: "0px 0px 44px rgba(30, 55, 113, 0.07)",
      }}
    >
      <div
        className="absolute left-[1em] top-1/2 -translate-y-1/2 rounded-full p-[0.5em]"
        style={{ backgroundColor: "rgba(59, 130, 246, 0.2)" }}
      >
        <Icon className="text-[1.75em] text-[#458AEF]" />
      </div>
      <span className="text-center text-[1em] font-semibold text-[#1E3771]">
        {title}
      </span>
    </Link>
  );
};

const MountainDiv = () => {
  return (
    <div className="absolute inset-0 overflow-visible z-[-3] pointer-events-none">
      <div className="absolute  bottom-0 left-1/2 transform -translate-x-1/2 w-full animate-slide-in-up">
        <Image
          src={Mountain}
          alt="Mountain"
          className="w-full h-auto object-contain"
          priority
        />
      </div>
    </div>
  );
};

const LeftCloud = () => {
  return (
    <div className="absolute left-0  scale-150  xs:top-[15%] top-[12%] md:top-[10%]  lg:w-[30%] w-[40%]  overflow-hidden pointer-events-none z-30  ">
      <Image
        src={LCloud}
        alt="Left Cloud"
        className=" opacity-0 will-change-transform  animate-slide-in-left z-30"
      />
    </div>
  );
};

const page = () => {
  const t = useTranslations("LinkTree");
  const f = useTranslations("Footer");

  const socialLinks = [
    {
      title: t("fb"),
      icon: FaFacebook,
      link: "https://www.facebook.com/profile.php?id=61577975517494",
    },
    {
      title: t("instagram"),
      icon: FaInstagram,
      link: "https://www.instagram.com/qimma.learning/",
    },
    {
      title: t("tikTok"),
      icon: FaTiktok,
      link: "https://www.tiktok.com/@qimmatok",
    },
    {
      title: t("lin"),
      icon: FaLinkedin,
      link: "https://www.linkedin.com/company/qimmalearning",
    },
    {
      title: t("ds"),
      icon: FaDiscord,
      link: "https://discord.gg/rycMEXSnuu",
    },
    {
      title: t("web"),
      icon: TbWorld,
      link: "https://www.qimmalearning.com",
    },
  ];

  const pathname = usePathname();
  const currentLocale = pathname.split("/")[1] || "en";

  return (
    <div className="relative overflow-visible flex flex-col items-center gap-[2em]">
      <div className="relative py-[1em] min-h-screen gap-[8em] md:px-[30%] sm:px-[20%] px-[10%] w-full flex flex-col justify-center items-center overflow-hidden ">
        <BgBlur />
        <LeftCloud />
        <MountainDiv />

        <div className=" w-full gap-[2em] flex flex-col  ">
          <div className="flex justify-center items-center px-[25%] w-full">
            <Link href={`/${currentLocale}`}>
              <Image
                src={Logo}
                alt="Qimma"
                className="logo-image opacity-0 will-change-transform cursor-pointer"
              />
            </Link>
          </div>
          <h1 className="text-[2em]  text-center bg-gradient-to-b from-[#111020] to-[#1E3771] bg-clip-text text-transparent">
            {t("title")}
          </h1>
          <div className="w-full flex flex-col gap-[1em] xs:px-[15%] px-[5%] ">
            {socialLinks.map((item) => (
              <TreeList
                key={item.link}
                title={item.title}
                icon={item.icon}
                link={item.link}
              />
            ))}
          </div>

          <h1 className="text-[1.25em] px-[30%] mt-[2em] text-center bg-gradient-to-b from-[#111020] to-[#1E3771] bg-clip-text text-transparent">
            {t("footer")}
          </h1>
          <h1
            className="text-[0.75em] mt-[2em] text-center text-[#6B7280]"
            style={{ fontFamily: "var(--font-subtitle)" }}
          >
            {f("rights")}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default page;
