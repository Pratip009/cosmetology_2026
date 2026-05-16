import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'

const HeroSection = () => {
    const videoRef = useRef<HTMLVideoElement>(null);
      const [loaded, setLoaded] = useState(false);

      useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);
    
  return (
   <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-charcoal">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover opacity-40"
            poster="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1920&q=80"
          >
            <source
              src="https://www.w3schools.com/howto/rain.mp4"
              type="video/mp4"
            />
          </video>
          {/* Gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal/70 via-charcoal/40 to-charcoal/90" />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/60 via-transparent to-charcoal/60" />
        </div>

        {/* Decorative ring */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full border border-gold/5 animate-spin-slow pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-brand/10 animate-spin-slow pointer-events-none" style={{ animationDirection: 'reverse', animationDuration: '30s' }} />

        {/* Content */}
        <div className={`relative z-10 text-center px-6 max-w-5xl mx-auto transition-all duration-1000 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-gold/80 text-xs tracking-[0.4em] uppercase mb-6 font-light">
            Jersey City, New Jersey
          </p>

          <h1 className="font-display text-warm-white leading-[0.9] mb-4">
            <span className="block text-[clamp(3.5rem,10vw,8rem)] font-light tracking-tight">COSMETOLOGY</span>
            <span className="block text-[clamp(3.5rem,10vw,8rem)] font-light tracking-tight">SCHOOL</span>
          </h1>
          
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-12 bg-gold/40" />
            <p className="font-display italic text-gold text-2xl font-light tracking-wide">of Jersey City</p>
            <div className="h-px w-12 bg-gold/40" />
          </div>

          <p className="font-display italic text-warm-white/60 text-xl mb-2 font-light">Build Your Career</p>
          <p className="text-warm-white/40 text-sm tracking-widest font-light mb-12">
            Hands-on training · Real experience · Real opportunities
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/programs" className="btn-primary inline-block">
              <span>View Programs</span>
            </Link>
            <Link href="/tuition" className="btn-outline inline-block">
              Tuition Info
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-float">
          <div className="w-px h-12 bg-gradient-to-b from-gold/60 to-transparent" />
          <p className="text-gold/40 text-[10px] tracking-[0.3em] uppercase">Scroll</p>
        </div>
      </section>
  )
}

export default HeroSection
