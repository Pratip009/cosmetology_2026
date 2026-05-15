'use client';
import { useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, DollarSign, Clock, AlertCircle } from 'lucide-react';

const programs = [
  { name: 'Cosmetology', hours: 1200, fullTime: '40 Weeks', partTime: '75 Weeks', reg: '$150', kit: '$1,200', tuition: '$14,500' },
  { name: 'Barbering', hours: 900, fullTime: '30 Weeks', partTime: '56 Weeks', reg: '$150', kit: '$900', tuition: '$11,000' },
  { name: 'Nail Technology', hours: 300, fullTime: '10 Weeks', partTime: '19 Weeks', reg: '$100', kit: '$400', tuition: '$4,500' },
  { name: 'Teacher Training', hours: 600, fullTime: '22 Weeks', partTime: '41 Weeks', reg: '$150', kit: '$500', tuition: '$7,500' },
  { name: 'Refresher', hours: 250, fullTime: '9 Weeks', partTime: '17 Weeks', reg: '$100', kit: '$250', tuition: '$3,500' },
];

export default function TuitionPage() {
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
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(121,100,77,0.2)_0%,transparent_60%)]" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
        <div className="max-w-7xl mx-auto relative z-10">
          <p className="text-gold/60 text-xs tracking-[0.4em] uppercase mb-4">Investment</p>
          <h1 className="font-display text-5xl md:text-7xl text-warm-white font-light mb-6">Tuition & Fees</h1>
          <p className="text-warm-white/50 font-light max-w-2xl leading-relaxed">
            Transparent pricing for all five programs. Contact us for information on payment plans and financial assistance options.
          </p>
        </div>
      </section>

      {/* Tuition Table */}
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

      {/* Fees Info */}
      <section className="py-24 px-6 bg-charcoal">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: DollarSign, title: 'Registration Fee', desc: 'Non-refundable registration fee due at enrollment. Covers administrative processing and enrollment documentation.' },
            { icon: Clock, title: 'Flexible Payment', desc: 'Payment plans available. Contact the school to discuss options that work for your financial situation.' },
            { icon: AlertCircle, title: 'Additional Costs', desc: 'Kit fees cover required tools and supplies. Some programs may have additional material costs. Ask us for details.' },
          ].map(({ icon: Icon, title, desc }, i) => (
            <div key={i} className="scroll-reveal opacity-0 translate-y-8 glass-warm p-8 rounded-sm" style={{ transitionDelay: `${i * 80}ms` }}>
              <Icon className="w-5 h-5 text-gold mb-5" />
              <h3 className="font-display text-lg text-warm-white font-semibold mb-3">{title}</h3>
              <p className="text-warm-white/50 text-sm font-light leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 px-6 bg-brand text-center">
        <div className="max-w-xl mx-auto">
          <p className="font-display italic text-warm-white/80 text-3xl font-light mb-6">Have Questions?</p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-warm-white text-brand-dark px-8 py-4 text-sm tracking-[0.15em] uppercase font-medium hover:bg-gold-light transition-colors">
            Contact Us <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
