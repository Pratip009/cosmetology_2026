import React from 'react'

const grading = [
  { range: "93–100", grade: "Excellent",      pct: 100, label: "A" },
  { range: "85–92",  grade: "Very Good",      pct: 78,  label: "B" },
  { range: "75–84",  grade: "Satisfactory",   pct: 55,  label: "C" },
  { range: "74 & below", grade: "Unsatisfactory", pct: 22, label: "D" },
]

const Grading = () => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;1,400;1,500&family=DM+Sans:wght@300;400;500&display=swap');

        .gd-wrap {
          background: #F9F6F1;
          padding: 110px 64px 120px;
          font-family: 'DM Sans', sans-serif;
          position: relative;
          overflow: hidden;
        }

        .gd-noise {
          position: absolute;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E");
          pointer-events: none;
          opacity: 0.4;
        }

        .gd-inner {
          position: relative;
          z-index: 1;
        }

        /* header */
        .gd-head {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          margin-bottom: 56px;
          gap: 24px;
          flex-wrap: wrap;
        }

        .gd-tag {
          font-size: 10px;
          letter-spacing: 0.26em;
          text-transform: uppercase;
          color: #B89A6A;
          font-weight: 500;
          margin-bottom: 14px;
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .gd-tag::before {
          content: '';
          display: block;
          width: 24px;
          height: 1px;
          background: #B89A6A;
        }

        .gd-h2 {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: clamp(42px, 5.5vw, 62px);
          font-weight: 400;
          line-height: 1;
          color: #181410;
          letter-spacing: -0.015em;
          margin: 0;
        }

        .gd-h2 em {
          font-style: italic;
          color: #8B6830;
        }

        .gd-sub {
          font-size: 13px;
          color: #AFA090;
          font-weight: 300;
          letter-spacing: 0.03em;
          align-self: flex-end;
          padding-bottom: 6px;
        }

        /* stacked rows */
        .gd-rows {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .gd-row {
          display: grid;
          grid-template-columns: 52px 1fr 160px;
          align-items: center;
          gap: 0;
          background: #FFFFFF;
          border: 1px solid #EDE5D8;
          border-radius: 14px;
          overflow: hidden;
          transition: border-color 0.25s, transform 0.2s;
        }

        .gd-row:hover {
          border-color: #C4973A;
          transform: translateX(4px);
        }

        .gd-row.dim {
          opacity: 0.5;
        }

        /* letter badge */
        .gd-letter {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100%;
          background: #F9F6F1;
          border-right: 1px solid #EDE5D8;
          padding: 28px 0;
          font-family: 'Playfair Display', serif;
          font-size: 22px;
          font-weight: 400;
          font-style: italic;
          color: #C4973A;
        }

        .gd-row.dim .gd-letter {
          color: #C0B8AE;
        }

        /* middle section */
        .gd-mid {
          padding: 22px 28px;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .gd-top-row {
          display: flex;
          align-items: baseline;
          gap: 14px;
        }

        .gd-range {
          font-family: 'Playfair Display', serif;
          font-size: 28px;
          font-weight: 400;
          color: #1A1410;
          line-height: 1;
          letter-spacing: -0.01em;
        }

        .gd-row.dim .gd-range {
          color: #AFA090;
        }

        .gd-grade {
          font-size: 11px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #C4973A;
          font-weight: 500;
        }

        .gd-row.dim .gd-grade { color: #C0B8AE; }

        /* track */
        .gd-track {
          height: 4px;
          background: #EDE5D8;
          border-radius: 99px;
          overflow: hidden;
        }

        .gd-fill {
          height: 100%;
          border-radius: 99px;
          background: #C4973A;
          transition: width 1s cubic-bezier(0.23,1,0.32,1);
        }

        .gd-row.dim .gd-fill {
          background: #D8CFC4;
        }

        /* right pct */
        .gd-pct-col {
          padding: 22px 28px 22px 0;
          text-align: right;
          border-left: 1px solid #EDE5D8;
        }

        .gd-pct-n {
          font-family: 'Playfair Display', serif;
          font-size: 36px;
          font-weight: 400;
          color: #E8C97A;
          line-height: 1;
          letter-spacing: -0.02em;
        }

        .gd-row.dim .gd-pct-n { color: #D8CFC4; }

        .gd-pct-label {
          font-size: 10px;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: #C0B0A0;
          margin-top: 2px;
          font-weight: 400;
        }

        @media (max-width: 560px) {
          .gd-wrap { padding: 80px 24px 90px; }
          .gd-row { grid-template-columns: 44px 1fr; }
          .gd-pct-col { display: none; }
          .gd-range { font-size: 20px; }
        }
      `}</style>

      <section className="gd-wrap">
        <div className="gd-noise" />
        <div className="gd-inner">

          <div className="gd-head">
            <div>
              <p className="gd-tag">Standards</p>
              <h2 className="gd-h2">Grading <em>Scale</em></h2>
            </div>
            <p className="gd-sub">Applies to all programs</p>
          </div>

          <div className="gd-rows">
            {grading.map((g, i) => (
              <div key={i} className={`gd-row${i === grading.length - 1 ? ' dim' : ''}`}>
                <div className="gd-letter">{g.label}</div>

                <div className="gd-mid">
                  <div className="gd-top-row">
                    <span className="gd-range">{g.range}</span>
                    <span className="gd-grade">{g.grade}</span>
                  </div>
                  <div className="gd-track">
                    <div className="gd-fill" style={{ width: `${g.pct}%` }} />
                  </div>
                </div>

                <div className="gd-pct-col">
                  <div className="gd-pct-n">{g.pct}</div>
                  <div className="gd-pct-label">Score %</div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  )
}

export default Grading