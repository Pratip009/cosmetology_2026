import { ArrowRight, Link } from 'lucide-react'
import React from 'react'

const ProgramCTA = () => {
  return (
      <section className="py-20 px-6 bg-brand text-center">
        <div className="max-w-xl mx-auto">
          <p className="font-display italic text-warm-white/80 text-3xl font-light mb-6">
            Ready to Enroll?
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-warm-white text-brand-dark px-8 py-4 text-sm tracking-[0.15em] uppercase font-medium hover:bg-gold-light transition-colors"
          >
            Contact Us <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
  )
}

export default ProgramCTA
