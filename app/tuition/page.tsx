"use client";
import { useEffect } from "react";
import Link from "next/link";
import { ArrowRight, DollarSign, Clock, AlertCircle } from "lucide-react";
import TuitionTable from "../components/Tuition/TuitionTable";
import Fees from "../components/Tuition/Fees";

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
      <section className="pt-36 pb-24 px-6 bg-charcoal relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(121,100,77,0.2)_0%,transparent_60%)]" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
        <div className="max-w-7xl mx-auto relative z-10">
          <p className="text-gold/60 text-xs tracking-[0.4em] uppercase mb-4">
            Investment
          </p>
          <h1 className="font-display text-5xl md:text-7xl text-warm-white font-light mb-6">
            Tuition & Fees
          </h1>
          <p className="text-warm-white/50 font-light max-w-2xl leading-relaxed">
            Transparent pricing for all five programs. Contact us for
            information on payment plans and financial assistance options.
          </p>
        </div>
      </section>

      <TuitionTable />
      <Fees />

      <section className="py-20 px-6 bg-brand text-center">
        <div className="max-w-xl mx-auto">
          <p className="font-display italic text-warm-white/80 text-3xl font-light mb-6">
            Have Questions?
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-warm-white text-brand-dark px-8 py-4 text-sm tracking-[0.15em] uppercase font-medium hover:bg-gold-light transition-colors"
          >
            Contact Us <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
