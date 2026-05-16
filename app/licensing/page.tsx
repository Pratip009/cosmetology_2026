"use client";
import { useEffect } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle, AlertTriangle, BookOpen } from "lucide-react";
import Requirements from "../components/licence/Requirements";
import Policy from "../components/licence/Policy";
import Timeframes from "../components/licence/Timeframes";
import LicenceCTA from "../components/licence/LicenceCTA";
import LicenceHero from "../components/licence/LicenceHero";

export default function LicensingPage() {
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
      <LicenceHero />
      <Requirements />
      <Policy />
      <Timeframes />
      <LicenceCTA />
    </>
  );
}
