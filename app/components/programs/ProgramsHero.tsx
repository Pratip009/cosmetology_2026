import React from 'react'

const ProgramsHero = () => {
  return (
    <section className="pt-36 pb-24 px-6 bg-charcoal relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(121,100,77,0.2)_0%,transparent_60%)]" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
        <div className="max-w-7xl mx-auto relative z-10">
          <p className="text-gold/60 text-xs tracking-[0.4em] uppercase mb-4">Programs Offered</p>
          <h1 className="font-display text-5xl md:text-7xl text-warm-white font-light mb-6">
            Five NJ State-Approved Programs
          </h1>
          <p className="text-warm-white/50 font-light max-w-2xl leading-relaxed">
            All programs comply with N.J.A.C. 13:28 regulations. Minimum 75% required on all exams. Taught in English.
          </p>
        </div>
      </section>
  )
}

export default ProgramsHero
