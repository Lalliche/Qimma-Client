"use client";
import { useEffect, useRef, useState } from "react";

export default function ScrollRevealOnce({
  children,
  className = "",
  threshold = 0.1,
}) {
  const ref = useRef(null);
  const [hasRevealed, setHasRevealed] = useState(false); // stays true once visible

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasRevealed) {
          setHasRevealed(true); // trigger reveal once
          observer.unobserve(el); // stop observing after first reveal
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
      className={`transition-all  duration-700 ease-out will-change-transform ${
        hasRevealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      } ${className}`}
    >
      {children}
    </div>
  );
}
