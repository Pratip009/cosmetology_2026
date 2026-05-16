'use client';
import { useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle, AlertTriangle, BookOpen } from 'lucide-react';
import Requirements from '../components/licence/Requirements';
import Policy from '../components/licence/Policy';
import Timeframes from '../components/licence/Timeframes';

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
<Requirements/>
      <Policy/>
<Timeframes/>
     
      

     
      

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
