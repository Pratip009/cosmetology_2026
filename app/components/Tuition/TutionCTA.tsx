import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const TutionCTA = () => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;1,300;1,400;1,500&family=DM+Sans:wght@300;400;500&display=swap');

        .cta-section {
          background: var(--color-brand, #8b6830);
          font-family: 'DM Sans', sans-serif;
          position: relative;
          overflow: hidden;
          padding: 0;
        }

        /* grid line texture */
        .cta-grid {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
          background-size: 80px 80px;
          pointer-events: none;
        }

        /* large italic watermark */
        .cta-watermark {
          position: absolute;
          bottom: 0px;
          right: 10px;
          font-family: 'Cormorant Garamond', serif;
          font-style: italic;
          font-size: clamp(100px, 16vw, 200px);
          font-weight: 300;
          color: rgba(255,255,255,0.04);
          line-height: 1;
          user-select: none;
          pointer-events: none;
          white-space: nowrap;
          letter-spacing: -0.03em;
        }

        /* corner accents */
        .cta-corner {
          position: absolute;
          width: 80px;
          height: 80px;
          pointer-events: none;
        }
        .cta-corner.tl { top: 32px; left: 40px; border-top: 1px solid rgba(255,255,255,0.15); border-left: 1px solid rgba(255,255,255,0.15); }
        .cta-corner.br { bottom: 32px; right: 40px; border-bottom: 1px solid rgba(255,255,255,0.15); border-right: 1px solid rgba(255,255,255,0.15); }

        .cta-inner {
          position: relative;
          z-index: 1;
          max-width: 900px;
          margin: 0 auto;
          padding: 100px 40px;
          display: grid;
          grid-template-columns: 1fr auto;
          align-items: center;
          gap: 60px;
        }

        @media (max-width: 680px) {
          .cta-inner {
            grid-template-columns: 1fr;
            text-align: center;
            gap: 40px;
            padding: 80px 28px;
          }
          .cta-corner { display: none; }
        }

        .cta-left {}

        .cta-eyebrow {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 20px;
        }

        .cta-eyebrow-dash {
          width: 28px;
          height: 1px;
          background: rgba(255,255,255,0.3);
        }

        .cta-eyebrow-text {
          font-size: 10px;
          letter-spacing: 0.24em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.45);
          font-weight: 500;
        }

        @media (max-width: 680px) {
          .cta-eyebrow { justify-content: center; }
        }

        .cta-heading {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(44px, 6vw, 72px);
          font-weight: 300;
          font-style: italic;
          line-height: 1.05;
          color: #FFFFFF;
          margin: 0;
          letter-spacing: -0.01em;
        }

        .cta-heading span {
          display: block;
          font-style: normal;
          font-weight: 300;
          color: rgba(255,255,255,0.45);
          font-size: 0.52em;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          font-family: 'DM Sans', sans-serif;
          margin-bottom: 6px;
        }

        /* button */
        .cta-btn {
          display: inline-flex;
          flex-direction: column;
          align-items: center;
          gap: 0;
          text-decoration: none;
          flex-shrink: 0;
        }

        .cta-btn-circle {
          width: 120px;
          height: 120px;
          border-radius: 50%;
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.3s, border-color 0.3s, transform 0.3s cubic-bezier(0.23,1,0.32,1);
          position: relative;
          overflow: hidden;
        }

        .cta-btn-circle::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 50%;
          background: rgba(255,255,255,0.95);
          transform: scale(0);
          transition: transform 0.4s cubic-bezier(0.23,1,0.32,1);
        }

        .cta-btn:hover .cta-btn-circle {
          border-color: rgba(255,255,255,0.6);
          transform: scale(1.06);
        }

        .cta-btn:hover .cta-btn-circle::before {
          transform: scale(1);
        }

        .cta-btn-icon {
          position: relative;
          z-index: 1;
          color: white;
          transition: color 0.3s, transform 0.3s;
        }

        .cta-btn:hover .cta-btn-icon {
          color: #2C4A3E;
          transform: translate(3px, -3px);
        }

        .cta-btn-label {
          margin-top: 14px;
          font-size: 10px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.35);
          font-weight: 500;
          transition: color 0.25s;
        }

        .cta-btn:hover .cta-btn-label {
          color: rgba(255,255,255,0.7);
        }
      `}</style>

      <section className="cta-section bg-brand">
        <div className="cta-grid" />
        <div className="cta-watermark">Questions</div>
        <div className="cta-corner tl" />
        <div className="cta-corner br" />

        <div className="cta-inner">
          <div className="cta-left">
            <div className="cta-eyebrow">
              <span className="cta-eyebrow-dash" />
              <span className="cta-eyebrow-text">Next Step</span>
            </div>
            <h2 className="cta-heading">
              <span>Have any</span>
              Questions?
            </h2>
          </div>

          <Link href="/contact" className="cta-btn">
            <div className="cta-btn-circle">
              <ArrowRight className="cta-btn-icon" size={28} strokeWidth={1.5} />
            </div>
            <span className="cta-btn-label">Contact Us</span>
          </Link>
        </div>
      </section>
    </>
  )
}

export default TutionCTA