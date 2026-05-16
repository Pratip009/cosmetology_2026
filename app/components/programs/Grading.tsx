import React from 'react'
const grading = [
  { range: "93–100", grade: "Excellent" },
  { range: "85–92", grade: "Very Good" },
  { range: "75–84", grade: "Satisfactory" },
  { range: "74 and Below", grade: "Unsatisfactory" },
];
const Grading = () => {
  return (
    <section className="py-24 px-6 bg-charcoal">
        <div className="max-w-3xl mx-auto scroll-reveal opacity-0 translate-y-8">
          <div className="text-center mb-12">
            <p className="text-gold/60 text-xs tracking-[0.4em] uppercase mb-4">
              Standards
            </p>
            <h2 className="font-display text-4xl text-warm-white font-light">
              Grading Scale
            </h2>
            <p className="text-warm-white/40 text-sm font-light mt-2">
              Applies to all programs
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {grading.map((g, i) => (
              <div
                key={i}
                className={`glass-warm p-6 text-center rounded-sm ${i === grading.length - 1 ? "opacity-60" : ""}`}
              >
                <p className="font-display text-gold text-xl font-light mb-1">
                  {g.range}
                </p>
                <p className="text-warm-white/60 text-xs tracking-wider font-light">
                  {g.grade}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
  )
}

export default Grading
