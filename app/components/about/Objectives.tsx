import React from 'react'


const objectives = [
  { num: '01', title: 'Licensure Preparation', desc: 'Learn all skills to pass NJ State Board exam and obtain professional licensure.' },
  { num: '02', title: 'Practical & Business Skills', desc: 'Develop skills to acquire employment in a professional, licensed salon environment.' },
  { num: '03', title: 'Speed & Professionalism', desc: 'Acquire speed, salesmanship, ethics, and professionalism required to excel.' },
  { num: '04', title: 'Employability Skills', desc: 'Resume writing, interview preparation, and personal portfolio development.' },
  { num: '05', title: 'Customer Relations', desc: 'Senior clinic builds customer service and salesmanship in a real salon environment.' },
  { num: '06', title: 'Career Development', desc: 'Job placement and career planning to every graduate at no charge.' },
];
const Objectives = () => {
  return (
    <section className="py-28 px-6 bg-charcoal relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(121,100,77,0.12)_0%,transparent_60%)]" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="scroll-reveal opacity-0 translate-y-8 mb-16 text-center">
            <p className="text-gold/60 text-xs tracking-[0.4em] uppercase mb-4">What We Aim For</p>
            <h2 className="font-display text-4xl md:text-5xl text-warm-white font-light">Program Objectives</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {objectives.map((obj, i) => (
              <div key={i} className="scroll-reveal opacity-0 translate-y-8 glass-warm p-8 card-hover rounded-sm relative overflow-hidden group" style={{ transitionDelay: `${i * 60}ms` }}>
                <span className="absolute top-4 right-6 font-display text-5xl text-gold/10 font-light group-hover:text-gold/20 transition-colors">{obj.num}</span>
                <p className="text-gold/60 text-xs tracking-[0.3em] uppercase mb-3">{obj.num}</p>
                <h3 className="font-display text-lg text-warm-white font-semibold mb-3">{obj.title}</h3>
                <p className="text-warm-white/50 text-sm font-light leading-relaxed">{obj.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
  )
}

export default Objectives
