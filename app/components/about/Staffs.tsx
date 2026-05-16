import { useEffect, useRef, useState } from 'react'

const staff = [
  {
    name: 'Mahek Rizwan',
    title: 'Director & Owner',
    initials: 'MR',
    quote: 'Shaping futures through the art of beauty education.',
    accent: '#c49e54',
    bg: ['#fdf6ec', '#f5e6c8'],
    skinTone: '#f0b48a',
    hairColor: '#2d1a0e',
    clothColor: '#c49e54',
    gender: 'f' as const,
    icon: 'crown',
  },
  {
    name: 'Kaif Rizwan',
    title: 'Administrator',
    initials: 'KR',
    quote: 'Keeping every detail in order so students can focus on growth.',
    accent: '#4a6fa5',
    bg: ['#eef3fb', '#d5e2f5'],
    skinTone: '#d4956a',
    hairColor: '#1a1008',
    clothColor: '#4a6fa5',
    gender: 'm' as const,
    icon: 'brief',
  },
  {
    name: 'Zeba Fatima',
    title: 'Co-Director',
    initials: 'ZF',
    quote: 'Committed to building a school where every student thrives.',
    accent: '#9a6aaa',
    bg: ['#f7f0fb', '#e8d5f5'],
    skinTone: '#e8b48a',
    hairColor: '#0f0a18',
    clothColor: '#9a6aaa',
    gender: 'f' as const,
    icon: 'star',
  },
  {
    name: 'Adrian Carillo',
    title: 'Supervising Teacher',
    initials: 'AC',
    license: 'Lic. #32WB00255100',
    quote: 'Excellence in technique is the foundation of every great stylist.',
    accent: '#3a7a5a',
    bg: ['#eaf5ef', '#c8e8d5'],
    skinTone: '#c8845a',
    hairColor: '#3a2010',
    clothColor: '#3a7a5a',
    gender: 'm' as const,
    icon: 'scissors',
  },
]

type Member = typeof staff[0]

