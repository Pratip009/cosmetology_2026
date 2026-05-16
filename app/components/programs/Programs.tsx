import { Clock, Plus, Minus } from 'lucide-react';
import React, { useState } from 'react'

const programs = [
  {
    num: '01', name: 'Cosmetology', hours: '1,200', junior: '600 hrs', senior: '600 hrs',
    theory: 351, practical: 849,
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=900&auto=format&fit=crop&q=80',
    desc: 'First 600 hrs: junior classroom and theory. Remaining 600 hrs: senior clinic on mannequins and live clients. Covers hair, nails, and skin services.',
    outline: [
      { topic: 'State Laws, Rules & Regulations / Shop Operations', theory: 10, practical: 0, total: 10 },
      { topic: 'Decontamination & Infection Control', theory: 15, practical: 5, total: 20 },
      { topic: 'Hair Cutting — Layering, Cap, Razor, Scissors & Thinning', theory: 40, practical: 120, total: 160 },
      { topic: 'Hair Styling (Pin-Curls, Finger-Waving & Blow-Waving)', theory: 25, practical: 135, total: 160 },
      { topic: 'Hair Tinting & Bleaching', theory: 35, practical: 110, total: 145 },
      { topic: 'Permanent Waving', theory: 25, practical: 90, total: 115 },
      { topic: 'Chemical Relaxing & Pressing', theory: 30, practical: 60, total: 90 },
      { topic: 'Manicuring & Pedicuring', theory: 45, practical: 90, total: 135 },
    ]
  },
  {
    num: '02', name: 'Barbering', hours: '900', junior: '450 hrs', senior: '450 hrs',
    theory: 244, practical: 657,
    image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=900&auto=format&fit=crop&q=80',
    desc: "Milady method. First 450 hrs: junior classroom and mannequin. Remaining 450 hrs: senior clinic. Men's/women's cutting, shaving, chemical services, hair color.",
    outline: [
      { topic: "Men's Hair Cutting & Styling", theory: 25, practical: 200, total: 225 },
      { topic: 'Shaving', theory: 20, practical: 105, total: 125 },
      { topic: 'Chemistry / Chemical Services / Straightening / Perm', theory: 75, practical: 135, total: 210 },
      { topic: 'Hair Color and Lightening', theory: 30, practical: 80, total: 110 },
      { topic: "Women's Hair Cutting & Styling", theory: 15, practical: 55, total: 70 },
      { topic: "Men's Hair Piece Services", theory: 15, practical: 40, total: 55 },
    ]
  },
  {
    num: '03', name: 'Nail Technology', hours: '300', junior: '150 hrs', senior: '150 hrs',
    theory: 120, practical: 180,
    image: 'https://plus.unsplash.com/premium_photo-1661290231745-15f1ed6fea88?q=80&w=1170&auto=format&fit=crop',
    desc: 'Manicuring, pedicuring, nail tips & extensions, nail wraps, nail gels, sculptured nails, nail art, hair removal. First 150 hrs: pre-clinical. Mock State Board Exam included.',
    outline: [
      { topic: 'Manicuring & Pedicuring', theory: 10, practical: 45, total: 55 },
      { topic: 'Sculptured Nails', theory: 10, practical: 30, total: 40 },
      { topic: 'Removal of Unwanted Hair', theory: 10, practical: 30, total: 40 },
      { topic: 'Decontamination & Infection Control', theory: 15, practical: 5, total: 20 },
      { topic: 'Nail Tips & Extensions', theory: 5, practical: 25, total: 30 },
      { topic: 'Nail Wraps', theory: 5, practical: 25, total: 30 },
    ]
  },
  {
    num: '04', name: 'Teacher Training', hours: '600', junior: '500 hrs min', senior: '+100 CSJC',
    theory: 200, practical: 400,
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=900&auto=format&fit=crop&q=80',
    desc: 'Prepares licensed cosmetologists to teach. NJ Board minimum is 500 hrs; CSJC extends to 600. Covers lesson planning, classroom management, examinations, clinic techniques.',
    outline: [
      { topic: 'Lesson Planning & Curriculum Development', theory: 60, practical: 80, total: 140 },
      { topic: 'Classroom Management', theory: 40, practical: 60, total: 100 },
      { topic: 'Examination Techniques', theory: 30, practical: 50, total: 80 },
      { topic: 'Clinic Supervision', theory: 20, practical: 100, total: 120 },
      { topic: 'Professional Development', theory: 30, practical: 60, total: 90 },
      { topic: 'Student Evaluation Methods', theory: 20, practical: 50, total: 70 },
    ]
  },
  {
    num: '05', name: 'Refresher', hours: '250', junior: '22 hrs eval', senior: '225 hrs practice',
    theory: 50, practical: 200,
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=900&auto=format&fit=crop&q=80',
    desc: 'For licensed professionals. 22 hrs of skill evaluation followed by 225 hrs of focused practice in identified areas of need. Full-service modern salon approach.',
    outline: [
      { topic: 'Skills Evaluation & Assessment', theory: 10, practical: 12, total: 22 },
      { topic: 'Technical Skills Refresher', theory: 15, practical: 75, total: 90 },
      { topic: 'Chemical Services Update', theory: 10, practical: 50, total: 60 },
      { topic: 'New Techniques & Trends', theory: 10, practical: 40, total: 50 },
      { topic: 'Safety & Sanitation', theory: 5, practical: 23, total: 28 },
    ]
  },
];

