import React, { useState } from 'react'
import { DollarSign, Clock, AlertCircle } from 'lucide-react'

const cards = [
  {
    icon: DollarSign,
    title: 'Registration Fee',
    desc: 'Non-refundable registration fee due at enrollment. Covers administrative processing and enrollment documentation.',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&auto=format&fit=crop&q=80',
    num: '01',
    keyword: 'Non-refundable',
  },
  {
    icon: Clock,
    title: 'Flexible Payment',
    desc: 'Payment plans available. Contact the school to discuss options that work for your financial situation.',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&auto=format&fit=crop&q=80',
    num: '02',
    keyword: 'Plans available',
  },
  {
    icon: AlertCircle,
    title: 'Additional Costs',
    desc: 'Kit fees cover required tools and supplies. Some programs may have additional material costs. Ask us for details.',
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&auto=format&fit=crop&q=80',
    num: '03',
    keyword: 'Tools & supplies',
  },
]

const Fees = () => {
  const [hovered, setHovered] = useState<number | null>(null)

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=DM+Sans:wght@300;400;500&display=swap');

        /* ── Section ── */
        .fees-section {
          background: #0A0908;
          padding: 110px 48px 120px;
          font-family: 'DM Sans', sans-serif;
          position: relative;
          overflow: hidden;
        }

        @media (max-width: 640px) {
          .fees-section { padding: 80px 20px 90px; }
        }

        /* dot-grid background */
        .fees-dots {
          position: absolute;
          inset: 0;
          background-image: radial-gradient(rgba(255,255,255,0.04) 1px, transparent 1px);
          background-size: 32px 32px;
          pointer-events: none;
        }

        .fees-inner {
          max-width: 1200px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        /* ── Header ── */
        .fees-header {
          margin-bottom: 64px;
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 24px;
          flex-wrap: wrap;
        }

        .fees-eyebrow {
          font-size: 10px;
          letter-spacing: 0.26em;
          text-transform: uppercase;
          color: #C4973A;
          font-weight: 500;
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 14px;
        }

        .fees-eyebrow::before {
          content: '';
          display: block;
          width: 24px;
          height: 1px;
          background: #C4973A;
        }

        .fees-h2 {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(38px, 4.5vw, 56px);
          font-weight: 300;
          color: #EDE8DF;
          line-height: 1;
          letter-spacing: -0.01em;
          margin: 0;
        }

        .fees-h2 em {
          font-style: italic;
          color: #C4973A;
        }

        /* ── Grid ── */
        .fees-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }

        @media (max-width: 900px) {
          .fees-grid { grid-template-columns: 1fr; }
        }

        /* ── Card ── */
        .fee-card {
          position: relative;
          border-radius: 20px;
          overflow: hidden;
          border: 1px solid #1E1C17;
          cursor: default;
          background: #0F0E0B;
          min-height: 420px;
          display: flex;
          flex-direction: column;
          transition:
            border-color 0.4s ease,
            transform 0.5s cubic-bezier(0.23, 1, 0.32, 1),
            box-shadow 0.5s ease;
        }

        .fee-card:hover {
          border-color: #C4973A66;
          transform: translateY(-10px);
          box-shadow:
            0 40px 80px rgba(0, 0, 0, 0.6),
            0 0 0 1px #C4973A22;
        }

        /* ── Image layer — always visible, brightens on hover ── */
        .fee-card-img {
          position: absolute;
          inset: 0;
          z-index: 0;
        }

        .fee-card-img img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0.18;
          transform: scale(1.04);
          filter: saturate(0.5) brightness(0.5);
          transition:
            opacity 0.6s cubic-bezier(0.23, 1, 0.32, 1),
            transform 0.7s cubic-bezier(0.23, 1, 0.32, 1),
            filter 0.6s ease;
        }

        .fee-card:hover .fee-card-img img {
          opacity: 0.55;
          transform: scale(1);
          filter: saturate(0.7) brightness(0.38);
        }

        /* ── Gradient overlay ── */
        .fee-card-overlay {
          position: absolute;
          inset: 0;
          z-index: 1;
          background: linear-gradient(
            to top,
            #0A0908 0%,
            #0A090888 55%,
            transparent 100%
          );
        }

        /* ── Content ── */
        .fee-card-content {
          position: relative;
          z-index: 2;
          padding: 36px 32px;
          display: flex;
          flex-direction: column;
          flex: 1;
          justify-content: space-between;
        }

        .fee-card-top {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
        }

        /* icon ring — spins 360° on hover */
        .fee-icon-ring {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          border: 1px solid #2E2B22;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #C4973A;
          flex-shrink: 0;
          transition:
            border-color 0.3s ease,
            background 0.3s ease,
            transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .fee-card:hover .fee-icon-ring {
          border-color: #C4973A88;
          background: #C4973A18;
          transform: rotate(360deg) scale(1.1);
        }

        /* number — slides left on hover */
        .fee-num {
          font-family: 'Cormorant Garamond', serif;
          font-size: 13px;
          font-style: italic;
          color: #3A3530;
          letter-spacing: 0.06em;
          transition: color 0.3s ease, transform 0.3s ease;
        }

        .fee-card:hover .fee-num {
          color: #C4973A88;
          transform: translateX(-4px);
        }

        /* keyword — slides up and fades in */
        .fee-keyword {
          font-size: 10px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #C4973A;
          font-weight: 500;
          margin-bottom: 12px;
          opacity: 0;
          transform: translateY(8px);
          transition:
            opacity 0.35s ease 0.06s,
            transform 0.35s ease 0.06s;
        }

        .fee-card:hover .fee-keyword {
          opacity: 1;
          transform: translateY(0);
        }

        /* title — floats up slightly */
        .fee-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 30px;
          font-weight: 400;
          color: #EDE8DF;
          line-height: 1.1;
          margin: 0 0 16px;
          letter-spacing: 0.01em;
          transition: transform 0.4s cubic-bezier(0.23, 1, 0.32, 1);
        }

        .fee-card:hover .fee-title {
          transform: translateY(-3px);
        }

        /* description — brightens and floats */
        .fee-desc {
          font-size: 14px;
          line-height: 1.75;
          color: #4A4540;
          font-weight: 300;
          margin: 0;
          transition:
            color 0.4s ease,
            transform 0.4s cubic-bezier(0.23, 1, 0.32, 1);
        }

        .fee-card:hover .fee-desc {
          color: #8A7E72;
          transform: translateY(-2px);
        }

        /* ── Bottom sweep line ── */
        .fee-line {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent, #C4973A, transparent);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.55s cubic-bezier(0.23, 1, 0.32, 1);
        }

        .fee-card:hover .fee-line {
          transform: scaleX(1);
        }

        /* ── Floating particles ── */
        .fee-particles {
          position: absolute;
          inset: 0;
          z-index: 1;
          pointer-events: none;
          overflow: hidden;
          border-radius: 20px;
        }

        .fee-dot {
          position: absolute;
          width: 3px;
          height: 3px;
          border-radius: 50%;
          background: #C4973A;
          opacity: 0;
          bottom: -6px;
        }

        .fee-card:hover .fee-dot { animation: dotFloat 2.5s ease-in-out infinite; }

        .fee-dot:nth-child(1) { left: 15%; animation-delay: 0s;    }
        .fee-dot:nth-child(2) { left: 30%; animation-delay: 0.4s;  }
        .fee-dot:nth-child(3) { left: 50%; animation-delay: 0.8s;  }
        .fee-dot:nth-child(4) { left: 65%; animation-delay: 1.2s;  }
        .fee-dot:nth-child(5) { left: 80%; animation-delay: 0.6s;  }

        @keyframes dotFloat {
          0%   { opacity: 0;   transform: translateY(0)   translateX(0); }
          20%  { opacity: 0.7; }
          80%  { opacity: 0.3; }
          100% { opacity: 0;   transform: translateY(-80px) translateX(10px); }
        }
      `}</style>

      <section className="fees-section">
        <div className="fees-dots" />

        <div className="fees-inner">
          <div className="fees-header">
            <div>
              <p className="fees-eyebrow">Enrollment</p>
              <h2 className="fees-h2">Fee <em>Breakdown</em></h2>
            </div>
          </div>

          <div className="fees-grid">
            {cards.map(({ icon: Icon, title, desc, image, num, keyword }, i) => (
              <div
                key={i}
                className="fee-card"
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
              >
                {/* always-visible background image */}
                <div className="fee-card-img">
                  <img src={image} alt={title} />
                </div>

                {/* gradient overlay */}
                <div className="fee-card-overlay" />

                {/* floating gold particles */}
                <div className="fee-particles">
                  <div className="fee-dot" />
                  <div className="fee-dot" />
                  <div className="fee-dot" />
                  <div className="fee-dot" />
                  <div className="fee-dot" />
                </div>

                {/* main content */}
                <div className="fee-card-content">
                  <div className="fee-card-top">
                    <div className="fee-icon-ring">
                      <Icon size={18} strokeWidth={1.5} />
                    </div>
                    <span className="fee-num">{num}</span>
                  </div>

                  <div className="fee-card-bottom">
                    <p className="fee-keyword">{keyword}</p>
                    <h3 className="fee-title">{title}</h3>
                    <p className="fee-desc">{desc}</p>
                  </div>
                </div>

                {/* sweep line */}
                <div className="fee-line" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Fees