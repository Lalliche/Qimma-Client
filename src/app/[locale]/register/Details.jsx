import React from "react";
import { useTranslations } from "next-intl";

const Separation = () => {
  return (
    <div className="separation-gradient md:h-[7em] h-[2px] md:w-[2px] w-[50%] my-2 md:my-0" />
  );
};

const Content = () => {
  const t = useTranslations("Register");

  return (
    <div className="flex flex-col gap-[2em] justify-between items-center ">
      <p className="bg-gradient-to-b from-[#111020] to-[#1E3771] bg-clip-text text-transparent sm:text-[3em] text-[2em] ">
        {t("detailsTitle")}
      </p>

      <div className="w-full flex md:flex-row flex-col justify-between items-center text-center gap-[1em]">
        {[
          { title: t("whenTitle"), desc: t("whenDesc") },
          { title: t("whereTitle"), desc: t("whereDesc") },
          { title: t("whatToExpectTitle"), desc: t("whatToExpectDesc") },
        ].map((item, idx) => (
          <React.Fragment key={idx}>
            <div className="flex-1 flex flex-col gap-[0.5em] justify-center items-center max-w-[300px] min-w-[200px]">
              <p className="bg-gradient-to-b from-[#111020] to-[#1E3771] bg-clip-text text-transparent leading-[1.1] text-[1.75em] sm:text-[2.5em]">
                {item.title}
              </p>
              <p
                className="text-black/45 px-[1.5em] "
                style={{ fontFamily: "var(--font-subtitle)" }}
              >
                {item.desc}
              </p>
            </div>
            {idx !== 2 && <Separation />}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

const Details = () => {
  return (
    <div className=" relative w-full">
      <div
        className="relative w-full rounded-[1.5em] overflow-hidden py-10 "
        style={{
          boxShadow: "0px 0px 44px rgba(30, 55, 113, 0.07)",
        }}
      >
        <div
          className="absolute inset-0 z-[-1] backdrop-blur-md"
          style={{
            background:
              "radial-gradient(circle, rgba(255,255,255,0.5) 0%, rgba(207,241,255,0.3) 100%)",
          }}
        />
        <Content />
      </div>
    </div>
  );
};

export default Details;
