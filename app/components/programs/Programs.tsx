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
    image: 'https://plus.unsplash.com/premium_photo-1661290231745-15f1ed6fea88?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
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

        * { box-sizing: border-box; margin: 0; padding: 0; }

        .ps {
          font-family: 'DM Sans', sans-serif;
          background: #0A0908;
          padding: 80px 24px 120px;
        }

        .ps-inner {
          max-width: 1080px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        /* ── CARD ── */
        .pc {
          position: relative;
          border-radius: 16px;
          overflow: hidden;
          cursor: pointer;
          outline: none;
          border: 1.5px solid #1E1C17;
          transition: border-color 0.3s, transform 0.25s cubic-bezier(0.23,1,0.32,1), box-shadow 0.3s;
          background: #0F0E0B;
        }

        .pc:hover {
          border-color: #C4973A;
          transform: translateY(-2px);
          box-shadow: 0 20px 60px rgba(196,151,58,0.12);
        }

        .pc.open {
          border-color: #C4973A;
          box-shadow: 0 24px 80px rgba(196,151,58,0.15);
        }

        /* ── TRIGGER ROW ── */
        .pc-trigger {
          display: grid;
          grid-template-columns: 200px 1fr;
          min-height: 140px;
          position: relative;
        }

        @media (max-width: 640px) {
          .pc-trigger { grid-template-columns: 120px 1fr; min-height: 120px; }
        }

        /* image */
        .pc-img {
          position: relative;
          overflow: hidden;
        }
        .pc-img img {
          width: 100%; height: 100%;
          object-fit: cover;
          transition: transform 0.6s cubic-bezier(0.23,1,0.32,1), filter 0.4s;
          filter: brightness(0.45) saturate(0.6);
        }
        .pc:hover .pc-img img, .pc.open .pc-img img {
          transform: scale(1.07);
          filter: brightness(0.6) saturate(0.8);
        }
        .pc-img-fade {
          position: absolute; inset: 0;
          background: linear-gradient(to right, transparent 50%, #0F0E0B);
        }
        .pc-num {
          position: absolute;
          top: 14px; left: 16px;
          font-family: 'Cormorant Garamond', serif;
          font-size: 12px;
          letter-spacing: 0.12em;
          color: #C4973A;
          font-weight: 300;
        }

        /* main body of trigger */
        .pc-body {
          padding: 24px 28px 24px 24px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          gap: 12px;
        }

        .pc-top {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 16px;
        }

        .pc-name {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(26px, 3.5vw, 36px);
          font-weight: 400;
          color: #EDE8DF;
          line-height: 1;
          letter-spacing: 0.01em;
          transition: color 0.2s;
        }
        .pc:hover .pc-name, .pc.open .pc-name { color: #F8F0E3; }

        /* pill toggle button */
        .pc-pill {
          flex-shrink: 0;
          display: flex;
          align-items: center;
          gap: 8px;
          background: #1A1812;
          border: 1px solid #2E2B22;
          border-radius: 40px;
          padding: 8px 16px 8px 12px;
          font-size: 12px;
          font-weight: 500;
          color: #6A6358;
          letter-spacing: 0.04em;
          transition: background 0.25s, border-color 0.25s, color 0.25s;
          white-space: nowrap;
          pointer-events: none;
        }
        .pc:hover .pc-pill {
          background: #221F16;
          border-color: #C4973A55;
          color: #C4973A;
        }
        .pc.open .pc-pill {
          background: #C4973A;
          border-color: #C4973A;
          color: #0A0908;
        }
        .pc-pill-icon {
          width: 18px; height: 18px;
          border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          background: #2E2B22;
          transition: background 0.25s;
          flex-shrink: 0;
        }
        .pc:hover .pc-pill-icon { background: #C4973A22; }
        .pc.open .pc-pill-icon { background: #0A090822; }

        .pc-bottom {
          display: flex;
          align-items: center;
          gap: 20px;
          flex-wrap: wrap;
        }

        .pc-hrs {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 11px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #C4973A;
          font-weight: 500;
        }

        .pc-dot {
          width: 3px; height: 3px;
          border-radius: 50%;
          background: #3A3530;
        }

        .pc-phase {
          font-size: 12px;
          color: #4A4540;
          font-weight: 300;
        }

        .pc-stats {
          margin-left: auto;
          display: flex;
          gap: 20px;
        }

        @media (max-width: 500px) {
          .pc-stats { display: none; }
        }

        .pc-stat {
          text-align: right;
        }
        .pc-stat-n {
          font-family: 'Cormorant Garamond', serif;
          font-size: 20px;
          font-weight: 300;
          color: #8A7E72;
          line-height: 1;
          transition: color 0.2s;
        }
        .pc:hover .pc-stat-n, .pc.open .pc-stat-n { color: #C4973A; }
        .pc-stat-l {
          font-size: 9px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #3A3530;
          margin-top: 2px;
        }

        /* ── EXPANDED PANEL ── */
        .pc-panel {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.55s cubic-bezier(0.23,1,0.32,1);
        }
        .pc-panel.open { max-height: 800px; }

        .pc-panel-inner {
          border-top: 1px solid #1E1C17;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0;
        }

        @media (max-width: 700px) {
          .pc-panel-inner { grid-template-columns: 1fr; }
          .pc-panel-side { display: none; }
        }

        .pc-panel-side {
          position: relative;
          overflow: hidden;
          min-height: 280px;
          border-right: 1px solid #1E1C17;
        }
        .pc-panel-side img {
          width: 100%; height: 100%;
          object-fit: cover;
          filter: brightness(0.35) saturate(0.5);
        }
        .pc-panel-side-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(135deg, #0F0E0B44, #0F0E0B88);
        }
        .pc-panel-side-text {
          position: absolute;
          bottom: 28px; left: 28px; right: 28px;
        }
        .pc-panel-side-label {
          font-size: 10px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #C4973A;
          margin-bottom: 10px;
          font-weight: 500;
        }
        .pc-panel-desc {
          font-size: 14px;
          line-height: 1.75;
          color: #9A8E82;
          font-weight: 300;
        }

        .pc-panel-table-wrap {
          padding: 28px 32px 36px;
          overflow-x: auto;
        }

        .pc-table {
          width: 100%;
          border-collapse: collapse;
          font-size: 13px;
        }
        .pc-table thead tr {
          border-bottom: 1px solid #1E1C17;
        }
        .pc-table th {
          padding: 0 0 10px;
          font-size: 9px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #3A3530;
          font-weight: 500;
          text-align: left;
        }
        .pc-table th:not(:first-child) { text-align: right; }
        .pc-table tbody tr {
          border-bottom: 1px solid #161410;
          transition: background 0.15s;
        }
        .pc-table tbody tr:hover { background: #14120E; }
        .pc-table td {
          padding: 11px 0;
          font-size: 13px;
          color: #4E4842;
          font-weight: 300;
        }
        .pc-table td:first-child { color: #7A6E64; padding-right: 16px; }
        .pc-table td:not(:first-child) { text-align: right; }
        .pc-table .td-t { color: #C4973A; font-weight: 500; }
      `}</style>

      <section className="ps">
        <div className="ps-inner">
          {programs.map((prog, i) => {
            const isOpen = expanded === i;
            return (
              <div
                key={i}
                className={`pc${isOpen ? ' open' : ''}`}
                onClick={() => setExpanded(isOpen ? null : i)}
                role="button"
                tabIndex={0}
                aria-expanded={isOpen}
                onKeyDown={e => e.key === 'Enter' && setExpanded(isOpen ? null : i)}
              >
                {/* ── TRIGGER ── */}
                <div className="pc-trigger">
                  <div className="pc-img">
                    <img src={prog.image} alt={prog.name} />
                    <div className="pc-img-fade" />
                    <span className="pc-num">{prog.num}</span>
                  </div>

                  <div className="pc-body">
                    <div className="pc-top">
                      <h3 className="pc-name">{prog.name}</h3>
                      <div className="pc-pill">
                        <span className="pc-pill-icon">
                          {isOpen
                            ? <Minus size={11} strokeWidth={2.5} />
                            : <Plus size={11} strokeWidth={2.5} />
                          }
                        </span>
                        {isOpen ? 'Close' : 'View Curriculum'}
                      </div>
                    </div>

                    <div className="pc-bottom">
                      <span className="pc-hrs">
                        <Clock size={11} strokeWidth={2} />
                        {prog.hours} hrs
                      </span>
                      <span className="pc-dot" />
                      <span className="pc-phase">{prog.junior}</span>
                      <span className="pc-dot" />
                      <span className="pc-phase">{prog.senior}</span>

                      <div className="pc-stats">
                        <div className="pc-stat">
                          <div className="pc-stat-n">{prog.theory}</div>
                          <div className="pc-stat-l">Theory</div>
                        </div>
                        <div className="pc-stat">
                          <div className="pc-stat-n">{prog.practical}</div>
                          <div className="pc-stat-l">Practical</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* ── EXPANDED PANEL ── */}
                <div className={`pc-panel${isOpen ? ' open' : ''}`}>
                  <div className="pc-panel-inner">
                    <div className="pc-panel-side">
                      <img src={prog.image} alt="" aria-hidden />
                      <div className="pc-panel-side-overlay" />
                      <div className="pc-panel-side-text">
                        <p className="pc-panel-side-label">About this Program</p>
                        <p className="pc-panel-desc">{prog.desc}</p>
                      </div>
                    </div>

                    <div className="pc-panel-table-wrap">
                      <table className="pc-table">
                        <thead>
                          <tr>
                            <th>Topic</th>
                            <th>Theory</th>
                            <th>Practical</th>
                            <th>Total</th>
                          </tr>
                        </thead>
                        <tbody>
                          {prog.outline.map((row, j) => (
                            <tr key={j}>
                              <td>{row.topic}</td>
                              <td>{row.theory}</td>
                              <td>{row.practical}</td>
                              <td className="td-t">{row.total}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
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