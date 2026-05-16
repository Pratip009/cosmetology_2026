"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function CTABand() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,300;0,400;1,300;1,400&family=Jost:wght@300;400;500&display=swap');

        :root {
          --cb-gold:   #B8935A;
          --cb-gold2:  #D4AE7A;
          --cb-gold3:  rgba(184,147,90,0.08);
          --cb-ink:    #111010;
          --cb-muted:  #7A7A7A;
          --cb-border: rgba(184,147,90,0.2);
        }

        .cb-section {
          background: #FFFFFF;
          position: relative;
          overflow: hidden;
          padding: 120px 48px;
          font-family: 'Jost', sans-serif;
        }

        /* ── Decorative background elements ── */
        .cb-line-left,
        .cb-line-right {
          position: absolute;
          top: 0;
          bottom: 0;
          width: .5px;
          background: linear-gradient(to bottom, transparent, var(--cb-gold), transparent);
          opacity: .3;
        }
        .cb-line-left  { left: 12%; }
        .cb-line-right { right: 12%; }

        .cb-circle {
          position: absolute;
          border-radius: 50%;
          border: .5px solid var(--cb-border);
          pointer-events: none;
        }
        .cb-circle-1 {
          width: 500px; height: 500px;
          top: 50%; left: 50%;
          transform: translate(-50%,-50%);
        }
        .cb-circle-2 {
          width: 340px; height: 340px;
          top: 50%; left: 50%;
          transform: translate(-50%,-50%);
        }

        /* Corner ornaments */
        .cb-corner {
          position: absolute;
          width: 32px;
          height: 32px;
          border-color: var(--cb-gold);
          border-style: solid;
          opacity: .35;
        }
        .cb-corner-tl { top: 32px; left: 32px; border-width: 1px 0 0 1px; }
        .cb-corner-tr { top: 32px; right: 32px; border-width: 1px 1px 0 0; }
        .cb-corner-bl { bottom: 32px; left: 32px; border-width: 0 0 1px 1px; }
        .cb-corner-br { bottom: 32px; right: 32px; border-width: 0 1px 1px 0; }

        /* ── Content ── */
        .cb-inner {
          position: relative;
          z-index: 2;
          text-align: center;
          max-width: 640px;
          margin: 0 auto;
        }

        .cb-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 14px;
          font-size: 10px;
          letter-spacing: .55em;
          text-transform: uppercase;
          color: var(--cb-gold);
          font-weight: 400;
          margin-bottom: 24px;
        }
        .cb-eyebrow::before,
        .cb-eyebrow::after {
          content: '';
          width: 28px;
          height: .5px;
          background: var(--cb-gold);
          opacity: .5;
          display: block;
        }

        .cb-headline {
          font-family: 'Playfair Display', serif;
          font-size: clamp(38px, 5.5vw, 64px);
          font-weight: 300;
          color: var(--cb-ink);
          line-height: 1.1;
          letter-spacing: -.025em;
          margin: 0 0 8px;
        }
        .cb-headline-italic {
          font-style: italic;
          color: var(--cb-gold);
          display: block;
        }

        .cb-divider {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          margin: 28px auto;
        }
        .cb-divider-line {
          width: 48px;
          height: .5px;
          background: linear-gradient(to right, transparent, var(--cb-gold));
          opacity: .5;
        }
        .cb-divider-line:last-child { transform: scaleX(-1); }
        .cb-divider-diamond {
          width: 5px;
          height: 5px;
          background: var(--cb-gold);
          transform: rotate(45deg);
          opacity: .6;
        }

        .cb-body {
          font-size: 14px;
          color: var(--cb-muted);
          line-height: 1.95;
          font-weight: 300;
          margin: 0 0 44px;
          max-width: 480px;
          margin-left: auto;
          margin-right: auto;
        }

        /* ── CTA button ── */
        .cb-btn {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          padding: 16px 36px;
          background: var(--cb-ink);
          color: #FAF8F4;
          font-size: 10.5px;
          letter-spacing: .32em;
          text-transform: uppercase;
          font-weight: 400;
          font-family: 'Jost', sans-serif;
          text-decoration: none;
          position: relative;
          overflow: hidden;
          transition: color .4s;
        }
        .cb-btn::before {
          content: '';
          position: absolute;
          inset: 0;
          background: var(--cb-gold);
          transform: translateX(-105%);
          transition: transform .48s cubic-bezier(.77,0,.18,1);
        }
        .cb-btn:hover::before { transform: translateX(0); }
        .cb-btn span,
        .cb-btn svg { position: relative; z-index: 1; }
        .cb-btn svg {
          width: 14px;
          height: 14px;
          stroke: currentColor;
          transition: transform .35s cubic-bezier(.22,1,.36,1);
        }
        .cb-btn:hover svg { transform: translateX(5px); }

        /* Secondary link */
        .cb-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin-left: 20px;
          font-size: 11px;
          letter-spacing: .22em;
          text-transform: uppercase;
          color: var(--cb-muted);
          text-decoration: none;
          font-weight: 400;
          font-family: 'Jost', sans-serif;
          border-bottom: .5px solid transparent;
          transition: color .3s, border-color .3s;
          padding-bottom: 1px;
        }
        .cb-link:hover {
          color: var(--cb-gold);
          border-bottom-color: var(--cb-gold);
        }

        /* Trust badges row */
        .cb-badges {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 32px;
          margin-top: 56px;
          flex-wrap: wrap;
        }
        .cb-badge {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
        }
        .cb-badge-val {
          font-family: 'Playfair Display', serif;
          font-size: 22px;
          font-weight: 400;
          color: var(--cb-ink);
          line-height: 1;
        }
        .cb-badge-lbl {
          font-size: 9px;
          letter-spacing: .38em;
          text-transform: uppercase;
          color: var(--cb-muted);
        }
        .cb-badge-sep {
          width: .5px;
          height: 36px;
          background: rgba(0,0,0,.1);
        }

        @media (max-width: 580px) {
          .cb-section { padding: 80px 24px; }
          .cb-link { margin-left: 0; margin-top: 16px; }
          .cb-actions { flex-direction: column; align-items: center; }
        }

        .cb-actions {
          display: inline-flex;
          align-items: center;
          flex-wrap: wrap;
          justify-content: center;
          gap: 8px;
        }
      `}</style>

      <section className="cb-section">
        {/* Decorative layer */}
        <div className="cb-line-left" />
        <div className="cb-line-right" />
        <div className="cb-circle cb-circle-1" />
        <div className="cb-circle cb-circle-2" />
        <div className="cb-corner cb-corner-tl" />
        <div className="cb-corner cb-corner-tr" />
        <div className="cb-corner cb-corner-bl" />
        <div className="cb-corner cb-corner-br" />

        <div className="cb-inner">
          <p className="cb-eyebrow">Take the First Step</p>

          <h2 className="cb-headline">
            Start Your Future
            <span className="cb-headline-italic">Today</span>
          </h2>

          <div className="cb-divider">
            <div className="cb-divider-line" />
            <div className="cb-divider-diamond" />
            <div className="cb-divider-line" />
          </div>

          <p className="cb-body">
            Join one of Jersey City's premier cosmetology schools. NJ State
            Board approved. Five programs with full-time and part-time
            schedules to fit your life.
          </p>

          <div className="cb-actions">
            <Link href="/contact" className="cb-btn">
              <span>Get In Touch</span>
              <ArrowRight />
            </Link>
            <Link href="/programs" className="cb-link">
              View Programs
            </Link>
          </div>

          {/* Trust row */}
          <div className="cb-badges">
            <div className="cb-badge">
              <span className="cb-badge-val">5</span>
              <span className="cb-badge-lbl">Programs</span>
            </div>
            <div className="cb-badge-sep" />
            <div className="cb-badge">
              <span className="cb-badge-val">NJ</span>
              <span className="cb-badge-lbl">State Approved</span>
            </div>
            <div className="cb-badge-sep" />
            <div className="cb-badge">
              <span className="cb-badge-val">30+</span>
              <span className="cb-badge-lbl">Years Serving JC</span>
            </div>
            <div className="cb-badge-sep" />
            <div className="cb-badge">
              <span className="cb-badge-val">100%</span>
              <span className="cb-badge-lbl">Free Job Placement</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}