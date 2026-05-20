"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, Scissors, Menu, X } from "lucide-react";
import Image from "next/image";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/programs", label: "Programs" },
  { href: "/tuition", label: "Tuition & Fees" },
    { href: "/calendar", label: "Calendar" },
  { href: "/licensing", label: "Licensing & Policies" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;1,400&family=Jost:wght@300;400;500&display=swap');

        :root {
          --nb-gold:   #C4964A;
          --nb-gold2:  #E0B870;
          --nb-white:  #FAF8F4;
          --nb-muted:  rgba(250,248,244,0.5);
        }

        /* ── Header shell ── */
        .nb-header {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 50;
          font-family: 'Jost', sans-serif;
          transition: background .5s ease, backdrop-filter .5s ease;
        }
        .nb-header.nb-scrolled {
          background: rgba(12,11,10,0.82);
          backdrop-filter: blur(18px) saturate(1.4);
          -webkit-backdrop-filter: blur(18px) saturate(1.4);
        }
        /* No border — just a very subtle gold shadow line */
        .nb-header.nb-scrolled::after {
          content: '';
          position: absolute;
          left: 0; right: 0; bottom: 0;
          height: 1px;
          background: linear-gradient(to right, transparent, rgba(196,150,74,.25), transparent);
        }

        /* ── Inner row ── */
        .nb-inner {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 40px;
          height: 76px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 32px;
        }

        /* ── Logo ── */
        .nb-logo {
          display: flex;
          align-items: center;
          gap: 12px;
          text-decoration: none;
          flex-shrink: 0;
        }
        .nb-logo-mark {
          position: relative;
          width: 38px;
          height: 38px;
          flex-shrink: 0;
        }
        .nb-logo-ring {
          position: absolute;
          inset: 0;
          border-radius: 50%;
          border: .75px solid rgba(196,150,74,.45);
          transition: border-color .35s, transform .6s cubic-bezier(.22,1,.36,1);
        }
        .nb-logo:hover .nb-logo-ring {
          border-color: rgba(196,150,74,.9);
          transform: rotate(45deg);
        }
        .nb-logo-ring-inner {
          position: absolute;
          inset: 6px;
          border-radius: 50%;
          border: .5px solid rgba(196,150,74,.2);
          transition: opacity .35s;
        }
        .nb-logo:hover .nb-logo-ring-inner { opacity: 0; }
        .nb-logo-icon {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--nb-gold);
        }
        .nb-logo-icon svg {
          width: 14px;
          height: 14px;
          transition: transform .5s cubic-bezier(.22,1,.36,1);
        }
        .nb-logo:hover .nb-logo-icon svg { transform: rotate(-45deg); }

        .nb-logo-text { display: flex; flex-direction: column; gap: 2px; }
        .nb-logo-name {
          font-family: 'Jost', sans-serif;
          font-size: 15px;
          font-weight: 500;
          color: var(--nb-white);
          letter-spacing: .12em;
          line-height: 1;
          text-transform: uppercase;
        }
        .nb-logo-sub {
          font-size: 8.5px;
          letter-spacing: .42em;
          text-transform: uppercase;
          color: var(--nb-gold);
          opacity: .65;
          line-height: 1;
          font-weight: 300;
        }

        /* ── Desktop nav ── */
        .nb-nav {
          display: flex;
          align-items: center;
          gap: 36px;
          list-style: none;
          margin: 0; padding: 0;
        }
        .nb-nav a {
          position: relative;
          font-size: 11.5px;
          letter-spacing: .14em;
          text-transform: uppercase;
          font-weight: 400;
          color: var(--nb-muted);
          text-decoration: none;
          transition: color .3s;
          padding-bottom: 2px;
        }
        .nb-nav a::after {
          content: '';
          position: absolute;
          left: 0; right: 100%;
          bottom: 0;
          height: .5px;
          background: var(--nb-gold);
          transition: right .35s cubic-bezier(.22,1,.36,1);
        }
        .nb-nav a:hover,
        .nb-nav a.nb-active { color: var(--nb-white); }
        .nb-nav a:hover::after,
        .nb-nav a.nb-active::after { right: 0; }
        .nb-nav a.nb-active { color: var(--nb-gold); }
        .nb-nav a.nb-active::after { background: var(--nb-gold); opacity: .6; }

        /* ── Phone ── */
        .nb-phone {
          display: flex;
          align-items: center;
          gap: 8px;
          text-decoration: none;
          color: rgba(196,150,74,.7);
          font-size: 12px;
          letter-spacing: .1em;
          font-weight: 300;
          flex-shrink: 0;
          transition: color .3s;
          white-space: nowrap;
        }
        .nb-phone:hover { color: var(--nb-gold); }
        .nb-phone svg { width: 12px; height: 12px; }

        /* ── Mobile toggle ── */
        .nb-toggle {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
          color: var(--nb-white);
          padding: 6px;
          position: relative;
          z-index: 60;
        }
        .nb-toggle svg { width: 20px; height: 20px; display: block; }

        /* ── Mobile drawer ── */
        .nb-drawer {
          position: fixed;
          inset: 0;
          z-index: 55;
          pointer-events: none;
        }
        .nb-drawer-backdrop {
          position: absolute;
          inset: 0;
          background: rgba(8,7,6,.7);
          opacity: 0;
          backdrop-filter: blur(6px);
          -webkit-backdrop-filter: blur(6px);
          transition: opacity .4s ease;
        }
        .nb-drawer.nb-open .nb-drawer-backdrop {
          opacity: 1;
          pointer-events: all;
        }
        .nb-drawer-panel {
          position: absolute;
          top: 0; right: 0;
          width: min(320px, 85vw);
          height: 100%;
          background: #0C0B0A;
          padding: 100px 36px 48px;
          display: flex;
          flex-direction: column;
          transform: translateX(100%);
          transition: transform .5s cubic-bezier(.77,0,.18,1);
          pointer-events: all;
        }
        .nb-drawer.nb-open .nb-drawer-panel {
          transform: translateX(0);
        }

        /* Gold line on panel left edge */
        .nb-drawer-panel::before {
          content: '';
          position: absolute;
          top: 20%;
          bottom: 20%;
          left: 0;
          width: .5px;
          background: linear-gradient(to bottom, transparent, var(--nb-gold), transparent);
          opacity: .3;
        }

        .nb-drawer-links {
          display: flex;
          flex-direction: column;
          gap: 0;
          flex: 1;
        }
        .nb-drawer-link {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 18px 0;
          border-bottom: .5px solid rgba(196,150,74,.1);
          text-decoration: none;
          font-family: 'Jost', sans-serif;
          font-size: 13px;
          letter-spacing: .18em;
          text-transform: uppercase;
          font-weight: 300;
          color: rgba(250,248,244,.5);
          transition: color .3s, padding-left .3s;
        }
        .nb-drawer-link:hover,
        .nb-drawer-link.nb-active {
          color: var(--nb-white);
          padding-left: 6px;
        }
        .nb-drawer-link.nb-active { color: var(--nb-gold); }
        .nb-drawer-link-num {
          font-family: 'Playfair Display', serif;
          font-size: 11px;
          color: rgba(196,150,74,.3);
          font-style: italic;
        }

        .nb-drawer-phone {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-top: 36px;
          padding-top: 28px;
          border-top: .5px solid rgba(196,150,74,.12);
          text-decoration: none;
          color: rgba(196,150,74,.65);
          font-size: 13px;
          letter-spacing: .1em;
          font-weight: 300;
          transition: color .3s;
        }
        .nb-drawer-phone:hover { color: var(--nb-gold); }
        .nb-drawer-phone svg { width: 14px; height: 14px; }

        /* ── Responsive ── */
        @media (max-width: 1024px) {
          .nb-nav, .nb-phone { display: none; }
          .nb-toggle { display: flex; }
        }
        @media (max-width: 600px) {
          .nb-inner { padding: 0 20px; }
        }
      `}</style>

      <header className={`nb-header${scrolled ? " nb-scrolled" : ""}`}>
        <div className="nb-inner">
          {/* Logo */}
          <Link href="/" className="nb-logo">
            <Image
              src="/logoo.png"
              alt="CSJC Logo"
              width={60}
              height={60}
              className="nb-logo-image"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav>
            <ul className="nb-nav">
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className={pathname === href ? "nb-active" : ""}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Phone */}
          <a href="tel:2014511599" className="nb-phone">
            <Phone />
            <span>(201) 451-1599</span>
          </a>

          {/* Mobile toggle */}
          <button
            className="nb-toggle"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      {/* Mobile drawer */}
      <div className={`nb-drawer${open ? " nb-open" : ""}`}>
        <div className="nb-drawer-backdrop" onClick={() => setOpen(false)} />
        <div className="nb-drawer-panel">
          <div className="nb-drawer-links">
            {navLinks.map(({ href, label }, i) => (
              <Link
                key={href}
                href={href}
                className={`nb-drawer-link${pathname === href ? " nb-active" : ""}`}
                onClick={() => setOpen(false)}
              >
                <span>{label}</span>
                <span className="nb-drawer-link-num">0{i + 1}</span>
              </Link>
            ))}
          </div>
          <a href="tel:2014511599" className="nb-drawer-phone">
            <Phone />
            <span>(201) 451-1599</span>
          </a>
        </div>
      </div>
    </>
  );
}
