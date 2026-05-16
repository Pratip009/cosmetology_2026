import React, { useState } from 'react'

const programs = [
  {
    name: 'Cosmetology', hours: 1200, fullTime: '40 Weeks', partTime: '75 Weeks',
    reg: '$150', kit: '$1,200', tuition: '$14,500',
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600&auto=format&fit=crop&q=80',
    desc: 'Hair, nails & skin',
  },
  {
    name: 'Barbering', hours: 900, fullTime: '30 Weeks', partTime: '56 Weeks',
    reg: '$150', kit: '$900', tuition: '$11,000',
    image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=600&auto=format&fit=crop&q=80',
    desc: "Men's & women's cuts",
  },
  {
    name: 'Nail Technology', hours: 300, fullTime: '10 Weeks', partTime: '19 Weeks',
    reg: '$100', kit: '$400', tuition: '$4,500',
    image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=600&auto=format&fit=crop&q=80',
    desc: 'Manicure, pedicure & art',
  },
  {
    name: 'Teacher Training', hours: 600, fullTime: '22 Weeks', partTime: '41 Weeks',
    reg: '$150', kit: '$500', tuition: '$7,500',
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&auto=format&fit=crop&q=80',
    desc: 'Pedagogy & clinic mgmt',
  },
  {
    name: 'Refresher', hours: 250, fullTime: '9 Weeks', partTime: '17 Weeks',
    reg: '$100', kit: '$250', tuition: '$3,500',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&auto=format&fit=crop&q=80',
    desc: 'For licensed pros',
  },
]

