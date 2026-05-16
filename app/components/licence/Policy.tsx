import React, { useEffect, useRef } from 'react';
import { BookOpen, CheckCircle, AlertTriangle } from 'lucide-react';

const evaluationPeriods = [
  { program: 'Cosmetology', points: '450, 900, 1200 scheduled hours' },
  { program: 'Barbering', points: '450, 900 scheduled hours' },
  { program: 'Nail Technology', points: '150, 300 scheduled hours' },
  { program: 'Refresher', points: '125, 250 scheduled hours' },
  { program: 'Teacher Training', points: '300, 600 scheduled hours' },
];

const pillars = [
  {
    icon: BookOpen,
    tag: '01',
    title: 'Academic',
    desc: 'Minimum 75% cumulative GPA. Written and practical exams weighted equally across all evaluations.',
    accent: '#C4973A',
  },
  {
    icon: CheckCircle,
    tag: '02',
    title: 'Attendance',
    desc: 'Minimum 70% cumulative attendance. 14 consecutive absent days results in automatic termination.',
    accent: '#7E9E8A',
  },
  {
    icon: AlertTriangle,
    tag: '03',
    title: 'Warning & Probation',
    desc: 'Fail at evaluation → Warning. Still failing → Probation. Financial aid maintained throughout both periods.',
    accent: '#C07E5A',
  },
];

const appeals = [
  'Students may appeal within 10 calendar days of a SAP determination.',
  'Grounds: death of a relative, injury or illness, or other special circumstance.',
  'Written appeal required on designated form with supporting documentation.',
  'Decision returned within 30 calendar days. Documents kept in student file.',
];

