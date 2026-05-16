"use client";
import { useEffect } from "react";
import Link from "next/link";
import { ArrowRight, DollarSign, Clock, AlertCircle } from "lucide-react";
import TuitionTable from "../components/Tuition/TuitionTable";
import Fees from "../components/Tuition/Fees";
import TutionHero from "../components/Tuition/TutionHero";
import TutionCTA from "../components/Tuition/TutionCTA";

export default function TuitionPage() {
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
     
<TutionHero/>
      <TuitionTable />
      <Fees />

      <TutionCTA/>
    </>
  );
}
