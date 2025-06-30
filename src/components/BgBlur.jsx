"use client";
import React from "react";

export default function BgBlur() {
  return (
    <div
      className="absolute inset-0 top-20 z-[-2] pointer-events-none"
      style={{
        background: "linear-gradient(to bottom, #eef2ff 0%, #D7EBFF 100%)",
        opacity: 0.9,
      }}
    />
  );
}
