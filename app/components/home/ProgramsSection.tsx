import { ArrowRight, Clock } from 'lucide-react';
import Link from 'next/link';
import React from 'react'
const programs = [
  {
    num: "01",
    name: "Cosmetology",
    hours: "1,200",
    desc: "Art, science, and business of professional beauty care — hair, nails, and skin in a full-service salon environment.",
  },
  {
    num: "02",
    name: "Barbering",
    hours: "900",
    desc: "Comprehensive barbering using the Milady method — cutting, shaving, chemical services, and hair color.",
  },
  {
    num: "03",
    name: "Nail Technology",
    hours: "300",
    desc: "Manicuring, pedicuring, nail tips, wraps, gels, sculptured nails, nail art, and hair removal.",
  },
  {
    num: "04",
    name: "Teacher Training",
    hours: "600",
    desc: "Prepares licensed cosmetologists to teach. CSJC exceeds the NJ minimum by 100 additional hours.",
  },
  {
    num: "05",
    name: "Refresher",
    hours: "250",
    desc: "For licensed professionals looking to sharpen existing skills or learn new techniques.",
  },
];
const ProgramsSection = () => {
  return (
   <section className="py-32 px-6 bg-warm-white relative">
        <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-gold/5 blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto">
          <div className="scroll-reveal opacity-0 translate-y-8 mb-20 text-center">
            <p className="text-gold/60 text-xs tracking-[0.4em] uppercase mb-4">
              Explore
            </p>
            <h2 className="font-display text-5xl md:text-6xl text-charcoal font-light mb-4">
              Our Programs
            </h2>
            <p className="text-charcoal/50 text-sm max-w-lg mx-auto font-light leading-relaxed">
              All programs comply with N.J.A.C. 13:28 regulations. Full-time (30
              hrs/wk) and part-time (16 hrs/wk) schedules available.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {programs.map((prog, i) => (
              <Link
                href="/programs"
                key={i}
                className={`scroll-reveal opacity-0 translate-y-8 card-hover group block p-8 border border-brand/10 hover:border-gold/40 bg-white rounded-sm relative overflow-hidden transition-all duration-500`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="absolute top-0 left-0 w-1 h-0 bg-gradient-to-b from-gold to-brand-light group-hover:h-full transition-all duration-500" />
                <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                  <span className="font-display text-6xl text-brand font-light">
                    {prog.num}
                  </span>
                </div>

                <div className="relative z-10">
                  <span className="text-gold/60 text-xs tracking-[0.3em] uppercase font-light mb-3 block">
                    {prog.num}
                  </span>
                  <h3 className="font-display text-2xl text-charcoal font-semibold mb-1 group-hover:text-brand transition-colors">
                    {prog.name}
                  </h3>
                  <div className="flex items-center gap-2 mb-4">
                    <Clock className="w-3 h-3 text-gold/60" />
                    <span className="text-gold/70 text-xs tracking-wider">
                      {prog.hours} Hours
                    </span>
                  </div>
                  <p className="text-charcoal/50 text-sm font-light leading-relaxed">
                    {prog.desc}
                  </p>
                  <div className="mt-6 flex items-center gap-2 text-brand text-xs tracking-wider uppercase">
                    <span>Learn More</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
  )
}

export default ProgramsSection
