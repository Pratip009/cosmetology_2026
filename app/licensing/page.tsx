'use client';
import { useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle, AlertTriangle, BookOpen } from 'lucide-react';

const requirements = [
  'High School Diploma or Equivalent required',
  'Minimum Age: 17 (Cosmetology, Barbering, Nails) · 18 (Teacher Training)',
  'Social Security Card',
  'NJ Physician Statement (free of communicable disease)',
  'Attestation of no child support arrears',
  '30 clock hours in Methods of Teaching (Teacher Training only)',
  'Pass examination conducted by the NJ State Board',
];

const evaluationPeriods = [
  { program: 'Cosmetology', points: '450, 900, 1200 scheduled hours' },
  { program: 'Barbering', points: '450, 900 scheduled hours' },
  { program: 'Nail Technology', points: '150, 300 scheduled hours' },
  { program: 'Refresher', points: '125, 250 scheduled hours' },
  { program: 'Teacher Training', points: '300, 600 scheduled hours' },
];

const maxTimeframes = [
  { program: 'Cosmetology', schedule: 'Full-Time', hrs: 30, normal: '40 Weeks', max: '52 Weeks' },
  { program: 'Cosmetology', schedule: 'Part-Time', hrs: 16, normal: '75 Weeks', max: '98 Weeks' },
  { program: 'Barbering', schedule: 'Full-Time', hrs: 30, normal: '30 Weeks', max: '40 Weeks' },
  { program: 'Barbering', schedule: 'Part-Time', hrs: 16, normal: '56 Weeks', max: '73 Weeks' },
  { program: 'Teacher Training', schedule: 'Full-Time', hrs: 30, normal: '22 Weeks', max: '28.6 Weeks' },
  { program: 'Teacher Training', schedule: 'Part-Time', hrs: 16, normal: '41 Weeks', max: '53.6 Weeks' },
  { program: 'Refresher', schedule: 'Full-Time', hrs: 30, normal: '9 Weeks', max: '11.9 Weeks' },
];

export default function LicensingPage() {
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
      <section className="pt-36 pb-24 px-6 bg-charcoal relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(121,100,77,0.15)_0%,transparent_60%)]" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
        <div className="max-w-7xl mx-auto relative z-10">
          <p className="text-gold/60 text-xs tracking-[0.4em] uppercase mb-4">Compliance & Standards</p>
          <h1 className="font-display text-5xl md:text-7xl text-warm-white font-light mb-6">Licensing & Policies</h1>
          <p className="text-warm-white/50 font-light max-w-2xl leading-relaxed">
            All programs follow NJ State Board regulations under N.J.A.C. 13:28. NACCAS-compliant Satisfactory Academic Progress policy.
          </p>
        </div>
      </section>

      {/* Licensing Requirements */}
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

      {/* SAP Policy */}
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

      {/* Max Timeframes */}
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

      <section className="py-20 px-6 bg-brand text-center">
        <div className="max-w-xl mx-auto">
          <p className="font-display italic text-warm-white/80 text-3xl font-light mb-6">Questions About Policies?</p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-warm-white text-brand-dark px-8 py-4 text-sm tracking-[0.15em] uppercase font-medium hover:bg-gold-light transition-colors">
            Contact Us <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