const Policy = () => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const els = ref.current?.querySelectorAll('.rv');
    if (!els) return;
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('rved')),
      { threshold: 0.1 }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=DM+Sans:wght@300;400;500&display=swap');

        .pol-root {
          background: #08070A;
          font-family: 'DM Sans', sans-serif;
          position: relative;
          overflow: hidden;
        }

        /* grid texture */
        .pol-root::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px);
          background-size: 60px 60px;
          pointer-events: none;
          z-index: 0;
        }

        /* radial glow top-right */
        .pol-glow {
          position: absolute;
          top: -180px;
          right: -180px;
          width: 600px;
          height: 600px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(196,151,58,0.09) 0%, transparent 70%);
          pointer-events: none;
          z-index: 0;
        }

        /* second glow bottom-left */
        .pol-glow2 {
          position: absolute;
          bottom: -120px;
          left: -120px;
          width: 400px;
          height: 400px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(126,158,138,0.07) 0%, transparent 70%);
          pointer-events: none;
          z-index: 0;
        }

        .pol-inner {
          position: relative;
          z-index: 1;
          max-width: 1280px;
          margin: 0 auto;
          padding: 120px 48px 130px;
        }

        @media (max-width: 768px) {
          .pol-inner { padding: 80px 24px 90px; }
        }

        /* ── Header ── */
        .pol-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: #C4973A;
          margin-bottom: 20px;
        }
        .pol-eyebrow-line {
          display: block;
          width: 28px;
          height: 1px;
          background: #C4973A;
        }

        .pol-heading {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(36px, 4.5vw, 58px);
          font-weight: 300;
          color: #EDE8DF;
          line-height: 1.05;
          letter-spacing: -0.02em;
          margin: 0 0 20px;
        }
        .pol-heading em {
          font-style: italic;
          color: #C4973A;
        }

        .pol-subtext {
          font-size: 15px;
          font-weight: 300;
          color: rgba(237,232,223,0.45);
          max-width: 540px;
          line-height: 1.75;
          margin-bottom: 72px;
        }

        /* ── Pillars ── */
        .pol-pillars {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
          margin-bottom: 20px;
        }

        @media (max-width: 900px) {
          .pol-pillars { grid-template-columns: 1fr; }
        }

        .pol-pillar {
          background: #0E0D10;
          border: 1px solid #1C1A20;
          border-radius: 18px;
          padding: 36px 32px;
          position: relative;
          overflow: hidden;
          transition: border-color 0.4s ease, transform 0.4s cubic-bezier(0.23,1,0.32,1);
          cursor: default;
        }

        .pol-pillar:hover {
          transform: translateY(-6px);
        }

        /* accent stripe at top */
        .pol-pillar-stripe {
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 2px;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.5s cubic-bezier(0.23,1,0.32,1);
        }
        .pol-pillar:hover .pol-pillar-stripe { transform: scaleX(1); }

        /* subtle glow inside card on hover */
        .pol-pillar::after {
          content: '';
          position: absolute;
          top: -60px; right: -60px;
          width: 160px; height: 160px;
          border-radius: 50%;
          opacity: 0;
          transition: opacity 0.4s ease;
          pointer-events: none;
        }
        .pol-pillar:hover::after { opacity: 1; }

        .pol-pillar-p1::after { background: radial-gradient(circle, rgba(196,151,58,0.1) 0%, transparent 70%); }
        .pol-pillar-p2::after { background: radial-gradient(circle, rgba(126,158,138,0.1) 0%, transparent 70%); }
        .pol-pillar-p3::after { background: radial-gradient(circle, rgba(192,126,90,0.1) 0%, transparent 70%); }

        .pol-pillar-top {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          margin-bottom: 28px;
        }

        .pol-pillar-icon {
          width: 44px; height: 44px;
          border-radius: 12px;
          border: 1px solid #2A2830;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: border-color 0.3s, transform 0.4s cubic-bezier(0.34,1.56,0.64,1);
        }
        .pol-pillar:hover .pol-pillar-icon {
          transform: scale(1.12) rotate(-6deg);
        }

        .pol-pillar-num {
          font-family: 'Cormorant Garamond', serif;
          font-size: 13px;
          font-style: italic;
          color: #2E2C34;
          letter-spacing: 0.06em;
          transition: color 0.3s;
        }
        .pol-pillar:hover .pol-pillar-num { color: #4A4550; }

        .pol-pillar-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 26px;
          font-weight: 400;
          color: #EDE8DF;
          margin: 0 0 14px;
          line-height: 1.1;
          transition: transform 0.3s ease;
        }
        .pol-pillar:hover .pol-pillar-title { transform: translateX(4px); }

        .pol-pillar-desc {
          font-size: 13.5px;
          font-weight: 300;
          color: #4A4550;
          line-height: 1.75;
          margin: 0;
          transition: color 0.3s;
        }
        .pol-pillar:hover .pol-pillar-desc { color: #7A7280; }

        /* ── Bottom grid ── */
        .pol-bottom {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
          margin-top: 16px;
        }

        @media (max-width: 860px) {
          .pol-bottom { grid-template-columns: 1fr; }
        }

        .pol-panel {
          background: #0E0D10;
          border: 1px solid #1C1A20;
          border-radius: 18px;
          padding: 40px;
          position: relative;
          overflow: hidden;
        }

        .pol-panel-label {
          font-size: 9px;
          font-weight: 500;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: #C4973A;
          margin-bottom: 20px;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .pol-panel-label::after {
          content: '';
          flex: 1;
          height: 1px;
          background: #1C1A20;
          display: block;
        }

        .pol-panel-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 28px;
          font-weight: 300;
          color: #EDE8DF;
          margin: 0 0 28px;
        }

        /* eval table */
        .pol-eval-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 13px 0;
          border-bottom: 1px solid #141318;
          gap: 12px;
          transition: background 0.2s;
          border-radius: 6px;
          margin: 0 -8px;
          padding-left: 8px;
          padding-right: 8px;
        }
        .pol-eval-row:hover { background: #13121A; }
        .pol-eval-row:last-child { border-bottom: none; }

        .pol-eval-program {
          font-size: 14px;
          font-weight: 400;
          color: rgba(237,232,223,0.7);
        }

        .pol-eval-points {
          font-size: 11.5px;
          font-weight: 300;
          color: #C4973A;
          letter-spacing: 0.04em;
          text-align: right;
          flex-shrink: 0;
        }

        /* prog bar inside eval */
        .pol-eval-bar-wrap {
          width: 60px;
          height: 2px;
          background: #1C1A20;
          border-radius: 2px;
          flex-shrink: 0;
          overflow: hidden;
        }
        .pol-eval-bar {
          height: 100%;
          border-radius: 2px;
          background: linear-gradient(90deg, #C4973A, #E8C070);
        }

        /* appeals */
        .pol-appeal-list {
          display: flex;
          flex-direction: column;
          gap: 18px;
        }

        .pol-appeal-item {
          display: flex;
          align-items: flex-start;
          gap: 14px;
          transition: transform 0.2s ease;
        }
        .pol-appeal-item:hover { transform: translateX(5px); }

        .pol-appeal-idx {
          font-family: 'Cormorant Garamond', serif;
          font-size: 13px;
          font-style: italic;
          color: #C4973A;
          opacity: 0.6;
          flex-shrink: 0;
          min-width: 18px;
          margin-top: 1px;
        }

        .pol-appeal-text {
          font-size: 14px;
          font-weight: 300;
          color: rgba(237,232,223,0.45);
          line-height: 1.7;
        }

        /* decorative corner accent on panel */
        .pol-corner {
          position: absolute;
          bottom: 0; right: 0;
          width: 80px; height: 80px;
          border-bottom-right-radius: 18px;
          border-top: 1px solid #1C1A20;
          border-left: 1px solid #1C1A20;
          border-bottom: none;
          border-right: none;
          pointer-events: none;
          opacity: 0.4;
        }

        /* ── reveal ── */
        .rv {
          opacity: 0;
          transform: translateY(28px);
          transition: opacity 0.7s ease, transform 0.7s cubic-bezier(0.23,1,0.32,1);
        }
        .rv.rved { opacity: 1; transform: none; }
        .rv-d1 { transition-delay: 0.08s; }
        .rv-d2 { transition-delay: 0.16s; }
        .rv-d3 { transition-delay: 0.24s; }
        .rv-d4 { transition-delay: 0.32s; }
        .rv-d5 { transition-delay: 0.40s; }
      `}</style>

      <section className="pol-root" ref={ref}>
        <div className="pol-glow" />
        <div className="pol-glow2" />

        <div className="pol-inner">

          {/* Header */}
          <div className="rv">
            <span className="pol-eyebrow">
              <span className="pol-eyebrow-line" />
              Academic Standards
            </span>
            <h2 className="pol-heading">Satisfactory <em>Academic Progress</em></h2>
            <p className="pol-subtext">
              Applied consistently per NACCAS guidelines and US Department of Education federal regulations. Students receive printed SAP reports at each evaluation period.
            </p>
          </div>

          {/* Pillars */}
          <div className="pol-pillars">
            {pillars.map(({ icon: Icon, tag, title, desc, accent }, i) => (
              <div
                key={i}
                className={`pol-pillar pol-pillar-p${i + 1} rv rv-d${i + 1}`}
              >
                <div
                  className="pol-pillar-stripe"
                  style={{ background: `linear-gradient(90deg, transparent, ${accent}, transparent)` }}
                />
                <div className="pol-pillar-top">
                  <div className="pol-pillar-icon" style={{ borderColor: `${accent}30` }}>
                    <Icon size={18} strokeWidth={1.5} style={{ color: accent }} />
                  </div>
                  <span className="pol-pillar-num">{tag}</span>
                </div>
                <h3 className="pol-pillar-title">{title}</h3>
                <p className="pol-pillar-desc">{desc}</p>
              </div>
            ))}
          </div>

          {/* Bottom panels */}
          <div className="pol-bottom">

            {/* Evaluation periods */}
            <div className="pol-panel rv rv-d4">
              <div className="pol-panel-label">Schedule</div>
              <h3 className="pol-panel-title">Evaluation Periods</h3>
              <div>
                {evaluationPeriods.map((ep, i) => {
                  const barW = [80, 64, 40, 48, 56][i];
                  return (
                    <div className="pol-eval-row" key={i}>
                      <span className="pol-eval-program">{ep.program}</span>
                      <div className="pol-eval-bar-wrap">
                        <div className="pol-eval-bar" style={{ width: `${barW}%` }} />
                      </div>
                      <span className="pol-eval-points">{ep.points}</span>
                    </div>
                  );
                })}
              </div>
              <div className="pol-corner" />
            </div>

            {/* Appeals */}
            <div className="pol-panel rv rv-d5">
              <div className="pol-panel-label">Process</div>
              <h3 className="pol-panel-title">Appeals</h3>
              <div className="pol-appeal-list">
                {appeals.map((text, i) => (
                  <div className="pol-appeal-item" key={i}>
                    <span className="pol-appeal-idx">0{i + 1}</span>
                    <p className="pol-appeal-text">{text}</p>
                  </div>
                ))}
              </div>
              <div className="pol-corner" />
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default Policy;