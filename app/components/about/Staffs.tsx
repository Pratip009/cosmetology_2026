import { Users } from 'lucide-react'
import React from 'react'


const staff = [
  { name: "Mahek Rizwan", title: "Director & Owner" },
  { name: "Kaif Rizwan", title: "Administrator" },
  { name: "Zeba Fatima", title: "Co-Director" },
  {
    name: "Adrian Carillo",
    title: "Supervising Teacher",
    license: "Lic. #32WB00255100",
  },
];
const Staffs = () => {
  return (
    <section className="py-28 px-6 bg-warm-white">
        <div className="max-w-7xl mx-auto">
          <div className="scroll-reveal opacity-0 translate-y-8 mb-16 text-center">
            <p className="text-gold/60 text-xs tracking-[0.4em] uppercase mb-4">
              Leadership
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-charcoal font-light">
              Our Team
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {staff.map((member, i) => (
              <div
                key={i}
                className="scroll-reveal opacity-0 translate-y-8 card-hover bg-white border border-brand/10 p-8 text-center rounded-sm"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-brand to-brand-light mx-auto mb-5 flex items-center justify-center">
                  <Users className="w-6 h-6 text-warm-white" />
                </div>
                <h3 className="font-display text-lg text-charcoal font-semibold mb-1">
                  {member.name}
                </h3>
                <p className="text-brand/70 text-xs tracking-wide font-light mb-1">
                  {member.title}
                </p>
                {member.license && (
                  <p className="text-charcoal/30 text-xs font-light">
                    {member.license}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
  )
}

export default Staffs
