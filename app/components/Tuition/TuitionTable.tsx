import React from 'react'
const programs = [
  { name: 'Cosmetology', hours: 1200, fullTime: '40 Weeks', partTime: '75 Weeks', reg: '$150', kit: '$1,200', tuition: '$14,500' },
  { name: 'Barbering', hours: 900, fullTime: '30 Weeks', partTime: '56 Weeks', reg: '$150', kit: '$900', tuition: '$11,000' },
  { name: 'Nail Technology', hours: 300, fullTime: '10 Weeks', partTime: '19 Weeks', reg: '$100', kit: '$400', tuition: '$4,500' },
  { name: 'Teacher Training', hours: 600, fullTime: '22 Weeks', partTime: '41 Weeks', reg: '$150', kit: '$500', tuition: '$7,500' },
  { name: 'Refresher', hours: 250, fullTime: '9 Weeks', partTime: '17 Weeks', reg: '$100', kit: '$250', tuition: '$3,500' },
];
const TuitionTable = () => {
  return (
   <section className="py-24 px-6 bg-warm-white">
        <div className="max-w-7xl mx-auto">
          <div className="scroll-reveal opacity-0 translate-y-8 overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-brand/10">
                  <th className="text-left py-5 pr-6 text-charcoal/40 text-xs tracking-[0.2em] uppercase font-normal">Program</th>
                  <th className="text-center py-5 px-4 text-charcoal/40 text-xs tracking-[0.2em] uppercase font-normal">Hours</th>
                  <th className="text-center py-5 px-4 text-charcoal/40 text-xs tracking-[0.2em] uppercase font-normal">Full-Time</th>
                  <th className="text-center py-5 px-4 text-charcoal/40 text-xs tracking-[0.2em] uppercase font-normal">Part-Time</th>
                  <th className="text-right py-5 px-4 text-charcoal/40 text-xs tracking-[0.2em] uppercase font-normal">Registration</th>
                  <th className="text-right py-5 px-4 text-charcoal/40 text-xs tracking-[0.2em] uppercase font-normal">Kit</th>
                  <th className="text-right py-5 pl-4 text-charcoal/40 text-xs tracking-[0.2em] uppercase font-normal">Tuition</th>
                </tr>
              </thead>
              <tbody>
                {programs.map((p, i) => (
                  <tr key={i} className="border-b border-brand/5 hover:bg-brand-pale/20 transition-colors group">
                    <td className="py-6 pr-6">
                      <span className="font-display text-lg text-charcoal font-semibold group-hover:text-brand transition-colors">{p.name}</span>
                    </td>
                    <td className="py-6 px-4 text-center text-charcoal/50 text-sm">{p.hours.toLocaleString()}</td>
                    <td className="py-6 px-4 text-center text-charcoal/50 text-sm">{p.fullTime}</td>
                    <td className="py-6 px-4 text-center text-charcoal/50 text-sm">{p.partTime}</td>
                    <td className="py-6 px-4 text-right text-charcoal/50 text-sm">{p.reg}</td>
                    <td className="py-6 px-4 text-right text-charcoal/50 text-sm">{p.kit}</td>
                    <td className="py-6 pl-4 text-right font-display text-xl text-brand font-light">{p.tuition}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-charcoal/30 text-xs font-light mt-6 italic">
            * Tuition figures shown are approximate. Contact us for exact current pricing.
          </p>
        </div>
      </section>
  )
}

export default TuitionTable
