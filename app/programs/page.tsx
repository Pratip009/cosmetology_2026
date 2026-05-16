"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Clock, ArrowRight, ChevronDown } from "lucide-react";
import ProgramsHero from "../components/programs/ProgramsHero";
import Path from "../components/programs/Path";
import Programs from "../components/programs/Programs";
import Grading from "../components/programs/Grading";
import ProgramCTA from "../components/programs/ProgramCTA";

export default function ProgramsPage() {
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
      <ProgramsHero />
      <Path />
      <Programs />
      <Grading />
      <ProgramCTA />
    </>
  );
}
