'use client';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Award, Clock, BookOpen, CheckCircle } from 'lucide-react';

const stats = [
  { value: '5', label: 'Programs Offered' },
  { value: '75%', label: 'Minimum Pass Score' },
  { value: '1,200', label: 'Max Training Hours' },
  { value: 'NJ', label: 'State Board Approved' },
];

const programs = [
  { num: '01', name: 'Cosmetology', hours: '1,200', desc: 'Art, science, and business of professional beauty care — hair, nails, and skin in a full-service salon environment.' },
  { num: '02', name: 'Barbering', hours: '900', desc: 'Comprehensive barbering using the Milady method — cutting, shaving, chemical services, and hair color.' },
  { num: '03', name: 'Nail Technology', hours: '300', desc: 'Manicuring, pedicuring, nail tips, wraps, gels, sculptured nails, nail art, and hair removal.' },
  { num: '04', name: 'Teacher Training', hours: '600', desc: 'Prepares licensed cosmetologists to teach. CSJC exceeds the NJ minimum by 100 additional hours.' },
  { num: '05', name: 'Refresher', hours: '250', desc: 'For licensed professionals looking to sharpen existing skills or learn new techniques.' },
];

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fadeUp');
            entry.target.classList.remove('opacity-0', 'translate-y-8');
          }
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll('.scroll-reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-charcoal">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover opacity-40"
            poster="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1920&q=80"
          >
            <source
              src="https://www.w3schools.com/howto/rain.mp4"
              type="video/mp4"
            />
          </video>
          {/* Gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal/70 via-charcoal/40 to-charcoal/90" />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/60 via-transparent to-charcoal/60" />
        </div>

        {/* Decorative ring */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full border border-gold/5 animate-spin-slow pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-brand/10 animate-spin-slow pointer-events-none" style={{ animationDirection: 'reverse', animationDuration: '30s' }} />

        {/* Content */}
        <div className={`relative z-10 text-center px-6 max-w-5xl mx-auto transition-all duration-1000 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-gold/80 text-xs tracking-[0.4em] uppercase mb-6 font-light">
            Jersey City, New Jersey
          </p>

          <h1 className="font-display text-warm-white leading-[0.9] mb-4">
            <span className="block text-[clamp(3.5rem,10vw,8rem)] font-light tracking-tight">COSMETOLOGY</span>
            <span className="block text-[clamp(3.5rem,10vw,8rem)] font-light tracking-tight">SCHOOL</span>
          </h1>
          
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-12 bg-gold/40" />
            <p className="font-display italic text-gold text-2xl font-light tracking-wide">of Jersey City</p>
            <div className="h-px w-12 bg-gold/40" />
          </div>

          <p className="font-display italic text-warm-white/60 text-xl mb-2 font-light">Build Your Career</p>
          <p className="text-warm-white/40 text-sm tracking-widest font-light mb-12">
            Hands-on training · Real experience · Real opportunities
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/programs" className="btn-primary inline-block">
              <span>View Programs</span>
            </Link>
            <Link href="/tuition" className="btn-outline inline-block">
              Tuition Info
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-float">
          <div className="w-px h-12 bg-gradient-to-b from-gold/60 to-transparent" />
          <p className="text-gold/40 text-[10px] tracking-[0.3em] uppercase">Scroll</p>
        </div>
      </section>

      {/* STATS BAR */}
      <section className="bg-brand-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand to-brand-dark opacity-60" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-0">
          {stats.map((stat, i) => (
            <div key={i} className={`text-center px-6 py-8 ${i < stats.length - 1 ? 'border-r border-gold/10' : ''}`}>
              <p className="font-display text-4xl md:text-5xl text-gold font-light mb-2">{stat.value}</p>
              <p className="text-warm-white/50 text-xs tracking-[0.2em] uppercase font-light">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PROGRAMS */}
      <section className="py-32 px-6 bg-warm-white relative">
        <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-gold/5 blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto">
          <div className="scroll-reveal opacity-0 translate-y-8 mb-20 text-center">
            <p className="text-gold/60 text-xs tracking-[0.4em] uppercase mb-4">Explore</p>
            <h2 className="font-display text-5xl md:text-6xl text-charcoal font-light mb-4">Our Programs</h2>
            <p className="text-charcoal/50 text-sm max-w-lg mx-auto font-light leading-relaxed">
              All programs comply with N.J.A.C. 13:28 regulations. Full-time (30 hrs/wk) and part-time (16 hrs/wk) schedules available.
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
                  <span className="font-display text-6xl text-brand font-light">{prog.num}</span>
                </div>
                
                <div className="relative z-10">
                  <span className="text-gold/60 text-xs tracking-[0.3em] uppercase font-light mb-3 block">{prog.num}</span>
                  <h3 className="font-display text-2xl text-charcoal font-semibold mb-1 group-hover:text-brand transition-colors">{prog.name}</h3>
                  <div className="flex items-center gap-2 mb-4">
                    <Clock className="w-3 h-3 text-gold/60" />
                    <span className="text-gold/70 text-xs tracking-wider">{prog.hours} Hours</span>
                  </div>
                  <p className="text-charcoal/50 text-sm font-light leading-relaxed">{prog.desc}</p>
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

      {/* WHY CSJC */}
      <section className="py-32 px-6 bg-charcoal relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(121,100,77,0.15)_0%,transparent_70%)]" />
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="scroll-reveal opacity-0 translate-y-8">
              <p className="text-gold/60 text-xs tracking-[0.4em] uppercase mb-6">Why Choose Us</p>
              <h2 className="font-display text-5xl md:text-6xl text-warm-white font-light leading-tight mb-8">
                Preparing Students<br />
                <span className="text-gradient">for Real Careers</span>
              </h2>
              <p className="text-warm-white/50 font-light leading-relaxed mb-8">
                Our curriculum builds a strong foundation before students move on to clinical learning — 
                focusing on skills that make graduates marketable and prepared for their career.
              </p>
              <div className="flex flex-col gap-4">
                {[
                  'Hands-on mannequin and live client experience',
                  'Audio visual aids and guest artists',
                  'Job placement services at no charge',
                  'Career planning throughout your career',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                    <span className="text-warm-white/60 text-sm font-light">{item}</span>
                  </div>
                ))}
              </div>
              <Link href="/about" className="btn-primary inline-block mt-10">
                <span>Learn About Us</span>
              </Link>
            </div>

            {/* Feature cards */}
            <div className="scroll-reveal opacity-0 translate-y-8 grid grid-cols-2 gap-4">
              {[
                { icon: BookOpen, title: 'Two-Phase Learning', sub: 'Junior pre-clinical + Senior clinic' },
                { icon: Award, title: 'NJ Approved', sub: 'N.J.A.C. 13:28 compliant' },
                { icon: CheckCircle, title: '75% Min Score', sub: 'Rigorous academic standards' },
                { icon: Clock, title: 'Flexible Schedules', sub: 'Full-time & part-time options' },
              ].map(({ icon: Icon, title, sub }, i) => (
                <div key={i} className="glass-warm p-6 rounded-sm card-hover">
                  <Icon className="w-5 h-5 text-gold mb-4" />
                  <h4 className="text-warm-white text-sm font-medium mb-1">{title}</h4>
                  <p className="text-warm-white/40 text-xs font-light leading-relaxed">{sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA BAND */}
      <section className="relative py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand to-brand-dark" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,169,110,0.2)_0%,transparent_70%)]" />
        
        <div className="relative z-10 text-center max-w-3xl mx-auto">
          <p className="font-display italic text-gold-light text-3xl md:text-4xl font-light mb-4">
            Start Your Future Today!
          </p>
          <p className="text-warm-white/70 font-light mb-8 leading-relaxed">
            Join one of Jersey City's premier cosmetology schools. NJ State Board approved. 
            Five programs with full-time and part-time schedules.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-warm-white text-brand-dark px-8 py-4 text-sm tracking-[0.15em] uppercase font-medium hover:bg-gold-light transition-colors duration-300">
            Get In Touch
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
