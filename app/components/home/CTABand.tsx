import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const CTABand = () => {
  return (
    <section className="relative py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand to-brand-dark" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,169,110,0.2)_0%,transparent_70%)]" />

        <div className="relative z-10 text-center max-w-3xl mx-auto">
          <p className="font-display italic text-gold-light text-3xl md:text-4xl font-light mb-4">
            Start Your Future Today!
          </p>
          <p className="text-warm-white/70 font-light mb-8 leading-relaxed">
            Join one of Jersey City's premier cosmetology schools. NJ State
            Board approved. Five programs with full-time and part-time
            schedules.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-warm-white text-brand-dark px-8 py-4 text-sm tracking-[0.15em] uppercase font-medium hover:bg-gold-light transition-colors duration-300"
          >
            Get In Touch
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
  )
}

export default CTABand
