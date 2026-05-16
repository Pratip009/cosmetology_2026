"use client";
import { useEffect, useState } from "react";
import ContactHero from "../components/contact/ContactHero";
import ContactForm from "../components/contact/ContactForm";

export default function ContactPage() {
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
      <ContactHero />
      <ContactForm />
    </>
  );
}
