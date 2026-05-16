"use client";
import { useEffect } from "react";
import Link from "next/link";
import { ArrowRight, Users, GraduationCap, CheckCircle } from "lucide-react";
import AboutHero from "../components/about/AboutHero";
import Mission from "../components/about/Mission";
import Objectives from "../components/about/Objectives";
import Staffs from "../components/about/Staffs";
import AboutCTA from "../components/about/AboutCTA";

export default function AboutPage() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("animate-fadeUp");
            e.target.classList.remove("opacity-0", "translate-y-8");
          }
        }),
      { threshold: 0.1 },
    );
    document
      .querySelectorAll(".scroll-reveal")
      .forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <AboutHero />
      <Objectives />
      <Mission />
      
      <Staffs />
      <AboutCTA />
    </>
  );
}
