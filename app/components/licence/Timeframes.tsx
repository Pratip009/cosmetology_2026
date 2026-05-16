import React from 'react'


const maxTimeframes = [
  { program: 'Cosmetology', schedule: 'Full-Time', hrs: 30, normal: '40 Weeks', max: '52 Weeks' },
  { program: 'Cosmetology', schedule: 'Part-Time', hrs: 16, normal: '75 Weeks', max: '98 Weeks' },
  { program: 'Barbering', schedule: 'Full-Time', hrs: 30, normal: '30 Weeks', max: '40 Weeks' },
  { program: 'Barbering', schedule: 'Part-Time', hrs: 16, normal: '56 Weeks', max: '73 Weeks' },
  { program: 'Teacher Training', schedule: 'Full-Time', hrs: 30, normal: '22 Weeks', max: '28.6 Weeks' },
  { program: 'Teacher Training', schedule: 'Part-Time', hrs: 16, normal: '41 Weeks', max: '53.6 Weeks' },
  { program: 'Refresher', schedule: 'Full-Time', hrs: 30, normal: '9 Weeks', max: '11.9 Weeks' },
];
const Timeframes = () => {
  return (
    <section className="py-24 px-6 bg-warm-white">
        <div className="max-w-7xl mx-auto">
          <div className="scroll-reveal opacity-0 translate-y-8 mb-12">
            <p className="text-gold/60 text-xs tracking-[0.4em] uppercase mb-4">Completion Windows</p>
            <h2 className="font-display text-4xl text-charcoal font-light">Maximum Time Frames</h2>
            <p className="text-charcoal/50 text-sm font-light mt-2">143% of course length</p>
          </div>
          <div className="scroll-reveal opacity-0 translate-y-8 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-brand/10">
                  {['Program', 'Schedule', 'Hrs/Week', 'Normal Time', 'Maximum Time'].map(h => (
                    <th key={h} className="text-left py-4 pr-6 text-charcoal/40 text-xs tracking-[0.2em] uppercase font-normal">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {maxTimeframes.map((row, i) => (
                  <tr key={i} className="border-b border-brand/5 hover:bg-brand-pale/20 transition-colors">
                    <td className="py-4 pr-6 text-charcoal/70">{row.program}</td>
                    <td className="py-4 pr-6 text-charcoal/50">{row.schedule}</td>
                    <td className="py-4 pr-6 text-charcoal/50">{row.hrs}</td>
                    <td className="py-4 pr-6 text-brand font-medium">{row.normal}</td>
                    <td className="py-4 pr-6 text-charcoal/50">{row.max}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
  )
}

export default Timeframes
