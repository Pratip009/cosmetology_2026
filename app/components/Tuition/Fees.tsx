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

        .font-cormorant { font-family: 'Cormorant Garamond', serif; }
        .font-dm        { font-family: 'DM Sans', sans-serif; }

        /* dot-grid bg */
        .fees-dots {
          position: absolute;
          inset: 0;
          background-image: radial-gradient(rgba(255,255,255,0.04) 1px, transparent 1px);
          background-size: 32px 32px;
          pointer-events: none;
        }

        /* eyebrow decoration */
        .fees-eyebrow::before {
          content: '';
          display: block;
          width: 24px;
          height: 1px;
          background: #C4973A;
          flex-shrink: 0;
        }

        /* ── Card transitions ── */
        .fee-card {
          transition:
            border-color 0.4s ease,
            transform 0.5s cubic-bezier(0.23, 1, 0.32, 1),
            box-shadow 0.5s ease;
        }
        .fee-card:hover {
          border-color: rgba(196,151,58,0.4) !important;
          transform: translateY(-10px);
          box-shadow: 0 40px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(196,151,58,0.13);
        }
        /* on mobile, disable lift — feels wrong on touch */
        @media (max-width: 639px) {
          .fee-card:hover { transform: none; }
          .fee-card.tapped { border-color: rgba(196,151,58,0.4) !important; }
        }

        /* ── Image: base state clearly visible, hover = sharper ── */
        .fee-card-img img {
          transition: opacity 0.6s cubic-bezier(0.23,1,0.32,1),
                      transform 0.7s cubic-bezier(0.23,1,0.32,1),
                      filter 0.6s ease;
          /* Base: clearly visible — opacity 0.45, desaturated */
          opacity: 0.45;
          transform: scale(1.04);
          filter: saturate(0.5) brightness(0.55);
        }
        .fee-card:hover .fee-card-img img {
          /* Hover: vivid and sharp */
          opacity: 0.75;
          transform: scale(1);
          filter: saturate(0.85) brightness(0.5);
        }

        /* ── Icon ring ── */
        .fee-icon-ring {
          transition: border-color 0.3s, background 0.3s,
                      transform 0.6s cubic-bezier(0.34,1.56,0.64,1);
        }
        .fee-card:hover .fee-icon-ring {
          border-color: rgba(196,151,58,0.53) !important;
          background: rgba(196,151,58,0.1) !important;
          transform: rotate(360deg) scale(1.1);
        }

        /* ── Number ── */
        .fee-num { transition: color 0.3s, transform 0.3s; }
        .fee-card:hover .fee-num { color: rgba(196,151,58,0.53) !important; transform: translateX(-4px); }

        /* ── Keyword ── */
        .fee-keyword {
          opacity: 0;
          transform: translateY(8px);
          transition: opacity 0.35s ease 0.06s, transform 0.35s ease 0.06s;
        }
        .fee-card:hover .fee-keyword { opacity: 1; transform: translateY(0); }

        /* ── Title float ── */
        .fee-title { transition: transform 0.4s cubic-bezier(0.23,1,0.32,1); }
        .fee-card:hover .fee-title { transform: translateY(-3px); }

        /* ── Desc brighten ── */
        .fee-desc { transition: color 0.4s, transform 0.4s cubic-bezier(0.23,1,0.32,1); }
        .fee-card:hover .fee-desc { color: #8A7E72 !important; transform: translateY(-2px); }

        /* ── Bottom sweep line ── */
        .fee-line {
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.55s cubic-bezier(0.23,1,0.32,1);
        }
        .fee-card:hover .fee-line { transform: scaleX(1); }

        /* ── Particles ── */
        .fee-dot {
          position: absolute;
          width: 3px; height: 3px;
          border-radius: 50%;
          background: #C4973A;
          opacity: 0;
          bottom: -6px;
        }
        .fee-card:hover .fee-dot { animation: dotFloat 2.5s ease-in-out infinite; }
        .fee-dot:nth-child(1) { left: 15%; animation-delay: 0s;   }
        .fee-dot:nth-child(2) { left: 30%; animation-delay: 0.4s; }
        .fee-dot:nth-child(3) { left: 50%; animation-delay: 0.8s; }
        .fee-dot:nth-child(4) { left: 65%; animation-delay: 1.2s; }
        .fee-dot:nth-child(5) { left: 80%; animation-delay: 0.6s; }
        @keyframes dotFloat {
          0%   { opacity: 0;   transform: translateY(0) translateX(0); }
          20%  { opacity: 0.7; }
          80%  { opacity: 0.3; }
          100% { opacity: 0;   transform: translateY(-80px) translateX(10px); }
        }
      `}</style>

      <section className="font-dm relative overflow-hidden bg-[#0A0908] px-5 py-20 sm:px-10 sm:py-24 lg:px-12 lg:py-28">
        <div className="fees-dots" />

        <div className="relative z-10 mx-auto max-w-7xl">

          {/* ── Header ── */}
          <div className="mb-12 flex flex-wrap items-end justify-between gap-6 sm:mb-16">
            <div>
              <p className="fees-eyebrow mb-3.5 flex items-center gap-2.5 text-[10px] font-medium uppercase tracking-[0.26em] text-[#C4973A]">
                Enrollment
              </p>
              <h2
                className="font-cormorant m-0 leading-none tracking-[-0.01em] text-[#EDE8DF]"
                style={{ fontSize: 'clamp(36px, 4.5vw, 56px)', fontWeight: 300 }}
              >
                Fee <em className="italic text-[#C4973A]">Breakdown</em>
              </h2>
            </div>
          </div>

          {/* ── Cards grid ── */}
          {/* Mobile: stacked | sm: 1 col | md: 3 cols */}
          <div className="grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-3">
            {cards.map(({ icon: Icon, title, desc, image, num, keyword }, i) => (
              <div
                key={i}
                className={`fee-card relative flex min-h-[380px] cursor-default flex-col overflow-hidden rounded-2xl border border-[#1E1C17] bg-[#0F0E0B] sm:min-h-[420px] lg:min-h-[460px]`}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
              >
                {/* Background image */}
                <div className="fee-card-img absolute inset-0 z-0">
                  <img src={image} alt={title} className="h-full w-full object-cover" />
                </div>

                {/* Gradient overlay — lighter than before so image shows through */}
                <div
                  className="absolute inset-0 z-[1]"
                  style={{
                    background: 'linear-gradient(to top, #0A0908 0%, rgba(10,9,8,0.72) 45%, rgba(10,9,8,0.3) 100%)',
                  }}
                />

                {/* Floating particles */}
                <div className="pointer-events-none absolute inset-0 z-[1] overflow-hidden rounded-2xl">
                  {[...Array(5)].map((_, d) => (
                    <div key={d} className="fee-dot" />
                  ))}
                </div>

                {/* Content */}
                <div className="relative z-[2] flex flex-1 flex-col justify-between p-7 sm:p-8 lg:p-9">
                  {/* Top: icon + number */}
                  <div className="flex items-start justify-between">
                    <div className="fee-icon-ring flex h-12 w-12 items-center justify-center rounded-full border border-[#2E2B22] text-[#C4973A]">
                      <Icon size={18} strokeWidth={1.5} />
                    </div>
                    <span
                      className="fee-num font-cormorant italic tracking-[0.06em]"
                      style={{ fontSize: '13px', color: '#3A3530' }}
                    >
                      {num}
                    </span>
                  </div>

                  {/* Bottom: keyword + title + desc */}
                  <div>
                    <p
                      className="fee-keyword mb-3 text-[10px] font-medium uppercase tracking-[0.18em] text-[#C4973A]"
                    >
                      {keyword}
                    </p>
                    <h3
                      className="fee-title font-cormorant mb-4 leading-[1.1] tracking-[0.01em] text-[#EDE8DF]"
                      style={{ fontSize: 'clamp(24px, 2.5vw, 30px)', fontWeight: 400 }}
                    >
                      {title}
                    </h3>
                    <p
                      className="fee-desc text-sm font-light leading-[1.75]"
                      style={{ color: '#4A4540' }}
                    >
                      {desc}
                    </p>
                  </div>
                </div>

                {/* Bottom sweep line */}
                <div
                  className="fee-line absolute bottom-0 left-0 right-0 z-[3] h-[2px]"
                  style={{ background: 'linear-gradient(90deg, transparent, #C4973A, transparent)' }}
                />
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  )
}

export default Fees