import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const AboutCTA = () => {
  return (
    <section className="py-20 px-6 bg-brand relative overflow-hidden text-center">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,169,110,0.2)_0%,transparent_70%)]" />
        <div className="relative z-10 max-w-2xl mx-auto">
          <p className="font-display italic text-warm-white/80 text-3xl font-light mb-6">
            Ready to Begin?
          </p>
          <Link
            href="/programs"
            className="inline-flex items-center gap-2 bg-warm-white text-brand-dark px-8 py-4 text-sm tracking-[0.15em] uppercase font-medium hover:bg-gold-light transition-colors"
          >
            View Programs <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
  )
}

export default AboutCTA
