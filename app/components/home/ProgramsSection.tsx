"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

const programs = [
  {
    num: "01",
    name: "Cosmetology",
    hours: "1,200",
    desc: "Art, science, and business of professional beauty care — hair, nails, and skin in a full-service salon environment.",
    img: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=700&q=80",
  },
  {
    num: "02",
    name: "Barbering",
    hours: "900",
    desc: "Comprehensive barbering using the Milady method — cutting, shaving, chemical services, and hair color.",
    img: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=700&q=80",
  },
  {
    num: "03",
    name: "Nail Technology",
    hours: "300",
    desc: "Manicuring, pedicuring, nail tips, wraps, gels, sculptured nails, nail art, and hair removal.",
    img: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=700&q=80",
  },
  {
    num: "04",
    name: "Teacher Training",
    hours: "600",
    desc: "Prepares licensed cosmetologists to teach. CSJC exceeds the NJ minimum by 100 additional hours.",
    img: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=700&q=80",
  },
  {
    num: "05",
    name: "Refresher",
    hours: "250",
    desc: "For licensed professionals looking to sharpen existing skills or learn new techniques.",
    img: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=700&q=80",
  },
];

export default function ProgramsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const els = sectionRef.current?.querySelectorAll(".ps-reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("ps-revealed");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.08 }
    );
    els?.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;1,400;1,500&family=Jost:wght@300;400;500&display=swap');

        :root {
          --ps-gold:   #B8935A;
          --ps-gold2:  #D4AE7A;
          --ps-gold3:  #F2E8D5;
          --ps-ink:    #111010;
          --ps-ink2:   #3A3A3A;
          --ps-muted:  #8E8E8E;
          --ps-border: rgba(0,0,0,0.08);
        }

        .ps-section {
          background: #FFFFFF;
          padding: 110px 0 90px;
          font-family: 'Jost', sans-serif;
          position: relative;
          overflow: hidden;
        }

        /* ── Scroll reveal ── */
        .ps-reveal {
          opacity: 0;
          transform: translateY(40px);
          transition: opacity .9s cubic-bezier(.22,1,.36,1),
                      transform .9s cubic-bezier(.22,1,.36,1);
        }
        .ps-revealed {
          opacity: 1;
          transform: translateY(0);
        }

        /* ── Header ── */
        .ps-header {
          text-align: center;
          padding: 0 32px;
          margin-bottom: 72px;
        }
        .ps-eyebrow {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 14px;
          font-size: 10px;
          letter-spacing: .55em;
          text-transform: uppercase;
          color: var(--ps-gold);
          font-weight: 400;
          margin-bottom: 18px;
        }
        .ps-eyebrow::before,
        .ps-eyebrow::after {
          content: '';
          width: 32px;
          height: .5px;
          background: var(--ps-gold);
          opacity: .5;
          display: block;
        }
        .ps-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(44px, 6vw, 72px);
          font-weight: 400;
          color: var(--ps-ink);
          line-height: 1.05;
          letter-spacing: -.02em;
          margin: 0;
        }
        .ps-title-italic {
          font-style: italic;
          color: var(--ps-gold);
        }
        .ps-subtitle {
          font-size: 12.5px;
          color: var(--ps-muted);
          max-width: 380px;
          margin: 20px auto 0;
          line-height: 2;
          font-weight: 300;
        }

        /* ── List ── */
        .ps-list {
          width: 100%;
          border-top: .5px solid var(--ps-border);
        }

        /* ── Row item ── */
        .ps-item {
          display: grid;
          grid-template-columns: 80px 1fr auto;
          align-items: center;
          border-bottom: .5px solid var(--ps-border);
          padding: 0 40px;
          min-height: 100px;
          position: relative;
          overflow: hidden;
          cursor: pointer;
          text-decoration: none;
        }

        /* Warm wash background on hover */
        .ps-item::before {
          content: '';
          position: absolute;
          inset: 0;
          background: var(--ps-gold3);
          opacity: 0;
          transition: opacity .5s ease;
          z-index: 1;
        }
        .ps-item:hover::before { opacity: 1; }

        /* ── Image reveal (clip-path slide-in from right) ── */
        .ps-img-wrap {
          position: absolute;
          right: 0;
          top: 0;
          height: 100%;
          width: 300px;
          overflow: hidden;
          clip-path: inset(0 100% 0 0);
          transition: clip-path .7s cubic-bezier(.77,0,.18,1);
          pointer-events: none;
          z-index: 2;
        }
        .ps-item:hover .ps-img-wrap {
          clip-path: inset(0 0% 0 0);
        }
        .ps-img-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          filter: brightness(.88) contrast(1.05);
        }
        /* Gradient so image fades into the warm wash */
        .ps-img-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to right,
            rgba(242,232,213,.95) 0%,
            rgba(242,232,213,.2) 55%,
            transparent 100%
          );
        }

        /* ── Number ── */
        .ps-num {
          font-family: 'Playfair Display', serif;
          font-size: 13px;
          font-weight: 400;
          color: var(--ps-gold);
          opacity: .6;
          letter-spacing: .25em;
          position: relative;
          z-index: 3;
        }

        /* ── Info block ── */
        .ps-info {
          padding: 28px 0;
          position: relative;
          z-index: 3;
        }
        .ps-name {
          font-family: 'Playfair Display', serif;
          font-size: 24px;
          font-weight: 400;
          color: var(--ps-ink);
          line-height: 1.15;
          transition: color .35s ease;
          display: block;
        }
        .ps-item:hover .ps-name { color: var(--ps-gold); }

        /* Description slides down on hover */
        .ps-desc {
          font-size: 12.5px;
          color: var(--ps-muted);
          line-height: 1.85;
          font-weight: 300;
          max-width: 520px;
          margin-top: 6px;
          max-height: 0;
          overflow: hidden;
          opacity: 0;
          transition: max-height .55s cubic-bezier(.77,0,.18,1),
                      opacity .4s ease .06s;
        }
        .ps-item:hover .ps-desc {
          max-height: 80px;
          opacity: 1;
        }

        /* ── Meta (hours + arrow) ── */
        .ps-meta {
          display: flex;
          align-items: center;
          gap: 20px;
          position: relative;
          z-index: 3;
        }
        .ps-hrs {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 2px;
        }
        .ps-hrs-val {
          font-family: 'Playfair Display', serif;
          font-size: 28px;
          font-weight: 400;
          color: var(--ps-ink);
          line-height: 1;
        }
        .ps-hrs-lbl {
          font-size: 9px;
          letter-spacing: .35em;
          text-transform: uppercase;
          color: var(--ps-muted);
        }
        /* Circle arrow — rotates 45° on hover */
        .ps-arrow {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          border: .5px solid rgba(0,0,0,.15);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: border-color .3s, background .3s,
                      transform .5s cubic-bezier(.22,1,.36,1);
        }
        .ps-item:hover .ps-arrow {
          border-color: var(--ps-gold);
          background: var(--ps-gold);
          transform: rotate(-45deg);
        }
        .ps-arrow svg {
          width: 13px;
          height: 13px;
          stroke: var(--ps-ink2);
          transition: stroke .3s;
        }
        .ps-item:hover .ps-arrow svg { stroke: #fff; }

        /* ── Footer stats ── */
        .ps-footer {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 52px;
          padding: 60px 40px 0;
          flex-wrap: wrap;
        }
        .ps-stat { text-align: center; }
        .ps-stat-v {
          font-family: 'Playfair Display', serif;
          font-size: 36px;
          font-weight: 400;
          color: var(--ps-ink);
          line-height: 1;
        }
        .ps-stat-l {
          font-size: 9px;
          letter-spacing: .38em;
          text-transform: uppercase;
          color: var(--ps-muted);
          margin-top: 5px;
          display: block;
        }
        .ps-fdiv {
          width: .5px;
          height: 48px;
          background: rgba(0,0,0,.1);
        }

        @media (max-width: 680px) {
          .ps-item {
            grid-template-columns: 56px 1fr auto;
            padding: 0 20px;
          }
          .ps-img-wrap { width: 180px; }
          .ps-footer { gap: 28px; }
          .ps-fdiv { height: 32px; }
        }
      `}</style>

      <section className="ps-section" ref={sectionRef}>

        {/* ── Header ── */}
        <div className="ps-header ps-reveal">
          <p className="ps-eyebrow">Explore</p>
          <h2 className="ps-title">
            Our{" "}
            <span className="ps-title-italic">Programs</span>
          </h2>
          <p className="ps-subtitle">
            All programs comply with N.J.A.C.&nbsp;13:28 regulations.
            Full-time and part-time schedules available.
          </p>
        </div>

        {/* ── Program list ── */}
        <div className="ps-list ps-reveal" style={{ transitionDelay: ".15s" }}>
          {programs.map((prog, i) => (
            <Link
              key={i}
              href="/programs"
              className="ps-item"
              aria-label={`${prog.name} – ${prog.hours} hours`}
            >
              {/* Image slides in from right on hover */}
              <div className="ps-img-wrap">
                <img src={prog.img} alt="" loading="lazy" />
                <div className="ps-img-overlay" />
              </div>

              <span className="ps-num">{prog.num}</span>

              <div className="ps-info">
                <span className="ps-name">{prog.name}</span>
                <p className="ps-desc">{prog.desc}</p>
              </div>

              <div className="ps-meta">
                <div className="ps-hrs">
                  <span className="ps-hrs-val">{prog.hours}</span>
                  <span className="ps-hrs-lbl">Hours</span>
                </div>
                <div className="ps-arrow">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="13 6 19 12 13 18" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* ── Footer stats ── */}
        <div className="ps-footer ps-reveal" style={{ transitionDelay: ".4s" }}>
          <div className="ps-stat">
            <div className="ps-stat-v">5</div>
            <span className="ps-stat-l">Programs</span>
          </div>
          <div className="ps-fdiv" />
          <div className="ps-stat">
            <div className="ps-stat-v">30</div>
            <span className="ps-stat-l">Hrs / wk Full-time</span>
          </div>
          <div className="ps-fdiv" />
          <div className="ps-stat">
            <div className="ps-stat-v">16</div>
            <span className="ps-stat-l">Hrs / wk Part-time</span>
          </div>
          <div className="ps-fdiv" />
          <div className="ps-stat">
            <div className="ps-stat-v">NJ</div>
            <span className="ps-stat-l">N.J.A.C. 13:28</span>
          </div>
        </div>

      </section>
    </>
  );
}