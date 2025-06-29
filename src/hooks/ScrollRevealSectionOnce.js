"use client";
import { useEffect, useRef, useState } from "react";

export default function ScrollRevealSectionOnce({
  children,
  className = "",
  threshold = 0.1,
}) {
  const ref = useRef(null);
  const [hasRevealed, setHasRevealed] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || hasRevealed) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasRevealed(true);
          observer.unobserve(el);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [hasRevealed]);

  return (
    <div
      ref={ref}
      className={`transition-transform transition-opacity w-full z-[0] duration-700 ease-out will-change-transform ${
        hasRevealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      } ${className}`}
    >
      {hasRevealed && children}
    </div>
  );
}
