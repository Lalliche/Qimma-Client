import React from "react";
import LinkedIn from "@/app/assets/LinkedIn.png";
import Facebook from "@/app/assets/Facebook.png";
import Instagram from "@/app/assets/Instagram.png";
import Discord from "@/app/assets/Discord.png";
import TikTok from "@/app/assets/TikTok.png";
import Image from "next/image";
import Link from "next/link";

const SocialCard = ({ image, altText, link }) => {
  return (
    <Link
      href={link}
      target="_blank"
      className="flex items-center justify-center size-[4em] p-[0.75em] rounded-full bg-white transform transition-transform duration-300 hover:scale-105"
    >
      <Image src={image} alt={altText} className="w-full h-auto object-cover" />
    </Link>
  );
};

const SocialLinks = () => {
  return (
    <div className=" grid grid-cols-12 sm:grid-cols-5 sm:gap-[3.5em] gap-[2em] p-[1em]">
      {[
        {
          image: Facebook,
          altText: "Facebook",
          link: "https://www.facebook.com/profile.php?id=61577975517494",
        },
        {
          image: Instagram,
          altText: "Instagram",
          link: "https://www.instagram.com/qimma.learning/",
        },
        {
          image: TikTok,
          altText: "TikTok",
          link: "https://www.tiktok.com/@qimmatok",
        },
        {
          image: LinkedIn,
          altText: "LinkedIn",
          link: "https://www.linkedin.com/company/qimmalearning",
        },
        {
          image: Discord,
          altText: "Discord",
          link: "https://discord.gg/rycMEXSnuu",
        },
      ].map((social, i) => (
        <div
          key={social.altText}
          className={`
          col-span-4 sm:col-span-1
          ${i >= 3 ? "col-span-6 sm:col-span-1" : ""}
          flex justify-center
        `}
        >
          {SocialCard({
            image: social.image,
            altText: social.altText,
            link: social.link,
          })}
        </div>
      ))}
    </div>
  );
};

export default SocialLinks;
