import { useState, useEffect, useRef, ReactNode, RefObject } from "react";

// ─── TYPES ────────────────────────────────────────────────────────────────────

interface ContactDetail {
  icon: string;
  label: string;
  value: string;
  href: string;
}

interface Social {
  id: string;
  label: string;
  handle: string;
  href: string;
  color: string;
  icon: ReactNode;
}

interface CareerService {
  title: string;
  desc: string;
  icon: ReactNode;
}

interface FormState {
  name: string;
  email: string;
  phone: string;
  program: string;
  message: string;
}

interface FormErrors {
  name?: boolean;
  email?: boolean;
}

interface RevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

interface IconProps {
  name: string;
  size?: number;
}

// ─── DATA ────────────────────────────────────────────────────────────────────

const contactDetails: ContactDetail[] = [
  { icon: "phone",   label: "Phone",    value: "(201) 451-1599",       href: "tel:2014511599" },
  { icon: "globe",   label: "Website",  value: "www.csjcnj.com",       href: "https://www.csjcnj.com" },
  { icon: "map-pin", label: "Location", value: "Jersey City, New Jersey", href: "https://maps.google.com/?q=Cosmetology+School+of+Jersey+City+NJ" },
  { icon: "mail",    label: "Email",    value: "info@csjcnj.com",       href: "mailto:info@csjcnj.com" },
];

const socials: Social[] = [
  {
    id: "instagram", label: "Instagram", handle: "@cosmetologyschoolofjerseycity",
    href: "https://instagram.com/cosmetologyschoolofjerseycity", color: "#E1306C",
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
    href: "https://facebook.com", color: "#1877F2",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    ),
  },
  {
    id: "tiktok", label: "TikTok", handle: "@csjcnj",
    href: "https://tiktok.com", color: "#010101",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.76a4.85 4.85 0 01-1.01-.07z"/>
      </svg>
    ),
  },
  {
    id: "youtube", label: "YouTube", handle: "CSJC NJ",
    href: "https://youtube.com", color: "#FF0000",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
        <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
      </svg>
    ),
  },
];

const programs: string[] = ["Cosmetology", "Barbering", "Nail Technology", "Teacher Training", "Refresher"];

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
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return [ref, visible];
}

// ─── REVEAL WRAPPER ──────────────────────────────────────────────────────────

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
    arrow: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width={size} height={size}>
        <line x1="5" y1="12" x2="19" y2="12"/>
        <polyline points="12 5 19 12 12 19"/>
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

