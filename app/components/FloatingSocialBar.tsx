"use client";

import { useState } from "react";

interface SocialLink {
  id: string;
  label: string;
  href: string;
  icon: React.ReactNode;
  color: string;
  hoverText: string;
  delay: string;
  bobDelay: string;
}

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white">
    <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073c0 6.027 4.388 11.024 10.125 11.927v-8.437H7.078v-3.49h3.047V9.413c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.971h-1.514c-1.491 0-1.956.93-1.956 1.887v2.263h3.328l-.532 3.49h-2.796v8.437C19.612 23.097 24 18.1 24 12.073z" />
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white">
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.75a8.18 8.18 0 004.78 1.52V6.81a4.85 4.85 0 01-1.01-.12z" />
  </svg>
);

const socialLinks: SocialLink[] = [
  {
    id: "facebook",
    label: "Facebook",
    href: "https://facebook.com",
    icon: <FacebookIcon />,
    color: "bg-[#1877F2]",
    hoverText: "text-[#1877F2]",
    delay: "animation-delay-[0ms]",
    bobDelay: "[animation-delay:0s]",
  },
  {
    id: "instagram",
    label: "Instagram",
    href: "https://instagram.com",
    icon: <InstagramIcon />,
    color: "bg-gradient-to-br from-[#f09433] via-[#dc2743] to-[#bc1888]",
    hoverText: "text-[#dc2743]",
    delay: "animation-delay-[100ms]",
    bobDelay: "[animation-delay:0.4s]",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    href: "https://linkedin.com",
    icon: <LinkedInIcon />,
    color: "bg-[#0A66C2]",
    hoverText: "text-[#0A66C2]",
    delay: "animation-delay-[200ms]",
    bobDelay: "[animation-delay:0.8s]",
  },
  {
    id: "tiktok",
    label: "TikTok",
    href: "https://tiktok.com",
    icon: <TikTokIcon />,
    color: "bg-[#010101]",
    hoverText: "text-[#555]",
    delay: "animation-delay-[300ms]",
    bobDelay: "[animation-delay:1.2s]",
  },
];

const pulseColors: Record<string, string> = {
  facebook: "ring-[#1877F2]",
  instagram: "ring-[#dc2743]",
  linkedin: "ring-[#0A66C2]",
  tiktok: "ring-[#555]",
};

function SocialButton({ link }: { link: SocialLink }) {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={link.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={link.label}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`
        group flex items-center cursor-pointer
        animate-float ${link.bobDelay}
        animate-pop-in ${link.delay}
      `}
      style={{ animationFillMode: "both" }}
    >
      {/* Icon circle */}
      <div
        className={`
          relative w-12 h-12 rounded-full flex items-center justify-center z-10
          ${link.color}
          transition-all duration-300 ease-out
          ${hovered ? "scale-110 -rotate-6 shadow-xl" : "scale-100 rotate-0 shadow-md"}
        `}
      >
        {/* Pulse ring */}
        <span
          className={`
            absolute inset-0 rounded-full ring-2 ${pulseColors[link.id]}
            ${hovered ? "animate-ping opacity-60" : "opacity-0"}
          `}
        />
        {link.icon}
      </div>

      {/* Label pill */}
      <div
        className={`
          -ml-4 h-9 flex items-center pl-6 pr-4 z-0
          bg-white dark:bg-zinc-900
          border border-zinc-200 dark:border-zinc-700
          rounded-r-full
          text-sm font-semibold tracking-wide
          ${link.hoverText}
          transition-all duration-300 ease-out origin-left
          ${hovered ? "opacity-100 scale-x-100 translate-x-0" : "opacity-0 scale-x-0"}
          shadow-sm
        `}
        style={{ transformOrigin: "left center" }}
      >
        {link.label}
      </div>
    </a>
  );
}

export default function FloatingSocialBar() {
  return (
    <div className="fixed bottom-8 left-6 z-50 flex flex-col gap-3">
      {socialLinks.map((link) => (
        <SocialButton key={link.id} link={link} />
      ))}
    </div>
  );
}