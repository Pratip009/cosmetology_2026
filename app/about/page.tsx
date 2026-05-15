'use client';
import { useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, Users, GraduationCap, CheckCircle } from 'lucide-react';

const objectives = [
  { num: '01', title: 'Licensure Preparation', desc: 'Learn all skills to pass NJ State Board exam and obtain professional licensure.' },
  { num: '02', title: 'Practical & Business Skills', desc: 'Develop skills to acquire employment in a professional, licensed salon environment.' },
  { num: '03', title: 'Speed & Professionalism', desc: 'Acquire speed, salesmanship, ethics, and professionalism required to excel.' },
  { num: '04', title: 'Employability Skills', desc: 'Resume writing, interview preparation, and personal portfolio development.' },
  { num: '05', title: 'Customer Relations', desc: 'Senior clinic builds customer service and salesmanship in a real salon environment.' },
  { num: '06', title: 'Career Development', desc: 'Job placement and career planning to every graduate at no charge.' },
];

const staff = [
  { name: 'Mahek Rizwan', title: 'Director & Owner' },
  { name: 'Kaif Rizwan', title: 'Administrator' },
  { name: 'Zeba Fatima', title: 'Co-Director' },
  { name: 'Adrian Carillo', title: 'Supervising Teacher', license: 'Lic. #32WB00255100' },
];

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

export default function AboutPage() {
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
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(121,100,77,0.2)_0%,transparent_60%)]" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
        <div className="max-w-7xl mx-auto relative z-10">
          <p className="text-gold/60 text-xs tracking-[0.4em] uppercase mb-4">Who We Are</p>
          <h1 className="font-display text-5xl md:text-7xl text-warm-white font-light leading-tight max-w-3xl mb-6">
            About Cosmetology School of Jersey City
          </h1>
          <p className="text-warm-white/50 font-light max-w-2xl leading-relaxed">
            CSJC is a New Jersey State Board of Cosmetology & Hairstyling approved school offering five professional 
            programs. Committed to building strong foundations and preparing students for real-world careers in beauty.
          </p>
        </div>
      </section>

      {/* Mission */}
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

      {/* Objectives */}
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

      {/* Staff */}
      <section className="py-28 px-6 bg-warm-white">
        <div className="max-w-7xl mx-auto">
          <div className="scroll-reveal opacity-0 translate-y-8 mb-16 text-center">
            <p className="text-gold/60 text-xs tracking-[0.4em] uppercase mb-4">Leadership</p>
            <h2 className="font-display text-4xl md:text-5xl text-charcoal font-light">Our Team</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {staff.map((member, i) => (
              <div key={i} className="scroll-reveal opacity-0 translate-y-8 card-hover bg-white border border-brand/10 p-8 text-center rounded-sm" style={{ transitionDelay: `${i * 80}ms` }}>
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-brand to-brand-light mx-auto mb-5 flex items-center justify-center">
                  <Users className="w-6 h-6 text-warm-white" />
                </div>
                <h3 className="font-display text-lg text-charcoal font-semibold mb-1">{member.name}</h3>
                <p className="text-brand/70 text-xs tracking-wide font-light mb-1">{member.title}</p>
                {member.license && (
                  <p className="text-charcoal/30 text-xs font-light">{member.license}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-brand relative overflow-hidden text-center">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,169,110,0.2)_0%,transparent_70%)]" />
        <div className="relative z-10 max-w-2xl mx-auto">
          <p className="font-display italic text-warm-white/80 text-3xl font-light mb-6">Ready to Begin?</p>
          <Link href="/programs" className="inline-flex items-center gap-2 bg-warm-white text-brand-dark px-8 py-4 text-sm tracking-[0.15em] uppercase font-medium hover:bg-gold-light transition-colors">
            View Programs <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