// ─── STYLES ──────────────────────────────────────────────────────────────────

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400;1,600&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --cream: #FEFCF7;
    --sand: #F5F0E8;
    --sand-dk: #EDE6D8;
    --gold: #B8913A;
    --gold-lt: #D4AB5A;
    --gold-pale: #F7EDD8;
    --gold-dark: #8A6B28;
    --ink: #1C1A15;
    --ink2: #4A4540;
    --ink3: #8A837A;
    --border: #E2D9C8;
    --white: #FFFFFF;
    --shadow-sm: 0 1px 8px rgba(28,26,21,0.06);
    --shadow-md: 0 4px 24px rgba(28,26,21,0.10);
    --ff-display: 'Cormorant Garamond', Georgia, serif;
    --ff-body: 'DM Sans', system-ui, sans-serif;
    --radius: 8px;
    --radius-lg: 12px;
  }

  html { scroll-behavior: smooth; }
  body {
    background: var(--cream);
    font-family: var(--ff-body);
    color: var(--ink);
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
  }

  /* ── CONTENT ── */
  .content-wrap { max-width: 1100px; margin: 0 auto; padding: 4rem 2rem; }
  .two-col {
    display: grid;
    grid-template-columns: 1fr 1.1fr;
    gap: 4rem;
    align-items: start;
  }
  @media (max-width: 720px) {
    .two-col { grid-template-columns: 1fr; gap: 3rem; }
  }

  /* ── SECTION LABEL ── */
  .section-label {
    font-size: 9px; letter-spacing: 0.45em; text-transform: uppercase;
    color: var(--gold); font-weight: 500; margin-bottom: 1.5rem;
    display: flex; align-items: center; gap: 0.75rem;
  }
  .section-label::after {
    content: ''; flex: 1; height: 1px; background: var(--border);
    display: inline-block; max-width: 60px;
  }

  /* ── CONTACT ITEMS ── */
  .contact-list { display: flex; flex-direction: column; gap: 1.25rem; margin-bottom: 2.5rem; }
  .contact-item { display: flex; align-items: center; gap: 1rem; }
  .contact-icon-wrap {
    width: 42px; height: 42px; border-radius: 50%;
    border: 1px solid var(--border);
    display: flex; align-items: center; justify-content: center;
    flex-shrink: 0; background: var(--sand); color: var(--gold);
    transition: border-color 0.2s, background 0.2s;
  }
  .contact-item:hover .contact-icon-wrap {
    border-color: var(--gold-lt); background: var(--gold-pale);
  }
  .contact-label-text {
    font-size: 10px; text-transform: uppercase; letter-spacing: 0.18em;
    color: var(--ink3); font-weight: 500; margin-bottom: 3px;
  }
  .contact-value-text { font-size: 14px; color: var(--ink2); }
  .contact-link {
    color: var(--ink2); text-decoration: none;
    border-bottom: 1px solid transparent;
    transition: color 0.2s, border-color 0.2s;
  }
  .contact-link:hover { color: var(--gold); border-color: var(--gold-lt); }

  /* ── SOCIAL GRID ── */
  .social-grid {
    display: grid; grid-template-columns: 1fr 1fr;
    gap: 0.625rem; margin-bottom: 2.5rem;
  }
  .social-card {
    display: flex; align-items: center; gap: 0.75rem;
    padding: 0.75rem 1rem;
    border: 1px solid var(--border); border-radius: var(--radius);
    background: var(--white); text-decoration: none; color: var(--ink2);
    transition: all 0.2s; box-shadow: var(--shadow-sm);
  }
  .social-card:hover {
    border-color: var(--gold-lt); background: var(--gold-pale);
    transform: translateY(-2px); box-shadow: var(--shadow-md);
  }
  .social-icon {
    width: 34px; height: 34px; border-radius: 8px;
    display: flex; align-items: center; justify-content: center;
    flex-shrink: 0; color: white;
  }
  .social-name { font-size: 13px; font-weight: 500; color: var(--ink); line-height: 1.2; }
  .social-handle { font-size: 10px; color: var(--ink3); font-weight: 300; }

  /* ── COMPLAINT BOX ── */
  .complaint-box {
    background: var(--gold-pale);
    border: 1px solid rgba(184,145,58,0.3);
    border-radius: var(--radius-lg);
    padding: 1.25rem 1.5rem;
  }
  .complaint-box h4 {
    font-family: var(--ff-display); font-size: 1rem; font-weight: 600;
    color: var(--ink); margin-bottom: 0.625rem;
  }
  .complaint-box p { font-size: 13px; color: var(--ink2); line-height: 1.7; font-weight: 300; }
  .complaint-note { margin-top: 0.625rem !important; font-size: 11.5px !important; color: var(--ink3) !important; font-style: italic; }

  /* ── FORM ── */
  .form-card {
    background: var(--white); border: 1px solid var(--border);
    border-radius: var(--radius-lg); padding: 2.5rem;
    box-shadow: var(--shadow-md);
  }
  .form-title {
    font-family: var(--ff-display); font-size: 2rem; font-weight: 400;
    color: var(--ink); margin-bottom: 0.375rem;
  }
  .form-subtitle { font-size: 13px; color: var(--ink3); font-weight: 300; margin-bottom: 2rem; }
  .field { margin-bottom: 1.25rem; }
  .field-label {
    font-size: 10px; text-transform: uppercase; letter-spacing: 0.2em;
    color: var(--ink3); font-weight: 500; display: block; margin-bottom: 0.5rem;
  }
  .field-input,
  .field-select,
  .field-textarea {
    width: 100%; border: 1px solid var(--border); padding: 0.7rem 0.9rem;
    font-size: 14px; color: var(--ink); background: var(--cream);
    font-family: var(--ff-body); border-radius: var(--radius);
    outline: none; transition: border-color 0.2s, background 0.2s;
    -webkit-appearance: none;
  }
  .field-input:focus,
  .field-select:focus,
  .field-textarea:focus {
    border-color: var(--gold-lt); background: var(--white);
  }
  .field-input::placeholder,
  .field-textarea::placeholder { color: var(--ink3); font-weight: 300; }
  .field-input.error { border-color: #E24B4A; }
  .field-select {
    background-image: url("data:image/svg+xml,%3Csvg width='10' height='6' viewBox='0 0 10 6' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1L5 5L9 1' stroke='%238A837A' stroke-width='1.5' stroke-linecap='round'/%3E%3C/svg%3E");
    background-repeat: no-repeat; background-position: right 0.9rem center;
    cursor: pointer;
  }
  .field-textarea { resize: vertical; min-height: 100px; line-height: 1.6; }
  .field-row { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
  @media (max-width: 480px) { .field-row { grid-template-columns: 1fr; } }

  .btn-primary {
    width: 100%; padding: 0.875rem;
    background: var(--ink); color: white; border: none;
    font-size: 11px; letter-spacing: 0.25em; text-transform: uppercase;
    font-family: var(--ff-body); font-weight: 500; cursor: pointer;
    border-radius: var(--radius); transition: background 0.2s, transform 0.1s;
    display: flex; align-items: center; justify-content: center; gap: 0.5rem;
  }
  .btn-primary:hover { background: var(--gold); }
  .btn-primary:active { transform: scale(0.99); }
  .btn-primary:disabled { background: var(--ink3); cursor: not-allowed; transform: none; }

  /* ── SUCCESS STATE ── */
  .success-wrap {
    text-align: center; padding: 4rem 2rem;
    display: flex; flex-direction: column; align-items: center; gap: 1.25rem;
  }
  .success-ring {
    width: 72px; height: 72px; border-radius: 50%;
    border: 1.5px solid var(--gold-lt); background: var(--gold-pale);
    display: flex; align-items: center; justify-content: center; color: var(--gold);
    animation: pulse-ring 2s ease infinite;
  }
  @keyframes pulse-ring {
    0%, 100% { box-shadow: 0 0 0 0 rgba(184,145,58,0.25); }
    50% { box-shadow: 0 0 0 12px rgba(184,145,58,0); }
  }
  .success-title { font-family: var(--ff-display); font-size: 2rem; font-weight: 400; color: var(--ink); }
  .success-sub { font-size: 14px; color: var(--ink3); font-weight: 300; }

  /* ── MAP ── */
  .map-section {
    background: var(--sand-dk);
    border-top: 1px solid var(--border);
    border-bottom: 1px solid var(--border);
  }
  .map-inner { max-width: 1100px; margin: 0 auto; padding: 4rem 2rem; }
  .map-header { text-align: center; margin-bottom: 2rem; }
  .map-frame-wrap {
    position: relative; border-radius: var(--radius-lg); overflow: hidden;
    border: 1px solid var(--border); box-shadow: var(--shadow-md); height: 380px;
  }
  .map-frame-wrap iframe { width: 100%; height: 100%; border: 0; display: block; }
  .map-overlay {
    position: absolute; top: 1.25rem; left: 1.25rem;
    background: rgba(254,252,247,0.96); backdrop-filter: blur(8px);
    border: 1px solid var(--border); border-radius: var(--radius-lg);
    padding: 1rem 1.25rem; box-shadow: var(--shadow-md); max-width: 230px;
  }
  .map-overlay-name {
    font-family: var(--ff-display); font-size: 1rem; font-weight: 600;
    color: var(--ink); line-height: 1.3; margin-bottom: 0.25rem;
  }
  .map-overlay-addr { font-size: 12px; color: var(--ink3); margin-bottom: 0.625rem; font-weight: 300; }
  .map-dir-link {
    display: inline-flex; align-items: center; gap: 0.375rem;
    font-size: 11px; color: var(--gold); text-decoration: none; font-weight: 500;
    border-bottom: 1px solid var(--gold-lt); padding-bottom: 1px; transition: color 0.2s;
  }
  .map-dir-link:hover { color: var(--gold-dark); }

  /* ── CAREER ── */
  .career-section { background: var(--white); padding: 5rem 2rem; }
  .career-inner { max-width: 1100px; margin: 0 auto; }
  .section-header { text-align: center; margin-bottom: 3rem; }
  .section-eyebrow {
    font-size: 9px; letter-spacing: 0.45em; text-transform: uppercase;
    color: var(--gold); font-weight: 500; margin-bottom: 0.875rem;
  }
  .section-title {
    font-family: var(--ff-display);
    font-size: clamp(1.8rem, 4vw, 2.5rem);
    font-weight: 300; color: var(--ink); line-height: 1.1; margin-bottom: 0.625rem;
  }
  .section-note { font-size: 13px; color: var(--ink3); font-weight: 300; }
  .career-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 1.25rem;
  }
  .career-card {
    background: var(--sand); border: 1px solid var(--border);
    border-radius: var(--radius-lg); padding: 2rem 1.75rem;
    transition: transform 0.25s, box-shadow 0.25s;
  }
  .career-card:hover { transform: translateY(-4px); box-shadow: var(--shadow-md); }
  .career-card-icon {
    width: 46px; height: 46px; border-radius: 12px;
    background: var(--gold-pale); border: 1px solid rgba(184,145,58,0.25);
    display: flex; align-items: center; justify-content: center;
    color: var(--gold); margin-bottom: 1.25rem;
  }
  .career-card h3 {
    font-family: var(--ff-display); font-size: 1.15rem; font-weight: 600;
    color: var(--ink); margin-bottom: 0.5rem;
  }
  .career-card p { font-size: 13px; color: var(--ink3); line-height: 1.65; font-weight: 300; }

  /* ── ENROLLMENT ── */
  .enrollment-section {
    background: var(--sand); padding: 5rem 2rem;
    border-top: 1px solid var(--border);
  }
  .enrollment-inner { max-width: 860px; margin: 0 auto; }
  .req-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 0.75rem; margin-bottom: 2.5rem;
  }
  .req-item {
    display: flex; align-items: flex-start; gap: 0.75rem;
    background: var(--white); border: 1px solid var(--border);
    border-radius: var(--radius); padding: 1rem 1.125rem; box-shadow: var(--shadow-sm);
  }
  .req-check {
    width: 20px; height: 20px; border-radius: 50%;
    background: var(--gold-pale); border: 1px solid rgba(184,145,58,0.3);
    display: flex; align-items: center; justify-content: center;
    flex-shrink: 0; color: var(--gold); margin-top: 1px;
  }
  .req-item span { font-size: 13px; color: var(--ink2); line-height: 1.55; font-weight: 300; }
  .enrollment-cta { text-align: center; }
  .btn-outline {
    display: inline-flex; align-items: center; gap: 0.5rem;
    padding: 0.8rem 2.25rem; border: 1.5px solid var(--gold); color: var(--gold);
    background: transparent; font-size: 11px; letter-spacing: 0.2em;
    text-transform: uppercase; font-family: var(--ff-body); font-weight: 500;
    cursor: pointer; border-radius: var(--radius); text-decoration: none;
    transition: all 0.2s;
  }
  .btn-outline:hover { background: var(--gold); color: white; }

  /* ── FOOTER BANNER ── */
  .footer-banner {
    background: var(--ink); padding: 4rem 2rem; text-align: center;
    position: relative; overflow: hidden;
  }
  .footer-glow {
    position: absolute; inset: 0; pointer-events: none;
    background: radial-gradient(ellipse 60% 100% at 50% 50%, rgba(184,145,58,0.12) 0%, transparent 70%);
  }
  .footer-tagline {
    font-family: var(--ff-display); font-style: italic;
    font-size: clamp(1.75rem, 5vw, 2.5rem); font-weight: 300;
    color: var(--gold-lt); display: block; margin-bottom: 0.75rem; position: relative;
  }
  .footer-desc {
    font-size: 13px; color: rgba(255,255,255,0.4); font-weight: 300;
    margin-bottom: 0.5rem; position: relative;
  }
  .footer-url { font-size: 11px; color: rgba(255,255,255,0.2); letter-spacing: 0.2em; position: relative; }
  .footer-bottom {
    background: rgba(0,0,0,0.35); padding: 1.25rem 2rem;
    display: flex; align-items: center; justify-content: center; gap: 1rem; flex-wrap: wrap;
  }
  .footer-social-link {
    width: 34px; height: 34px; border-radius: 50%;
    border: 1px solid rgba(255,255,255,0.15);
    display: flex; align-items: center; justify-content: center;
    color: rgba(255,255,255,0.5); text-decoration: none;
    transition: border-color 0.2s, color 0.2s;
  }
  .footer-social-link:hover { border-color: var(--gold-lt); color: var(--gold-lt); }
