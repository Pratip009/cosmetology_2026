import { CheckCircle } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { ArrowRight, Award, Clock, BookOpen } from "lucide-react";
const WhyCsjc = () => {
  return (
    <section className="py-32 px-6 bg-charcoal relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(121,100,77,0.15)_0%,transparent_70%)]" />
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="scroll-reveal opacity-0 translate-y-8">
              <p className="text-gold/60 text-xs tracking-[0.4em] uppercase mb-6">
                Why Choose Us
              </p>
              <h2 className="font-display text-5xl md:text-6xl text-warm-white font-light leading-tight mb-8">
                Preparing Students
                <br />
                <span className="text-gradient">for Real Careers</span>
              </h2>
              <p className="text-warm-white/50 font-light leading-relaxed mb-8">
                Our curriculum builds a strong foundation before students move
                on to clinical learning — focusing on skills that make graduates
                marketable and prepared for their career.
              </p>
              <div className="flex flex-col gap-4">
                {[
                  "Hands-on mannequin and live client experience",
                  "Audio visual aids and guest artists",
                  "Job placement services at no charge",
                  "Career planning throughout your career",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                    <span className="text-warm-white/60 text-sm font-light">
                      {item}
                    </span>
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
                {
                  icon: BookOpen,
                  title: "Two-Phase Learning",
                  sub: "Junior pre-clinical + Senior clinic",
                },
                {
                  icon: Award,
                  title: "NJ Approved",
                  sub: "N.J.A.C. 13:28 compliant",
                },
                {
                  icon: CheckCircle,
                  title: "75% Min Score",
                  sub: "Rigorous academic standards",
                },
                {
                  icon: Clock,
                  title: "Flexible Schedules",
                  sub: "Full-time & part-time options",
                },
              ].map(({ icon: Icon, title, sub }, i) => (
                <div key={i} className="glass-warm p-6 rounded-sm card-hover">
                  <Icon className="w-5 h-5 text-gold mb-4" />
                  <h4 className="text-warm-white text-sm font-medium mb-1">
                    {title}
                  </h4>
                  <p className="text-warm-white/40 text-xs font-light leading-relaxed">
                    {sub}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
  )
}

export default WhyCsjc
