'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Phone, Scissors, Menu, X } from 'lucide-react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/programs', label: 'Programs' },
  { href: '/tuition', label: 'Tuition & Fees' },
  { href: '/licensing', label: 'Licensing & Policies' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'glass-dark shadow-[0_4px_40px_rgba(0,0,0,0.4)]' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-full border border-gold/40 flex items-center justify-center group-hover:border-gold transition-colors duration-300">
            <Scissors className="w-4 h-4 text-gold" />
          </div>
          <div>
            <span className="font-display text-warm-white text-lg font-semibold tracking-wide leading-none">CSJC</span>
            <p className="text-[10px] text-gold/60 tracking-[0.2em] uppercase leading-none mt-0.5">Jersey City</p>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`text-sm tracking-wide hover-underline transition-colors duration-300 ${
                pathname === href ? 'text-gold' : 'text-warm-white/70 hover:text-warm-white'
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Phone */}
        <a
          href="tel:2014511599"
          className="hidden lg:flex items-center gap-2 text-sm text-gold/80 hover:text-gold transition-colors"
        >
          <Phone className="w-3.5 h-3.5" />
          <span className="font-light tracking-wider">(201) 451-1599</span>
        </a>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden text-warm-white p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          open ? 'max-h-screen' : 'max-h-0'
        }`}
      >
        <div className="glass-dark border-t border-gold/10 px-6 py-6 flex flex-col gap-5">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className={`text-sm tracking-wide font-light ${
                pathname === href ? 'text-gold' : 'text-warm-white/70'
              }`}
            >
              {label}
            </Link>
          ))}
          <a href="tel:2014511599" className="flex items-center gap-2 text-gold/80 text-sm mt-2">
            <Phone className="w-3.5 h-3.5" />
            (201) 451-1599
          </a>
        </div>
      </div>
    </header>
  );
}
