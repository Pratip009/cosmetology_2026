"use client";

import { useEffect, useRef } from "react";

export default function TuitionHero() {
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      if (!imgRef.current) return;
      imgRef.current.style.transform = `translateY(${window.scrollY * 0.18}px)`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,300;0,400;1,300;1,400&family=Jost:wght@300;400;500&display=swap');

        :root {
          --ah-gold:  #C4964A;
          --ah-white: #FAF8F4;
          --ah-muted: rgba(250,248,244,0.45);
        }

        .ah-section {
          position: relative;
          min-height: 100svh;
          display: grid;
          grid-template-columns: 1fr 1fr;
          overflow: hidden;
          font-family: 'Jost', sans-serif;
          background: #0C0B0A;
        }
        @media (max-width: 900px) {
          .ah-section { grid-template-columns: 1fr; }
        }

        /* ── Image panel ── */
        .ah-img-panel {
          position: relative;
          overflow: hidden;
          min-height: 50svh;
        }
        @media (max-width: 900px) {
          .ah-img-panel { order: 2; min-height: 55vw; }
        }
        .ah-img {
          position: absolute;
          inset: -10% 0;
          background-image: url('https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
          background-size: cover;
          background-position: center;
          filter: brightness(.72) contrast(1.08);
          will-change: transform;
        }
        .ah-img-tint {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(196,150,74,.18) 0%, transparent 60%);
        }
        .ah-img-fade {
          position: absolute;
          top: 0; right: 0;
          width: 40%; height: 100%;
          background: linear-gradient(to right, transparent, #0C0B0A);
        }
        @media (max-width: 900px) {
          .ah-img-fade {
            top: auto; bottom: 0; right: 0; left: 0;
            width: 100%; height: 40%;
            background: linear-gradient(to bottom, transparent, #0C0B0A);
          }
        }

        /* ── Content panel ── */
        .ah-content {
          position: relative;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 140px 64px 80px;
          z-index: 2;
        }
        @media (max-width: 1100px) { .ah-content { padding: 140px 40px 64px; } }
        @media (max-width: 900px)  { .ah-content { padding: 48px 28px 64px; order: 1; } }

        .ah-content::before {
          content: '';
          position: absolute;
          left: 0; top: 20%; bottom: 20%;
          width: .5px;
          background: linear-gradient(to bottom, transparent, rgba(196,150,74,.3), transparent);
        }
        @media (max-width: 900px) { .ah-content::before { display: none; } }

        .ah-eyebrow {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 10px;
          letter-spacing: .55em;
          text-transform: uppercase;
          color: var(--ah-gold);
          font-weight: 400;
          margin-bottom: 24px;
          opacity: .85;
        }
        .ah-eyebrow::before {
          content: '';
          width: 24px; height: .5px;
          background: var(--ah-gold);
          opacity: .6;
          display: block;
        }

        .ah-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(38px, 4.5vw, 62px);
          font-weight: 300;
          color: var(--ah-white);
          line-height: 1.1;
          letter-spacing: -.02em;
          margin: 0 0 28px;
        }
        .ah-title em {
          font-style: italic;
          color: var(--ah-gold);
        }

        .ah-rule {
          width: 48px; height: .5px;
          background: var(--ah-gold);
          opacity: .4;
          margin-bottom: 28px;
        }

        .ah-body {
          font-size: 14px;
          color: var(--ah-muted);
          line-height: 2;
          font-weight: 300;
          max-width: 420px;
        }

        .ah-bottom-line {
          position: absolute;
          bottom: 0; left: 0; right: 0;
          height: .5px;
          background: linear-gradient(to right, transparent, rgba(196,150,74,.3), transparent);
        }
      `}</style>

      <section className="ah-section">

        {/* Image */}
        <div className="ah-img-panel">
          <div className="ah-img" ref={imgRef} />
          <div className="ah-img-tint" />
          <div className="ah-img-fade" />
        </div>

        {/* Content — only original copy */}
        <div className="ah-content">
          <p className="ah-eyebrow">Investment</p>

          <h1 className="ah-title">
                        Tuition 
<br />&
            <em>Fees</em>
          </h1>

          <div className="ah-rule" />

          <p className="ah-body">
           Transparent pricing for all five programs. Contact us for
            information on payment plans and financial assistance options.
          </p>
        </div>

        <div className="ah-bottom-line" />
      </section>
    </>
  );
}