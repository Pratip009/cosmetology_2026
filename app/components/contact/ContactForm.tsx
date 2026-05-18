import { useState, useEffect, useRef, ReactNode, RefObject } from "react";

// ─── TYPES ────────────────────────────────────────────────────────────────────

interface ContactDetail { icon: string; label: string; value: string; href: string; }
interface Social { id: string; label: string; handle: string; href: string; color: string; icon: ReactNode; }
interface CareerService { title: string; desc: string; icon: ReactNode; }
interface FormState { name: string; email: string; phone: string; program: string; message: string; }
interface FormErrors { name?: boolean; email?: boolean; }
interface RevealProps { children: ReactNode; delay?: number; className?: string; }
interface IconProps { name: string; size?: number; }

// ─── DATA ────────────────────────────────────────────────────────────────────

const contactDetails: ContactDetail[] = [
  { icon: "phone",   label: "Phone",    value: "(201) 451-1599",          href: "tel:2014511599" },
  { icon: "globe",   label: "Website",  value: "www.csjcnj.com",          href: "https://www.csjcnj.com" },
  { icon: "map-pin", label: "Location", value: "Jersey City, New Jersey", href: "https://maps.google.com/?q=Cosmetology+School+of+Jersey+City+NJ" },
  { icon: "mail",    label: "Email",    value: "info@csjcnj.com",         href: "mailto:info@csjcnj.com" },
];

const socials: Social[] = [
  {
    id: "instagram", label: "Instagram", handle: "@cosmetologyschoolofjerseycity",
    href: "https://www.instagram.com/cosmetologyschooljc/", color: "#E1306C",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
        <circle cx="12" cy="12" r="4"/>
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
      </svg>
    ),
  },
  {
    id: "facebook", label: "Facebook", handle: "CSJC NJ",
    href: "https://www.facebook.com/profile.php?id=61576106982513", color: "#1877F2",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    ),
  },
  {
    id: "tiktok", label: "TikTok", handle: "@csjcnj",
    href: "https://www.tiktok.com/@cosmetologyschoolofjc", color: "#010101",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.76a4.85 4.85 0 01-1.01-.07z"/>
      </svg>
    ),
  },
  {
  id: "linkedin",
  label: "LinkedIn",
  handle: "CSJC NJ",
  href: "https://www.linkedin.com/company/cosmetology-school-of-jersey-city/about/?viewAsMember=true",
  color: "#0A66C2",
  icon: (
    <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
      <path d="M20.447 20.452H16.89v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.346V9h3.414v1.561h.049c.476-.9 1.637-1.85 3.37-1.85 3.601 0 4.268 2.37 4.268 5.455v6.286zM5.337 7.433a2.063 2.063 0 110-4.126 2.063 2.063 0 010 4.126zM7.119 20.452H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  ),
}
];

const programsList: string[] = ["Cosmetology", "Barbering", "Nail Technology", "Teacher Training", "Refresher"];

const careerServices: CareerService[] = [
  {
    title: "Job Placement",
    desc: "Job placement assistance and career planning at no charge to all graduates.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
        <rect x="2" y="7" width="20" height="14" rx="2"/>
        <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"/>
        <line x1="12" y1="12" x2="12" y2="16"/>
        <line x1="10" y1="14" x2="14" y2="14"/>
      </svg>
    ),
  },
  {
    title: "Resume Prep",
    desc: "Resume preparation assistance and interview preparation coaching included.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
        <line x1="16" y1="13" x2="8" y2="13"/>
        <line x1="16" y1="17" x2="8" y2="17"/>
      </svg>
    ),
  },
  {
    title: "Portfolio Dev",
    desc: "Personal portfolio development and ongoing career support throughout your entire career.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
        <path d="M6 12v5c3 3 9 3 12 0v-5"/>
      </svg>
    ),
  },
];

const enrollmentReqs: string[] = [
  "High School Diploma or Equivalent",
  "Minimum Age: 17 (Cosmetology, Barbering, Nails) · 18 (Teacher Training)",
  "Valid Social Security Card",
  "NJ Physician Statement (free of communicable disease)",
  "Attestation of no child support arrears",
];

