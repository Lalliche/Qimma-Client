import React from "react";

export const ServicesCard = ({ title, description, slogan }) => {
  return (
    <div
      className="relative w-full rounded-[1.5em] h-full overflow-hidden"
      style={{
        boxShadow: "0px 0px 44px rgba(30, 55, 113, 0.07)", // x=0, y=0, blur=4px, 5% opacity
      }}
    >
      {/* Semi-transparent background with backdrop blur */}
      <div
        className="absolute inset-0 z-0 backdrop-blur-md "
        style={{
          background:
            "radial-gradient(circle, rgba(255,255,255,0.5) 0%, rgba(207,241,255,0.3) 100%)",
        }}
      />

      {/* Foreground content */}
      <div className="relative z-10 h-full w-full p-[2em] flex flex-col items-center gap-[1.5em] border border-white/50">
        <p className="text-[2.25em] text-[#111020] w-full">{title}</p>
        <p
          className="text-[1.25em] w-full font-light text-black"
          style={{ fontFamily: "var(--font-subtitle)", opacity: 0.45 }}
        >
          {description}
        </p>
        <p className="font-medium text-[#1E3771] w-full">{slogan}</p>
      </div>
    </div>
  );
};
