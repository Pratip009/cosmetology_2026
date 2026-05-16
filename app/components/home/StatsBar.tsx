import React from 'react'
const stats = [
  { value: '5', label: 'Programs Offered' },
  { value: '75%', label: 'Minimum Pass Score' },
  { value: '1,200', label: 'Max Training Hours' },
  { value: 'NJ', label: 'State Board Approved' },
];
const StatsBar = () => {
  return (
    <section className="bg-brand-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand to-brand-dark opacity-60" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-0">
          {stats.map((stat, i) => (
            <div key={i} className={`text-center px-6 py-8 ${i < stats.length - 1 ? 'border-r border-gold/10' : ''}`}>
              <p className="font-display text-4xl md:text-5xl text-gold font-light mb-2">{stat.value}</p>
              <p className="text-warm-white/50 text-xs tracking-[0.2em] uppercase font-light">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>
  )
}

export default StatsBar