// ─── ANIMATION HOOK ──────────────────────────────────────────────────────────

function useReveal(): [RefObject<HTMLDivElement | null>, boolean] {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState<boolean>(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

function Reveal({ children, delay = 0, className = "" }: RevealProps) {
  const [ref, visible] = useReveal();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.65s ease ${delay}ms, transform 0.65s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

// ─── ICON ────────────────────────────────────────────────────────────────────

function Icon({ name, size = 18 }: IconProps) {
  const icons: Record<string, ReactNode> = {
    phone: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width={size} height={size}>
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.11 19.79 19.79 0 01.22 0.48 2 2 0 012.22-.5h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z"/>
      </svg>
    ),
    globe: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width={size} height={size}>
        <circle cx="12" cy="12" r="10"/>
        <line x1="2" y1="12" x2="22" y2="12"/>
        <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/>
      </svg>
    ),
    "map-pin": (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width={size} height={size}>
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
        <circle cx="12" cy="10" r="3"/>
      </svg>
    ),
    mail: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width={size} height={size}>
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
        <polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
    check: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width={size} height={size}>
        <polyline points="20 6 9 17 4 12"/>
      </svg>
    ),
    send: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width={size} height={size}>
        <line x1="22" y1="2" x2="11" y2="13"/>
        <polygon points="22 2 15 22 11 13 2 9 22 2"/>
      </svg>
    ),
    external: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width={size} height={size}>
        <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
        <polyline points="15 3 21 3 21 9"/>
        <line x1="10" y1="14" x2="21" y2="3"/>
      </svg>
    ),
  };
  return <>{icons[name] ?? null}</>;
}

// ─── MINIMAL REMAINING STYLES (pseudo-elements & keyframes only) ─────────────

const minimalStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400;1,600&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500&display=swap');

  :root {
    --gold: #B8913A;
    --gold-lt: #D4AB5A;
    --gold-pale: #F7EDD8;
    --gold-dark: #8A6B28;
    --ink: #1C1A15;
    --ff-display: 'Cormorant Garamond', Georgia, serif;
    --ff-body: 'DM Sans', system-ui, sans-serif;
  }

  html { scroll-behavior: smooth; }
  body { font-family: var(--ff-body); -webkit-font-smoothing: antialiased; }

  .font-display { font-family: var(--ff-display); }

  /* Section label trailing line — pseudo only */
  .section-label::after {
    content: ''; flex: 1; height: 1px;
    background: #E2D9C8; display: inline-block; max-width: 60px;
  }

  /* Select chevron */
  .field-select {
    background-image: url("data:image/svg+xml,%3Csvg width='10' height='6' viewBox='0 0 10 6' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1L5 5L9 1' stroke='%238A837A' stroke-width='1.5' stroke-linecap='round'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: right 0.9rem center;
    -webkit-appearance: none;
    cursor: pointer;
  }

  /* Pulse ring keyframe */
  @keyframes pulse-ring {
    0%, 100% { box-shadow: 0 0 0 0 rgba(184,145,58,0.25); }
    50%       { box-shadow: 0 0 0 12px rgba(184,145,58,0); }
  }
  .pulse-ring { animation: pulse-ring 2s ease infinite; }

  /* Footer radial glow — pseudo only */
  .footer-glow {
    position: absolute; inset: 0; pointer-events: none;
    background: radial-gradient(ellipse 60% 100% at 50% 50%, rgba(184,145,58,0.12) 0%, transparent 70%);
  }
`;

// ─── MAIN COMPONENT ──────────────────────────────────────────────────────────

export default function ContactPage() {
  const [form, setForm] = useState<FormState>({ name: "", email: "", phone: "", program: "", message: "" });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [sending, setSending] = useState<boolean>(false);

  const validate = (): FormErrors => {
    const e: FormErrors = {};
    if (!form.name.trim()) e.name = true;
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = true;
    return e;
  };

  const handleSubmit = (): void => {
    const e = validate();
    if (Object.keys(e).length) { setErrors(e); return; }
    setSending(true);
    setTimeout(() => { setSending(false); setSubmitted(true); }, 1400);
  };

  const updateField = (key: keyof FormState, val: string): void => {
    setForm(f => ({ ...f, [key]: val }));
    if (errors[key as keyof FormErrors]) setErrors(e => ({ ...e, [key]: false }));
  };

  return (
    <>
      <style>{minimalStyles}</style>
      <div className="overflow-x-hidden w-full">

      {/* ── CONTACT + FORM ── */}
      <section id="contact" className="max-w-[1100px] mx-auto px-4 sm:px-8 py-14 sm:py-16 overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">

          {/* LEFT */}
          <div>
            <Reveal>
              {/* Section label */}
              <p className="section-label flex items-center gap-3 text-[9px] tracking-[0.45em] uppercase text-[#B8913A] font-medium mb-6">
                Reach Us
              </p>

              {/* Contact list */}
              <div className="flex flex-col gap-5 mb-10">
                {contactDetails.map(({ icon, label, value, href }) => (
                  <div key={label} className="group flex items-center gap-4 min-w-0">
                    <div className="w-[42px] h-[42px] rounded-full border border-[#E2D9C8] bg-[#F5F0E8] text-[#B8913A] flex items-center justify-center flex-shrink-0 transition-all duration-200 group-hover:border-[#D4AB5A] group-hover:bg-[#F7EDD8]">
                      <Icon name={icon} size={16} />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[10px] uppercase tracking-[0.18em] text-[#8A837A] font-medium mb-0.5">{label}</p>
                      <p className="text-[14px] text-[#4A4540] truncate">
                        <a
                          href={href}
                          className="border-b border-transparent transition-colors duration-200 hover:text-[#B8913A] hover:border-[#D4AB5A]"
                          target={href.startsWith("http") ? "_blank" : undefined}
                          rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                        >
                          {value}
                        </a>
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={100}>
              <p className="section-label flex items-center gap-3 text-[9px] tracking-[0.45em] uppercase text-[#B8913A] font-medium mb-6">
                Follow Us
              </p>
              <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 gap-2.5 mb-10">
                {socials.map(({ id, label, handle, href, color, icon }) => (
                  <a
                    key={id}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-4 py-3 border border-[#E2D9C8] rounded-lg bg-white text-[#4A4540] shadow-[0_1px_8px_rgba(28,26,21,0.06)] transition-all duration-200 hover:border-[#D4AB5A] hover:bg-[#F7EDD8] hover:-translate-y-0.5 hover:shadow-[0_4px_24px_rgba(28,26,21,0.10)] min-w-0"
                  >
                    <div className="w-[34px] h-[34px] rounded-lg flex items-center justify-center flex-shrink-0 text-white" style={{ background: color }}>
                      {icon}
                    </div>
                    <div className="min-w-0">
                      <div className="text-[13px] font-medium text-[#1C1A15] leading-tight">{label}</div>
                      <div className="text-[10px] text-[#8A837A] font-light truncate">{handle}</div>
                    </div>
                  </a>
                ))}
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div className="bg-[#F7EDD8] border border-[rgba(184,145,58,0.3)] rounded-xl px-6 py-5">
                <h4 className="font-display text-base font-semibold text-[#1C1A15] mb-2.5">NJ State Board — Complaints</h4>
                <p className="text-[13px] text-[#4A4540] leading-[1.7] font-light">
                  NJ Board of Cosmetology &amp; Hairstyling<br />
                  P.O. Box 45003, Newark, NJ 07101<br />
                  Phone: (973) 504-6400
                </p>
                <p className="mt-2.5 text-[11.5px] text-[#8A837A] italic font-light leading-[1.7]">
                  Students must exhaust the institution's internal complaint process before submitting to the NJ State Board.
                </p>
              </div>
            </Reveal>
          </div>

          {/* RIGHT: Form */}
          <Reveal delay={80}>
            <div className="bg-white border border-[#E2D9C8] rounded-xl p-6 sm:p-10 shadow-[0_4px_24px_rgba(28,26,21,0.10)]">
              {submitted ? (
                <div className="flex flex-col items-center gap-5 py-16 text-center">
                  <div className="pulse-ring w-[72px] h-[72px] rounded-full border border-[#D4AB5A] bg-[#F7EDD8] flex items-center justify-center text-[#B8913A]">
                    <Icon name="check" size={28} />
                  </div>
                  <h3 className="font-display text-[2rem] font-normal text-[#1C1A15]">Message Sent!</h3>
                  <p className="text-[14px] text-[#8A837A] font-light">We'll be in touch with you shortly.</p>
                </div>
              ) : (
                <>
                  <h2 className="font-display text-[2rem] font-normal text-[#1C1A15] mb-1.5">Send Us a Message</h2>
                  <p className="text-[13px] text-[#8A837A] font-light mb-8">We'd love to hear from you. Fill out the form below.</p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
                    <div>
                      <label className="block text-[10px] uppercase tracking-[0.2em] text-[#8A837A] font-medium mb-2">First Name *</label>
                      <input
                        className={`w-full border px-3.5 py-2.5 text-[14px] text-[#1C1A15] bg-[#FEFCF7] rounded-lg outline-none transition-colors duration-200 focus:border-[#D4AB5A] focus:bg-white placeholder:text-[#8A837A] placeholder:font-light ${errors.name ? "border-[#E24B4A]" : "border-[#E2D9C8]"}`}
                        type="text" placeholder="Jane"
                        value={form.name} onChange={e => updateField("name", e.target.value)}
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] uppercase tracking-[0.2em] text-[#8A837A] font-medium mb-2">Last Name</label>
                      <input
                        className="w-full border border-[#E2D9C8] px-3.5 py-2.5 text-[14px] text-[#1C1A15] bg-[#FEFCF7] rounded-lg outline-none transition-colors duration-200 focus:border-[#D4AB5A] focus:bg-white placeholder:text-[#8A837A] placeholder:font-light"
                        type="text" placeholder="Smith"
                      />
                    </div>
                  </div>

                  <div className="mb-5">
                    <label className="block text-[10px] uppercase tracking-[0.2em] text-[#8A837A] font-medium mb-2">Email Address *</label>
                    <input
                      className={`w-full border px-3.5 py-2.5 text-[14px] text-[#1C1A15] bg-[#FEFCF7] rounded-lg outline-none transition-colors duration-200 focus:border-[#D4AB5A] focus:bg-white placeholder:text-[#8A837A] placeholder:font-light ${errors.email ? "border-[#E24B4A]" : "border-[#E2D9C8]"}`}
                      type="email" placeholder="jane@email.com"
                      value={form.email} onChange={e => updateField("email", e.target.value)}
                    />
                  </div>

                  <div className="mb-5">
                    <label className="block text-[10px] uppercase tracking-[0.2em] text-[#8A837A] font-medium mb-2">Phone Number</label>
                    <input
                      className="w-full border border-[#E2D9C8] px-3.5 py-2.5 text-[14px] text-[#1C1A15] bg-[#FEFCF7] rounded-lg outline-none transition-colors duration-200 focus:border-[#D4AB5A] focus:bg-white placeholder:text-[#8A837A] placeholder:font-light"
                      type="tel" placeholder="(201) 000-0000"
                      value={form.phone} onChange={e => updateField("phone", e.target.value)}
                    />
                  </div>

                  <div className="mb-5">
                    <label className="block text-[10px] uppercase tracking-[0.2em] text-[#8A837A] font-medium mb-2">Program of Interest</label>
                    <select
                      className="field-select w-full border border-[#E2D9C8] px-3.5 py-2.5 text-[14px] text-[#1C1A15] bg-[#FEFCF7] rounded-lg outline-none transition-colors duration-200 focus:border-[#D4AB5A] focus:bg-white"
                      value={form.program} onChange={e => updateField("program", e.target.value)}
                    >
                      <option value="">Select a program</option>
                      {programsList.map(p => <option key={p}>{p}</option>)}
                    </select>
                  </div>

                  <div className="mb-5">
                    <label className="block text-[10px] uppercase tracking-[0.2em] text-[#8A837A] font-medium mb-2">Message</label>
                    <textarea
                      className="w-full border border-[#E2D9C8] px-3.5 py-2.5 text-[14px] text-[#1C1A15] bg-[#FEFCF7] rounded-lg outline-none transition-colors duration-200 focus:border-[#D4AB5A] focus:bg-white placeholder:text-[#8A837A] placeholder:font-light resize-y min-h-[100px] leading-[1.6]"
                      placeholder="Tell us about yourself or ask any questions..."
                      value={form.message} onChange={e => updateField("message", e.target.value)}
                    />
                  </div>

                  <button
                    className="w-full py-3.5 bg-[#1C1A15] text-white border-none text-[11px] tracking-[0.25em] uppercase font-medium cursor-pointer rounded-lg transition-colors duration-200 flex items-center justify-center gap-2 hover:bg-[#B8913A] active:scale-[0.99] disabled:bg-[#8A837A] disabled:cursor-not-allowed disabled:scale-100"
                    onClick={handleSubmit} disabled={sending}
                  >
                    {sending ? <>Sending&hellip;</> : <><Icon name="send" size={14} /> Send Message</>}
                  </button>
                </>
              )}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── MAP ── */}
      <section className="bg-[#EDE6D8] border-t border-b border-[#E2D9C8]">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-8 py-14 sm:py-16">
          <Reveal>
            <div className="text-center mb-8">
              <p className="text-[9px] tracking-[0.45em] uppercase text-[#B8913A] font-medium mb-3.5">Find Us</p>
              <h2 className="font-display text-[clamp(1.8rem,4vw,2.5rem)] font-light text-[#1C1A15] leading-[1.1]">
                We're in{" "}
                <em style={{ fontStyle: "italic", color: "var(--gold)", fontFamily: "var(--ff-display)" }}>Jersey City</em>
              </h2>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="relative rounded-xl overflow-hidden border border-[#E2D9C8] shadow-[0_4px_24px_rgba(28,26,21,0.10)] h-[320px] sm:h-[380px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96726.53386218386!2d-74.10932!3d40.71773!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c250a800e8b0d5%3A0x5c780d155861b0c7!2sJersey%20City%2C%20NJ%2C%20USA!5e0!3m2!1sen!2sus!4v1700000000000"
                className="w-full h-full border-0 block"
                allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                title="Map showing Jersey City, New Jersey"
              />
              <div className="absolute top-5 left-5 bg-[rgba(254,252,247,0.96)] backdrop-blur-md border border-[#E2D9C8] rounded-xl px-5 py-4 shadow-[0_4px_24px_rgba(28,26,21,0.10)] max-w-[230px]">
                <p className="font-display text-base font-semibold text-[#1C1A15] leading-[1.3] mb-1">Cosmetology School of Jersey City</p>
                <p className="text-[12px] text-[#8A837A] mb-2.5 font-light">Jersey City, New Jersey</p>
                <a
                  className="inline-flex items-center gap-1.5 text-[11px] text-[#B8913A] font-medium border-b border-[#D4AB5A] pb-px transition-colors duration-200 hover:text-[#8A6B28]"
                  href="https://maps.google.com/?q=Cosmetology+School+of+Jersey+City+NJ"
                  target="_blank" rel="noopener noreferrer"
                >
                  <Icon name="external" size={12} /> Get Directions
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── CAREER SERVICES ── */}
      <section id="career" className="bg-white py-16 sm:py-20 px-4 sm:px-8">
        <div className="max-w-[1100px] mx-auto">
          <Reveal>
            <div className="text-center mb-10 sm:mb-12">
              <p className="text-[9px] tracking-[0.45em] uppercase text-[#B8913A] font-medium mb-3.5">Graduate Support</p>
              <h2 className="font-display text-[clamp(1.8rem,4vw,2.5rem)] font-light text-[#1C1A15] leading-[1.1] mb-2.5">Career Placement Services</h2>
              <p className="text-[13px] text-[#8A837A] font-light">No charge — upon graduation and throughout your career</p>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {careerServices.map(({ title, desc, icon }, i) => (
              <Reveal key={title} delay={i * 90}>
                <div className="bg-[#F5F0E8] border border-[#E2D9C8] rounded-xl px-7 py-8 transition-all duration-[250ms] hover:-translate-y-1 hover:shadow-[0_4px_24px_rgba(28,26,21,0.10)]">
                  <div className="w-[46px] h-[46px] rounded-xl bg-[#F7EDD8] border border-[rgba(184,145,58,0.25)] flex items-center justify-center text-[#B8913A] mb-5">
                    {icon}
                  </div>
                  <h3 className="font-display text-[1.15rem] font-semibold text-[#1C1A15] mb-2">{title}</h3>
                  <p className="text-[13px] text-[#8A837A] leading-[1.65] font-light">{desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── ENROLLMENT ── */}
      <section id="programs" className="bg-[#F5F0E8] border-t border-[#E2D9C8] py-16 sm:py-20 px-4 sm:px-8">
        <div className="max-w-[860px] mx-auto">
          <Reveal>
            <div className="text-center mb-10 sm:mb-12">
              <p className="text-[9px] tracking-[0.45em] uppercase text-[#B8913A] font-medium mb-3.5">Getting Started</p>
              <h2 className="font-display text-[clamp(1.8rem,4vw,2.5rem)] font-light text-[#1C1A15] leading-[1.1]">Enrollment Requirements</h2>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
              {enrollmentReqs.map((req, i) => (
                <div key={i} className="flex items-start gap-3 bg-white border border-[#E2D9C8] rounded-lg px-4 py-4 shadow-[0_1px_8px_rgba(28,26,21,0.06)]">
                  <div className="w-5 h-5 rounded-full bg-[#F7EDD8] border border-[rgba(184,145,58,0.3)] flex items-center justify-center flex-shrink-0 text-[#B8913A] mt-0.5">
                    <Icon name="check" size={10} />
                  </div>
                  <span className="text-[13px] text-[#4A4540] leading-[1.55] font-light">{req}</span>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={160}>
            <div className="text-center">
              <a
                href="tel:2014511599"
                className="inline-flex items-center gap-2 px-9 py-3.5 border-[1.5px] border-[#B8913A] text-[#B8913A] bg-transparent text-[11px] tracking-[0.2em] uppercase font-medium rounded-lg transition-all duration-200 hover:bg-[#B8913A] hover:text-white"
              >
                <Icon name="phone" size={14} /> Call (201) 451-1599
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── FOOTER BANNER ── */}
      <section className="relative bg-[#1C1A15] px-4 sm:px-8 py-14 sm:py-16 text-center overflow-hidden">
        <div className="footer-glow" />
        <em className="font-display not-italic italic text-[clamp(1.75rem,5vw,2.5rem)] font-light text-[#D4AB5A] block mb-3 relative">
          Start Your Future Today!
        </em>
        <p className="text-[13px] text-[rgba(255,255,255,0.4)] font-light mb-2 relative">
          Five NJ State Board-approved programs. No charge for job placement services to graduates.
        </p>
        <p className="text-[11px] text-[rgba(255,255,255,0.2)] tracking-[0.2em] relative">www.csjcnj.com</p>
      </section>

      {/* <div className="bg-[rgba(0,0,0,0.35)] px-4 py-5 flex items-center justify-center gap-4 flex-wrap">
        {socials.map(({ id, label, href, icon }) => (
          <a
            key={id} href={href} target="_blank" rel="noopener noreferrer"
            aria-label={label}
            className="w-[34px] h-[34px] rounded-full border border-[rgba(255,255,255,0.15)] flex items-center justify-center text-[rgba(255,255,255,0.5)] transition-all duration-200 hover:border-[#D4AB5A] hover:text-[#D4AB5A]"
          >
            {icon}
          </a>
        ))}
      </div> */}
      </div>{/* end overflow-x-hidden */}
    </>
  );
}