const Programs = () => {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=DM+Sans:wght@300;400;500;600&display=swap');

        .font-cormorant { font-family: 'Cormorant Garamond', serif; }
        .font-dm        { font-family: 'DM Sans', sans-serif; }

        /* Card hover/open states */
        .pc { transition: border-color 0.3s, transform 0.25s cubic-bezier(0.23,1,0.32,1), box-shadow 0.3s; }
        .pc:hover  { border-color: #C4973A; transform: translateY(-2px); box-shadow: 0 20px 60px rgba(196,151,58,0.12); }
        .pc.open   { border-color: #C4973A; box-shadow: 0 24px 80px rgba(196,151,58,0.15); }

        /* Image zoom */
        .pc-img-inner { transition: transform 0.6s cubic-bezier(0.23,1,0.32,1), filter 0.4s; filter: brightness(0.45) saturate(0.6); }
        .pc:hover .pc-img-inner, .pc.open .pc-img-inner { transform: scale(1.07); filter: brightness(0.6) saturate(0.8); }

        /* Name colour */
        .pc-name { transition: color 0.2s; }
        .pc:hover .pc-name, .pc.open .pc-name { color: #F8F0E3; }

        /* Pill states */
        .pc-pill { transition: background 0.25s, border-color 0.25s, color 0.25s; pointer-events: none; }
        .pc:hover .pc-pill  { background: #221F16; border-color: rgba(196,151,58,0.33); color: #C4973A; }
        .pc.open  .pc-pill  { background: #C4973A; border-color: #C4973A; color: #0A0908; }
        .pc-pill-icon { transition: background 0.25s; }
        .pc:hover .pc-pill-icon { background: rgba(196,151,58,0.13); }
        .pc.open  .pc-pill-icon { background: rgba(10,9,8,0.13); }

        /* Stat numbers */
        .pc-stat-n { transition: color 0.2s; }
        .pc:hover .pc-stat-n, .pc.open .pc-stat-n { color: #C4973A; }

        /* Expand panel */
        .pc-panel { max-height: 0; overflow: hidden; transition: max-height 0.55s cubic-bezier(0.23,1,0.32,1); }
        .pc-panel.open { max-height: 900px; }

        /* Table row hover */
        .pc-table tbody tr { transition: background 0.15s; }
        .pc-table tbody tr:hover { background: #14120E; }
      `}</style>

      <section className="font-dm bg-[#0A0908] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="mx-auto flex max-w-5xl flex-col gap-3 sm:gap-4">

          {programs.map((prog, i) => {
            const isOpen = expanded === i;
            return (
              <div
                key={i}
                className={`pc relative cursor-pointer overflow-hidden rounded-xl border border-[#1E1C17] bg-[#0F0E0B] outline-none sm:rounded-2xl${isOpen ? ' open' : ''}`}
                onClick={() => setExpanded(isOpen ? null : i)}
                role="button"
                tabIndex={0}
                aria-expanded={isOpen}
                onKeyDown={e => e.key === 'Enter' && setExpanded(isOpen ? null : i)}
              >
                {/* ── TRIGGER ROW ── */}
                <div className="grid min-h-[110px] grid-cols-[90px_1fr] sm:min-h-[130px] sm:grid-cols-[150px_1fr] md:grid-cols-[200px_1fr]">

                  {/* Image */}
                  <div className="relative overflow-hidden">
                    <img
                      src={prog.image}
                      alt={prog.name}
                      className="pc-img-inner absolute inset-0 h-full w-full object-cover"
                    />
                    {/* Fade right */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0F0E0B]" />
                    {/* Number badge */}
                    <span className="font-cormorant absolute left-3 top-3 text-[11px] font-light tracking-widest text-[#C4973A] sm:left-4 sm:top-3.5 sm:text-xs">
                      {prog.num}
                    </span>
                  </div>

                  {/* Body */}
                  <div className="flex flex-col justify-between gap-2 p-4 sm:gap-3 sm:p-5 md:p-6">

                    {/* Top row: name + pill */}
                    <div className="flex items-start justify-between gap-3">
                      <h3
                        className="pc-name font-cormorant leading-none text-[#EDE8DF]"
                        style={{ fontSize: 'clamp(22px, 3.5vw, 36px)', fontWeight: 400, letterSpacing: '0.01em' }}
                      >
                        {prog.name}
                      </h3>

                      {/* Pill — label hidden on xs */}
                      <div
                        className="pc-pill flex shrink-0 items-center gap-1.5 rounded-full border border-[#2E2B22] bg-[#1A1812] px-2.5 py-1.5 text-[11px] font-medium tracking-wide text-[#6A6358] sm:gap-2 sm:px-3.5 sm:py-2 sm:text-xs"
                      >
                        <span className="pc-pill-icon flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#2E2B22] sm:h-[18px] sm:w-[18px]">
                          {isOpen
                            ? <Minus size={9} strokeWidth={2.5} />
                            : <Plus size={9} strokeWidth={2.5} />
                          }
                        </span>
                        <span className="hidden sm:inline">{isOpen ? 'Close' : 'View Curriculum'}</span>
                      </div>
                    </div>

                    {/* Bottom row: hours · phases · stats */}
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5">

                      {/* Hours */}
                      <span className="flex items-center gap-1.5 text-[10px] font-medium uppercase tracking-widest text-[#C4973A] sm:text-[11px]">
                        <Clock size={10} strokeWidth={2} />
                        {prog.hours} hrs
                      </span>

                      {/* Dot */}
                      <span className="h-[3px] w-[3px] rounded-full bg-[#3A3530]" />

                      {/* Phases — collapse on very small screens */}
                      <span className="hidden text-[11px] font-light text-[#4A4540] xs:inline sm:text-xs">{prog.junior}</span>
                      <span className="hidden h-[3px] w-[3px] rounded-full bg-[#3A3530] xs:inline-block" />
                      <span className="hidden text-[11px] font-light text-[#4A4540] xs:inline sm:text-xs">{prog.senior}</span>

                      {/* Theory / Practical stats — push to right */}
                      <div className="ml-auto hidden items-center gap-4 sm:flex sm:gap-5">
                        {[{ n: prog.theory, l: 'Theory' }, { n: prog.practical, l: 'Practical' }].map(s => (
                          <div key={s.l} className="text-right">
                            <div className="pc-stat-n font-cormorant text-lg font-light leading-none text-[#8A7E72] sm:text-xl">
                              {s.n}
                            </div>
                            <div className="mt-0.5 text-[9px] uppercase tracking-widest text-[#3A3530]">{s.l}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                  </div>
                </div>

                {/* ── EXPANDED PANEL ── */}
                <div className={`pc-panel${isOpen ? ' open' : ''}`}>
                  <div className="border-t border-[#1E1C17]">

                    {/* Two-col on md+, stacked below */}
                    <div className="grid grid-cols-1 md:grid-cols-2">

                      {/* Left: image + description — hidden on mobile, shown on md+ */}
                      <div className="relative hidden min-h-[260px] border-r border-[#1E1C17] md:block lg:min-h-[300px]">
                        <img
                          src={prog.image}
                          alt=""
                          aria-hidden
                          className="absolute inset-0 h-full w-full object-cover"
                          style={{ filter: 'brightness(0.35) saturate(0.5)' }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-br from-[#0F0E0B44] to-[#0F0E0B88]" />
                        <div className="absolute bottom-6 left-6 right-6 lg:bottom-7 lg:left-7 lg:right-7">
                          <p className="mb-2.5 text-[10px] font-medium uppercase tracking-[0.2em] text-[#C4973A]">
                            About this Program
                          </p>
                          <p className="text-sm font-light leading-relaxed text-[#9A8E82]">{prog.desc}</p>
                        </div>
                      </div>

                      {/* Mobile-only: description block above table */}
                      <div className="border-b border-[#1E1C17] bg-[#0C0B09] px-4 py-5 md:hidden sm:px-6">
                        <p className="mb-2 text-[10px] font-medium uppercase tracking-[0.2em] text-[#C4973A]">
                          About this Program
                        </p>
                        <p className="text-[13px] font-light leading-relaxed text-[#9A8E82]">{prog.desc}</p>
                      </div>

                      {/* Right: curriculum table */}
                      <div className="overflow-x-auto px-4 pb-8 pt-6 sm:px-6 md:px-7 md:pb-9 md:pt-7">
                        <table className="pc-table w-full border-collapse text-[13px]">
                          <thead>
                            <tr className="border-b border-[#1E1C17]">
                              {['Topic', 'Theory', 'Practical', 'Total'].map((h, hi) => (
                                <th
                                  key={h}
                                  className={`pb-2.5 text-[9px] font-medium uppercase tracking-[0.18em] text-[#3A3530] ${hi === 0 ? 'text-left' : 'text-right'}`}
                                >
                                  {h}
                                </th>
                              ))}
                            </tr>
                          </thead>
                          <tbody>
                            {prog.outline.map((row, j) => (
                              <tr key={j} className="border-b border-[#161410]">
                                <td className="py-2.5 pr-4 text-left text-[#7A6E64]">{row.topic}</td>
                                <td className="py-2.5 text-right font-light text-[#4E4842]">{row.theory}</td>
                                <td className="py-2.5 text-right font-light text-[#4E4842]">{row.practical}</td>
                                <td className="py-2.5 text-right font-medium text-[#C4973A]">{row.total}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>

                    </div>
                  </div>
                </div>

              </div>
            );
          })}

        </div>
      </section>
    </>
  );
};

export default Programs;