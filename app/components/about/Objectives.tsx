import { useEffect, useRef, useState } from 'react'

const objectives = [
  {
    num: '01',
    title: 'Licensure Preparation',
    desc: 'Learn every skill required to pass the NJ State Board exam and obtain your professional cosmetology license.',
    tag: 'State Board Ready',
    img: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&q=80',
  },
  {
    num: '02',
    title: 'Practical & Business Skills',
    desc: 'Develop the technical and entrepreneurial skills needed to thrive in a licensed, professional salon.',
    tag: 'Salon-Ready',
    img: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80',
  },
  {
    num: '03',
    title: 'Speed & Professionalism',
    desc: 'Build efficiency, salesmanship, ethics, and the professionalism that separates good stylists from great ones.',
    tag: 'Professional Excellence',
    img: 'https://images.unsplash.com/photo-1573496130141-209d200cebd8?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    num: '04',
    title: 'Employability Skills',
    desc: 'Master resume writing, interview preparation, and build a personal portfolio that gets you hired.',
    tag: 'Career Ready',
    img: 'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=800&q=80',
  },
  {
    num: '05',
    title: 'Customer Relations',
    desc: 'Our senior clinic puts you in a real salon environment to develop client service and salesmanship skills.',
    tag: 'Client Experience',
    img: 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=800&q=80',
  },
  {
    num: '06',
    title: 'Career Development',
    desc: 'Job placement assistance and career planning services are provided to every graduate — at no charge.',
    tag: 'Free Placement Support',
    img: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=800&q=80',
  },
]

