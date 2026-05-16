"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight, Award, Clock, BookOpen, CheckCircle } from "lucide-react";
import HeroSection from "./components/home/HeroSection";
import StatsBar from "./components/home/StatsBar";
import ProgramsSection from "./components/home/ProgramsSection";
import WhyCsjc from "./components/home/WhyCsjc";
import CTABand from "./components/home/CTABand";



export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fadeUp");
            entry.target.classList.remove("opacity-0", "translate-y-8");
          }
        });
      },
      { threshold: 0.1 },
    );
    document
      .querySelectorAll(".scroll-reveal")
      .forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* HERO */}
      <HeroSection />
      <StatsBar />
      <ProgramsSection />
     <WhyCsjc/>
     <CTABand/>

      

      
    </>
  );
}
