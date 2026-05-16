import React from 'react'
import { ArrowRight, CheckCircle, AlertTriangle, BookOpen } from 'lucide-react';


const evaluationPeriods = [
  { program: 'Cosmetology', points: '450, 900, 1200 scheduled hours' },
  { program: 'Barbering', points: '450, 900 scheduled hours' },
  { program: 'Nail Technology', points: '150, 300 scheduled hours' },
  { program: 'Refresher', points: '125, 250 scheduled hours' },
  { program: 'Teacher Training', points: '300, 600 scheduled hours' },
];
const Policy = () => {
  return (
    <section className="py-24 px-6 bg-charcoal relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(121,100,77,0.12)_0%,transparent_60%)]" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="scroll-reveal opacity-0 translate-y-8 mb-16">
            <p className="text-gold/60 text-xs tracking-[0.4em] uppercase mb-4">Academic Standards</p>
            <h2 className="font-display text-4xl text-warm-white font-light mb-4">Satisfactory Academic Progress (SAP)</h2>
            <p className="text-warm-white/50 font-light max-w-2xl leading-relaxed">
              Applied consistently per NACCAS guidelines and US Department of Education federal regulations. Students receive printed SAP reports at each evaluation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {[
              { icon: BookOpen, title: 'Academic', desc: 'Minimum 75% cumulative GPA. Written and practical exams weighted equally.' },
              { icon: CheckCircle, title: 'Attendance', desc: 'Minimum 70% cumulative attendance of scheduled hours. 14 consecutive absent days = termination.' },
              { icon: AlertTriangle, title: 'Warning & Probation', desc: 'Fail at evaluation → Warning. Still failing after warning → Probation. Financial assistance maintained during both.' },
            ].map(({ icon: Icon, title, desc }, i) => (
              <div key={i} className="scroll-reveal opacity-0 translate-y-8 glass-warm p-8 rounded-sm" style={{ transitionDelay: `${i * 80}ms` }}>
                <Icon className="w-5 h-5 text-gold mb-5" />
                <h3 className="font-display text-lg text-warm-white font-semibold mb-3">{title}</h3>
                <p className="text-warm-white/50 text-sm font-light leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          {/* Evaluation Periods */}
          <div className="scroll-reveal opacity-0 translate-y-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="glass-warm p-8 rounded-sm">
              <h3 className="font-display text-lg text-warm-white font-semibold mb-6">Evaluation Periods</h3>
              <div className="space-y-3">
                {evaluationPeriods.map((ep, i) => (
                  <div key={i} className="flex items-center justify-between py-2 border-b border-white/5">
                    <span className="text-warm-white/70 text-sm">{ep.program}</span>
                    <span className="text-gold/70 text-xs font-light">{ep.points}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-warm p-8 rounded-sm">
              <h3 className="font-display text-lg text-warm-white font-semibold mb-6">Appeals Process</h3>
              <div className="space-y-4 text-warm-white/50 text-sm font-light leading-relaxed">
                <p>Students may appeal within 10 calendar days of a SAP determination.</p>
                <p>Grounds: death of a relative, injury or illness, or other special circumstance.</p>
                <p>Written appeal required on designated form with supporting documentation.</p>
                <p>Decision returned within 30 calendar days. Appeal documents kept in student file.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Policy
