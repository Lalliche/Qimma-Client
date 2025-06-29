"use client";
import React, { useEffect, useRef, useState } from "react";

const AnimationCard = ({ title, description, icon }) => {
  console.log("rendering card", title);
  const overlayRef = useRef(null);
  const backgroundRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [showLayer, setShowLayer] = useState(false);
  const [animateClass, setAnimateClass] = useState("");
  const [clipCenter, setClipCenter] = useState({ x: "50%", y: "0%" });

  useEffect(() => {
    const overlay = overlayRef.current;
    if (!overlay) return;

    const dotSize = 3;
    const spacing = 20;
    const width = overlay.offsetWidth;
    const height = overlay.offsetHeight;

    // Only create dots once
    if (overlay.childNodes.length === 0) {
      for (let y = 0; y <= height; y += spacing) {
        for (let x = 0; x <= width; x += spacing) {
          const dot = document.createElement("div");
          dot.classList.add("card-dot");
          dot.style.position = "absolute";
          dot.style.width = `${dotSize}px`;
          dot.style.height = `${dotSize}px`;
          dot.style.borderRadius = "50%";
          dot.style.left = `${x}px`;
          dot.style.top = `${y}px`;
          overlay.appendChild(dot);
        }
      }
    }

    // Toggle class for smooth color transition
    overlay.childNodes.forEach((dot) => {
      if (dot instanceof HTMLElement) {
        dot.classList.toggle("card-dot-hovered", isHovered);
      }
    });
  }, [isHovered]);

  const handleMouseEnter = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setClipCenter({ x: `${x}%`, y: `${y}%` });
    setShowLayer(true);
    setIsHovered(true);
    setAnimateClass("card-reveal");
  };

  const handleMouseLeave = () => {
    setAnimateClass("card-hide");
    setIsHovered(false);
    setTimeout(() => setShowLayer(false), 500); // matches animation duration
  };

  useEffect(() => {
    if (backgroundRef.current) {
      backgroundRef.current.style.setProperty("--x", clipCenter.x);
      backgroundRef.current.style.setProperty("--y", clipCenter.y);
    }
  }, [clipCenter]);
  7;

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setShowLayer(true);
        setIsHovered(true);
        setAnimateClass("card-reveal");

        // Delay dot generation until the overlay exists and has dimensions
        setTimeout(() => {
          const overlay = overlayRef.current;
          if (!overlay || overlay.childNodes.length > 0) return;

          const dotSize = 3;
          const spacing = 20;
          const width = overlay.offsetWidth;
          const height = overlay.offsetHeight;

          for (let y = 0; y <= height; y += spacing) {
            for (let x = 0; x <= width; x += spacing) {
              const dot = document.createElement("div");
              dot.classList.add("card-dot");
              dot.style.position = "absolute";
              dot.style.width = `${dotSize}px`;
              dot.style.height = `${dotSize}px`;
              dot.style.borderRadius = "50%";
              dot.style.left = `${x}px`;
              dot.style.top = `${y}px`;
              overlay.appendChild(dot);
            }
          }

          overlay.childNodes.forEach((dot) => {
            if (dot instanceof HTMLElement) {
              dot.classList.add("card-dot-hovered");
            }
          });
        }, 100); // Wait ~1 frame for DOM to render
      } else {
        setShowLayer(false);
        setIsHovered(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="h-full relative w-full  overflow-hidden rounded-[1.5em]  bg-white p-[2.25em] py-[3em] transition-all duration-500"
    >
      {/* Dot Overlay */}
      <div
        ref={overlayRef}
        className="pointer-events-none  absolute inset-0 z-10 "
      />

      {/* Top-Tear Layer */}
      {showLayer && (
        <div
          ref={backgroundRef}
          className={`absolute inset-0 z-0 overflow-hidden ${animateClass}`}
          style={{
            background: "linear-gradient(to bottom, #ffffff, #e0f3ff)",
            transition: "all 0.5s ease-in-out",
          }}
        >
          <div
            className="card-gradient blob1"
            style={{ top: "-50%", left: "-50%" }}
          />
          <div
            className="card-gradient blob1"
            style={{ top: "70%", left: "-20%" }}
          />
          <div
            className="card-gradient blob3"
            style={{ top: "0%", left: "70%" }}
          />
          <div
            className="card-gradient blob3"
            style={{ top: "50%", left: "50%" }}
          />
          <div
            className="card-gradient blob2"
            style={{ top: "-30%", left: "70%" }}
          />
          <div
            className="card-gradient blob3"
            style={{ top: "20%", left: "90%" }}
          />
        </div>
      )}

      {/* Card Content */}
      <div className="relative  z-20 flex flex-col items-center justify-center gap-[1.125em] transition-all duration-500">
        <div
          className="flex items-center justify-center size-[7.5em] rounded-full border transition-all duration-500"
          style={{
            background: isHovered
              ? "radial-gradient(circle, rgba(161, 208, 236, 0.1) 0%, rgba(255,255,255,0.1) 100%)"
              : "#ffffff",
            backdropFilter: "blur(8px)",
            WebkitBackdropFilter: "blur(8px)",
            borderColor: isHovered ? "rgba(161, 208, 236, 0.1)" : "#d5d5d5",
            color: isHovered ? "#ffffff" : "#a2a2a2",
          }}
        >
          {icon}
        </div>
        <p
          className="text-[2em] text-center leading-tight transition-all duration-500"
          style={{
            /*    lineHeight: "1.2em",
            height: "2.4em", */
            background: isHovered
              ? "none"
              : "radial-gradient(circle, #5B5B5BFF 0%, #666666 100%)",
            color: isHovered ? "#ffffff" : "transparent",
            WebkitBackgroundClip: isHovered ? "unset" : "text",
            WebkitTextFillColor: isHovered ? "#ffffff" : "transparent",
            overflow: "hidden",
            /*  display: "-webkit-box",
             WebkitLineClamp: 2, */
            WebkitBoxOrient: "vertical",
          }}
        >
          {title}
        </p>

        <p
          className="text-center font-light transition-colors duration-500"
          style={{
            fontFamily: "var(--font-subtitle)",
            color: isHovered ? "#ffffff" : "rgba(0, 0, 0, 0.45)",
          }}
        >
          {description}
        </p>
      </div>
    </div>
  );
};

export default AnimationCard;
