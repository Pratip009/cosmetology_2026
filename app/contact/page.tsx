'use client';
import { useEffect, useState } from 'react';
import { Phone, MapPin, Globe, CheckCircle, GraduationCap, FileText, Briefcase, AtSign } from 'lucide-react';

const contactDetails = [
  { icon: Phone, label: 'Phone', value: '(201) 451-1599', href: 'tel:2014511599' },
  { icon: Globe, label: 'Website', value: 'www.csjcnj.com', href: 'https://www.csjcnj.com' },
  { icon: AtSign, label: 'Instagram', value: '@cosmetologyschoolofjerseycity', href: 'https://instagram.com/cosmetologyschoolofjerseycity' },
  { icon: MapPin, label: 'Location', value: 'Jersey City, New Jersey', href: null },
];

const enrollmentReqs = [
  'High School Diploma or Equivalent',
  'Minimum Age: 17 (Cosmetology, Barbering, Nails) · 18 (Teacher Training)',
  'Social Security Card',
  'NJ Physician Statement (free of communicable disease)',
  'Attestation of no child support arrears',
];

const careerServices = [
  { icon: Briefcase, title: 'Job Placement', desc: 'Job placement assistance and career planning — no charge to graduates.' },
  { icon: FileText, title: 'Resume Prep', desc: 'Resume preparation assistance and interview preparation coaching.' },
  { icon: GraduationCap, title: 'Portfolio Dev', desc: 'Personal portfolio development and ongoing career support throughout your career.' },
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', program: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <section className="pt-36 pb-24 px-6 bg-charcoal relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_center,rgba(121,100,77,0.2)_0%,transparent_60%)]" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
        <div className="max-w-7xl mx-auto relative z-10">
          <p className="text-gold/60 text-xs tracking-[0.4em] uppercase mb-4">Get In Touch</p>
          <h1 className="font-display text-5xl md:text-7xl text-warm-white font-light mb-6">Contact Us</h1>
          <p className="text-warm-white/50 font-light max-w-2xl leading-relaxed">
            Ready to start your career in beauty? Get in touch to learn about enrollment, programs, and upcoming start dates.
          </p>
        </div>
      </section>

      <section className="py-24 px-6 bg-warm-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="scroll-reveal opacity-0 translate-y-8">
            <p className="text-gold/60 text-xs tracking-[0.4em] uppercase mb-8">Reach Us</p>
            <div className="space-y-6 mb-12">
              {contactDetails.map(({ icon: Icon, label, value, href }, i) => (
                <div key={i} className="flex items-center gap-5 group">
                  <div className="w-10 h-10 rounded-full border border-gold/20 flex items-center justify-center flex-shrink-0 group-hover:border-gold/50 transition-colors">
                    <Icon className="w-4 h-4 text-gold/70" />
                  </div>
                  <div>
                    <p className="text-charcoal/30 text-xs tracking-wider uppercase font-light mb-0.5">{label}</p>
                    {href ? (
                      <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer"
                        className="text-charcoal/80 text-sm hover:text-brand transition-colors hover-underline">
                        {value}
                      </a>
                    ) : (
                      <span className="text-charcoal/80 text-sm">{value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-brand-pale p-6 rounded-sm border border-brand/10">
              <h4 className="font-display text-charcoal font-semibold mb-3">NJ State Board — Complaints</h4>
              <p className="text-charcoal/60 text-sm font-light mb-3 leading-relaxed">
                NJ Board of Cosmetology & Hairstyling<br />
                P.O. Box 45003, Newark, NJ 07101<br />
                Phone: (973) 504-6400
              </p>
              <p className="text-charcoal/40 text-xs italic font-light leading-relaxed">
                Students must exhaust the institution's internal complaint process before submitting to the NJ State Board.
              </p>
            </div>
          </div>

          <div className="scroll-reveal opacity-0 translate-y-8">
            {submitted ? (
              <div className="bg-white border border-gold/20 p-12 rounded-sm text-center h-full flex flex-col items-center justify-center gap-6">
                <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center animate-pulse-glow">
                  <CheckCircle className="w-7 h-7 text-gold" />
                </div>
                <div>
                  <h3 className="font-display text-2xl text-charcoal font-semibold mb-2">Message Sent!</h3>
                  <p className="text-charcoal/50 text-sm font-light">We'll be in touch with you shortly.</p>
                </div>
              </div>
            ) : (
              <div className="bg-white border border-brand/10 p-8 rounded-sm">
                <h2 className="font-display text-2xl text-charcoal font-semibold mb-6">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-5">
                  {[
                    { name: 'name', label: 'Full Name', type: 'text', required: true },
                    { name: 'email', label: 'Email Address', type: 'email', required: true },
                    { name: 'phone', label: 'Phone Number', type: 'tel', required: false },
                  ].map(({ name, label, type, required }) => (
                    <div key={name}>
                      <label className="text-charcoal/50 text-xs tracking-[0.2em] uppercase font-light block mb-2">{label}</label>
                      <input
                        type={type}
                        required={required}
                        value={form[name as keyof typeof form]}
                        onChange={e => setForm({ ...form, [name]: e.target.value })}
                        className="w-full border border-brand/10 px-4 py-3 text-sm text-charcoal placeholder-charcoal/30 focus:outline-none focus:border-gold/50 transition-colors rounded-sm bg-warm-white font-light"
                        placeholder={label}
                      />
                    </div>
                  ))}
                  <div>
                    <label className="text-charcoal/50 text-xs tracking-[0.2em] uppercase font-light block mb-2">Program of Interest</label>
                    <select
                      value={form.program}
                      onChange={e => setForm({ ...form, program: e.target.value })}
                      className="w-full border border-brand/10 px-4 py-3 text-sm text-charcoal focus:outline-none focus:border-gold/50 transition-colors rounded-sm bg-warm-white font-light"
                    >
                      <option value="">Select a program</option>
                      {['Cosmetology', 'Barbering', 'Nail Technology', 'Teacher Training', 'Refresher'].map(p => (
                        <option key={p}>{p}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="text-charcoal/50 text-xs tracking-[0.2em] uppercase font-light block mb-2">Message</label>
                    <textarea
                      rows={4}
                      value={form.message}
                      onChange={e => setForm({ ...form, message: e.target.value })}
                      className="w-full border border-brand/10 px-4 py-3 text-sm text-charcoal placeholder-charcoal/30 focus:outline-none focus:border-gold/50 transition-colors rounded-sm bg-warm-white font-light resize-none"
                      placeholder="Your message..."
                    />
                  </div>
                  <button type="submit" className="btn-primary w-full text-center cursor-pointer">
                    <span>Send Message</span>
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-charcoal">
        <div className="max-w-7xl mx-auto">
          <div className="scroll-reveal opacity-0 translate-y-8 mb-12 text-center">
            <p className="text-gold/60 text-xs tracking-[0.4em] uppercase mb-4">Graduate Support</p>
            <h2 className="font-display text-4xl text-warm-white font-light">Career Placement Services</h2>
            <p className="text-warm-white/40 text-sm font-light mt-2">No charge — upon graduation and throughout your career</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {careerServices.map(({ icon: Icon, title, desc }, i) => (
              <div key={i} className="scroll-reveal opacity-0 translate-y-8 glass-warm p-8 rounded-sm card-hover" style={{ transitionDelay: `${i * 80}ms` }}>
                <Icon className="w-5 h-5 text-gold mb-5" />
                <h3 className="font-display text-lg text-warm-white font-semibold mb-3">{title}</h3>
                <p className="text-warm-white/50 text-sm font-light leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-warm-white">
        <div className="max-w-4xl mx-auto text-center scroll-reveal opacity-0 translate-y-8">
          <p className="text-gold/60 text-xs tracking-[0.4em] uppercase mb-6">Getting Started</p>
          <h2 className="font-display text-4xl text-charcoal font-light mb-8">Enrollment Requirements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
            {enrollmentReqs.map((req, i) => (
              <div key={i} className="flex items-start gap-3 bg-white border border-brand/10 p-5 rounded-sm">
                <CheckCircle className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                <span className="text-charcoal/70 text-sm font-light leading-relaxed">{req}</span>
              </div>
            ))}
          </div>
          <a href="tel:2014511599" className="btn-primary inline-block mt-10">
            <span>Call (201) 451-1599</span>
          </a>
        </div>
      </section>

      <section className="py-20 px-6 bg-gradient-to-r from-brand-dark via-brand to-brand-dark relative overflow-hidden text-center">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,169,110,0.2)_0%,transparent_70%)]" />
        <div className="relative z-10 max-w-2xl mx-auto">
          <p className="font-display italic text-gold-light text-3xl md:text-4xl font-light mb-3">Start Your Future Today!</p>
          <p className="text-warm-white/60 font-light mb-6 text-sm">Five NJ State Board-approved programs. No charge for job placement services to graduates.</p>
          <p className="text-warm-white/40 text-sm tracking-wider">www.csjcnj.com</p>
        </div>
      </section>
    </>
  );
}
