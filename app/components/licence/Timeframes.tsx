import React, { useEffect, useRef, useState } from 'react';

const maxTimeframes = [
  { program: 'Cosmetology',      schedule: 'Full-Time', hrs: 30, normal: '40 Weeks', max: '52 Weeks',   normalW: 40,  maxW: 52   },
  { program: 'Cosmetology',      schedule: 'Part-Time', hrs: 16, normal: '75 Weeks', max: '98 Weeks',   normalW: 75,  maxW: 98   },
  { program: 'Barbering',        schedule: 'Full-Time', hrs: 30, normal: '30 Weeks', max: '40 Weeks',   normalW: 30,  maxW: 40   },
  { program: 'Barbering',        schedule: 'Part-Time', hrs: 16, normal: '56 Weeks', max: '73 Weeks',   normalW: 56,  maxW: 73   },
  { program: 'Teacher Training', schedule: 'Full-Time', hrs: 30, normal: '22 Weeks', max: '28.6 Weeks', normalW: 22,  maxW: 28.6 },
  { program: 'Teacher Training', schedule: 'Part-Time', hrs: 16, normal: '41 Weeks', max: '53.6 Weeks', normalW: 41,  maxW: 53.6 },
  { program: 'Refresher',        schedule: 'Full-Time', hrs: 30, normal: '9 Weeks',  max: '11.9 Weeks', normalW: 9,   maxW: 11.9 },
];

const GLOBAL_MAX = 98;

const programMeta: Record<string, { color: string }> = {
  'Cosmetology':      { color: '#B07D3A' },
  'Barbering':        { color: '#3A7A5A' },
  'Teacher Training': { color: '#6E4A9A' },
  'Refresher':        { color: '#A0503A' },
};

const programs = [...new Set(maxTimeframes.map(r => r.program))];

