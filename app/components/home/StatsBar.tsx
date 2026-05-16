'use client'

import { useEffect, useRef, useState } from 'react'

const stats = [
  { value: '5',     suffix: '',  label: 'Programs Offered',   sub: 'Cosmetology · Esthetics · Nails & more' },
  { value: '75',    suffix: '%', label: 'Min. Pass Score',     sub: 'NJ State Board standard' },
  { value: '1,200', suffix: '',  label: 'Training Hours',      sub: 'Hands-on clinical practice' },
  { value: 'NJ',    suffix: '',  label: 'State Board Approved', sub: 'Licensed & accredited' },
]

function useCountUp(target: string, duration = 1600, active: boolean) {
  const [display, setDisplay] = useState('0')
  useEffect(() => {
    if (!active) return
    const num = parseFloat(target.replace(/,/g, ''))
    if (isNaN(num)) { setDisplay(target); return }
    const start = performance.now()
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - p, 4)
      const val = Math.round(eased * num)
      setDisplay(val >= 1000 ? val.toLocaleString() : String(val))
      if (p < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [active, target, duration])
  return display
}

function StatCard({
  stat,
  index,
  active,
  isLast,
}: {
  stat: typeof stats[0]
  index: number
  active: boolean
  isLast: boolean
}) {
  const counted = useCountUp(stat.value, 1400 + index * 120, active)
  const [hovered, setHovered] = useState(false)

  return (
    <div
      className="relative flex flex-col items-center justify-center text-center group cursor-default select-none"
      style={{
        padding: '3rem 1.5rem',
        borderRight: isLast ? 'none' : '1px solid rgba(201,169,110,0.12)',
        transition: 'background 0.4s ease',
        background: hovered ? 'rgba(201,169,110,0.04)' : 'transparent',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Animated top accent line */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          height: '1px',
          background: 'rgba(201,169,110,0.7)',
          transition: 'width 0.5s cubic-bezier(0.22,1,0.36,1)',
          width: hovered ? '60%' : '0%',
        }}
      />

      {/* Index number — decorative */}
      <span
        style={{
          fontFamily: "'Montserrat', sans-serif",
          fontWeight: 200,
          fontSize: '9px',
          letterSpacing: '0.3em',
          color: 'rgba(201,169,110,0.3)',
          textTransform: 'uppercase',
          marginBottom: '1.2rem',
          display: 'block',
          opacity: active ? 1 : 0,
          transform: active ? 'translateY(0)' : 'translateY(8px)',
          transition: `opacity 0.7s ease ${index * 150 + 100}ms, transform 0.7s ease ${index * 150 + 100}ms`,
        }}
      >
        0{index + 1}
      </span>

      {/* Big number */}
      <div
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontWeight: 300,
          fontSize: 'clamp(2.8rem, 5vw, 4.5rem)',
          lineHeight: 1,
          color: '#fff8ee',
          letterSpacing: '-0.01em',
          display: 'flex',
          alignItems: 'flex-start',
          gap: '2px',
          opacity: active ? 1 : 0,
          transform: active ? 'translateY(0)' : 'translateY(16px)',
          transition: `opacity 0.8s ease ${index * 160}ms, transform 0.8s ease ${index * 160}ms`,
        }}
      >
        <span>{counted}</span>
        {stat.suffix && (
          <span
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontStyle: 'italic',
              fontSize: '55%',
              color: 'rgba(201,169,110,0.85)',
              marginTop: '0.3em',
            }}
          >
            {stat.suffix}
          </span>
        )}
      </div>

      {/* Gold divider */}
      <div
        style={{
          width: 24,
          height: '0.5px',
          background: 'rgba(201,169,110,0.45)',
          margin: '1rem auto 0.9rem',
          opacity: active ? 1 : 0,
          transition: `opacity 0.6s ease ${index * 160 + 200}ms`,
        }}
      />

      {/* Label */}
      <p
        style={{
          fontFamily: "'Montserrat', sans-serif",
          fontWeight: 300,
          fontSize: '9.5px',
          letterSpacing: '0.28em',
          color: 'rgba(255,245,220,0.85)',
          textTransform: 'uppercase',
          marginBottom: '0.45rem',
          opacity: active ? 1 : 0,
          transform: active ? 'translateY(0)' : 'translateY(8px)',
          transition: `opacity 0.7s ease ${index * 160 + 250}ms, transform 0.7s ease ${index * 160 + 250}ms`,
        }}
      >
        {stat.label}
      </p>

      {/* Sub-label */}
      <p
        style={{
          fontFamily: "'Montserrat', sans-serif",
          fontWeight: 200,
          fontSize: '8px',
          letterSpacing: '0.18em',
          color: 'rgba(201,169,110,0.4)',
          textTransform: 'uppercase',
          opacity: active ? 1 : 0,
          transition: `opacity 0.7s ease ${index * 160 + 380}ms`,
        }}
      >
        {stat.sub}
      </p>

      {/* Bottom accent — appears on hover */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          height: '1px',
          background: 'rgba(201,169,110,0.7)',
          transition: 'width 0.5s cubic-bezier(0.22,1,0.36,1)',
          width: hovered ? '60%' : '0%',
        }}
      />
    </div>
  )
}

export default function StatsBar() {
  const ref = useRef<HTMLElement>(null)
  const [active, setActive] = useState(false)

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setActive(true); obs.disconnect() } },
      { threshold: 0.25 }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section
      ref={ref}
      style={{
        position: 'relative',
        overflow: 'hidden',
        background: '#0a0806',
      }}
    >
      {/* Top gold border */}
      <div style={{ height: '0.5px', background: 'linear-gradient(to right, transparent, rgba(201,169,110,0.4), transparent)' }} />

      {/* Ambient glow */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          background: 'radial-gradient(ellipse 60% 100% at 50% 50%, rgba(201,169,110,0.04) 0%, transparent 70%)',
        }}
      />

      {/* Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          maxWidth: '80rem',
          margin: '0 auto',
          padding: '0 1.5rem',
        }}
        className="grid-cols-2 md:grid-cols-4"
      >
        {stats.map((stat, i) => (
          <StatCard
            key={i}
            stat={stat}
            index={i}
            active={active}
            isLast={i === stats.length - 1}
          />
        ))}
      </div>

      {/* Bottom gold border */}
      <div style={{ height: '0.5px', background: 'linear-gradient(to right, transparent, rgba(201,169,110,0.4), transparent)' }} />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;1,300&family=Montserrat:wght@200;300&display=swap');
        @media (max-width: 767px) {
          .stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  )
}