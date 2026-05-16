import React from 'react'
import { ArrowRight, DollarSign, Clock, AlertCircle } from 'lucide-react';
const Fees = () => {
  return (
    <section className="py-24 px-6 bg-charcoal">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: DollarSign, title: 'Registration Fee', desc: 'Non-refundable registration fee due at enrollment. Covers administrative processing and enrollment documentation.' },
            { icon: Clock, title: 'Flexible Payment', desc: 'Payment plans available. Contact the school to discuss options that work for your financial situation.' },
            { icon: AlertCircle, title: 'Additional Costs', desc: 'Kit fees cover required tools and supplies. Some programs may have additional material costs. Ask us for details.' },
          ].map(({ icon: Icon, title, desc }, i) => (
            <div key={i} className="scroll-reveal opacity-0 translate-y-8 glass-warm p-8 rounded-sm" style={{ transitionDelay: `${i * 80}ms` }}>
              <Icon className="w-5 h-5 text-gold mb-5" />
              <h3 className="font-display text-lg text-warm-white font-semibold mb-3">{title}</h3>
              <p className="text-warm-white/50 text-sm font-light leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>
  )
}

export default Fees
