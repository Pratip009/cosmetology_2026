import { CheckCircle } from 'lucide-react';
import React, { useEffect, useRef } from 'react';

const requirements = [
  'High School Diploma or Equivalent required',
  'Minimum Age: 17 (Cosmetology, Barbering, Nails) · 18 (Teacher Training)',
  'Social Security Card',
  'NJ Physician Statement (free of communicable disease)',
  'Attestation of no child support arrears',
  '30 clock hours in Methods of Teaching (Teacher Training only)',
  'Pass examination conducted by the NJ State Board',
];

const studentItems = [
  'Valid only during enrollment in an approved cosmetology program',
  'Expires automatically upon graduation or withdrawal',
  "Physician's signature required — valid 90 days only",
  'Failure to submit paperwork = no client work allowed',
];

const Requirements = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const els = sectionRef.current?.querySelectorAll('.reveal');
    if (!els) return;
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('revealed')),
      { threshold: 0.12 }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;1,400;1,500&family=Figtree:wght@300;400;500;600&display=swap');

        .req-root {
          font-family: 'Figtree', sans-serif;
          background: #F9F6F1;
          position: relative;
          overflow: hidden;
        }

        /* ── noise grain ── */
        .req-root::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E");
          background-repeat: repeat;
          background-size: 180px;
          pointer-events: none;
          z-index: 0;
        }

        .req-inner {
          position: relative;
          z-index: 1;
          max-width: 1280px;
          margin: 0 auto;
          padding: 120px 48px 130px;
        }

        @media (max-width: 768px) {
          .req-inner { padding: 80px 24px 90px; }
        }

        /* ── top label ── */
        .req-label {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: #B07D3A;
          margin-bottom: 20px;
        }
        .req-label-line {
          display: block;
          width: 28px;
          height: 1px;
          background: #B07D3A;
        }

        /* ── heading ── */
        .req-heading {
          font-family: 'Playfair Display', serif;
          font-size: clamp(40px, 5vw, 64px);
          font-weight: 400;
          color: #1A1410;
          line-height: 1.05;
          letter-spacing: -0.02em;
          margin: 0 0 16px;
        }
        .req-heading em {
          font-style: italic;
          color: #B07D3A;
        }

        .req-subtext {
          font-size: 15px;
          font-weight: 300;
          color: #7A6E62;
          max-width: 420px;
          line-height: 1.7;
          margin-bottom: 52px;
        }

        /* ── main layout ── */
        .req-layout {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 64px;
          align-items: start;
        }

        @media (max-width: 960px) {
          .req-layout { grid-template-columns: 1fr; gap: 48px; }
        }

        /* ── LEFT column ── */
        .req-left {}

        /* image block */
        .req-image-wrap {
          position: relative;
          border-radius: 20px;
          overflow: hidden;
          margin-bottom: 40px;
          aspect-ratio: 4/3;
        }

        .req-image-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.7s cubic-bezier(0.23, 1, 0.32, 1);
        }

        .req-image-wrap:hover img {
          transform: scale(1.04);
        }

        /* gold badge overlaid on image */
        .req-img-badge {
          position: absolute;
          bottom: 20px;
          left: 20px;
          background: rgba(255,252,248,0.92);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(176,125,58,0.2);
          border-radius: 14px;
          padding: 14px 20px;
          display: flex;
          flex-direction: column;
          gap: 2px;
        }
        .req-img-badge-num {
          font-family: 'Playfair Display', serif;
          font-size: 28px;
          font-weight: 500;
          color: #1A1410;
          line-height: 1;
        }
        .req-img-badge-label {
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #B07D3A;
        }

        /* stat pills row */
        .req-stats {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }

        .req-stat {
          background: #fff;
          border: 1px solid #E8E0D4;
          border-radius: 12px;
          padding: 14px 20px;
          flex: 1;
          min-width: 100px;
        }
        .req-stat-num {
          font-family: 'Playfair Display', serif;
          font-size: 22px;
          font-weight: 500;
          color: #1A1410;
          margin-bottom: 2px;
        }
        .req-stat-lbl {
          font-size: 11px;
          font-weight: 400;
          color: #9A8E82;
          line-height: 1.4;
        }

        /* ── RIGHT column ── */
        .req-right {
          display: flex;
          flex-direction: column;
          gap: 28px;
        }

        /* checklist card */
        .req-list-card {
          background: #fff;
          border: 1px solid #EAE3D8;
          border-radius: 20px;
          padding: 36px;
          box-shadow: 0 8px 40px rgba(26,20,16,0.05);
        }

        .req-list-title {
          font-family: 'Playfair Display', serif;
          font-size: 20px;
          font-weight: 400;
          color: #1A1410;
          margin: 0 0 24px;
        }

        .req-list {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .req-item {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          transition: transform 0.2s ease;
        }
        .req-item:hover { transform: translateX(4px); }

        .req-check {
          color: #B07D3A;
          flex-shrink: 0;
          margin-top: 1px;
          transition: transform 0.3s cubic-bezier(0.34,1.56,0.64,1);
        }
        .req-item:hover .req-check { transform: scale(1.2); }

        .req-item-text {
          font-size: 14px;
          font-weight: 300;
          color: #5A4F44;
          line-height: 1.65;
        }

        /* divider */
        .req-divider {
          height: 1px;
          background: linear-gradient(90deg, #E8E0D4, transparent);
          margin: 4px 0;
        }

        /* permit cards grid */
        .req-permits {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }

        @media (max-width: 600px) {
          .req-permits { grid-template-columns: 1fr; }
        }

        .req-permit {
          border-radius: 16px;
          padding: 28px;
          position: relative;
          overflow: hidden;
        }

        /* Student permit — light */
        .req-permit-light {
          background: #fff;
          border: 1px solid #EAE3D8;
          box-shadow: 0 4px 20px rgba(26,20,16,0.04);
        }

        /* Temporary permit — dark */
        .req-permit-dark {
          background: #1A1410;
        }

        .req-permit-dark::after {
          content: '';
          position: absolute;
          top: -40px;
          right: -40px;
          width: 120px;
          height: 120px;
          border-radius: 50%;
          background: rgba(176,125,58,0.12);
          pointer-events: none;
        }

        .req-permit-tag {
          display: inline-block;
          font-size: 9px;
          font-weight: 600;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          padding: 4px 10px;
          border-radius: 999px;
          margin-bottom: 14px;
        }
        .req-permit-light .req-permit-tag {
          background: #F5EDE0;
          color: #B07D3A;
        }
        .req-permit-dark .req-permit-tag {
          background: rgba(176,125,58,0.18);
          color: #D4A85A;
        }

        .req-permit-title {
          font-family: 'Playfair Display', serif;
          font-size: 18px;
          font-weight: 400;
          margin: 0 0 10px;
          line-height: 1.2;
        }
        .req-permit-light .req-permit-title { color: #1A1410; }
        .req-permit-dark .req-permit-title { color: #F5EDE0; }

        .req-permit-body {
          font-size: 13px;
          font-weight: 300;
          line-height: 1.7;
        }
        .req-permit-light .req-permit-body { color: #7A6E62; }
        .req-permit-dark .req-permit-body { color: rgba(245,237,224,0.55); }

        .req-permit-bullets {
          display: flex;
          flex-direction: column;
          gap: 8px;
          margin-top: 14px;
        }
        .req-permit-bullet {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          font-size: 12.5px;
          font-weight: 300;
          line-height: 1.55;
        }
        .req-permit-light .req-permit-bullet { color: #6A5E52; }
        .req-permit-dark .req-permit-bullet { color: rgba(245,237,224,0.5); }

        .req-bullet-dot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          flex-shrink: 0;
          margin-top: 6px;
        }
        .req-permit-light .req-bullet-dot { background: #B07D3A; }
        .req-permit-dark .req-bullet-dot { background: #D4A85A; }

        /* NJ statute chip */
        .req-statute {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.12em;
          color: #9A8E82;
          text-transform: uppercase;
          margin-bottom: 14px;
        }
        .req-statute-dot {
          width: 4px; height: 4px;
          border-radius: 50%;
          background: #B07D3A;
          flex-shrink: 0;
        }

        /* ── Reveal animation ── */
        .reveal {
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.7s ease, transform 0.7s cubic-bezier(0.23, 1, 0.32, 1);
        }
        .reveal.revealed {
          opacity: 1;
          transform: none;
        }
        .reveal-d1 { transition-delay: 0.1s; }
        .reveal-d2 { transition-delay: 0.2s; }
        .reveal-d3 { transition-delay: 0.3s; }
        .reveal-d4 { transition-delay: 0.4s; }
      `}</style>

      <section className="req-root" ref={sectionRef}>
        <div className="req-inner">

          {/* ── Page header ── */}
          <div className="reveal">
            <span className="req-label">
              <span className="req-label-line" />
              New Jersey State Board
            </span>
            <h2 className="req-heading">Licensing <em>Requirements</em></h2>
            <p className="req-subtext">
              Everything you need to meet NJ State Board standards and begin your career in cosmetology with confidence.
            </p>
          </div>

          <div className="req-layout">

            {/* ════ LEFT ════ */}
            <div className="req-left">

              {/* image */}
              <div className="req-image-wrap reveal reveal-d1">
                <img
                  src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=900&auto=format&fit=crop&q=80"
                  alt="Cosmetology student at work"
                />
                <div className="req-img-badge">
                  <span className="req-img-badge-num">7</span>
                  <span className="req-img-badge-label">Requirements</span>
                </div>
              </div>

              {/* stats */}
              <div className="req-stats reveal reveal-d2">
                <div className="req-stat">
                  <div className="req-stat-num">17+</div>
                  <div className="req-stat-lbl">Min. age for<br />cosmetology</div>
                </div>
                <div className="req-stat">
                  <div className="req-stat-num">30h</div>
                  <div className="req-stat-lbl">Teaching methods<br />clock hours</div>
                </div>
                <div className="req-stat">
                  <div className="req-stat-num">90d</div>
                  <div className="req-stat-lbl">Physician note<br />validity</div>
                </div>
              </div>
            </div>

            {/* ════ RIGHT ════ */}
            <div className="req-right">

              {/* checklist */}
              <div className="req-list-card reveal reveal-d2">
                <h3 className="req-list-title">General Requirements</h3>
                <div className="req-list">
                  {requirements.map((req, i) => (
                    <React.Fragment key={i}>
                      <div className="req-item">
                        <CheckCircle className="req-check" size={16} strokeWidth={2} />
                        <span className="req-item-text">{req}</span>
                      </div>
                      {i < requirements.length - 1 && <div className="req-divider" />}
                    </React.Fragment>
                  ))}
                </div>
              </div>

              {/* permit cards */}
              <div className="req-permits reveal reveal-d3">

                {/* Student Work Permit */}
                <div className="req-permit req-permit-light">
                  <div className="req-statute">
                    <span className="req-statute-dot" />
                    NJ Statute 45:5B-25
                  </div>
                  <span className="req-permit-tag">Student Permit</span>
                  <h4 className="req-permit-title">Student Work Permit</h4>
                  <div className="req-permit-bullets">
                    {studentItems.map((item, i) => (
                      <div className="req-permit-bullet" key={i}>
                        <span className="req-bullet-dot" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Temporary Work Permit */}
                <div className="req-permit req-permit-dark">
                  <span className="req-permit-tag">Temporary Permit</span>
                  <h4 className="req-permit-title">Temporary Work Permit</h4>
                  <p className="req-permit-body">
                    Issued to graduates who have registered for regularly scheduled monthly exams and completed their program.
                  </p>
                  <p className="req-permit-body" style={{ marginTop: 10 }}>
                    Allows graduates to work in a salon until sitting for their licensing exam. Written exam must be passed before students are eligible for the practical section.
                  </p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Requirements;