const TuitionTable = () => {
  const [hovered, setHovered] = useState<number | null>(null)

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=DM+Sans:wght@300;400;500&display=swap');

        .font-cormorant { font-family: 'Cormorant Garamond', serif; }
        .font-dm        { font-family: 'DM Sans', sans-serif; }

        .tt-eyebrow::before {
          content: '';
          display: block;
          width: 24px;
          height: 1px;
          background: #C4973A;
          flex-shrink: 0;
        }

        /* Table row hover */
        .tt-row { transition: background 0.2s; }
        .tt-row.active { background: #FFFFFF; }

        /* Thumb zoom */
        .tt-thumb { transition: transform 0.3s cubic-bezier(0.23,1,0.32,1), border-color 0.3s, box-shadow 0.3s; }
        .tt-row.active .tt-thumb {
          transform: scale(1.06);
          border-color: rgba(196,151,58,0.33);
          box-shadow: 0 8px 24px rgba(196,151,58,0.15);
        }
        .tt-thumb img { transition: filter 0.3s; filter: saturate(0.7) brightness(0.95); }
        .tt-row.active .tt-thumb img { filter: saturate(1) brightness(1); }

        /* Name colour */
        .tt-name { transition: color 0.2s; }
        .tt-row.active .tt-name { color: #8B6830 !important; }
        .tt-tuition { transition: color 0.2s; }
        .tt-row.active .tt-tuition { color: #8B6830 !important; }

        /* Mobile card hover */
        .tt-card { transition: box-shadow 0.2s, border-color 0.2s; }
        .tt-card.active { border-color: rgba(196,151,58,0.5) !important; box-shadow: 0 8px 32px rgba(196,151,58,0.1); }
        .tt-card.active .tt-thumb { transform: scale(1.04); border-color: rgba(196,151,58,0.33); }
        .tt-card.active .tt-thumb img { filter: saturate(1) brightness(1); }
        .tt-card.active .tt-name { color: #8B6830 !important; }
      `}</style>

      <section className="font-dm relative overflow-hidden bg-[#F9F6F1] py-20 sm:py-24 lg:py-28">

        {/* ── Header ── */}
        <div className="mb-10 flex flex-wrap items-end justify-between gap-6 px-5 sm:mb-14 sm:px-10 lg:px-16">
          <div>
            <p className="tt-eyebrow mb-3 flex items-center gap-2.5 text-[10px] font-medium uppercase tracking-[0.26em] text-[#C4973A]">
              Investment
            </p>
            <h2
              className="font-cormorant m-0 leading-none tracking-[-0.01em] text-[#181410]"
              style={{ fontSize: 'clamp(36px, 5vw, 60px)', fontWeight: 300 }}
            >
              Tuition &amp; <em className="italic text-[#9B7A52]">Fees</em>
            </h2>
          </div>
          <p className="max-w-[240px] self-end pb-1 text-[12px] font-light italic leading-relaxed text-[#B0A090]">
            * Figures shown are approximate. Contact us for current pricing.
          </p>
        </div>

        {/* ══════════════════════════════════════
            DESKTOP TABLE  (lg+)
        ══════════════════════════════════════ */}
        <div className="hidden overflow-x-auto lg:block">
          <table className="w-full border-collapse" style={{ minWidth: '860px' }}>
            <thead>
              <tr className="border-b border-[#E4DDD4]">
                {[
                  { label: 'Program',      cls: 'text-left pl-16'  },
                  { label: 'Hours',        cls: 'text-center'      },
                  { label: 'Full-Time',    cls: 'text-center'      },
                  { label: 'Part-Time',    cls: 'text-center'      },
                  { label: 'Registration', cls: 'text-right'       },
                  { label: 'Kit',          cls: 'text-right'       },
                  { label: 'Tuition',      cls: 'text-right pr-16' },
                ].map(h => (
                  <th
                    key={h.label}
                    className={`pb-4 text-[9px] font-medium uppercase tracking-[0.22em] whitespace-nowrap text-[#C0B0A0] px-5 ${h.cls}`}
                  >
                    {h.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {programs.map((p, i) => (
                <tr
                  key={i}
                  className={`tt-row border-b border-[#EDE8E1] cursor-default${hovered === i ? ' active' : ''}`}
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}
                >
                  {/* Program name */}
                  <td className="py-0 pl-16 pr-5">
                    <div className="flex items-center gap-4 py-6">
                      <div className="tt-thumb h-14 w-14 shrink-0 overflow-hidden rounded-xl border border-[#EDE8E1]">
                        <img src={p.image} alt={p.name} className="h-full w-full object-cover" />
                      </div>
                      <div>
                        <div className="tt-name font-cormorant text-xl leading-none tracking-[0.01em] text-[#1A1410]">
                          {p.name}
                        </div>
                        <div className="mt-1 text-[12px] font-light tracking-wide text-[#B0A090]">{p.desc}</div>
                      </div>
                    </div>
                  </td>
                  {/* Hours */}
                  <td className="px-5 text-center font-cormorant text-xl font-light text-[#C4973A] tracking-[-0.01em]">
                    {p.hours.toLocaleString()}
                  </td>
                  {/* Full-time */}
                  <td className="px-5 text-center text-[13px] font-light text-[#8A7E72] whitespace-nowrap">{p.fullTime}</td>
                  {/* Part-time */}
                  <td className="px-5 text-center text-[13px] font-light text-[#8A7E72] whitespace-nowrap">{p.partTime}</td>
                  {/* Reg */}
                  <td className="px-5 text-right text-[13px] font-light text-[#8A7E72]">{p.reg}</td>
                  {/* Kit */}
                  <td className="px-5 text-right text-[13px] font-light text-[#8A7E72]">{p.kit}</td>
                  {/* Tuition */}
                  <td className="tt-tuition py-0 pl-5 pr-16 text-right font-cormorant text-2xl font-normal leading-none tracking-[-0.01em] text-[#1A1410] whitespace-nowrap">
                    {p.tuition}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* ══════════════════════════════════════
            TABLET TABLE  (sm–lg): fewer cols,
            horizontal scroll as last resort
        ══════════════════════════════════════ */}
        <div className="hidden overflow-x-auto sm:block lg:hidden">
          <table className="w-full border-collapse" style={{ minWidth: '560px' }}>
            <thead>
              <tr className="border-b border-[#E4DDD4]">
                {[
                  { label: 'Program',   cls: 'text-left pl-10'  },
                  { label: 'Hours',     cls: 'text-center'      },
                  { label: 'Schedule',  cls: 'text-center'      },
                  { label: 'Kit',       cls: 'text-right'       },
                  { label: 'Tuition',   cls: 'text-right pr-10' },
                ].map(h => (
                  <th key={h.label} className={`pb-3.5 text-[9px] font-medium uppercase tracking-[0.22em] whitespace-nowrap text-[#C0B0A0] px-4 ${h.cls}`}>
                    {h.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {programs.map((p, i) => (
                <tr
                  key={i}
                  className={`tt-row border-b border-[#EDE8E1] cursor-default${hovered === i ? ' active' : ''}`}
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}
                >
                  <td className="py-0 pl-10 pr-4">
                    <div className="flex items-center gap-3.5 py-5">
                      <div className="tt-thumb h-12 w-12 shrink-0 overflow-hidden rounded-xl border border-[#EDE8E1]">
                        <img src={p.image} alt={p.name} className="h-full w-full object-cover" />
                      </div>
                      <div>
                        <div className="tt-name font-cormorant text-[19px] leading-none text-[#1A1410]">{p.name}</div>
                        <div className="mt-0.5 text-[11px] font-light text-[#B0A090]">{p.desc}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 text-center font-cormorant text-lg font-light text-[#C4973A]">
                    {p.hours.toLocaleString()}
                  </td>
                  {/* Merged schedule col */}
                  <td className="px-4 text-center">
                    <div className="text-[12px] font-light text-[#8A7E72] whitespace-nowrap">{p.fullTime} FT</div>
                    <div className="text-[11px] font-light text-[#C0B0A0] whitespace-nowrap">{p.partTime} PT</div>
                  </td>
                  <td className="px-4 text-right text-[13px] font-light text-[#8A7E72]">{p.kit}</td>
                  <td className="tt-tuition py-0 pl-4 pr-10 text-right font-cormorant text-xl font-normal leading-none text-[#1A1410] whitespace-nowrap">
                    {p.tuition}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* ══════════════════════════════════════
            MOBILE CARDS  (< sm)
        ══════════════════════════════════════ */}
        <div className="flex flex-col gap-3 px-5 sm:hidden">
          {programs.map((p, i) => (
            <div
              key={i}
              className={`tt-card overflow-hidden rounded-2xl border border-[#EDE8E1] bg-white${hovered === i ? ' active' : ''}`}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              onTouchStart={() => setHovered(i)}
              onTouchEnd={() => setHovered(null)}
            >
              {/* Card top: image + name + tuition */}
              <div className="flex items-center gap-4 border-b border-[#EDE8E1] px-4 py-4">
                <div className="tt-thumb h-14 w-14 shrink-0 overflow-hidden rounded-xl border border-[#EDE8E1]">
                  <img src={p.image} alt={p.name} className="h-full w-full object-cover" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="tt-name font-cormorant text-[22px] leading-none text-[#1A1410]">{p.name}</div>
                  <div className="mt-0.5 text-[11px] font-light text-[#B0A090]">{p.desc}</div>
                </div>
                <div className="text-right shrink-0">
                  <div className="font-cormorant text-2xl font-normal leading-none text-[#1A1410]">{p.tuition}</div>
                  <div className="mt-0.5 text-[9px] uppercase tracking-widest text-[#C0B0A0]">Tuition</div>
                </div>
              </div>

              {/* Card bottom: stats grid */}
              <div className="grid grid-cols-4 divide-x divide-[#EDE8E1]">
                {[
                  { val: p.hours.toLocaleString(), lbl: 'Hours',     gold: true  },
                  { val: p.fullTime,               lbl: 'Full-Time', gold: false },
                  { val: p.reg,                    lbl: 'Reg.',      gold: false },
                  { val: p.kit,                    lbl: 'Kit',       gold: false },
                ].map(s => (
                  <div key={s.lbl} className="flex flex-col items-center justify-center py-3 px-1 text-center">
                    <div className={`font-cormorant text-base leading-none ${s.gold ? 'text-[#C4973A]' : 'text-[#8A7E72]'}`}>
                      {s.val}
                    </div>
                    <div className="mt-0.5 text-[8px] uppercase tracking-[0.14em] text-[#C0B0A0]">{s.lbl}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </section>
    </>
  )
}

export default TuitionTable