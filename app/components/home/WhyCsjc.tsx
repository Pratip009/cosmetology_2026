"use client";

import { CheckCircle, ArrowRight, Award, Clock, BookOpen } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef } from "react";

const features = [
  {
    icon: BookOpen,
    title: "Two-Phase Learning",
    sub: "Junior pre-clinical + Senior clinic",
  },
  {
    icon: Award,
    title: "NJ Approved",
    sub: "N.J.A.C. 13:28 compliant",
  },
  {
    icon: CheckCircle,
    title: "75% Min Score",
    sub: "Rigorous academic standards",
  },
  {
    icon: Clock,
    title: "Flexible Schedules",
    sub: "Full-time & part-time options",
  },
];

const bullets = [
  "Hands-on mannequin and live client experience",
  "Audio visual aids and guest artists",
  "Job placement services at no charge",
  "Career planning throughout your program",
];

export default function WhyCsjc() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const els = sectionRef.current?.querySelectorAll(".wc-reveal");
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("wc-revealed");
            io.unobserve(e.target);
          }
        }),
      { threshold: 0.08 }
    );
    els?.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,300;0,400;1,300;1,400&family=Jost:wght@300;400;500&display=swap');

        :root {
          --wc-gold:    #C4964A;
          --wc-gold2:   #E0B870;
          --wc-gold3:   rgba(196,150,74,0.12);
          --wc-gold4:   rgba(196,150,74,0.25);
          --wc-white:   #FAF8F4;
          --wc-muted:   rgba(250,248,244,0.45);
          --wc-border:  rgba(196,150,74,0.18);
        }

        /* ── Section shell ── */
        .wc-section {
          position: relative;
          overflow: hidden;
          padding: 130px 48px;
          font-family: 'Jost', sans-serif;
          background: #0E0D0C;
        }

        /* ── Background image layer ── */
        .wc-bg-img {
          position: absolute;
          inset: 0;
          background-image: url('https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=1800&q=80');
          background-size: cover;
          background-position: center 30%;
          opacity: .18;
          filter: grayscale(30%) contrast(1.1);
          transform: scale(1.04);
          transition: transform 12s ease;
        }
        .wc-section:hover .wc-bg-img {
          transform: scale(1.0);
        }

        /* Deep radial vignette */
        .wc-vignette {
          position: absolute;
          inset: 0;
          background:
            radial-gradient(ellipse 80% 80% at 60% 50%, transparent 20%, rgba(14,13,12,.85) 80%),
            linear-gradient(to right, rgba(14,13,12,.97) 0%, rgba(14,13,12,.55) 50%, rgba(14,13,12,.8) 100%);
        }

        /* Decorative gold orb */
        .wc-orb {
          position: absolute;
          top: -120px;
          right: 10%;
          width: 480px;
          height: 480px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(196,150,74,.12) 0%, transparent 70%);
          pointer-events: none;
        }

        /* Subtle grain texture overlay */
        .wc-grain {
          position: absolute;
          inset: 0;
          opacity: .025;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
          background-size: 128px;
          pointer-events: none;
        }

        /* ── Inner layout ── */
        .wc-inner {
          position: relative;
          z-index: 2;
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 88px;
          align-items: center;
        }

        @media (max-width: 900px) {
          .wc-inner { grid-template-columns: 1fr; gap: 56px; }
          .wc-section { padding: 90px 24px; }
        }

        /* ── Reveal ── */
        .wc-reveal {
          opacity: 0;
          transform: translateY(36px);
          transition: opacity .9s cubic-bezier(.22,1,.36,1),
                      transform .9s cubic-bezier(.22,1,.36,1);
        }
        .wc-revealed { opacity: 1; transform: translateY(0); }

        /* ── Left column ── */
        .wc-eyebrow {
          font-size: 10px;
          letter-spacing: .55em;
          text-transform: uppercase;
          color: var(--wc-gold);
          font-weight: 400;
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 22px;
        }
        .wc-eyebrow::before {
          content: '';
          width: 28px;
          height: .5px;
          background: var(--wc-gold);
          opacity: .6;
          display: block;
        }

        .wc-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(40px, 5vw, 62px);
          font-weight: 300;
          color: var(--wc-white);
          line-height: 1.08;
          letter-spacing: -.02em;
          margin: 0 0 28px;
        }
        .wc-title-gold {
          font-style: italic;
          color: var(--wc-gold);
        }

        .wc-body {
          font-size: 14px;
          color: var(--wc-muted);
          line-height: 1.95;
          font-weight: 300;
          margin-bottom: 32px;
          max-width: 440px;
        }

        /* ── Bullets ── */
        .wc-bullets { display: flex; flex-direction: column; gap: 14px; margin-bottom: 40px; }
        .wc-bullet {
          display: flex;
          align-items: flex-start;
          gap: 12px;
        }
        .wc-bullet-icon {
          width: 16px;
          height: 16px;
          color: var(--wc-gold);
          flex-shrink: 0;
          margin-top: 2px;
          opacity: .85;
        }
        .wc-bullet span {
          font-size: 13.5px;
          color: var(--wc-muted);
          font-weight: 300;
          line-height: 1.65;
        }

        /* ── CTA button ── */
        .wc-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 14px 28px;
          border: .5px solid var(--wc-gold);
          color: var(--wc-gold);
          font-size: 11px;
          letter-spacing: .28em;
          text-transform: uppercase;
          font-weight: 400;
          font-family: 'Jost', sans-serif;
          text-decoration: none;
          position: relative;
          overflow: hidden;
          transition: color .4s;
        }
        .wc-btn::before {
          content: '';
          position: absolute;
          inset: 0;
          background: var(--wc-gold);
          transform: translateX(-105%);
          transition: transform .45s cubic-bezier(.77,0,.18,1);
        }
        .wc-btn:hover::before { transform: translateX(0); }
        .wc-btn:hover { color: #0E0D0C; }
        .wc-btn span, .wc-btn svg { position: relative; z-index: 1; }
        .wc-btn svg {
          width: 14px;
          height: 14px;
          stroke: currentColor;
          transition: transform .35s cubic-bezier(.22,1,.36,1);
        }
        .wc-btn:hover svg { transform: translateX(4px); }

        /* ── Feature cards grid ── */
        .wc-cards {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1px;
          background: var(--wc-border);
          border: .5px solid var(--wc-border);
        }

        .wc-card {
          background: rgba(14,13,12,.85);
          padding: 32px 28px;
          position: relative;
          overflow: hidden;
          transition: background .4s;
          cursor: default;
        }
        .wc-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: var(--wc-gold3);
          opacity: 0;
          transition: opacity .4s;
        }
        .wc-card:hover::before { opacity: 1; }

        /* top accent line */
        .wc-card::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 0;
          height: 1.5px;
          background: var(--wc-gold);
          transition: width .5s cubic-bezier(.22,1,.36,1);
        }
        .wc-card:hover::after { width: 100%; }

        .wc-card-icon {
          width: 18px;
          height: 18px;
          color: var(--wc-gold);
          margin-bottom: 18px;
          position: relative;
          z-index: 1;
          opacity: .85;
        }
        .wc-card-title {
          font-size: 13.5px;
          font-weight: 500;
          color: var(--wc-white);
          margin-bottom: 6px;
          position: relative;
          z-index: 1;
          letter-spacing: .01em;
        }
        .wc-card-sub {
          font-size: 12px;
          color: rgba(250,248,244,.35);
          font-weight: 300;
          line-height: 1.7;
          position: relative;
          z-index: 1;
        }

        /* ── Decorative corner lines on cards grid ── */
        .wc-cards-wrap {
          position: relative;
        }
        .wc-cards-wrap::before,
        .wc-cards-wrap::after {
          content: '';
          position: absolute;
          width: 24px;
          height: 24px;
          border-color: var(--wc-gold);
          border-style: solid;
          opacity: .4;
        }
        .wc-cards-wrap::before {
          top: -8px; left: -8px;
          border-width: 1px 0 0 1px;
        }
        .wc-cards-wrap::after {
          bottom: -8px; right: -8px;
          border-width: 0 1px 1px 0;
        }
      `}</style>

      <section className="wc-section" ref={sectionRef}>
        {/* Background layers */}
        <div className="wc-bg-img" />
        <div className="wc-vignette" />
        <div className="wc-orb" />
        <div className="wc-grain" />

        <div className="wc-inner">

          {/* ── Left: copy ── */}
          <div className="wc-reveal">
            <p className="wc-eyebrow">Why Choose Us</p>
            <h2 className="wc-title">
              Preparing Students
              <br />
              for{" "}
              <span className="wc-title-gold">Real Careers</span>
            </h2>
            <p className="wc-body">
              Our curriculum builds a strong foundation before students move on
              to clinical learning — focusing on skills that make graduates
              marketable and prepared for their career.
            </p>

            <div className="wc-bullets">
              {bullets.map((item, i) => (
                <div key={i} className="wc-bullet">
                  <CheckCircle className="wc-bullet-icon" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <Link href="/about" className="wc-btn">
              <span>Learn About Us</span>
              <ArrowRight />
            </Link>
          </div>

          {/* ── Right: feature cards ── */}
          <div
            className="wc-cards-wrap wc-reveal"
            style={{ transitionDelay: ".18s" }}
          >
            <div className="wc-cards">
              {features.map(({ icon: Icon, title, sub }, i) => (
                <div key={i} className="wc-card">
                  <Icon className="wc-card-icon" />
                  <div className="wc-card-title">{title}</div>
                  <div className="wc-card-sub">{sub}</div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </>
  );
}