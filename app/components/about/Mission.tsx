import { CheckCircle } from 'lucide-react'
import React from 'react'


const methods = [
  'Classroom lectures and demonstrations',
  'Mannequin and live client practical experience',
  'Audio visual aids and guest artists',
  'Field trips and extracurricular activities',
  'Goal-oriented assignments',
  'Periodic written and practical examinations',
];

const accreditation = [
  'NJ State Board of Cosmetology & Hairstyling',
  'SAP Policy follows NACCAS guidelines',
  'Compliance with N.J.A.C. 13:28 regulations',
  'All courses taught in English',
];
const Mission = () => {
  return (
    <section className="py-28 px-6 bg-warm-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            <div className="scroll-reveal opacity-0 translate-y-8">
              <p className="text-gold/60 text-xs tracking-[0.4em] uppercase mb-6">Mission</p>
              <h2 className="font-display text-4xl md:text-5xl text-charcoal font-light mb-8">
                Preparing Students for Real Careers
              </h2>
              <blockquote className="border-l-2 border-gold pl-6 mb-8">
                <p className="font-display italic text-charcoal/70 text-xl font-light leading-relaxed">
                  "Our curriculum builds a strong foundation before students move on to clinical learning — 
                  focusing on skills that make graduates marketable and prepared for their career."
                </p>
              </blockquote>
              <div className="space-y-5 text-charcoal/60 text-sm font-light leading-relaxed">
                <p>CSJC provides hands-on instruction in the art, science, and business of professional beauty care. A full-service approach mirroring today's salon environment is used across all programs.</p>
                <p>Each program is divided into two phases: junior pre-clinical classroom instruction and senior clinic learning experiences. Students practice on mannequins and live clients under supervision of licensed educators.</p>
                <p>Audio visual aids and guest artists supplement regular instruction. Students may participate in field trips and extracurricular activities to aid learning.</p>
              </div>
            </div>

            <div className="scroll-reveal opacity-0 translate-y-8 space-y-6">
              {/* Instructional Methods */}
              <div className="bg-white border border-brand/10 p-8 rounded-sm">
                <h3 className="font-display text-xl text-charcoal font-semibold mb-6">Instructional Methods</h3>
                <div className="space-y-3">
                  {methods.map((m, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                      <span className="text-charcoal/60 text-sm font-light">{m}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Accreditation */}
              <div className="bg-brand-dark p-8 rounded-sm">
                <h3 className="font-display text-xl text-warm-white font-semibold mb-6">Accreditation & Approval</h3>
                <div className="space-y-3">
                  {accreditation.map((a, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-gold mt-2 flex-shrink-0" />
                      <span className="text-warm-white/60 text-sm font-light">{a}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Mission
