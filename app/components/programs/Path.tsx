import React from 'react'

const Path = () => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;1,400&family=Jost:wght@300;400;500&display=swap');

        .path-wrap {
          font-family: 'Jost', sans-serif;
          background: #F8F5F0;
          padding: 100px 48px;
          position: relative;
          overflow: hidden;
        }

        .path-orb {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
        }

        .path-inner {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
          position: relative;
          z-index: 1;
        }

        @media (max-width: 768px) {
          .path-wrap { padding: 64px 24px; }
          .path-inner { grid-template-columns: 1fr; gap: 40px; }
        }

        .path-eyebrow {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 22px;
        }

        .path-eyebrow-line {
          width: 36px;
          height: 1.5px;
          background: #C4A882;
        }

        .path-eyebrow-text {
          font-size: 11px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #C4A882;
          font-weight: 500;
        }

        .path-heading {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: clamp(48px, 5.5vw, 72px);
          font-weight: 400;
          line-height: 1.08;
          color: #1A1410;
          margin: 0;
          letter-spacing: -0.01em;
        }

        .path-heading em {
          font-style: italic;
          color: #9B7A52;
        }

        .path-right {
          padding-left: 32px;
          border-left: 1px solid #DDD5C8;
        }

        @media (max-width: 768px) {
          .path-right { padding-left: 0; border-left: none; border-top: 1px solid #DDD5C8; padding-top: 32px; }
        }

        .path-body {
          font-size: 16px;
          line-height: 1.85;
          color: #5C5148;
          font-weight: 300;
          margin: 0 0 36px;
        }

        .path-badges {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }

        .path-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #FFFFFF;
          border: 1px solid #DDD5C8;
          border-radius: 40px;
          padding: 10px 20px;
          font-size: 13px;
          font-weight: 500;
          color: #3D3028;
          letter-spacing: 0.02em;
          transition: border-color 0.2s, background 0.2s;
        }

        .path-badge:hover {
          border-color: #C4A882;
          background: #FDF8F2;
        }

        .path-badge-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #C4A882;
          flex-shrink: 0;
        }
      `}</style>

      <section className="path-wrap">
        <div
          className="path-orb"
          style={{ width: 500, height: 500, background: 'radial-gradient(circle, rgba(196,168,130,0.1) 0%, transparent 70%)', top: -180, right: -120 }}
        />
        <div
          className="path-orb"
          style={{ width: 300, height: 300, background: 'radial-gradient(circle, rgba(196,168,130,0.07) 0%, transparent 70%)', bottom: -80, left: -60 }}
        />

        <div className="path-inner">
          <div>
            <div className="path-eyebrow">
              <span className="path-eyebrow-line" />
              <span className="path-eyebrow-text">Programs</span>
            </div>
            <h2 className="path-heading">
              Choose<br />Your <em>Path</em>
            </h2>
          </div>

          <div className="path-right">
            <p className="path-body">
              Each program is divided into junior pre-clinical classroom instruction and senior clinic learning experiences.
              Students practice on mannequins and live clients. Both full-time (30 hrs/wk) and part-time (16 hrs/wk) schedules available.
            </p>

            <div className="path-badges">
              <span className="path-badge"><span className="path-badge-dot" />Full-Time · 30 hrs/wk</span>
              <span className="path-badge"><span className="path-badge-dot" />Part-Time · 16 hrs/wk</span>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Path