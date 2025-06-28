"use client";

import { useTranslations, useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/navigation";
import { setCookie } from "cookies-next";
import Us from "@/components/Sections/Us";
import BlobGradient from "@/components/Sections/BlobGradient";
import Services from "@/components/Sections/Services";
import WhyUs from "@/components/Sections/WhyUs";
import JoinUs from "@/components/Sections/JoinUs";
import Footer from "@/components/Sections/Footer";
import TranslationButton from "@/components/TranslationButton";
import MenuButton from "@/components/MenuButton";
import Header from "@/components/Sections/Header";
import ScrollRevealSectionOnce from "@/hooks/ScrollRevealSectionOnce";
import ScrollRevealOnce from "@/hooks/ScrollRevealOnce";

export default function HomePage() {
  /* const t = useTranslations("HomePage"); */
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const targetLocale = locale === "en" ? "ar" : "en";

  const switchLocale = () => {
    setCookie("NEXT_LOCALE", targetLocale, { maxAge: 60 * 60 * 24 * 30 });
    router.push(pathname, { locale: targetLocale });
  };

  return (
    <div className="relative overflow-visible flex flex-col items-center gap-[2em]">
      {" "}
      <div className="w-full md:p-[1em] p-[2em] " id="Hero">
        <BlobGradient />
      </div>{" "}
      <Header />
      <div id="AboutUs" className=" w-full">
        <ScrollRevealSectionOnce className="duration-1000 delay-200">
          <Us />
        </ScrollRevealSectionOnce>
      </div>
      <ScrollRevealSectionOnce className="duration-1000 delay-200">
        <div id="Services" className=" w-full">
          <Services />
        </div>
      </ScrollRevealSectionOnce>
      <div id="WhyUs" className=" w-full">
        <ScrollRevealSectionOnce className="duration-1000 delay-200">
          <WhyUs />
        </ScrollRevealSectionOnce>
      </div>
      <div className="relative w-full  overflow-hidden  ">
        <div
          className="absolute inset-0 z-[-2] pointer-events-none"
          style={{
            background: "linear-gradient(to bottom, #eef2ff 0%, #D7EBFF 100%)",
            opacity: 0.9,
          }}
        />
        <div id="JoinUs" className=" w-full">
          <JoinUs />
        </div>

        <div className=" w-full">
          <Footer />
        </div>
      </div>
    </div>
  );
}
