"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

const programs = [
  {
    num: "01",
    name: "Cosmetology",
    hours: "1,200",
    desc: "Art, science, and business of professional beauty care — hair, nails, and skin in a full-service salon environment.",
    img: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=700&q=80",
  },
  {
    num: "02",
    name: "Barbering",
    hours: "900",
    desc: "Comprehensive barbering using the Milady method — cutting, shaving, chemical services, and hair color.",
    img: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=700&q=80",
  },
  {
    num: "03",
    name: "Nail Technology",
    hours: "300",
    desc: "Manicuring, pedicuring, nail tips, wraps, gels, sculptured nails, nail art, and hair removal.",
    img: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=700&q=80",
  },
  {
    num: "04",
    name: "Teacher Training",
    hours: "600",
    desc: "Prepares licensed cosmetologists to teach. CSJC exceeds the NJ minimum by 100 additional hours.",
    img: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=700&q=80",
  },
  {
    num: "05",
    name: "Refresher",
    hours: "250",
    desc: "For licensed professionals looking to sharpen existing skills or learn new techniques.",
    img: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=700&q=80",
  },
];

export default function ProgramsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const els = sectionRef.current?.querySelectorAll(".ps-reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("ps-revealed");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.08 }
    );
    els?.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;1,400;1,500&family=Jost:wght@300;400;500&display=swap');

        :root {
          --ps-gold:   #B8935A;
          --ps-gold2:  #D4AE7A;
          --ps-gold3:  #F2E8D5;
          --ps-ink:    #111010;
          --ps-ink2:   #3A3A3A;
          --ps-muted:  #8E8E8E;
          --ps-border: rgba(0,0,0,0.08);
        }

        /* ── Fonts ── */
        .font-playfair { font-family: 'Playfair Display', serif; }
        .font-jost     { font-family: 'Jost', sans-serif; }

        /* ── Scroll reveal ── */
        .ps-reveal {
          opacity: 0;
          transform: translateY(40px);
          transition: opacity .9s cubic-bezier(.22,1,.36,1),
                      transform .9s cubic-bezier(.22,1,.36,1);
        }
        .ps-revealed { opacity: 1; transform: translateY(0); }

        /* ── Eyebrow lines ── */
        .ps-eyebrow::before,
        .ps-eyebrow::after {
          content: '';
          width: 32px;
          height: .5px;
          background: var(--ps-gold);
          opacity: .5;
          display: block;
        }

        /* ── Hover warm wash ── */
        .ps-item::before {
          content: '';
          position: absolute;
          inset: 0;
          background: var(--ps-gold3);
          opacity: 0;
          transition: opacity .5s ease;
          z-index: 1;
        }
        .ps-item:hover::before { opacity: 1; }

        /* ── Image reveal ── */
        .ps-img-wrap {
          clip-path: inset(0 100% 0 0);
          transition: clip-path .7s cubic-bezier(.77,0,.18,1);
        }
        .ps-item:hover .ps-img-wrap {
          clip-path: inset(0 0% 0 0);
        }

        /* ── Description slide-down ── */
        .ps-desc {
          max-height: 0;
          overflow: hidden;
          opacity: 0;
          transition: max-height .55s cubic-bezier(.77,0,.18,1),
                      opacity .4s ease .06s;
        }
        .ps-item:hover .ps-desc {
          max-height: 80px;
          opacity: 1;
        }

        /* ── Arrow spin ── */
        .ps-arrow {
          transition: border-color .3s, background .3s,
                      transform .5s cubic-bezier(.22,1,.36,1);
        }
        .ps-item:hover .ps-arrow {
          border-color: var(--ps-gold);
          background: var(--ps-gold);
          transform: rotate(-45deg);
        }
        .ps-arrow svg { transition: stroke .3s; }
        .ps-item:hover .ps-arrow svg { stroke: #fff; }

        /* ── Name color ── */
        .ps-name { transition: color .35s ease; }
        .ps-item:hover .ps-name { color: var(--ps-gold); }

        /* ── Mobile: disable hover image reveal & desc expand ── */
        @media (max-width: 639px) {
          .ps-img-wrap { display: none; }
          .ps-item:hover .ps-desc {
            max-height: 0;
            opacity: 0;
          }
        }
      `}</style>

      <section
        ref={sectionRef}
        className="font-jost relative overflow-hidden bg-white py-16 sm:py-24 lg:py-28"
      >
        {/* ── Header ── */}
        <div className="ps-reveal mx-auto mb-14 max-w-xl px-6 text-center sm:mb-16 lg:mb-20">
          {/* Eyebrow */}
          <p
            className="ps-eyebrow mb-4 inline-flex items-center justify-center gap-3.5"
            style={{
              fontSize: "10px",
              letterSpacing: ".55em",
              textTransform: "uppercase",
              color: "var(--ps-gold)",
              fontWeight: 400,
            }}
          >
            Explore
          </p>

          {/* Title */}
          <h2
            className="font-playfair m-0 leading-none tracking-tight"
            style={{
              fontSize: "clamp(38px, 7vw, 72px)",
              fontWeight: 400,
              color: "var(--ps-ink)",
              letterSpacing: "-.02em",
            }}
          >
            Our{" "}
            <span className="italic" style={{ color: "var(--ps-gold)" }}>
              Programs
            </span>
          </h2>

          {/* Subtitle */}
          <p
            className="mx-auto mt-5 max-w-sm leading-loose"
            style={{
              fontSize: "12.5px",
              color: "var(--ps-muted)",
              fontWeight: 300,
            }}
          >
            All programs comply with N.J.A.C.&nbsp;13:28 regulations.
            Full-time and part-time schedules available.
          </p>
        </div>

        {/* ── Program list ── */}
        <div
          className="ps-reveal ps-list w-full"
          style={{
            borderTop: ".5px solid var(--ps-border)",
            transitionDelay: ".15s",
          }}
        >
          {programs.map((prog, i) => (
            <Link
              key={i}
              href="/programs"
              aria-label={`${prog.name} – ${prog.hours} hours`}
              className="ps-item group relative flex cursor-pointer items-center overflow-hidden no-underline"
              style={{ borderBottom: ".5px solid var(--ps-border)" }}
            >
              {/* ── Image slide-in (desktop only) ── */}
              <div
                className="ps-img-wrap pointer-events-none absolute right-0 top-0 hidden h-full w-40 sm:block sm:w-52 md:w-72 lg:w-80"
                style={{ zIndex: 2 }}
              >
                <img
                  src={prog.img}
                  alt=""
                  loading="lazy"
                  className="block h-full w-full object-cover"
                  style={{ filter: "brightness(.88) contrast(1.05)" }}
                />
                {/* Fade overlay */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to right, rgba(242,232,213,.95) 0%, rgba(242,232,213,.2) 55%, transparent 100%)",
                  }}
                />
              </div>

              {/* ── Layout: num · info · meta ── */}
              <div
                className="relative flex w-full items-center gap-0 px-5 sm:px-8 md:px-10"
                style={{ zIndex: 3 }}
              >
                {/* Number */}
                <span
                  className="font-playfair mr-4 hidden shrink-0 sm:mr-6 sm:block md:mr-8"
                  style={{
                    fontSize: "13px",
                    fontWeight: 400,
                    color: "var(--ps-gold)",
                    opacity: .6,
                    letterSpacing: ".25em",
                  }}
                >
                  {prog.num}
                </span>

                {/* Info */}
                <div className="flex-1 py-6 sm:py-7">
                  {/* Mobile number badge */}
                  <span
                    className="font-playfair mb-1 block sm:hidden"
                    style={{
                      fontSize: "11px",
                      color: "var(--ps-gold)",
                      opacity: .6,
                      letterSpacing: ".25em",
                    }}
                  >
                    {prog.num}
                  </span>

                  <span
                    className="ps-name font-playfair block leading-snug"
                    style={{
                      fontSize: "clamp(18px, 3vw, 24px)",
                      fontWeight: 400,
                      color: "var(--ps-ink)",
                    }}
                  >
                    {prog.name}
                  </span>
                  <p
                    className="ps-desc mt-1.5"
                    style={{
                      fontSize: "12.5px",
                      color: "var(--ps-muted)",
                      lineHeight: 1.85,
                      fontWeight: 300,
                      maxWidth: "520px",
                    }}
                  >
                    {prog.desc}
                  </p>
                </div>

                {/* Meta: hours + arrow */}
                <div className="ml-4 flex shrink-0 items-center gap-3 sm:ml-6 sm:gap-5">
                  {/* Hours — hidden on very small screens */}
                  <div className="hidden flex-col items-end gap-0.5 xs:flex sm:flex">
                    <span
                      className="font-playfair leading-none"
                      style={{
                        fontSize: "clamp(20px, 3vw, 28px)",
                        fontWeight: 400,
                        color: "var(--ps-ink)",
                      }}
                    >
                      {prog.hours}
                    </span>
                    <span
                      style={{
                        fontSize: "9px",
                        letterSpacing: ".35em",
                        textTransform: "uppercase",
                        color: "var(--ps-muted)",
                      }}
                    >
                      Hours
                    </span>
                  </div>

                  {/* Arrow circle */}
                  <div
                    className="ps-arrow flex h-8 w-8 shrink-0 items-center justify-center rounded-full sm:h-9 sm:w-9"
                    style={{ border: ".5px solid rgba(0,0,0,.15)" }}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-3 w-3 sm:h-3.5 sm:w-3.5"
                      style={{ stroke: "var(--ps-ink2)" }}
                    >
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="13 6 19 12 13 18" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* ── Footer stats ── */}
        <div
          className="ps-reveal flex flex-wrap items-center justify-center gap-6 px-6 pt-12 sm:gap-10 sm:pt-14 md:gap-14 lg:pt-16"
          style={{ transitionDelay: ".4s" }}
        >
          {[
            { val: "5",  label: "Programs" },
            { val: "30", label: "Hrs / wk Full-time" },
            { val: "16", label: "Hrs / wk Part-time" },
            { val: "NJ", label: "N.J.A.C. 13:28" },
          ].map((stat, i, arr) => (
            <div key={i} className="flex items-center gap-6 sm:gap-10 md:gap-14">
              <div className="text-center">
                <div
                  className="font-playfair leading-none"
                  style={{
                    fontSize: "clamp(28px, 4vw, 36px)",
                    fontWeight: 400,
                    color: "var(--ps-ink)",
                  }}
                >
                  {stat.val}
                </div>
                <span
                  className="mt-1.5 block"
                  style={{
                    fontSize: "9px",
                    letterSpacing: ".38em",
                    textTransform: "uppercase",
                    color: "var(--ps-muted)",
                  }}
                >
                  {stat.label}
                </span>
              </div>
              {i < arr.length - 1 && (
                <div
                  className="hidden h-10 sm:block"
                  style={{ width: ".5px", background: "rgba(0,0,0,.1)" }}
                />
              )}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}