function AvatarSVG({ m, hovered }: { m: Member; hovered: boolean }) {
  const id = m.initials
  const iF = m.gender === 'f'

  return (
    <svg viewBox="0 0 240 280" xmlns="http://www.w3.org/2000/svg"
      style={{ width: '100%', height: '100%', display: 'block' }}>
      <defs>
        <radialGradient id={`bg${id}`} cx="50%" cy="65%" r="75%">
          <stop offset="0%" stopColor={m.bg[0]} />
          <stop offset="100%" stopColor={m.bg[1]} />
        </radialGradient>
        <radialGradient id={`skin${id}`} cx="38%" cy="32%" r="70%">
          <stop offset="0%" stopColor={m.skinTone} />
          <stop offset="100%" stopColor={m.skinTone} stopOpacity="0.82" />
        </radialGradient>
      </defs>

      {/* BG */}
      <rect width="240" height="280" fill={`url(#bg${id})`} />

      {/* Decorative circles */}
      <circle cx="210" cy="38" r="55" fill={m.accent} opacity="0.07" />
      <circle cx="18" cy="230" r="48" fill={m.accent} opacity="0.06" />
      <circle cx="120" cy="268" r="28" fill={m.accent} opacity="0.09" />

      {/* Subtle vertical lines */}
      {[40, 80, 120, 160, 200].map(x => (
        <line key={x} x1={x} y1="0" x2={x} y2="280"
          stroke={m.accent} strokeOpacity="0.05" strokeWidth="1" />
      ))}

      {/* === SHOULDERS / BODY === */}
      <ellipse cx="120" cy="296" rx="76" ry="58" fill={m.clothColor} opacity="0.95" />

      {/* Collar */}
      {iF ? (
        <path d="M96 228 Q120 246 144 228 L148 222 Q120 242 92 222 Z"
          fill={m.clothColor} opacity="0.85" />
      ) : (
        <>
          <rect x="106" y="220" width="28" height="16" rx="3" fill="#fff" opacity="0.88" />
          <path d="M106 220 L120 234 L134 220"
            fill="none" stroke={m.clothColor} strokeWidth="1.5" opacity="0.55" />
        </>
      )}

      {/* Neck */}
      <rect x="108" y="194" width="24" height="36" rx="7"
        fill={`url(#skin${id})`} />

      {/* === HEAD === */}
      <ellipse cx="120" cy="143"
        rx={iF ? 46 : 48} ry={iF ? 54 : 55}
        fill={`url(#skin${id})`} />

      {/* Ears */}
      <ellipse cx={iF ? 75 : 73} cy="147" rx="8" ry="11" fill={m.skinTone} opacity="0.88" />
      <ellipse cx={iF ? 76 : 74} cy="147" rx="4" ry="6" fill={m.skinTone} opacity="0.55" />
      <ellipse cx={iF ? 165 : 167} cy="147" rx="8" ry="11" fill={m.skinTone} opacity="0.88" />
      <ellipse cx={iF ? 164 : 166} cy="147" rx="4" ry="6" fill={m.skinTone} opacity="0.55" />

      {/* Earrings */}
      {iF && <>
        <circle cx="75" cy="160" r="3.5" fill={m.accent} />
        <circle cx="165" cy="160" r="3.5" fill={m.accent} />
      </>}

      {/* === HAIR === */}
      {iF ? (
        <>
          <ellipse cx="120" cy="104" rx="50" ry="32" fill={m.hairColor} />
          <path d="M70 116 Q54 148 60 196 Q66 192 70 168 Q76 148 80 136 Z" fill={m.hairColor} />
          <path d="M170 116 Q186 148 180 196 Q174 192 170 168 Q164 148 160 136 Z" fill={m.hairColor} />
          <ellipse cx="120" cy="97" rx="44" ry="24" fill={m.hairColor} />
          <ellipse cx="108" cy="93" rx="12" ry="7" fill="rgba(255,255,255,0.07)" />
        </>
      ) : (
        <>
          <ellipse cx="120" cy="100" rx="50" ry="28" fill={m.hairColor} />
          <ellipse cx="120" cy="94" rx="44" ry="18" fill={m.hairColor} />
          <path d="M72 126 Q68 116 72 106 Q80 98 86 104 Q80 116 80 128 Z" fill={m.hairColor} />
          <path d="M168 126 Q172 116 168 106 Q160 98 154 104 Q160 116 160 128 Z" fill={m.hairColor} />
          <ellipse cx="110" cy="94" rx="10" ry="5" fill="rgba(255,255,255,0.06)" />
        </>
      )}

      {/* === FACE === */}
      {/* Brows */}
      <path d={iF ? "M97 131 Q103 127 111 129" : "M96 130 Q103 126 112 129"}
        fill="none" stroke={m.hairColor} strokeWidth={iF ? 1.8 : 2.4} strokeLinecap="round" />
      <path d={iF ? "M129 129 Q137 127 143 131" : "M128 129 Q137 126 144 130"}
        fill="none" stroke={m.hairColor} strokeWidth={iF ? 1.8 : 2.4} strokeLinecap="round" />

      {/* Eyes */}
      <ellipse cx="104" cy="142" rx="9" ry={iF ? 7 : 6.5} fill="white" />
      <circle cx="105" cy="142" r={iF ? 5 : 4.5} fill="#22120a" />
      <circle cx="106.5" cy="140.5" r="1.6" fill="white" />

      <ellipse cx="136" cy="142" rx="9" ry={iF ? 7 : 6.5} fill="white" />
      <circle cx="135" cy="142" r={iF ? 5 : 4.5} fill="#22120a" />
      <circle cx="136.5" cy="140.5" r="1.6" fill="white" />

      {/* Lashes */}
      {iF && <>
        <path d="M95 138 Q99 134 104 135 Q109 134 113 138"
          fill="none" stroke="#180804" strokeWidth="2" strokeLinecap="round" />
        <path d="M127 138 Q131 134 136 135 Q141 134 145 138"
          fill="none" stroke="#180804" strokeWidth="2" strokeLinecap="round" />
      </>}

      {/* Nose */}
      <path d={iF
        ? "M119 149 Q116 158 113 162 Q117 165 120 164 Q123 165 127 162 Q124 158 121 149"
        : "M119 150 Q115 160 112 165 Q116 168 120 167 Q124 168 128 165 Q125 160 121 150"}
        fill="none" stroke={m.skinTone} strokeWidth="1.4" strokeLinecap="round"
        style={{ filter: 'brightness(0.83)' }} />

      {/* Mouth */}
      <path d={iF
        ? "M110 172 Q115 178 120 179 Q125 178 130 172"
        : "M109 174 Q114 180 120 181 Q126 180 131 174"}
        fill="none" stroke="#c0785a" strokeWidth="2" strokeLinecap="round" />

      {/* Blush */}
      {iF && <>
        <ellipse cx="91" cy="157" rx="10" ry="6" fill="#e8806a" opacity="0.16" />
        <ellipse cx="149" cy="157" rx="10" ry="6" fill="#e8806a" opacity="0.16" />
      </>}

      {/* === ANIMATED PARTICLES === */}
      <circle cx="26" cy="58" r="4" fill={m.accent} opacity="0.28">
        <animate attributeName="cy" values="58;48;58" dur="3.4s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.28;0.6;0.28" dur="3.4s" repeatCount="indefinite" />
      </circle>
      <circle cx="212" cy="78" r="3" fill={m.accent} opacity="0.22">
        <animate attributeName="cy" values="78;66;78" dur="4.2s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.22;0.5;0.22" dur="4.2s" repeatCount="indefinite" />
      </circle>
      <circle cx="50" cy="204" r="2.5" fill={m.accent} opacity="0.18">
        <animate attributeName="cx" values="50;60;50" dur="5.2s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.18;0.42;0.18" dur="5.2s" repeatCount="indefinite" />
      </circle>
      <circle cx="190" cy="220" r="2" fill={m.accent} opacity="0.2">
        <animate attributeName="cy" values="220;210;220" dur="3.8s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.2;0.5;0.2" dur="3.8s" repeatCount="indefinite" />
      </circle>

      {/* Sparkle */}
      <g opacity={hovered ? 0.85 : 0.32} style={{ transition: 'opacity 0.45s' }}>
        <line x1="196" y1="22" x2="196" y2="34" stroke={m.accent} strokeWidth="1.5" strokeLinecap="round">
          <animate attributeName="opacity" values="0.4;1;0.4" dur="2.1s" repeatCount="indefinite" />
        </line>
        <line x1="190" y1="28" x2="202" y2="28" stroke={m.accent} strokeWidth="1.5" strokeLinecap="round">
          <animate attributeName="opacity" values="0.4;1;0.4" dur="2.1s" repeatCount="indefinite" />
        </line>
        <line x1="191.5" y1="24" x2="200.5" y2="32" stroke={m.accent} strokeWidth="1" strokeLinecap="round">
          <animate attributeName="opacity" values="0.2;0.65;0.2" dur="2.1s" repeatCount="indefinite" />
        </line>
        <line x1="200.5" y1="24" x2="191.5" y2="32" stroke={m.accent} strokeWidth="1" strokeLinecap="round">
          <animate attributeName="opacity" values="0.2;0.65;0.2" dur="2.1s" repeatCount="indefinite" />
        </line>
      </g>

      {/* === ROLE ICONS === */}
      {m.icon === 'crown' && (
        <g transform="translate(16, 18)" opacity="0.38">
          <polygon points="12,0 16,10 24,6 20,18 4,18 0,6 8,10"
            fill={m.accent} stroke={m.accent} strokeWidth="0.5">
            <animate attributeName="opacity" values="0.5;0.9;0.5" dur="2.8s" repeatCount="indefinite" />
          </polygon>
        </g>
      )}
      {m.icon === 'scissors' && (
        <g transform="translate(14, 16)" opacity="0.35">
          <circle cx="0" cy="0" r="5" fill="none" stroke={m.accent} strokeWidth="1.5" />
          <circle cx="12" cy="12" r="5" fill="none" stroke={m.accent} strokeWidth="1.5" />
          <line x1="4" y1="4" x2="22" y2="-4" stroke={m.accent} strokeWidth="1.5" strokeLinecap="round" />
          <line x1="4" y1="8" x2="22" y2="16" stroke={m.accent} strokeWidth="1.5" strokeLinecap="round" />
        </g>
      )}
      {m.icon === 'star' && (
        <g transform="translate(14, 16)" opacity="0.36">
          <polygon points="11,0 13.5,8 22,8 15.5,13 18,21 11,16 4,21 6.5,13 0,8 8.5,8"
            fill={m.accent} opacity="0.7">
            <animate attributeName="opacity" values="0.4;0.85;0.4" dur="3s" repeatCount="indefinite" />
          </polygon>
        </g>
      )}
      {m.icon === 'brief' && (
        <g transform="translate(12, 16)" opacity="0.35">
          <rect x="0" y="5" width="22" height="16" rx="2" fill="none" stroke={m.accent} strokeWidth="1.5" />
          <path d="M7 5 V3 Q7 0 11 0 Q15 0 15 3 V5"
            fill="none" stroke={m.accent} strokeWidth="1.5" strokeLinecap="round" />
          <line x1="0" y1="13" x2="22" y2="13" stroke={m.accent} strokeWidth="1" opacity="0.5" />
        </g>
      )}
    </svg>
  )
}

