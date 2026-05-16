import React, { useEffect, useState } from 'react';

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
  const [loaded, setLoaded] = useState<boolean>(false);
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
        .font-playfair { font-family: 'Playfair Display', serif; }
        .font-figtree  { font-family: 'Figtree', sans-serif; }

        /* dot-grid on hero */
        .hero-dots::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: radial-gradient(rgba(196,151,58,0.07) 1px, transparent 1px);
          background-size: 30px 30px;
          pointer-events: none;
        }
        /* diagonal cut */
        .hero-cut::after {
          content: '';
          position: absolute;
          bottom: -1px; left: 0; right: 0;
          height: 80px;
          background: #F7F3ED;
          clip-path: polygon(0 100%, 100% 0%, 100% 100%);
        }

        /* animated bar */
        .bar-anim { transition: width 1s cubic-bezier(0.23,1,0.32,1); }
        .bar-anim-front { transition: width 1s cubic-bezier(0.23,1,0.32,1) 0.07s; }

        /* tooltip above bar */
        .bar-tip {
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
        .tf-row:hover .bar-tip { opacity: 1; }

        /* left accent stripe */
        .tf-row { position: relative; }
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

        /* dot bounce on hover */
        .tf-row:hover .prog-dot { transform: scale(1.75); }

        /* normal-time slide */
        .tf-row:hover .normal-slide { transform: translateX(5px); }
      `}</style>

      <section className="font-figtree bg-[#F7F3ED] relative overflow-hidden">

        {/* ── Dark hero ── */}
        <div className="hero-dots hero-cut bg-[#110F0C] px-6 sm:px-12 lg:px-[72px] pt-16 sm:pt-20 lg:pt-[90px] pb-20 sm:pb-24 lg:pb-[80px] relative overflow-hidden">
          <div className="relative z-10 max-w-[1200px] mx-auto flex items-end justify-between gap-10 flex-wrap">
            <div>
              {/* eyebrow */}
              <div className="flex items-center gap-3 mb-5">
                <span className="block w-7 h-px bg-[#C4973A]" />
                <span className="text-[10px] font-semibold tracking-[0.3em] uppercase text-[#C4973A]">
                  Completion Windows · NACCAS Standards
                </span>
              </div>
              {/* heading */}
              <h2 className="font-playfair text-[clamp(42px,5vw,68px)] font-normal text-[#EDE8DF] leading-none tracking-[-0.025em] m-0">
                Maximum<br /><em className="not-italic italic text-[#C4973A]">Time Frames</em>
              </h2>
            </div>

            {/* stat — hidden on small screens */}
            <div className="hidden sm:block text-right flex-shrink-0">
              <div className="font-playfair text-[64px] font-normal text-[#C4973A] leading-none tracking-[-0.04em]">143%</div>
              <div className="text-[11px] font-normal tracking-[0.14em] uppercase text-[rgba(237,232,223,0.35)] mt-1">
                of standard<br />course length
              </div>
            </div>
          </div>
        </div>

        {/* ── Filter pills ── */}
        <div className="max-w-[1200px] mx-auto px-6 sm:px-12 lg:px-[72px] pt-10 sm:pt-12 flex items-center gap-1.5 flex-wrap">
          <button
            className={`px-4 py-1.5 rounded-full text-[11.5px] font-medium tracking-[0.04em] cursor-pointer border font-figtree transition-all duration-200 ${
              active === null
                ? 'bg-[#1A1410] text-[#EDE8DF] border-[#1A1410]'
                : 'border-[rgba(26,20,16,0.15)] bg-transparent text-[#9A8070] hover:border-[rgba(26,20,16,0.35)] hover:text-[#1A1410]'
            }`}
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
                className="px-4 py-1.5 rounded-full text-[11.5px] font-medium tracking-[0.04em] cursor-pointer border font-figtree transition-all duration-200 border-[rgba(26,20,16,0.15)] bg-transparent text-[#9A8070] hover:border-[rgba(26,20,16,0.35)] hover:text-[#1A1410]"
                style={isActive ? { background: meta.color, color: '#fff', borderColor: meta.color } : {}}
                onClick={() => setActive(isActive ? null : p)}
              >
                {p}
              </button>
            );
          })}
        </div>

        {/* ── Table ── */}
        <div className="max-w-[1200px] mx-auto px-6 sm:px-12 lg:px-[72px] pt-8 pb-16 sm:pb-20 lg:pb-[100px]">

          {/* ── Desktop column headers (hidden on mobile) ── */}
          <div className="hidden md:grid grid-cols-[200px_100px_70px_1fr_120px_110px] gap-x-5 px-5 pb-4 border-b border-[rgba(26,20,16,0.12)] mb-1">
            {['Program', 'Schedule', 'Hrs / Wk', 'Time span', 'Normal', 'Maximum'].map(h => (
              <div key={h} className="text-[9.5px] font-semibold tracking-[0.24em] uppercase text-[#B8A898]">{h}</div>
            ))}
          </div>

          {/* ── Rows ── */}
          {filtered.map((row, i) => {
            const meta = programMeta[row.program];
            const showSep = i > 0 && filtered[i - 1].program !== row.program;
            const normalPct = (row.normalW / GLOBAL_MAX) * 100;
            const maxPct    = (row.maxW   / GLOBAL_MAX) * 100;
            const delay     = `${i * 60}ms`;
            const delayFront= `${i * 60 + 60}ms`;

            return (
              <React.Fragment key={i}>
                {showSep && <div className="h-px bg-[rgba(26,20,16,0.06)] mx-5 my-2" />}

                {/* ── Desktop row ── */}
                <div
                  className="tf-row hidden md:grid grid-cols-[200px_100px_70px_1fr_120px_110px] gap-x-5 items-center px-5 rounded-xl cursor-default transition-colors duration-200 hover:bg-[#EFEBE3]"
                  style={{ '--row-color': meta.color } as React.CSSProperties}
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}
                >
                  {hovered === i && (
                    <style>{`.tf-row:hover::before { background: ${meta.color}; }`}</style>
                  )}

                  {/* Program */}
                  <div className="flex items-center gap-2.5 py-5">
                    <span
                      className="prog-dot w-2 h-2 rounded-full flex-shrink-0 transition-transform duration-[350ms]"
                      style={{ background: meta.color }}
                    />
                    <span
                      className="text-[14.5px] font-medium transition-colors duration-200"
                      style={{ color: hovered === i ? meta.color : '#1A1410' }}
                    >
                      {row.program}
                    </span>
                  </div>

                  {/* Schedule */}
                  <div className="text-xs text-[#9A8070]">{row.schedule}</div>

                  {/* Hrs */}
                  <div className="text-[13px] font-medium text-[#1A1410]">{row.hrs}h</div>

                  {/* Bar */}
                  <div className="py-5">
                    <div className="h-[5px] bg-[rgba(26,20,16,0.08)] rounded-full relative">
                      <div
                        className="bar-anim absolute top-0 left-0 h-full rounded-full bg-[rgba(26,20,16,0.1)]"
                        style={{ width: loaded ? `${maxPct}%` : '0%', transitionDelay: delay }}
                      />
                      <div
                        className="bar-anim-front absolute top-0 left-0 h-full rounded-full"
                        style={{ width: loaded ? `${normalPct}%` : '0%', background: meta.color, transitionDelay: delayFront }}
                      />
                      <span className="bar-tip" style={{ left: `${normalPct}%`, color: meta.color }}>
                        {row.normal}
                      </span>
                    </div>
                  </div>

                  {/* Normal */}
                  <div
                    className="normal-slide font-playfair text-[20px] font-medium tracking-[-0.02em] text-[#1A1410] transition-transform duration-[250ms]"
                  >
                    {row.normal}
                  </div>

                  {/* Max */}
                  <div className="text-[13px] font-light text-right" style={{ color: meta.color }}>
                    {row.max}
                  </div>
                </div>

                {/* ── Mobile card ── */}
                <div
                  className="md:hidden rounded-xl p-4 mb-2 transition-colors duration-200 bg-white/40 hover:bg-[#EFEBE3] border border-[rgba(26,20,16,0.07)]"
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}
                >
                  {/* top row: dot + program + schedule */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ background: meta.color }} />
                      <span className="text-[15px] font-medium text-[#1A1410]">{row.program}</span>
                    </div>
                    <span className="text-[11px] text-[#9A8070] font-normal">{row.schedule} · {row.hrs}h/wk</span>
                  </div>

                  {/* bar */}
                  <div className="h-[5px] bg-[rgba(26,20,16,0.08)] rounded-full relative mb-3">
                    <div
                      className="bar-anim absolute top-0 left-0 h-full rounded-full bg-[rgba(26,20,16,0.1)]"
                      style={{ width: loaded ? `${maxPct}%` : '0%', transitionDelay: delay }}
                    />
                    <div
                      className="bar-anim-front absolute top-0 left-0 h-full rounded-full"
                      style={{ width: loaded ? `${normalPct}%` : '0%', background: meta.color, transitionDelay: delayFront }}
                    />
                  </div>

                  {/* normal + max */}
                  <div className="flex items-baseline justify-between">
                    <div>
                      <span className="text-[9px] font-semibold tracking-[0.2em] uppercase text-[#B8A898] mr-2">Normal</span>
                      <span className="font-playfair text-[18px] font-medium text-[#1A1410] tracking-[-0.02em]">{row.normal}</span>
                    </div>
                    <div className="text-right">
                      <span className="text-[9px] font-semibold tracking-[0.2em] uppercase text-[#B8A898] mr-1.5">Max</span>
                      <span className="text-[13px] font-light" style={{ color: meta.color }}>{row.max}</span>
                    </div>
                  </div>
                </div>
              </React.Fragment>
            );
          })}

          {/* ── Bottom stats bar ── */}
          <div className="flex flex-wrap sm:flex-nowrap border-t border-[rgba(26,20,16,0.1)] mt-12">
            {[
              { num: <><em className="font-playfair not-italic italic text-[#B07D3A]">4</em></>,          label: 'Programs\noffered' },
              { num: <><em className="font-playfair not-italic italic text-[#B07D3A]">143</em><span className="text-lg font-figtree">%</span></>, label: 'Maximum allowed\nvs. normal time' },
              { num: <><em className="font-playfair not-italic italic text-[#B07D3A]">98</em><span className="text-lg font-figtree"> wks</span></>, label: 'Longest max\ntime frame' },
              { num: <><em className="font-playfair not-italic italic text-[#B07D3A]">9</em><span className="text-lg font-figtree"> wks</span></>,  label: 'Shortest normal\ncompletion' },
            ].map(({ num, label }, idx, arr) => (
              <div
                key={idx}
                className={`flex-1 basis-1/2 sm:basis-0 py-6 sm:py-8 flex flex-col items-center gap-1.5 transition-colors duration-200 hover:bg-[#EFEBE3] rounded-lg ${idx < arr.length - 1 ? 'sm:border-r border-[rgba(26,20,16,0.08)]' : ''}`}
              >
                <div className="font-playfair text-[28px] sm:text-[32px] font-normal text-[#1A1410] tracking-[-0.03em] leading-none">
                  {num}
                </div>
                <div className="text-[11px] font-normal text-[#9A8070] text-center leading-[1.5] whitespace-pre-line">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>

      </section>
    </>
  );
};

export default Timeframes;