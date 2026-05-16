import React from 'react'

const grading = [
  { range: "93–100",     grade: "Excellent",      pct: 100, label: "A" },
  { range: "85–92",      grade: "Very Good",       pct: 78,  label: "B" },
  { range: "75–84",      grade: "Satisfactory",    pct: 55,  label: "C" },
  { range: "74 & below", grade: "Unsatisfactory",  pct: 22,  label: "D" },
]

const Grading = () => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;1,400;1,500&family=DM+Sans:wght@300;400;500&display=swap');

        .font-playfair { font-family: 'Playfair Display', Georgia, serif; }
        .font-dm       { font-family: 'DM Sans', sans-serif; }

        /* noise texture */
        .gd-noise {
          position: absolute;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E");
          pointer-events: none;
          opacity: 0.4;
        }

        /* tag line decoration */
        .gd-tag::before {
          content: '';
          display: block;
          width: 24px;
          height: 1px;
          background: #B89A6A;
          flex-shrink: 0;
        }

        /* row hover */
        .gd-row { transition: border-color 0.25s, transform 0.2s; }
        .gd-row:hover { border-color: #C4973A; transform: translateX(4px); }

        /* bar fill */
        .gd-fill { transition: width 1s cubic-bezier(0.23,1,0.32,1); }
      `}</style>

      <section className="font-dm relative overflow-hidden bg-[#F9F6F1] px-5 py-20 sm:px-10 sm:py-24 lg:px-16 lg:py-28">
        <div className="gd-noise" />

        <div className="relative z-10 mx-auto max-w-3xl">

          {/* ── Header ── */}
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4 sm:mb-14">
            <div>
              <p className="gd-tag mb-3 flex items-center gap-2.5 text-[10px] font-medium uppercase tracking-[0.26em] text-[#B89A6A]">
                Standards
              </p>
              <h2
                className="font-playfair m-0 leading-none tracking-[-0.015em] text-[#181410]"
                style={{ fontSize: 'clamp(36px, 5.5vw, 62px)', fontWeight: 400 }}
              >
                Grading <em className="italic text-[#8B6830]">Scale</em>
              </h2>
            </div>
            <p className="self-end pb-1 text-[13px] font-light tracking-wide text-[#AFA090]">
              Applies to all programs
            </p>
          </div>

          {/* ── Rows ── */}
          <div className="flex flex-col gap-3">
            {grading.map((g, i) => {
              const dim = i === grading.length - 1
              return (
                <div
                  key={i}
                  className={`gd-row grid overflow-hidden rounded-xl border border-[#EDE5D8] bg-white sm:rounded-2xl${dim ? ' opacity-50' : ''}`}
                  style={{ gridTemplateColumns: 'auto 1fr auto' }}
                >
                  {/* Letter badge */}
                  <div
                    className={`flex items-center justify-center border-r border-[#EDE5D8] bg-[#F9F6F1] px-4 font-playfair text-xl italic sm:px-5 sm:text-2xl${dim ? ' text-[#C0B8AE]' : ' text-[#C4973A]'}`}
                  >
                    {g.label}
                  </div>

                  {/* Middle: range + grade + bar */}
                  <div className="flex flex-col gap-2 px-4 py-5 sm:gap-2.5 sm:px-6 sm:py-5">
                    <div className="flex flex-wrap items-baseline gap-2 sm:gap-3">
                      <span
                        className={`font-playfair leading-none tracking-[-0.01em]${dim ? ' text-[#AFA090]' : ' text-[#1A1410]'}`}
                        style={{ fontSize: 'clamp(18px, 4vw, 28px)', fontWeight: 400 }}
                      >
                        {g.range}
                      </span>
                      <span
                        className={`text-[10px] font-medium uppercase tracking-[0.14em] sm:text-[11px]${dim ? ' text-[#C0B8AE]' : ' text-[#C4973A]'}`}
                      >
                        {g.grade}
                      </span>
                    </div>

                    {/* Progress bar */}
                    <div className="h-[3px] overflow-hidden rounded-full bg-[#EDE5D8] sm:h-1">
                      <div
                        className={`gd-fill h-full rounded-full${dim ? ' bg-[#D8CFC4]' : ' bg-[#C4973A]'}`}
                        style={{ width: `${g.pct}%` }}
                      />
                    </div>
                  </div>

                  {/* Right: percentage */}
                  <div className={`flex flex-col items-end justify-center border-l border-[#EDE5D8] px-4 py-5 text-right sm:px-6${dim ? ' text-[#D8CFC4]' : ''}`}>
                    <div
                      className={`font-playfair leading-none tracking-[-0.02em]${dim ? ' text-[#D8CFC4]' : ' text-[#E8C97A]'}`}
                      style={{ fontSize: 'clamp(22px, 4vw, 36px)', fontWeight: 400 }}
                    >
                      {g.pct}
                    </div>
                    <div className="mt-0.5 text-[9px] font-normal uppercase tracking-[0.16em] text-[#C0B0A0] sm:text-[10px]">
                      Score %
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

        </div>
      </section>
    </>
  )
}

export default Grading