"use client";
import { lazy, Suspense } from "react";

// Lazy-loaded sections
const BlobGradient = lazy(() => import("@/components/Sections/BlobGradient"));
const Us = lazy(() => import("@/components/Sections/Us"));
const Services = lazy(() => import("@/components/Sections/Services"));
const WhyUs = lazy(() => import("@/components/Sections/WhyUs"));
const JoinUs = lazy(() => import("@/components/Sections/JoinUs"));
const Footer = lazy(() => import("@/components/Sections/Footer"));
const Header = lazy(() => import("@/components/Sections/Header"));

export default function HomePage() {
  return (
    <div className="relative overflow-visible flex flex-col items-center gap-[2em]">
      <div className="w-full md:p-[1em] p-[2em]" id="Hero">
        <Suspense fallback={null}>
          <BlobGradient />
        </Suspense>
      </div>

      <Suspense fallback={null}>
        <Header />
      </Suspense>

      <div id="AboutUs" className="w-full">
        <Suspense fallback={<div className="min-h-[200px]" />}>
          <Us />
        </Suspense>
      </div>

      <div id="Services" className="w-full">
        <Suspense fallback={<div className="min-h-[200px]" />}>
          <Services />
        </Suspense>
      </div>

      <div id="WhyUs" className="w-full">
        <Suspense fallback={<div className="min-h-[200px]" />}>
          <WhyUs />
        </Suspense>
      </div>

      <div className="relative w-full overflow-hidden">
        <div
          className="absolute inset-0 z-[-2] pointer-events-none"
          style={{
            background: "linear-gradient(to bottom, #eef2ff 0%, #D7EBFF 100%)",
            opacity: 0.9,
          }}
        />

        <div id="JoinUs" className="w-full">
          <Suspense fallback={<div className="min-h-[200px]" />}>
            <JoinUs />
          </Suspense>
        </div>

        <div className="w-full">
          <Suspense fallback={<div className="min-h-[200px]" />}>
            <Footer />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
