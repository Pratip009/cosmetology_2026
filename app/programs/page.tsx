'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Clock, ArrowRight, ChevronDown } from 'lucide-react';

const programs = [
  {
    num: '01', name: 'Cosmetology', hours: '1,200', junior: '600 hrs', senior: '600 hrs',
    theory: 351, practical: 849,
    desc: 'First 600 hrs: junior classroom and theory. Remaining 600 hrs: senior clinic on mannequins and live clients. Covers hair, nails, and skin services.',
    outline: [
      { topic: 'State Laws, Rules & Regulations / Shop Operations', theory: 10, practical: 0, total: 10 },
      { topic: 'Decontamination & Infection Control', theory: 15, practical: 5, total: 20 },
      { topic: 'Hair Cutting — Layering, Cap, Razor, Scissors & Thinning', theory: 40, practical: 120, total: 160 },
      { topic: 'Hair Styling (Pin-Curls, Finger-Waving & Blow-Waving)', theory: 25, practical: 135, total: 160 },
      { topic: 'Hair Tinting & Bleaching', theory: 35, practical: 110, total: 145 },
      { topic: 'Permanent Waving', theory: 25, practical: 90, total: 115 },
      { topic: 'Chemical Relaxing & Pressing', theory: 30, practical: 60, total: 90 },
      { topic: 'Manicuring & Pedicuring', theory: 45, practical: 90, total: 135 },
    ]
  },
  {
    num: '02', name: 'Barbering', hours: '900', junior: '450 hrs', senior: '450 hrs',
    theory: 244, practical: 657,
    desc: 'Milady method. First 450 hrs: junior classroom and mannequin. Remaining 450 hrs: senior clinic. Men\'s/women\'s cutting, shaving, chemical services, hair color.',
    outline: [
      { topic: 'Men\'s Hair Cutting & Styling', theory: 25, practical: 200, total: 225 },
      { topic: 'Shaving', theory: 20, practical: 105, total: 125 },
      { topic: 'Chemistry / Chemical Services / Straightening / Perm', theory: 75, practical: 135, total: 210 },
      { topic: 'Hair Color and Lightening', theory: 30, practical: 80, total: 110 },
      { topic: 'Women\'s Hair Cutting & Styling', theory: 15, practical: 55, total: 70 },
      { topic: 'Men\'s Hair Piece Services', theory: 15, practical: 40, total: 55 },
    ]
  },
  {
    num: '03', name: 'Nail Technology', hours: '300', junior: '150 hrs', senior: '150 hrs',
    theory: 120, practical: 180,
    desc: 'Manicuring, pedicuring, nail tips & extensions, nail wraps, nail gels, sculptured nails, nail art, hair removal. First 150 hrs: pre-clinical. Mock State Board Exam included.',
    outline: [
      { topic: 'Manicuring & Pedicuring', theory: 10, practical: 45, total: 55 },
      { topic: 'Sculptured Nails', theory: 10, practical: 30, total: 40 },
      { topic: 'Removal of Unwanted Hair', theory: 10, practical: 30, total: 40 },
      { topic: 'Decontamination & Infection Control', theory: 15, practical: 5, total: 20 },
      { topic: 'Nail Tips & Extensions', theory: 5, practical: 25, total: 30 },
      { topic: 'Nail Wraps', theory: 5, practical: 25, total: 30 },
    ]
  },
  {
    num: '04', name: 'Teacher Training', hours: '600', junior: '500 hrs min', senior: '+100 CSJC',
    theory: 200, practical: 400,
    desc: 'Prepares licensed cosmetologists to teach. NJ Board minimum is 500 hrs; CSJC extends to 600. Covers lesson planning, classroom management, examinations, clinic techniques.',
    outline: [
      { topic: 'Lesson Planning & Curriculum Development', theory: 60, practical: 80, total: 140 },
      { topic: 'Classroom Management', theory: 40, practical: 60, total: 100 },
      { topic: 'Examination Techniques', theory: 30, practical: 50, total: 80 },
      { topic: 'Clinic Supervision', theory: 20, practical: 100, total: 120 },
      { topic: 'Professional Development', theory: 30, practical: 60, total: 90 },
      { topic: 'Student Evaluation Methods', theory: 20, practical: 50, total: 70 },
    ]
  },
  {
    num: '05', name: 'Refresher', hours: '250', junior: '22 hrs eval', senior: '225 hrs practice',
    theory: 50, practical: 200,
    desc: 'For licensed professionals. 22 hrs of skill evaluation followed by 225 hrs of focused practice in identified areas of need. Full-service modern salon approach.',
    outline: [
      { topic: 'Skills Evaluation & Assessment', theory: 10, practical: 12, total: 22 },
      { topic: 'Technical Skills Refresher', theory: 15, practical: 75, total: 90 },
      { topic: 'Chemical Services Update', theory: 10, practical: 50, total: 60 },
      { topic: 'New Techniques & Trends', theory: 10, practical: 40, total: 50 },
      { topic: 'Safety & Sanitation', theory: 5, practical: 23, total: 28 },
    ]
  },
];

const grading = [
  { range: '93–100', grade: 'Excellent' },
  { range: '85–92', grade: 'Very Good' },
  { range: '75–84', grade: 'Satisfactory' },
  { range: '74 and Below', grade: 'Unsatisfactory' },
];