const Timeframes = () => {
  const [active, setActive] = useState<string | null>(null);
  const [loaded, setLoaded] = useState(false);
  const [hovered, setHovered] = useState<number | null>(null);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 150);
    return () => clearTimeout(t);
  }, []);

  const filtered = active ? maxTimeframes.filter(r => r.program === active) : maxTimeframes;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;1,400;1,500&family=Figtree:wght@300;400;500;600&display=swap');

        .tf-root {
          font-family: 'Figtree', sans-serif;
          background: #F7F3ED;
          position: relative;
          overflow: hidden;
        }

        /* ── Dark hero band ── */
        .tf-hero {
          background: #110F0C;
          padding: 90px 72px 80px;
          position: relative;
          overflow: hidden;
        }

        /* dot grid on hero */
        .tf-hero::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: radial-gradient(rgba(196,151,58,0.07) 1px, transparent 1px);
          background-size: 30px 30px;
          pointer-events: none;
        }

        /* diagonal separator */
        .tf-hero::after {
          content: '';
          position: absolute;
          bottom: -1px; left: 0; right: 0;
          height: 80px;
          background: #F7F3ED;
          clip-path: polygon(0 100%, 100% 0%, 100% 100%);
        }

        .tf-hero-inner {
          position: relative;
          z-index: 1;
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 40px;
          flex-wrap: wrap;
        }

        .tf-eyebrow {
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: #C4973A;
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 20px;
        }
        .tf-eyebrow::before {
          content: '';
          display: block;
          width: 28px; height: 1px;
          background: #C4973A;
        }

        .tf-heading {
          font-family: 'Playfair Display', serif;
          font-size: clamp(42px, 5vw, 68px);
          font-weight: 400;
          color: #EDE8DF;
          line-height: 1;
          letter-spacing: -0.025em;
          margin: 0;
        }
        .tf-heading em { font-style: italic; color: #C4973A; }

        /* stat block in hero */
        .tf-hero-stat {
          text-align: right;
          flex-shrink: 0;
        }
        .tf-hero-stat-num {
          font-family: 'Playfair Display', serif;
          font-size: 64px;
          font-weight: 400;
          color: #C4973A;
          line-height: 1;
          letter-spacing: -0.04em;
        }
        .tf-hero-stat-label {
          font-size: 11px;
          font-weight: 400;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: rgba(237,232,223,0.35);
          margin-top: 4px;
        }

        /* ── Filter row ── */
        .tf-filter-row {
          max-width: 1200px;
          margin: 0 auto;
          padding: 48px 72px 0;
          display: flex;
          align-items: center;
          gap: 6px;
          flex-wrap: wrap;
        }

        @media (max-width: 768px) {
          .tf-hero { padding: 72px 24px 72px; }
          .tf-filter-row { padding: 40px 24px 0; }
          .tf-table-wrap { padding: 0 24px 80px; }
          .tf-hero-stat { display: none; }
        }

        .tf-pill {
          padding: 7px 18px;
          border-radius: 999px;
          font-size: 11.5px;
          font-weight: 500;
          letter-spacing: 0.04em;
          cursor: pointer;
          border: 1px solid rgba(26,20,16,0.15);
          background: transparent;
          color: #9A8070;
          font-family: 'Figtree', sans-serif;
          transition: all 0.2s ease;
        }
        .tf-pill:hover { border-color: rgba(26,20,16,0.35); color: #1A1410; }
        .tf-pill.tf-pill-all-active {
          background: #1A1410;
          color: #EDE8DF;
          border-color: #1A1410;
        }

        /* ── Table section ── */
        .tf-table-wrap {
          max-width: 1200px;
          margin: 0 auto;
          padding: 32px 72px 100px;
        }

        /* column header */
        .tf-col-head {
          display: grid;
          grid-template-columns: 200px 100px 70px 1fr 120px 110px;
          gap: 0 20px;
          padding: 16px 20px;
          border-bottom: 1px solid rgba(26,20,16,0.12);
          margin-bottom: 4px;
        }
        .tf-ch {
          font-size: 9.5px;
          font-weight: 600;
          letter-spacing: 0.24em;
          text-transform: uppercase;
          color: #B8A898;
        }

        /* row */
        .tf-row {
          display: grid;
          grid-template-columns: 200px 100px 70px 1fr 120px 110px;
          gap: 0 20px;
          align-items: center;
          padding: 0 20px;
          border-radius: 12px;
          cursor: default;
          position: relative;
          transition: background 0.2s ease;
        }
        .tf-row:hover { background: #EFEBE3; }

        /* left accent stripe */
        .tf-row::before {
          content: '';
          position: absolute;
          left: 0; top: 50%;
          transform: translateY(-50%);
          width: 3px;
          height: 0;
          border-radius: 0 3px 3px 0;
          transition: height 0.35s cubic-bezier(0.23,1,0.32,1), background 0.2s;
        }
        .tf-row:hover::before { height: 55%; }

        /* program separator */
        .tf-sep {
          height: 1px;
          background: rgba(26,20,16,0.06);
          margin: 8px 20px;
        }

        /* cells */
        .tf-cell-prog {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 20px 0;
        }
        .tf-prog-dot {
          width: 8px; height: 8px;
          border-radius: 50%;
          flex-shrink: 0;
          transition: transform 0.35s cubic-bezier(0.34,1.56,0.64,1);
        }
        .tf-row:hover .tf-prog-dot { transform: scale(1.75); }

        .tf-prog-name {
          font-size: 14.5px;
          font-weight: 500;
          color: #1A1410;
          transition: color 0.2s;
        }
        .tf-row:hover .tf-prog-name { color: inherit; }

        .tf-sched {
          font-size: 12px;
          color: #9A8070;
          font-weight: 400;
        }

        .tf-hrs {
          font-size: 13px;
          font-weight: 500;
          color: #1A1410;
        }

        /* bar */
        .tf-bar-cell { padding: 20px 0; }
        .tf-bar-track {
          height: 5px;
          background: rgba(26,20,16,0.08);
          border-radius: 5px;
          position: relative;
        }
        .tf-bar-back {
          position: absolute;
          top: 0; left: 0; height: 100%;
          border-radius: 5px;
          background: rgba(26,20,16,0.1);
          transition: width 1s cubic-bezier(0.23,1,0.32,1);
        }
        .tf-bar-front {
          position: absolute;
          top: 0; left: 0; height: 100%;
          border-radius: 5px;
          transition: width 1s cubic-bezier(0.23,1,0.32,1) 0.07s;
        }
        /* tooltip */
        .tf-bar-tip {
          position: absolute;
          top: -24px;
          transform: translateX(-50%);
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 0.06em;
          white-space: nowrap;
          opacity: 0;
          transition: opacity 0.2s, transform 0.2s;
          pointer-events: none;
        }
        .tf-row:hover .tf-bar-tip { opacity: 1; }

        /* normal time */
        .tf-normal {
          font-family: 'Playfair Display', serif;
          font-size: 20px;
          font-weight: 500;
          letter-spacing: -0.02em;
          color: #1A1410;
          transition: transform 0.25s ease;
        }
        .tf-row:hover .tf-normal { transform: translateX(5px); }

        /* max time */
        .tf-max {
          font-size: 13px;
          font-weight: 300;
          text-align: right;
        }

        /* ── Bottom stats bar ── */
        .tf-bottom {
          display: flex;
          border-top: 1px solid rgba(26,20,16,0.1);
          margin-top: 48px;
        }
        .tf-bstat {
          flex: 1;
          padding: 32px 0;
          border-right: 1px solid rgba(26,20,16,0.08);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
          transition: background 0.2s;
          border-radius: 8px;
        }
        .tf-bstat:last-child { border-right: none; }
        .tf-bstat:hover { background: #EFEBE3; }
        .tf-bstat-num {
          font-family: 'Playfair Display', serif;
          font-size: 32px;
          font-weight: 400;
          color: #1A1410;
          letter-spacing: -0.03em;
        }
        .tf-bstat-num em { font-style: italic; color: #B07D3A; }
        .tf-bstat-label {
          font-size: 11px;
          font-weight: 400;
          color: #9A8070;
          text-align: center;
          line-height: 1.5;
        }
      `}</style>

      <section className="tf-root">

        {/* ── Dark hero ── */}
        <div className="tf-hero">
          <div className="tf-hero-inner">
            <div>
              <div className="tf-eyebrow">Completion Windows · NACCAS Standards</div>
              <h2 className="tf-heading">Maximum<br /><em>Time Frames</em></h2>
            </div>
            <div className="tf-hero-stat">
              <div className="tf-hero-stat-num">143%</div>
              <div className="tf-hero-stat-label">of standard<br />course length</div>
            </div>
          </div>
        </div>

        {/* ── Filter pills ── */}
        <div className="tf-filter-row">
          <button
            className={`tf-pill ${active === null ? 'tf-pill-all-active' : ''}`}
            onClick={() => setActive(null)}
          >
            All programs
          </button>
          {programs.map(p => {
            const meta = programMeta[p];
            const isActive = active === p;
            return (
              <button
                key={p}
                className="tf-pill"
                style={isActive ? {
                  background: meta.color,
                  color: '#fff',
                  borderColor: meta.color,
                } : {}}
                onClick={() => setActive(isActive ? null : p)}
              >
                {p}
              </button>
            );
          })}
        </div>

        {/* ── Table ── */}
        <div className="tf-table-wrap">

          {/* column headers */}
          <div className="tf-col-head">
            {['Program', 'Schedule', 'Hrs / Wk', 'Time span', 'Normal', 'Maximum'].map(h => (
              <div key={h} className="tf-ch">{h}</div>
            ))}
          </div>

          {/* rows */}
          {filtered.map((row, i) => {
            const meta = programMeta[row.program];
            const showSep = i > 0 && filtered[i - 1].program !== row.program;
            const normalPct = (row.normalW / GLOBAL_MAX) * 100;
            const maxPct    = (row.maxW   / GLOBAL_MAX) * 100;

            return (
              <React.Fragment key={i}>
                {showSep && <div className="tf-sep" />}
                <div
                  className="tf-row"
                  style={{ '--row-color': meta.color } as React.CSSProperties}
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}
                >
                  {/* inline stripe color */}
                  {hovered === i && (
                    <style>{`.tf-row:hover::before { background: ${meta.color}; }`}</style>
                  )}

                  {/* Program */}
                  <div className="tf-cell-prog">
                    <span className="tf-prog-dot" style={{ background: meta.color }} />
                    <span className="tf-prog-name" style={hovered === i ? { color: meta.color } : {}}>
                      {row.program}
                    </span>
                  </div>

                  {/* Schedule */}
                  <div className="tf-sched">{row.schedule}</div>

                  {/* Hrs */}
                  <div className="tf-hrs">{row.hrs}h</div>

                  {/* Bar */}
                  <div className="tf-bar-cell">
                    <div className="tf-bar-track">
                      <div
                        className="tf-bar-back"
                        style={{ width: loaded ? `${maxPct}%` : '0%', transitionDelay: `${i * 60}ms` }}
                      />
                      <div
                        className="tf-bar-front"
                        style={{
                          width: loaded ? `${normalPct}%` : '0%',
                          background: meta.color,
                          transitionDelay: `${i * 60 + 60}ms`,
                        }}
                      />
                      <span
                        className="tf-bar-tip"
                        style={{ left: `${normalPct}%`, color: meta.color }}
                      >
                        {row.normal}
                      </span>
                    </div>
                  </div>

                  {/* Normal time */}
                  <div className="tf-normal">{row.normal}</div>

                  {/* Max time */}
                  <div className="tf-max" style={{ color: meta.color }}>{row.max}</div>
                </div>
              </React.Fragment>
            );
          })}

          {/* ── Bottom stat row ── */}
          <div className="tf-bottom">
            <div className="tf-bstat">
              <div className="tf-bstat-num"><em>4</em></div>
              <div className="tf-bstat-label">Programs<br />offered</div>
            </div>
            <div className="tf-bstat">
              <div className="tf-bstat-num"><em>143</em><span style={{ fontSize: 18 }}>%</span></div>
              <div className="tf-bstat-label">Maximum allowed<br />vs. normal time</div>
            </div>
            <div className="tf-bstat">
              <div className="tf-bstat-num"><em>98</em><span style={{ fontSize: 18, fontFamily: 'Figtree' }}> wks</span></div>
              <div className="tf-bstat-label">Longest max<br />time frame</div>
            </div>
            <div className="tf-bstat">
              <div className="tf-bstat-num"><em>9</em><span style={{ fontSize: 18, fontFamily: 'Figtree' }}> wks</span></div>
              <div className="tf-bstat-label">Shortest normal<br />completion</div>
            </div>
          </div>
        </div>

      </section>
    </>
  );
};

export default Timeframes;