export default function Objectives() {
  const sectionRef = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)
  const [hovered, setHovered] = useState<number | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.08 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;1,400&family=DM+Sans:wght@300;400;500&display=swap');

        .obj-section {
          font-family: 'DM Sans', sans-serif;
          background: #f9f6f1;
          position: relative;
          overflow: hidden;
          padding: 120px 48px 140px;
        }
        .obj-section * { box-sizing: border-box; margin: 0; padding: 0; }

        /* Subtle grid pattern */
        .obj-section::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(180,160,120,0.07) 1px, transparent 1px),
            linear-gradient(90deg, rgba(180,160,120,0.07) 1px, transparent 1px);
          background-size: 64px 64px;
          pointer-events: none;
        }

        /* Large decorative letter */
        .obj-bg-letter {
          position: absolute;
          top: -40px;
          right: -20px;
          font-family: 'Playfair Display', serif;
          font-size: 400px;
          font-weight: 400;
          color: rgba(196,158,84,0.045);
          line-height: 1;
          pointer-events: none;
          user-select: none;
          z-index: 0;
        }

        .obj-inner {
          position: relative;
          z-index: 1;
          max-width: 1280px;
          margin: 0 auto;
        }

        /* Header */
        .obj-header {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
          align-items: end;
          margin-bottom: 80px;
        }
        @media (max-width: 768px) {
          .obj-header { grid-template-columns: 1fr; }
          .obj-section { padding: 80px 24px 100px; }
        }

        .obj-header-left {
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.9s ease, transform 0.9s ease;
        }
        .obj-header-left.vis { opacity: 1; transform: translateY(0); }

        .obj-eyebrow {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 20px;
        }
        .obj-eyebrow-dash { width: 32px; height: 1px; background: #c49e54; }
        .obj-eyebrow-text {
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.45em;
          text-transform: uppercase;
          color: #c49e54;
        }

        .obj-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(40px, 5vw, 68px);
          font-weight: 400;
          color: #1a1612;
          line-height: 1.05;
        }
        .obj-title em {
          font-style: italic;
          color: #9a7a3a;
        }

        .obj-header-right {
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.9s ease 0.2s, transform 0.9s ease 0.2s;
        }
        .obj-header-right.vis { opacity: 1; transform: translateY(0); }

        .obj-desc {
          font-size: 15px;
          font-weight: 300;
          color: #6b5f50;
          line-height: 1.85;
          border-left: 2px solid rgba(196,158,84,0.35);
          padding-left: 20px;
          margin-bottom: 28px;
        }

        .obj-count {
          display: flex;
          align-items: baseline;
          gap: 8px;
        }
        .obj-count-num {
          font-family: 'Playfair Display', serif;
          font-size: 48px;
          font-weight: 400;
          color: #c49e54;
          line-height: 1;
        }
        .obj-count-label {
          font-size: 12px;
          font-weight: 300;
          letter-spacing: 0.15em;
          color: #9a8a72;
          text-transform: uppercase;
        }

        /* Grid */
        .obj-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }
        @media (max-width: 1024px) { .obj-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 640px) { .obj-grid { grid-template-columns: 1fr; } }

        /* Card */
        .obj-card {
          position: relative;
          border-radius: 4px;
          overflow: hidden;
          cursor: default;
          opacity: 0;
          transform: translateY(32px) scale(0.98);
          transition:
            opacity 0.8s ease,
            transform 0.8s ease,
            box-shadow 0.4s ease;
          aspect-ratio: 3/4;
        }
        .obj-card.vis {
          opacity: 1;
          transform: translateY(0) scale(1);
        }
        .obj-card:hover {
          box-shadow: 0 32px 64px rgba(26,22,18,0.22), 0 8px 20px rgba(26,22,18,0.12);
          z-index: 2;
        }

        /* Photo */
        .obj-photo {
          position: absolute;
          inset: 0;
          background-size: cover;
          background-position: center;
          transition: transform 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        .obj-card:hover .obj-photo { transform: scale(1.06); }

        /* Gradient overlays */
        .obj-overlay-base {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to bottom,
            rgba(249,246,241,0) 0%,
            rgba(249,246,241,0.05) 30%,
            rgba(26,22,18,0.55) 65%,
            rgba(26,22,18,0.92) 100%
          );
        }
        .obj-overlay-hover {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to bottom,
            rgba(196,158,84,0.0) 0%,
            rgba(196,158,84,0.12) 60%,
            rgba(26,22,18,0.95) 100%
          );
          opacity: 0;
          transition: opacity 0.5s ease;
        }
        .obj-card:hover .obj-overlay-hover { opacity: 1; }

        /* Number badge */
        .obj-num-badge {
          position: absolute;
          top: 20px;
          left: 20px;
          width: 36px;
          height: 36px;
          border: 1px solid rgba(249,246,241,0.35);
          background: rgba(249,246,241,0.1);
          backdrop-filter: blur(4px);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 11px;
          font-weight: 500;
          color: rgba(249,246,241,0.9);
          letter-spacing: 0.05em;
          transition: background 0.3s, border-color 0.3s;
        }
        .obj-card:hover .obj-num-badge {
          background: rgba(196,158,84,0.25);
          border-color: rgba(196,158,84,0.6);
        }

        /* Tag */
        .obj-tag {
          position: absolute;
          top: 20px;
          right: 20px;
          background: rgba(196,158,84,0.9);
          color: #fff8ec;
          font-size: 9px;
          font-weight: 500;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          padding: 5px 10px;
          opacity: 0;
          transform: translateX(8px);
          transition: opacity 0.35s ease, transform 0.35s ease;
        }
        .obj-card:hover .obj-tag { opacity: 1; transform: translateX(0); }

        /* Content */
        .obj-content {
          position: absolute;
          bottom: 0; left: 0; right: 0;
          padding: 28px;
        }

        .obj-card-title {
          font-family: 'Playfair Display', serif;
          font-size: 22px;
          font-weight: 400;
          color: #f9f6f1;
          line-height: 1.2;
          margin-bottom: 10px;
          transition: transform 0.4s ease;
        }
        .obj-card:hover .obj-card-title { transform: translateY(-4px); }

        .obj-card-line {
          width: 24px;
          height: 1px;
          background: rgba(196,158,84,0.7);
          margin-bottom: 12px;
          transition: width 0.4s ease;
        }
        .obj-card:hover .obj-card-line { width: 40px; }

        .obj-card-desc {
          font-size: 13px;
          font-weight: 300;
          color: rgba(249,246,241,0.65);
          line-height: 1.7;
          max-height: 0;
          overflow: hidden;
          opacity: 0;
          transition: max-height 0.5s ease, opacity 0.4s ease 0.1s;
        }
        .obj-card:hover .obj-card-desc {
          max-height: 80px;
          opacity: 1;
        }

        /* Bottom strip */
        .obj-strip {
          margin-top: 72px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 32px;
          border-top: 1px solid rgba(180,160,120,0.2);
          opacity: 0;
          transition: opacity 1s ease 0.8s;
        }
        .obj-strip.vis { opacity: 1; }

        .obj-strip-text {
          font-size: 13px;
          font-weight: 300;
          color: #9a8a72;
          letter-spacing: 0.05em;
        }

        .obj-strip-pills { display: flex; gap: 8px; flex-wrap: wrap; }
        .obj-pill {
          font-size: 11px;
          font-weight: 400;
          letter-spacing: 0.1em;
          color: #7a6a52;
          border: 1px solid rgba(180,160,120,0.3);
          padding: 5px 14px;
          border-radius: 100px;
          background: rgba(196,158,84,0.06);
        }
      `}</style>

      <section className="obj-section" ref={sectionRef}>
        <div className="obj-bg-letter">O</div>

        <div className="obj-inner">

          {/* Header */}
          <div className="obj-header">
            <div className={`obj-header-left ${visible ? 'vis' : ''}`}>
              <div className="obj-eyebrow">
                <div className="obj-eyebrow-dash" />
                <span className="obj-eyebrow-text">What We Aim For</span>
              </div>
              <h2 className="obj-title">
                Program<br /><em>Objectives</em>
              </h2>
            </div>

            <div className={`obj-header-right ${visible ? 'vis' : ''}`}>
              <p className="obj-desc">
                Every program at CSJC is structured around six core objectives — from licensure to career placement —
                ensuring graduates are fully equipped for success in the professional beauty industry.
              </p>
              <div className="obj-count">
                <span className="obj-count-num">6</span>
                <span className="obj-count-label">Core objectives<br />covered</span>
              </div>
            </div>
          </div>

          {/* Cards grid */}
          <div className="obj-grid">
            {objectives.map((obj, i) => (
              <div
                key={i}
                className={`obj-card ${visible ? 'vis' : ''}`}
                style={{ transitionDelay: visible ? `${0.05 + i * 0.1}s` : '0s' }}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
              >
                {/* Photo */}
                <div
                  className="obj-photo"
                  style={{ backgroundImage: `url(${obj.img})` }}
                />

                {/* Overlays */}
                <div className="obj-overlay-base" />
                <div className="obj-overlay-hover" />

                {/* Number */}
                <div className="obj-num-badge">{obj.num}</div>

                {/* Tag */}
                <div className="obj-tag">{obj.tag}</div>

                {/* Content */}
                <div className="obj-content">
                  <h3 className="obj-card-title">{obj.title}</h3>
                  <div className="obj-card-line" />
                  <p className="obj-card-desc">{obj.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom strip */}
          <div className={`obj-strip ${visible ? 'vis' : ''}`}>
            <span className="obj-strip-text">Cosmetology School of Jersey City · Program Curriculum</span>
            <div className="obj-strip-pills">
              {['NJ Licensed', 'NACCAS Aligned', 'Job Placement Included'].map((p) => (
                <span className="obj-pill" key={p}>{p}</span>
              ))}
            </div>
          </div>

        </div>
      </section>
    </>
  )
}