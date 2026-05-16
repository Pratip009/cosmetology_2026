import { useEffect, useRef, useState } from 'react'

const methods = [
  { icon: '01', label: 'Classroom lectures & demonstrations' },
  { icon: '02', label: 'Mannequin & live client practicals' },
  { icon: '03', label: 'Audio visual aids & guest artists' },
  { icon: '04', label: 'Field trips & extracurricular activities' },
  { icon: '05', label: 'Goal-oriented assignments' },
  { icon: '06', label: 'Periodic written & practical exams' },
]

const accreditation = [
  { label: 'NJ State Board of Cosmetology & Hairstyling', sub: 'State Licensing Authority' },
  { label: 'SAP Policy — NACCAS Guidelines', sub: 'National Accrediting Commission' },
  { label: 'N.J.A.C. 13:28 Compliance', sub: 'Regulatory Standards' },
  { label: 'All Courses Taught in English', sub: 'Language of Instruction' },
]

const stats = [
  { value: '2', suffix: ' Phases', label: 'Structured Learning' },
  { value: '100', suffix: '%', label: 'Hands-On Training' },
  { value: '6', suffix: '+', label: 'Teaching Methods' },
]

export default function Mission() {
  const sectionRef = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)
  const [hoveredMethod, setHoveredMethod] = useState<number | null>(null)
  const [hoveredAccred, setHoveredAccred] = useState<number | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=Jost:wght@200;300;400;500&display=swap');

        .mission-section {
          font-family: 'Jost', sans-serif;
          background: #0e0c0a;
          color: #f0ece4;
          overflow: hidden;
          position: relative;
        }

        .mission-section * { box-sizing: border-box; margin: 0; padding: 0; }

        /* Grain overlay */
        .mission-section::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E");
          pointer-events: none;
          z-index: 0;
          opacity: 0.6;
        }

        /* Ambient glow */
        .glow-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(120px);
          pointer-events: none;
          z-index: 0;
        }
        .glow-1 {
          width: 600px; height: 600px;
          background: radial-gradient(circle, rgba(196,158,84,0.08) 0%, transparent 70%);
          top: -100px; left: -100px;
        }
        .glow-2 {
          width: 400px; height: 400px;
          background: radial-gradient(circle, rgba(196,158,84,0.06) 0%, transparent 70%);
          bottom: 0; right: 0;
        }

        .inner {
          position: relative;
          z-index: 1;
          max-width: 1280px;
          margin: 0 auto;
          padding: 120px 48px;
        }

        /* ── TOP LABEL ── */
        .eyebrow {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 72px;
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.8s ease, transform 0.8s ease;
        }
        .eyebrow.vis { opacity: 1; transform: translateY(0); }
        .eyebrow-line { flex: 1; height: 1px; background: linear-gradient(to right, transparent, rgba(196,158,84,0.4), transparent); }
        .eyebrow-text {
          font-family: 'Jost', sans-serif;
          font-weight: 200;
          font-size: 10px;
          letter-spacing: 0.5em;
          text-transform: uppercase;
          color: rgba(196,158,84,0.7);
        }

        /* ── HERO TITLE AREA ── */
        .hero-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          margin-bottom: 100px;
          align-items: end;
        }
        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr; gap: 40px; }
          .inner { padding: 80px 24px; }
        }

        .title-block { position: relative; }

        .display-title {
          font-family: 'Cormorant Garamond', serif;
          font-weight: 300;
          font-size: clamp(52px, 7vw, 96px);
          line-height: 0.9;
          color: #f0ece4;
          margin-bottom: 32px;
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 1s ease 0.2s, transform 1s ease 0.2s;
        }
        .display-title.vis { opacity: 1; transform: translateY(0); }

        .title-accent {
          display: block;
          font-style: italic;
          background: linear-gradient(135deg, #c49e54 0%, #e8d5a0 40%, #c49e54 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        /* Gold rule */
        .gold-rule {
          width: 64px;
          height: 1px;
          background: linear-gradient(to right, #c49e54, rgba(196,158,84,0.2));
          margin-bottom: 28px;
          opacity: 0;
          transition: opacity 1s ease 0.5s, width 1s ease 0.5s;
        }
        .gold-rule.vis { opacity: 1; width: 120px; }

        .body-copy {
          font-weight: 300;
          font-size: 15px;
          line-height: 1.9;
          color: rgba(240,236,228,0.55);
          opacity: 0;
          transform: translateY(16px);
          transition: opacity 0.9s ease 0.6s, transform 0.9s ease 0.6s;
        }
        .body-copy.vis { opacity: 1; transform: translateY(0); }

        /* ── QUOTE BLOCK ── */
        .quote-block {
          position: relative;
          padding: 40px 40px 40px 56px;
          border: 1px solid rgba(196,158,84,0.15);
          background: rgba(196,158,84,0.03);
          opacity: 0;
          transform: translateX(20px);
          transition: opacity 1s ease 0.4s, transform 1s ease 0.4s;
        }
        .quote-block.vis { opacity: 1; transform: translateX(0); }

        .quote-mark {
          position: absolute;
          top: -1px; left: -1px;
          width: 40px; height: 40px;
          background: #c49e54;
          display: flex; align-items: center; justify-content: center;
        }
        .quote-mark span {
          font-family: 'Cormorant Garamond', serif;
          font-size: 28px;
          color: #0e0c0a;
          line-height: 1;
          margin-top: 4px;
        }

        .quote-text {
          font-family: 'Cormorant Garamond', serif;
          font-style: italic;
          font-weight: 300;
          font-size: clamp(18px, 2vw, 22px);
          line-height: 1.7;
          color: rgba(240,236,228,0.8);
        }

        /* Stats row */
        .stats-row {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1px;
          background: rgba(196,158,84,0.12);
          margin-top: 40px;
          opacity: 0;
          transform: translateY(16px);
          transition: opacity 0.9s ease 0.8s, transform 0.9s ease 0.8s;
        }
        .stats-row.vis { opacity: 1; transform: translateY(0); }
        .stat-cell {
          background: #0e0c0a;
          padding: 24px 20px;
          text-align: center;
        }
        .stat-value {
          font-family: 'Cormorant Garamond', serif;
          font-size: 36px;
          font-weight: 300;
          color: #c49e54;
          line-height: 1;
          display: block;
          margin-bottom: 6px;
        }
        .stat-label {
          font-size: 10px;
          font-weight: 200;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: rgba(240,236,228,0.4);
        }

        /* ── DIVIDER ── */
        .section-divider {
          display: grid;
          grid-template-columns: 1fr auto 1fr;
          align-items: center;
          gap: 24px;
          margin-bottom: 64px;
          opacity: 0;
          transition: opacity 1s ease 0.3s;
        }
        .section-divider.vis { opacity: 1; }
        .divider-line { height: 1px; background: linear-gradient(to right, transparent, rgba(196,158,84,0.25)); }
        .divider-line.right { background: linear-gradient(to left, transparent, rgba(196,158,84,0.25)); }
        .divider-diamond {
          width: 8px; height: 8px;
          background: #c49e54;
          transform: rotate(45deg);
        }

        /* ── METHODS GRID ── */
        .bottom-grid {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 48px;
          align-items: start;
        }
        @media (max-width: 900px) { .bottom-grid { grid-template-columns: 1fr; } }

        .methods-label {
          font-size: 10px;
          font-weight: 200;
          letter-spacing: 0.4em;
          text-transform: uppercase;
          color: rgba(196,158,84,0.6);
          margin-bottom: 28px;
          opacity: 0;
          transition: opacity 0.8s ease 0.2s;
        }
        .methods-label.vis { opacity: 1; }

        .methods-list { display: flex; flex-direction: column; gap: 2px; }

        .method-row {
          display: flex;
          align-items: center;
          gap: 20px;
          padding: 18px 20px;
          border: 1px solid transparent;
          cursor: default;
          transition: border-color 0.3s, background 0.3s;
          opacity: 0;
          transform: translateX(-16px);
        }
        .method-row.vis { opacity: 1; transform: translateX(0); }
        .method-row:hover {
          border-color: rgba(196,158,84,0.2);
          background: rgba(196,158,84,0.04);
        }
        .method-num {
          font-family: 'Cormorant Garamond', serif;
          font-size: 13px;
          color: rgba(196,158,84,0.5);
          min-width: 20px;
          font-weight: 300;
        }
        .method-line {
          height: 1px;
          width: 20px;
          background: rgba(196,158,84,0.3);
          flex-shrink: 0;
          transition: width 0.3s;
        }
        .method-row:hover .method-line { width: 36px; }
        .method-text {
          font-size: 14px;
          font-weight: 300;
          color: rgba(240,236,228,0.65);
          transition: color 0.3s;
        }
        .method-row:hover .method-text { color: rgba(240,236,228,0.9); }
        .method-dot {
          margin-left: auto;
          width: 4px; height: 4px;
          border-radius: 50%;
          background: rgba(196,158,84,0);
          transition: background 0.3s;
          flex-shrink: 0;
        }
        .method-row:hover .method-dot { background: rgba(196,158,84,0.6); }

        /* ── ACCREDITATION PANEL ── */
        .accred-panel {
          background: linear-gradient(160deg, rgba(196,158,84,0.07) 0%, rgba(196,158,84,0.02) 100%);
          border: 1px solid rgba(196,158,84,0.18);
          padding: 40px;
          position: relative;
          overflow: hidden;
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 1s ease 0.6s, transform 1s ease 0.6s;
        }
        .accred-panel.vis { opacity: 1; transform: translateY(0); }

        /* Corner ornaments */
        .corner {
          position: absolute;
          width: 20px; height: 20px;
          border-color: rgba(196,158,84,0.5);
          border-style: solid;
        }
        .corner-tl { top: 12px; left: 12px; border-width: 1px 0 0 1px; }
        .corner-tr { top: 12px; right: 12px; border-width: 1px 1px 0 0; }
        .corner-bl { bottom: 12px; left: 12px; border-width: 0 0 1px 1px; }
        .corner-br { bottom: 12px; right: 12px; border-width: 0 1px 1px 0; }

        .accred-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 26px;
          font-weight: 300;
          color: #f0ece4;
          margin-bottom: 8px;
          line-height: 1.2;
        }
        .accred-subtitle {
          font-size: 10px;
          font-weight: 200;
          letter-spacing: 0.35em;
          text-transform: uppercase;
          color: rgba(196,158,84,0.55);
          margin-bottom: 32px;
        }

        .accred-item {
          padding: 20px 0;
          border-bottom: 1px solid rgba(196,158,84,0.1);
          display: flex;
          align-items: flex-start;
          gap: 16px;
          cursor: default;
          transition: background 0.3s;
        }
        .accred-item:last-child { border-bottom: none; }

        .accred-icon {
          width: 28px; height: 28px;
          border: 1px solid rgba(196,158,84,0.3);
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
          margin-top: 2px;
          transition: background 0.3s, border-color 0.3s;
        }
        .accred-item:hover .accred-icon {
          background: rgba(196,158,84,0.15);
          border-color: rgba(196,158,84,0.5);
        }
        .accred-icon-inner {
          width: 6px; height: 6px;
          background: #c49e54;
          transform: rotate(45deg);
        }
        .accred-name {
          font-size: 14px;
          font-weight: 400;
          color: rgba(240,236,228,0.8);
          margin-bottom: 3px;
          transition: color 0.3s;
        }
        .accred-item:hover .accred-name { color: #f0ece4; }
        .accred-sub {
          font-size: 11px;
          font-weight: 200;
          color: rgba(240,236,228,0.35);
          letter-spacing: 0.05em;
        }

        /* Seal */
        .seal {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-top: 28px;
          padding-top: 24px;
          border-top: 1px solid rgba(196,158,84,0.1);
        }
        .seal-ring {
          width: 36px; height: 36px;
          border-radius: 50%;
          border: 1px solid rgba(196,158,84,0.4);
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
        }
        .seal-inner {
          width: 20px; height: 20px;
          border-radius: 50%;
          background: linear-gradient(135deg, #c49e54, rgba(196,158,84,0.4));
        }
        .seal-text {
          font-size: 11px;
          font-weight: 200;
          color: rgba(240,236,228,0.4);
          letter-spacing: 0.08em;
          line-height: 1.5;
        }
      `}</style>

      <section className="mission-section" ref={sectionRef}>
        <div className="glow-orb glow-1" />
        <div className="glow-orb glow-2" />

        <div className="inner">

          {/* Eyebrow */}
          <div className={`eyebrow ${visible ? 'vis' : ''}`}>
            <div className="eyebrow-line" />
            <span className="eyebrow-text">Our Mission</span>
            <div className="eyebrow-line" />
          </div>

          {/* Hero grid */}
          <div className="hero-grid">
            <div className="title-block">
              <h2 className={`display-title ${visible ? 'vis' : ''}`}>
                Preparing<br />
                Students for<br />
                <span className="title-accent">Real Careers</span>
              </h2>
              <div className={`gold-rule ${visible ? 'vis' : ''}`} />
              <p className={`body-copy ${visible ? 'vis' : ''}`}>
                CSJC provides hands-on instruction in the art, science, and business of professional beauty care.
                Each program is divided into two phases — pre-clinical classroom instruction, and senior clinic
                learning experiences — mirroring today's salon environment across all programs.
              </p>
            </div>

            <div>
              <div className={`quote-block ${visible ? 'vis' : ''}`}>
                <div className="quote-mark"><span>&ldquo;</span></div>
                <p className="quote-text">
                  Our curriculum builds a strong foundation before students move on to clinical learning —
                  focusing on skills that make graduates marketable and prepared for their career.
                </p>
              </div>

              <div className={`stats-row ${visible ? 'vis' : ''}`}>
                {stats.map((s, i) => (
                  <div className="stat-cell" key={i}>
                    <span className="stat-value">{s.value}<span style={{ fontSize: '18px' }}>{s.suffix}</span></span>
                    <span className="stat-label">{s.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className={`section-divider ${visible ? 'vis' : ''}`}>
            <div className="divider-line" />
            <div className="divider-diamond" />
            <div className="divider-line right" />
          </div>

          {/* Bottom grid */}
          <div className="bottom-grid">

            {/* Methods */}
            <div>
              <p className={`methods-label ${visible ? 'vis' : ''}`}>Instructional Methods</p>
              <div className="methods-list">
                {methods.map((m, i) => (
                  <div
                    key={i}
                    className={`method-row ${visible ? 'vis' : ''}`}
                    style={{ transitionDelay: visible ? `${0.1 + i * 0.08}s` : '0s' }}
                    onMouseEnter={() => setHoveredMethod(i)}
                    onMouseLeave={() => setHoveredMethod(null)}
                  >
                    <span className="method-num">{m.icon}</span>
                    <div className="method-line" />
                    <span className="method-text">{m.label}</span>
                    <div className="method-dot" />
                  </div>
                ))}
              </div>
            </div>

            {/* Accreditation */}
            <div className={`accred-panel ${visible ? 'vis' : ''}`}>
              <div className="corner corner-tl" />
              <div className="corner corner-tr" />
              <div className="corner corner-bl" />
              <div className="corner corner-br" />

              <h3 className="accred-title">Accreditation<br />&amp; Approval</h3>
              <p className="accred-subtitle">Recognized &amp; Licensed</p>

              {accreditation.map((a, i) => (
                <div
                  key={i}
                  className="accred-item"
                  onMouseEnter={() => setHoveredAccred(i)}
                  onMouseLeave={() => setHoveredAccred(null)}
                >
                  <div className="accred-icon">
                    <div className="accred-icon-inner" />
                  </div>
                  <div>
                    <p className="accred-name">{a.label}</p>
                    <p className="accred-sub">{a.sub}</p>
                  </div>
                </div>
              ))}

              <div className="seal">
                <div className="seal-ring">
                  <div className="seal-inner" />
                </div>
                <p className="seal-text">
                  Fully licensed &amp; compliant<br />All courses taught in English
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}