export default function ProgramsPage() {
  const [expanded, setExpanded] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('animate-fadeUp');
          e.target.classList.remove('opacity-0', 'translate-y-8');
        }
      }),
      { threshold: 0.1 }
    );
    document.querySelectorAll('.scroll-reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Hero */}
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

      {/* Choose Your Path */}
      <section className="py-20 px-6 bg-brand-pale/30">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-display text-4xl text-charcoal font-semibold mb-4">Choose Your Path</h2>
          </div>
          <div>
            <p className="text-charcoal/60 font-light leading-relaxed">
              Each program is divided into junior pre-clinical classroom instruction and senior clinic learning experiences. 
              Students practice on mannequins and live clients. Both full-time (30 hrs/wk) and part-time (16 hrs/wk) schedules available.
            </p>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="py-20 px-6 bg-warm-white">
        <div className="max-w-7xl mx-auto space-y-6">
          {programs.map((prog, i) => (
            <div key={i} className="scroll-reveal opacity-0 translate-y-8 border border-brand/10 bg-white rounded-sm overflow-hidden" style={{ transitionDelay: `${i * 50}ms` }}>
              <div
                className="flex items-center justify-between p-8 cursor-pointer hover:bg-brand-pale/20 transition-colors group"
                onClick={() => setExpanded(expanded === i ? null : i)}
              >
                <div className="flex items-start gap-6">
                  <span className="font-display text-4xl text-gold/30 font-light">{prog.num}</span>
                  <div>
                    <h3 className="font-display text-2xl text-charcoal font-semibold mb-1 group-hover:text-brand transition-colors">{prog.name}</h3>
                    <div className="flex items-center gap-4 flex-wrap">
                      <span className="flex items-center gap-1.5 text-gold/70 text-xs tracking-wider">
                        <Clock className="w-3 h-3" />{prog.hours} Hours
                      </span>
                      <span className="text-charcoal/30 text-xs">·</span>
                      <span className="text-charcoal/50 text-xs">{prog.junior}</span>
                      <span className="text-charcoal/30 text-xs">·</span>
                      <span className="text-charcoal/50 text-xs">{prog.senior}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="hidden md:flex gap-4 text-center">
                    <div>
                      <p className="font-display text-xl text-brand font-light">{prog.theory}</p>
                      <p className="text-charcoal/40 text-xs">Theory Hrs</p>
                    </div>
                    <div className="w-px bg-brand/10" />
                    <div>
                      <p className="font-display text-xl text-brand font-light">{prog.practical}</p>
                      <p className="text-charcoal/40 text-xs">Practical Hrs</p>
                    </div>
                  </div>
                  <ChevronDown className={`w-5 h-5 text-brand/50 transition-transform duration-300 ${expanded === i ? 'rotate-180' : ''}`} />
                </div>
              </div>

              {expanded === i && (
                <div className="border-t border-brand/10 px-8 pb-8">
                  <p className="text-charcoal/60 font-light text-sm leading-relaxed py-6 max-w-3xl">{prog.desc}</p>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-brand/10">
                          <th className="text-left py-3 pr-6 text-charcoal/40 text-xs tracking-wider uppercase font-normal">Topic</th>
                          <th className="text-right py-3 px-4 text-charcoal/40 text-xs tracking-wider uppercase font-normal">Theory</th>
                          <th className="text-right py-3 px-4 text-charcoal/40 text-xs tracking-wider uppercase font-normal">Practical</th>
                          <th className="text-right py-3 pl-4 text-charcoal/40 text-xs tracking-wider uppercase font-normal">Total</th>
                        </tr>
                      </thead>
                      <tbody>
                        {prog.outline.map((row, j) => (
                          <tr key={j} className="border-b border-brand/5 hover:bg-brand-pale/20 transition-colors">
                            <td className="py-3 pr-6 text-charcoal/70 font-light">{row.topic}</td>
                            <td className="py-3 px-4 text-right text-charcoal/50">{row.theory}</td>
                            <td className="py-3 px-4 text-right text-charcoal/50">{row.practical}</td>
                            <td className="py-3 pl-4 text-right font-medium text-brand">{row.total}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Grading Scale */}
      <section className="py-24 px-6 bg-charcoal">
        <div className="max-w-3xl mx-auto scroll-reveal opacity-0 translate-y-8">
          <div className="text-center mb-12">
            <p className="text-gold/60 text-xs tracking-[0.4em] uppercase mb-4">Standards</p>
            <h2 className="font-display text-4xl text-warm-white font-light">Grading Scale</h2>
            <p className="text-warm-white/40 text-sm font-light mt-2">Applies to all programs</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {grading.map((g, i) => (
              <div key={i} className={`glass-warm p-6 text-center rounded-sm ${i === grading.length - 1 ? 'opacity-60' : ''}`}>
                <p className="font-display text-gold text-xl font-light mb-1">{g.range}</p>
                <p className="text-warm-white/60 text-xs tracking-wider font-light">{g.grade}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-brand text-center">
        <div className="max-w-xl mx-auto">
          <p className="font-display italic text-warm-white/80 text-3xl font-light mb-6">Ready to Enroll?</p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-warm-white text-brand-dark px-8 py-4 text-sm tracking-[0.15em] uppercase font-medium hover:bg-gold-light transition-colors">
            Contact Us <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
