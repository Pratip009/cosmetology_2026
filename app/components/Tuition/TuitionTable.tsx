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

        .tt-section {
          background: #F9F6F1;
          padding: 110px 0 120px;
          font-family: 'DM Sans', sans-serif;
          position: relative;
          overflow: hidden;
        }

        .tt-header {
          padding: 0 64px;
          margin-bottom: 56px;
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 32px;
          flex-wrap: wrap;
        }

        @media (max-width: 640px) { .tt-header { padding: 0 24px; } }

        .tt-eyebrow {
          font-size: 10px;
          letter-spacing: 0.26em;
          text-transform: uppercase;
          color: #C4973A;
          font-weight: 500;
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 14px;
        }

        .tt-eyebrow::before {
          content: '';
          display: block;
          width: 24px;
          height: 1px;
          background: #C4973A;
        }

        .tt-h2 {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(40px, 5vw, 60px);
          font-weight: 300;
          line-height: 1;
          color: #181410;
          letter-spacing: -0.01em;
          margin: 0;
        }

        .tt-h2 em { font-style: italic; color: #9B7A52; }

        .tt-note {
          font-size: 12px;
          color: #B0A090;
          font-weight: 300;
          font-style: italic;
          align-self: flex-end;
          padding-bottom: 4px;
          max-width: 240px;
          line-height: 1.6;
        }

        /* table wrapper */
        .tt-wrap {
          width: 100%;
          overflow-x: auto;
        }

        .tt-table {
          width: 100%;
          border-collapse: collapse;
          min-width: 800px;
        }

        /* thead */
        .tt-table thead tr {
          border-bottom: 1px solid #E4DDD4;
        }

        .tt-table th {
          padding: 0 20px 16px;
          font-size: 9px;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: #C0B0A0;
          font-weight: 500;
          text-align: left;
          white-space: nowrap;
        }

        .tt-table th:first-child { padding-left: 64px; }
        .tt-table th:last-child  { padding-right: 64px; text-align: right; }
        .tt-table th.right { text-align: right; }
        .tt-table th.center { text-align: center; }

        /* tbody rows */
        .tt-row {
          border-bottom: 1px solid #EDE8E1;
          transition: background 0.2s;
          cursor: default;
          position: relative;
        }

        .tt-row.active { background: #FFFFFF; }

        .tt-row td {
          padding: 0 20px;
          vertical-align: middle;
        }

        .tt-row td:first-child { padding-left: 64px; }
        .tt-row td:last-child  { padding-right: 64px; }

        /* program name cell */
        .tt-name-cell {
          display: flex;
          align-items: center;
          gap: 18px;
          padding: 28px 0;
        }

        .tt-thumb {
          width: 60px;
          height: 60px;
          border-radius: 12px;
          overflow: hidden;
          flex-shrink: 0;
          position: relative;
          border: 1px solid #EDE8E1;
          transition: transform 0.3s cubic-bezier(0.23,1,0.32,1);
        }

        .tt-row.active .tt-thumb {
          transform: scale(1.06);
          border-color: #C4973A55;
          box-shadow: 0 8px 24px rgba(196,151,58,0.15);
        }

        .tt-thumb img {
          width: 100%; height: 100%;
          object-fit: cover;
          filter: saturate(0.7) brightness(0.95);
          transition: filter 0.3s;
        }

        .tt-row.active .tt-thumb img {
          filter: saturate(1) brightness(1);
        }

        .tt-name-info {}

        .tt-name {
          font-family: 'Cormorant Garamond', serif;
          font-size: 22px;
          font-weight: 400;
          color: #1A1410;
          line-height: 1;
          letter-spacing: 0.01em;
          transition: color 0.2s;
        }

        .tt-row.active .tt-name { color: #8B6830; }

        .tt-desc {
          font-size: 12px;
          color: #B0A090;
          font-weight: 300;
          margin-top: 4px;
          letter-spacing: 0.02em;
        }

        /* data cells */
        .tt-hours {
          font-family: 'Cormorant Garamond', serif;
          font-size: 22px;
          font-weight: 300;
          color: #C4973A;
          text-align: center;
          letter-spacing: -0.01em;
        }

        .tt-week {
          font-size: 13px;
          color: #8A7E72;
          font-weight: 300;
          text-align: center;
          white-space: nowrap;
        }

        .tt-money {
          font-size: 13px;
          color: #8A7E72;
          font-weight: 300;
          text-align: right;
        }

        .tt-tuition {
          font-family: 'Cormorant Garamond', serif;
          font-size: 26px;
          font-weight: 400;
          color: #1A1410;
          text-align: right;
          letter-spacing: -0.01em;
          white-space: nowrap;
          transition: color 0.2s;
        }

        .tt-row.active .tt-tuition { color: #8B6830; }

        /* floating preview image */
        .tt-preview {
          position: fixed;
          width: 220px;
          height: 160px;
          border-radius: 16px;
          overflow: hidden;
          pointer-events: none;
          z-index: 50;
          opacity: 0;
          transform: scale(0.92) translateY(8px);
          transition: opacity 0.25s, transform 0.3s cubic-bezier(0.23,1,0.32,1);
          box-shadow: 0 24px 60px rgba(0,0,0,0.18);
          border: 1px solid rgba(255,255,255,0.6);
        }

        .tt-preview.visible {
          opacity: 1;
          transform: scale(1) translateY(0);
        }

        .tt-preview img {
          width: 100%; height: 100%;
          object-fit: cover;
        }

        .tt-preview-label {
          position: absolute;
          bottom: 0; left: 0; right: 0;
          background: rgba(26,20,16,0.7);
          backdrop-filter: blur(4px);
          padding: 10px 14px;
          font-size: 12px;
          font-weight: 500;
          color: rgba(255,255,255,0.9);
          letter-spacing: 0.04em;
        }
      `}</style>

      <section className="tt-section">
        <div className="tt-header">
          <div>
            <p className="tt-eyebrow">Investment</p>
            <h2 className="tt-h2">Tuition &amp; <em>Fees</em></h2>
          </div>
          <p className="tt-note">* Figures shown are approximate. Contact us for current pricing.</p>
        </div>

        <div className="tt-wrap">
          <table className="tt-table">
            <thead>
              <tr>
                <th>Program</th>
                <th className="center">Hours</th>
                <th className="center">Full-Time</th>
                <th className="center">Part-Time</th>
                <th className="right">Registration</th>
                <th className="right">Kit</th>
                <th className="right">Tuition</th>
              </tr>
            </thead>
            <tbody>
              {programs.map((p, i) => (
                <tr
                  key={i}
                  className={`tt-row${hovered === i ? ' active' : ''}`}
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}
                >
                  <td>
                    <div className="tt-name-cell">
                      <div className="tt-thumb">
                        <img src={p.image} alt={p.name} />
                      </div>
                      <div className="tt-name-info">
                        <div className="tt-name">{p.name}</div>
                        <div className="tt-desc">{p.desc}</div>
                      </div>
                    </div>
                  </td>
                  <td className="tt-hours">{p.hours.toLocaleString()}</td>
                  <td className="tt-week">{p.fullTime}</td>
                  <td className="tt-week">{p.partTime}</td>
                  <td className="tt-money">{p.reg}</td>
                  <td className="tt-money">{p.kit}</td>
                  <td className="tt-tuition">{p.tuition}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  )
}

export default TuitionTable