import React from 'react'

const AboutHero = () => {
  return (
     <section className="pt-36 pb-24 px-6 bg-charcoal relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(121,100,77,0.2)_0%,transparent_60%)]" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
        <div className="max-w-7xl mx-auto relative z-10">
          <p className="text-gold/60 text-xs tracking-[0.4em] uppercase mb-4">Who We Are</p>
          <h1 className="font-display text-5xl md:text-7xl text-warm-white font-light leading-tight max-w-3xl mb-6">
            About Cosmetology School of Jersey City
          </h1>
          <p className="text-warm-white/50 font-light max-w-2xl leading-relaxed">
            CSJC is a New Jersey State Board of Cosmetology & Hairstyling approved school offering five professional 
            programs. Committed to building strong foundations and preparing students for real-world careers in beauty.
          </p>
        </div>
      </section>
  )
}

export default AboutHero
