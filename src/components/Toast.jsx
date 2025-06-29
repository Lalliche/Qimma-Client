"use client";
import React, { useEffect } from "react";

const Toast = ({ message, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 4000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div
      className="fixed top-[1.75em] font-bold left-1/2 -translate-x-1/2 z-[9999]"
      style={{
        fontFamily: "var(--font-subtitle)",
      }}
    >
      <div className="bg-white text-black px-[1.5em] py-[0.75em] border-2 border-green-600/75  rounded-xl shadow-lg animate-fadeInUp">
        {message}
      </div>
    </div>
  );
};

export default Toast;