export default function Staffs() {
  const sectionRef = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)
  const [hovered, setHovered] = useState<number | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true) },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=Outfit:wght@200;300;400;500&display=swap');

        .st-sec {
          font-family: 'Outfit', sans-serif;
          background: #faf8f4;
          padding: 120px 48px 136px;
          position: relative; overflow: hidden;
        }
        .st-sec * { box-sizing: border-box; margin: 0; padding: 0; }

        .st-blob { position: absolute; border-radius: 50%; filter: blur(90px); pointer-events: none; z-index: 0; }
        .blob-a { width: 500px; height: 500px; background: rgba(196,158,84,0.07); top: -80px; left: -80px; }
        .blob-b { width: 380px; height: 380px; background: rgba(160,120,180,0.05); bottom: -50px; right: -60px; }

        .st-sec::before {
          content: ''; position: absolute; inset: 0;
          background-image:
            linear-gradient(rgba(196,158,84,0.045) 1px, transparent 1px),
            linear-gradient(90deg, rgba(196,158,84,0.045) 1px, transparent 1px);
          background-size: 56px 56px;
          pointer-events: none;
        }

        .st-inner { position: relative; z-index: 1; max-width: 1200px; margin: 0 auto; }

        .st-head {
          text-align: center; margin-bottom: 72px;
          opacity: 0; transform: translateY(24px);
          transition: opacity 0.9s ease, transform 0.9s ease;
        }
        .st-head.vis { opacity: 1; transform: translateY(0); }

        .st-eyebrow { display: inline-flex; align-items: center; gap: 14px; margin-bottom: 20px; }
        .e-dash { width: 28px; height: 1px; background: #c49e54; }
        .e-text { font-size: 10px; font-weight: 500; letter-spacing: 0.5em; text-transform: uppercase; color: #c49e54; }

        .st-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(44px, 6vw, 72px);
          font-weight: 300; color: #1c1712; line-height: 1; margin-bottom: 16px;
        }
        .st-title em { font-style: italic; color: #9a7a3a; }
        .st-sub { font-size: 14px; font-weight: 300; color: #9a8a6a; letter-spacing: 0.04em; }

        .st-grid {
          display: grid; grid-template-columns: repeat(4, 1fr); gap: 22px;
        }
        @media (max-width: 1024px) { .st-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 560px)  { .st-grid { grid-template-columns: 1fr; } }
        @media (max-width: 768px)  { .st-sec { padding: 80px 24px; } }

        .st-card {
          background: #fff;
          border: 1px solid rgba(196,158,84,0.12);
          border-radius: 2px; overflow: hidden; cursor: default;
          opacity: 0; transform: translateY(28px);
          transition: opacity 0.7s ease, transform 0.7s ease,
                      box-shadow 0.4s ease, border-color 0.4s ease;
        }
        .st-card.vis { opacity: 1; transform: translateY(0); }
        .st-card:hover {
          box-shadow: 0 28px 64px rgba(26,20,10,0.13), 0 6px 20px rgba(26,20,10,0.06);
          border-color: rgba(196,158,84,0.28);
        }

        .st-av-wrap { position: relative; height: 265px; overflow: hidden; }
        .st-av-inner {
          width: 100%; height: 100%;
          transition: transform 0.65s cubic-bezier(0.25,0.46,0.45,0.94);
        }
        .st-card:hover .st-av-inner { transform: scale(1.05) translateY(-5px); }

        .st-av-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(to bottom, transparent 55%, rgba(255,255,255,0.1) 100%);
          pointer-events: none;
        }

        .st-num {
          position: absolute; top: 14px; left: 14px;
          font-family: 'Cormorant Garamond', serif;
          font-size: 11px; font-weight: 400;
          color: rgba(28,23,18,0.7);
          background: rgba(255,255,255,0.72);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(196,158,84,0.22);
          padding: 3px 9px; letter-spacing: 0.12em;
          transition: background 0.3s;
        }
        .st-card:hover .st-num { background: rgba(255,255,255,0.92); }

        .st-role-pill {
          position: absolute; bottom: 14px; right: 14px;
          font-size: 9px; font-weight: 500;
          letter-spacing: 0.18em; text-transform: uppercase;
          color: #fff; padding: 5px 12px; border-radius: 100px;
          opacity: 0; transform: translateY(6px);
          transition: opacity 0.35s ease, transform 0.35s ease;
        }
        .st-card:hover .st-role-pill { opacity: 1; transform: translateY(0); }

        .st-bar { height: 3px; transition: opacity 0.4s ease; }

        .st-body { padding: 22px 22px 26px; position: relative; }

        .st-name {
          font-family: 'Cormorant Garamond', serif;
          font-size: 21px; font-weight: 400; color: #1c1712;
          line-height: 1.15; margin-bottom: 5px; transition: color 0.3s;
        }
        .st-role {
          font-size: 10px; font-weight: 500;
          letter-spacing: 0.2em; text-transform: uppercase; margin-bottom: 14px;
        }
        .st-div { height: 1px; width: 20px; margin-bottom: 12px; transition: width 0.4s ease; }
        .st-card:hover .st-div { width: 38px; }

        .st-quote {
          font-family: 'Cormorant Garamond', serif;
          font-style: italic; font-size: 13.5px; font-weight: 300;
          color: #7a6a50; line-height: 1.65;
          max-height: 0; overflow: hidden; opacity: 0;
          transition: max-height 0.5s ease, opacity 0.4s ease 0.08s;
        }
        .st-card:hover .st-quote { max-height: 80px; opacity: 1; }

        .st-lic {
          display: inline-block; margin-top: 10px;
          font-size: 10px; font-weight: 300; letter-spacing: 0.1em;
          color: #b0a080; border: 1px solid rgba(196,158,84,0.2);
          padding: 3px 10px; border-radius: 100px;
          opacity: 0; transition: opacity 0.4s ease 0.15s;
        }
        .st-card:hover .st-lic { opacity: 1; }

        .st-foot {
          margin-top: 64px; display: flex; align-items: center;
          justify-content: space-between; padding-top: 28px;
          border-top: 1px solid rgba(196,158,84,0.15);
          opacity: 0; transition: opacity 1s ease 0.9s; flex-wrap: wrap; gap: 12px;
        }
        .st-foot.vis { opacity: 1; }
        .st-foot-l { font-size: 12px; font-weight: 300; color: #b0a080; letter-spacing: 0.06em; }
        .st-foot-r { display: flex; align-items: center; gap: 8px; flex-wrap: wrap; }
        .st-dot { width: 6px; height: 6px; border-radius: 50%; background: #c49e54; opacity: 0.6; }
        .st-badge {
          font-size: 10px; font-weight: 400; letter-spacing: 0.15em; text-transform: uppercase;
          color: #9a7a3a; border: 1px solid rgba(196,158,84,0.25);
          padding: 4px 14px; border-radius: 100px; background: rgba(196,158,84,0.05);
        }
      `}</style>

      <section className="st-sec" ref={sectionRef}>
        <div className="st-blob blob-a" />
        <div className="st-blob blob-b" />

        <div className="st-inner">
          {/* Header */}
          <div className={`st-head ${visible ? 'vis' : ''}`}>
            <div className="st-eyebrow">
              <div className="e-dash" />
              <span className="e-text">Leadership</span>
              <div className="e-dash" />
            </div>
            <h2 className="st-title">Meet Our <em>Team</em></h2>
            <p className="st-sub">The educators and leaders behind every successful graduate</p>
          </div>

          {/* Grid */}
          <div className="st-grid">
            {staff.map((member, i) => (
              <div
                key={i}
                className={`st-card ${visible ? 'vis' : ''}`}
                style={{ transitionDelay: visible ? `${0.08 + i * 0.1}s` : '0s' }}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
              >
                <div className="st-av-wrap">
                  <div className="st-av-inner">
                    <AvatarSVG m={member} hovered={hovered === i} />
                  </div>
                  <div className="st-av-overlay" />
                  <div className="st-num">0{i + 1}</div>
                  <div className="st-role-pill" style={{ background: member.accent }}>
                    {member.title}
                  </div>
                </div>

                <div className="st-bar" style={{
                  background: `linear-gradient(to right, ${member.accent}, ${member.accent}44)`,
                  opacity: hovered === i ? 1 : 0.45,
                }} />

                <div className="st-body">
                  <h3 className="st-name" style={{ color: hovered === i ? member.accent : '#1c1712' }}>
                    {member.name}
                  </h3>
                  <p className="st-role" style={{ color: member.accent }}>{member.title}</p>
                  <div className="st-div" style={{ background: member.accent }} />
                  <p className="st-quote">"{member.quote}"</p>
                  {member.license && <span className="st-lic">{member.license}</span>}
                </div>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className={`st-foot ${visible ? 'vis' : ''}`}>
            <span className="st-foot-l">Cosmetology School of Jersey City — Licensed Educators & Staff</span>
            <div className="st-foot-r">
              <div className="st-dot" />
              <span className="st-badge">NJ State Licensed</span>
              <div className="st-dot" />
              <span className="st-badge">Professionally Certified</span>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}