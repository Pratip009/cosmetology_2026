'use client'

import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [ready, setReady] = useState(false)
  const [mouse, setMouse] = useState({ x: 0.5, y: 0.5 })
  const [isMobile, setIsMobile] = useState(false)
  const [isTablet, setIsTablet] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setReady(true), 100)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    const check = () => {
      setIsMobile(window.innerWidth < 640)
      setIsTablet(window.innerWidth >= 640 && window.innerWidth < 1024)
    }
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  useEffect(() => {
    if (isMobile) return
    const onMove = (e: MouseEvent) =>
      setMouse({ x: e.clientX / window.innerWidth, y: e.clientY / window.innerHeight })
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [isMobile])

  const px = isMobile ? 0 : (mouse.x - 0.5) * 22
  const py = isMobile ? 0 : (mouse.y - 0.5) * 12

  const stagger = (i: number): React.CSSProperties =>
    ready
      ? {
          opacity: 1,
          transform: 'translateY(0)',
          transition: `opacity 1s ease ${i * 140}ms, transform 1s ease ${i * 140}ms`,
        }
      : { opacity: 0, transform: 'translateY(20px)' }

  const eyebrowLineWidth = isMobile ? 24 : isTablet ? 36 : 48
  const ornamentMaxWidth = isMobile ? '90vw' : isTablet ? '380px' : '440px'
  const ctaFlex = isMobile ? 'column' : 'row'
  const ctaPadding = isMobile ? '16px 0' : '15px 40px'
  const ctaWidth = isMobile ? '220px' : 'auto'

  return (
    <section
      className="relative w-full overflow-hidden bg-[#080604]"
      style={{ height: '100svh', minHeight: '100vh' }}
    >
      {/* ── Video — visible & vivid ── */}
      <div
        className="absolute inset-[-5%]"
        style={{
          transform: `translate(${px}px, ${py}px)`,
          transition: 'transform 0.9s cubic-bezier(0.25,0.46,0.45,0.94)',
        }}
      >
        <video
          ref={videoRef}
          autoPlay muted loop playsInline
          poster="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1920&q=80"
          className="w-full h-full object-cover"
          style={{ filter: 'brightness(0.72) saturate(1.1) contrast(1.05)' }}
        >
          <source src="https://images.glamsquad.com/client/www/hero-video-mobile.mp4" type="video/mp4" />
        </video>
      </div>

      {/* ── Single focused overlay — dark only where text lives ── */}
      {/* Thin top bar + thin bottom bar keep edges dark, center stays open */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: [
            'linear-gradient(to bottom,  rgba(4,2,1,0.72) 0%,   rgba(4,2,1,0) 18%)',
            'linear-gradient(to top,     rgba(4,2,1,0.72) 0%,   rgba(4,2,1,0) 18%)',
            /* Central text backdrop — soft ellipse so video shows around it */
            'radial-gradient(ellipse 68% 55% at 50% 50%, rgba(4,2,1,0.54) 0%, rgba(4,2,1,0) 100%)',
          ].join(', '),
        }}
      />

      {/* ── Scanline texture ── */}
      <div
        className="absolute inset-0 pointer-events-none z-10"
        style={{
          backgroundImage:
            'repeating-linear-gradient(to bottom, transparent, transparent 3px, rgba(201,169,110,0.012) 3px, rgba(201,169,110,0.012) 4px)',
        }}
      />

      {/* ── Corner brackets — tablet/desktop only ── */}
      {!isMobile && (
        <>
          {(
            [
              ['top-5 left-5 lg:top-7 lg:left-7', 'border-t border-l'],
              ['top-5 right-5 lg:top-7 lg:right-7', 'border-t border-r'],
              ['bottom-5 left-5 lg:bottom-7 lg:left-7', 'border-b border-l'],
              ['bottom-5 right-5 lg:bottom-7 lg:right-7', 'border-b border-r'],
            ] as const
          ).map(([pos, borders], i) => (
            <div
              key={i}
              className={`absolute w-5 h-5 lg:w-7 lg:h-7 z-20 ${pos} ${borders}`}
              style={{ borderColor: 'rgba(201,169,110,0.5)', ...stagger(8 + i) }}
            />
          ))}
        </>
      )}

     

      {/* ── Central content ── */}
      <div
        className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center"
        style={{ padding: isMobile ? '0 1.5rem' : '0 2rem' }}
      >
        {/* Eyebrow */}
        <div
          className="flex items-center mb-6 sm:mb-8 lg:mb-10"
          style={{ gap: isMobile ? 10 : 16, ...stagger(0) }}
        >
          <div style={{ width: eyebrowLineWidth, height: '0.5px', background: 'rgba(220,190,130,0.7)', flexShrink: 0 }} />
          <span
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 300,
              fontSize: isMobile ? '8px' : '9px',
              letterSpacing: isMobile ? '0.2em' : '0.35em',
              color: 'rgba(230,205,155,0.95)',
              textTransform: 'uppercase',
              whiteSpace: 'nowrap',
              textShadow: '0 1px 16px rgba(0,0,0,0.9)',
            }}
          >
            Est. Fine Cosmetology
          </span>
          <div style={{ width: eyebrowLineWidth, height: '0.5px', background: 'rgba(220,190,130,0.7)', flexShrink: 0 }} />
        </div>

        {/* Headline */}
        <h1
          className="leading-none mb-0"
          style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}
        >
          <span
            className="block"
            style={{
              ...stagger(1),
              fontSize: 'clamp(2.8rem, 10vw, 8rem)',
              letterSpacing: isMobile ? '0.1em' : '0.18em',
              color: '#ffffff',
              textShadow: '0 2px 32px rgba(0,0,0,0.85), 0 0 80px rgba(0,0,0,0.5)',
            }}
          >
            COSMETOLOGY
          </span>
          <span
            className="block italic"
            style={{
              ...stagger(2),
              fontSize: 'clamp(2.8rem, 10vw, 8rem)',
              letterSpacing: isMobile ? '0.1em' : '0.18em',
              color: 'transparent',
              WebkitTextStroke: isMobile ? '1.2px rgba(220,185,105,1)' : '1px rgba(220,185,105,1)',
              lineHeight: 0.9,
              filter: 'drop-shadow(0 2px 12px rgba(0,0,0,0.9))',
            }}
          >
            SCHOOL
          </span>
        </h1>

        {/* Ornament */}
        <div
          className="flex items-center w-full"
          style={{
            gap: isMobile ? 10 : 18,
            margin: isMobile ? '1.1rem 0 1rem' : '1.5rem 0 1.4rem',
            maxWidth: ornamentMaxWidth,
            ...stagger(3),
          }}
        >
          <div className="flex-1" style={{ height: '0.5px', background: 'rgba(220,190,130,0.6)' }} />
          <span
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontStyle: 'italic',
              fontWeight: 300,
              fontSize: isMobile ? '1rem' : '1.15rem',
              color: 'rgba(230,205,155,1)',
              letterSpacing: isMobile ? '0.08em' : '0.14em',
              whiteSpace: 'nowrap',
              textShadow: '0 1px 16px rgba(0,0,0,0.85)',
            }}
          >
            of Jersey City
          </span>
          <div className="flex-1" style={{ height: '0.5px', background: 'rgba(220,190,130,0.6)' }} />
        </div>

        {/* Tagline */}
        <p
          style={{
            ...stagger(4),
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: 300,
            fontSize: isMobile ? '8.5px' : '9.5px',
            letterSpacing: isMobile ? '0.15em' : '0.25em',
            color: 'rgba(255,245,220,0.85)',
            textTransform: 'uppercase',
            marginBottom: isMobile ? '2rem' : '3rem',
            maxWidth: isMobile ? '290px' : 'none',
            lineHeight: isMobile ? 2 : 1,
            textShadow: '0 1px 16px rgba(0,0,0,0.9)',
          }}
        >
          {isMobile
            ? <>Hands-on training<br />Real experience · Real opportunities</>
            : 'Hands-on training\u00A0·\u00A0Real experience\u00A0·\u00A0Real opportunities'}
        </p>

        {/* CTAs */}
        <div
          style={{
            display: 'flex',
            flexDirection: ctaFlex as 'column' | 'row',
            gap: isMobile ? 10 : 14,
            alignItems: 'center',
            width: isMobile ? '100%' : 'auto',
            maxWidth: isMobile ? '260px' : 'none',
            ...stagger(5),
          }}
        >
          <Link
            href="/programs"
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 500,
              fontSize: '10px',
              letterSpacing: '0.28em',
              textTransform: 'uppercase',
              color: '#0a0604',
              background: 'rgba(215,180,105,1)',
              padding: ctaPadding,
              textDecoration: 'none',
              display: 'block',
              width: ctaWidth,
              textAlign: 'center',
              transition: 'background 0.3s, letter-spacing 0.3s',
            }}
            onMouseEnter={e => {
              const el = e.currentTarget as HTMLElement
              el.style.background = 'rgba(235,200,125,1)'
              el.style.letterSpacing = '0.35em'
            }}
            onMouseLeave={e => {
              const el = e.currentTarget as HTMLElement
              el.style.background = 'rgba(215,180,105,1)'
              el.style.letterSpacing = '0.28em'
            }}
          >
            View Programs
          </Link>
          <Link
            href="/tuition"
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 300,
              fontSize: '10px',
              letterSpacing: '0.28em',
              textTransform: 'uppercase',
              color: 'rgba(230,205,155,1)',
              border: '1px solid rgba(215,180,105,0.75)',
              padding: ctaPadding,
              textDecoration: 'none',
              display: 'block',
              width: ctaWidth,
              textAlign: 'center',
              transition: 'border-color 0.3s, background 0.3s, letter-spacing 0.3s',
            }}
            onMouseEnter={e => {
              const el = e.currentTarget as HTMLElement
              el.style.borderColor = 'rgba(215,180,105,1)'
              el.style.background = 'rgba(215,180,105,0.15)'
              el.style.letterSpacing = '0.35em'
            }}
            onMouseLeave={e => {
              const el = e.currentTarget as HTMLElement
              el.style.borderColor = 'rgba(215,180,105,0.75)'
              el.style.background = 'transparent'
              el.style.letterSpacing = '0.28em'
            }}
          >
            Tuition Info
          </Link>
        </div>
      </div>

      {/* ── Scroll indicator ── */}
      <div
        className="scroll-hint absolute bottom-5 sm:bottom-7 left-1/2 z-20 flex flex-col items-center gap-2"
        style={{
          transform: 'translateX(-50%)',
          opacity: ready ? 1 : 0,
          transition: 'opacity 1s ease 1.8s',
        }}
      >
        <span
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: 300,
            fontSize: '8px',
            letterSpacing: '0.38em',
            color: 'rgba(220,190,130,0.8)',
            textTransform: 'uppercase',
            textShadow: '0 1px 8px rgba(0,0,0,0.8)',
          }}
        >
          Scroll
        </span>
        <div
          style={{
            width: '1px',
            height: isMobile ? 28 : 40,
            background: 'linear-gradient(to bottom, rgba(215,180,105,0.8), transparent)',
            animation: 'scrollpulse 2s ease-in-out 2s infinite',
          }}
        />
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;1,300&family=Montserrat:wght@300;400;500&display=swap');
        @keyframes scrollpulse {
          0%, 100% { opacity: 0.6; transform: scaleY(1); }
          50% { opacity: 1; transform: scaleY(1.2); }
        }
        @media (max-height: 600px) { .scroll-hint { display: none; } }
      `}</style>
    </section>
  )
}