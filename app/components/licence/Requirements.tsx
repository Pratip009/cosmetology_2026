import { CheckCircle } from 'lucide-react';
import React from 'react'


const requirements = [
  'High School Diploma or Equivalent required',
  'Minimum Age: 17 (Cosmetology, Barbering, Nails) · 18 (Teacher Training)',
  'Social Security Card',
  'NJ Physician Statement (free of communicable disease)',
  'Attestation of no child support arrears',
  '30 clock hours in Methods of Teaching (Teacher Training only)',
  'Pass examination conducted by the NJ State Board',
];
const Requirements = () => {
  return (
   
      <section className="py-24 px-6 bg-warm-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="scroll-reveal opacity-0 translate-y-8">
            <p className="text-gold/60 text-xs tracking-[0.4em] uppercase mb-6">Requirements</p>
            <h2 className="font-display text-4xl text-charcoal font-light mb-8">Licensing Requirements</h2>
            <div className="space-y-4">
              {requirements.map((req, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                  <span className="text-charcoal/60 text-sm font-light leading-relaxed">{req}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="scroll-reveal opacity-0 translate-y-8 space-y-6">
            {/* Student Work Permit */}
            <div className="bg-white border border-brand/10 p-8 rounded-sm">
              <h3 className="font-display text-xl text-charcoal font-semibold mb-4">Student Work Permit</h3>
              <p className="text-charcoal/50 text-xs tracking-wider mb-5 font-light">Per NJ Statutes 45:5B-25</p>
              <div className="space-y-3">
                {[
                  'Valid only during enrollment in an approved cosmetology program',
                  'Expires automatically upon graduation or withdrawal',
                  'Physician\'s signature required — valid 90 days only',
                  'Failure to submit paperwork = no client work allowed',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-gold mt-2 flex-shrink-0" />
                    <span className="text-charcoal/60 text-sm font-light">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Temporary Work Permit */}
            <div className="bg-brand-dark p-8 rounded-sm">
              <h3 className="font-display text-xl text-warm-white font-semibold mb-4">Temporary Work Permit</h3>
              <p className="text-warm-white/50 text-sm font-light mb-4 leading-relaxed">
                Issued to graduates who have registered for regularly scheduled monthly exams and completed their program.
              </p>
              <p className="text-warm-white/40 text-sm font-light leading-relaxed">
                Allows graduates to work in a salon until sitting for their licensing exam. Written exam must be passed before students are eligible for the practical section.
              </p>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Requirements