`;

// ─── MAIN COMPONENT ──────────────────────────────────────────────────────────

export default function ContactPage() {
  const [form, setForm] = useState<FormState>({
    name: "", email: "", phone: "", program: "", message: "",
  });
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
    if (errors[key as keyof FormErrors]) {
      setErrors(e => ({ ...e, [key]: false }));
    }
  };

  return (
    <>
      <style>{styles}</style>

      {/* CONTACT + FORM */}
      <section id="contact" className="content-wrap">
        <div className="two-col">

          {/* LEFT: Contact Info */}
          <div>
            <Reveal>
              <p className="section-label">Reach Us</p>
              <div className="contact-list">
                {contactDetails.map(({ icon, label, value, href }) => (
                  <div className="contact-item" key={label}>
                    <div className="contact-icon-wrap">
                      <Icon name={icon} size={16} />
                    </div>
                    <div>
                      <p className="contact-label-text">{label}</p>
                      <p className="contact-value-text">
                        <a
                          href={href}
                          className="contact-link"
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
              <p className="section-label">Follow Us</p>
              <div className="social-grid">
                {socials.map(({ id, label, handle, href, color, icon }) => (
                  <a key={id} href={href} target="_blank" rel="noopener noreferrer" className="social-card">
                    <div className="social-icon" style={{ background: color }}>{icon}</div>
                    <div>
                      <div className="social-name">{label}</div>
                      <div className="social-handle">{handle}</div>
                    </div>
                  </a>
                ))}
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div className="complaint-box">
                <h4>NJ State Board — Complaints</h4>
                <p>
                  NJ Board of Cosmetology &amp; Hairstyling<br />
                  P.O. Box 45003, Newark, NJ 07101<br />
                  Phone: (973) 504-6400
                </p>
                <p className="complaint-note">
                  Students must exhaust the institution's internal complaint process before submitting to the NJ State Board.
                </p>
              </div>
            </Reveal>
          </div>

          {/* RIGHT: Form */}
          <Reveal delay={80}>
            <div className="form-card">
              {submitted ? (
                <div className="success-wrap">
                  <div className="success-ring">
                    <Icon name="check" size={28} />
                  </div>
                  <h3 className="success-title">Message Sent!</h3>
                  <p className="success-sub">We'll be in touch with you shortly.</p>
                </div>
              ) : (
                <>
                  <h2 className="form-title">Send Us a Message</h2>
                  <p className="form-subtitle">We'd love to hear from you. Fill out the form below.</p>

                  <div className="field-row">
                    <div className="field">
                      <label className="field-label">First Name *</label>
                      <input
                        className={`field-input${errors.name ? " error" : ""}`}
                        type="text"
                        placeholder="Jane"
                        value={form.name}
                        onChange={e => updateField("name", e.target.value)}
                      />
                    </div>
                    <div className="field">
                      <label className="field-label">Last Name</label>
                      <input className="field-input" type="text" placeholder="Smith" />
                    </div>
                  </div>

                  <div className="field">
                    <label className="field-label">Email Address *</label>
                    <input
                      className={`field-input${errors.email ? " error" : ""}`}
                      type="email"
                      placeholder="jane@email.com"
                      value={form.email}
                      onChange={e => updateField("email", e.target.value)}
                    />
                  </div>

                  <div className="field">
                    <label className="field-label">Phone Number</label>
                    <input
                      className="field-input"
                      type="tel"
                      placeholder="(201) 000-0000"
                      value={form.phone}
                      onChange={e => updateField("phone", e.target.value)}
                    />
                  </div>

                  <div className="field">
                    <label className="field-label">Program of Interest</label>
                    <select
                      className="field-select"
                      value={form.program}
                      onChange={e => updateField("program", e.target.value)}
                    >
                      <option value="">Select a program</option>
                      {programs.map(p => <option key={p}>{p}</option>)}
                    </select>
                  </div>

                  <div className="field">
                    <label className="field-label">Message</label>
                    <textarea
                      className="field-textarea"
                      placeholder="Tell us about yourself or ask any questions..."
                      value={form.message}
                      onChange={e => updateField("message", e.target.value)}
                    />
                  </div>

                  <button className="btn-primary" onClick={handleSubmit} disabled={sending}>
                    {sending ? (
                      <>Sending&hellip;</>
                    ) : (
                      <><Icon name="send" size={14} /> Send Message</>
                    )}
                  </button>
                </>
              )}
            </div>
          </Reveal>
        </div>
      </section>

      {/* MAP */}
      <section className="map-section">
        <div className="map-inner">
          <Reveal>
            <div className="map-header">
              <p className="section-eyebrow">Find Us</p>
              <h2 className="section-title">
                We're in{" "}
                <em style={{ fontStyle: "italic", color: "var(--gold)", fontFamily: "var(--ff-display)" }}>
                  Jersey City
                </em>
              </h2>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="map-frame-wrap">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96726.53386218386!2d-74.10932!3d40.71773!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c250a800e8b0d5%3A0x5c780d155861b0c7!2sJersey%20City%2C%20NJ%2C%20USA!5e0!3m2!1sen!2sus!4v1700000000000"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Map showing Jersey City, New Jersey"
              />
              <div className="map-overlay">
                <p className="map-overlay-name">Cosmetology School of Jersey City</p>
                <p className="map-overlay-addr">Jersey City, New Jersey</p>
                <a
                  className="map-dir-link"
                  href="https://maps.google.com/?q=Cosmetology+School+of+Jersey+City+NJ"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon name="external" size={12} /> Get Directions
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CAREER SERVICES */}
      <section id="career" className="career-section">
        <div className="career-inner">
          <Reveal>
            <div className="section-header">
              <p className="section-eyebrow">Graduate Support</p>
              <h2 className="section-title">Career Placement Services</h2>
              <p className="section-note">No charge — upon graduation and throughout your career</p>
            </div>
          </Reveal>
          <div className="career-grid">
            {careerServices.map(({ title, desc, icon }, i) => (
              <Reveal key={title} delay={i * 90}>
                <div className="career-card">
                  <div className="career-card-icon">{icon}</div>
                  <h3>{title}</h3>
                  <p>{desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ENROLLMENT */}
      <section id="programs" className="enrollment-section">
        <div className="enrollment-inner">
          <Reveal>
            <div className="section-header">
              <p className="section-eyebrow">Getting Started</p>
              <h2 className="section-title">Enrollment Requirements</h2>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <div className="req-grid">
              {enrollmentReqs.map((req, i) => (
                <div className="req-item" key={i}>
                  <div className="req-check"><Icon name="check" size={10} /></div>
                  <span>{req}</span>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={160}>
            <div className="enrollment-cta">
              <a href="tel:2014511599" className="btn-outline">
                <Icon name="phone" size={14} /> Call (201) 451-1599
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FOOTER BANNER */}
      <section className="footer-banner">
        <div className="footer-glow" />
        <em className="footer-tagline">Start Your Future Today!</em>
        <p className="footer-desc">
          Five NJ State Board-approved programs. No charge for job placement services to graduates.
        </p>
        <p className="footer-url">www.csjcnj.com</p>
      </section>

      <div className="footer-bottom">
        {socials.map(({ id, label, href, icon }) => (
          <a
            key={id}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social-link"
            aria-label={label}
          >
            {icon}
          </a>
        ))}
      </div>
    </>
  );
}