import { Phone, MapPin, Globe, AtSign } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative border-t border-gold/10">
      <div className="absolute inset-0 -z-10 overflow-hidden">
  <Image
    src="/footer.png"
    alt="Footer background"
    fill
    priority
    sizes="100vw"
    className="object-cover object-center"
    quality={100}
  />

  <div className="absolute inset-0 bg-black/30" />
</div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          
          {/* Logo */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-18 h-18 flex items-center justify-center overflow-hidden">
                <Image
                  src="/logoo.png"
                  alt="CSJC Logo"
                  width={72}
                  height={72}
                  className="object-cover"
                />
              </div>
            </div>

            <p className="text-warm-white/40 text-sm font-light leading-relaxed">
              Cosmetology School of Jersey City. NJ State Board Approved.
            </p>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-gold/80 text-xs tracking-[0.2em] uppercase mb-5">
              Programs
            </h4>

            <div className="flex flex-col gap-3">
              {[
                "Cosmetology",
                "Barbering",
                "Nail Technology",
                "Teacher Training",
                "Refresher",
              ].map((p) => (
                <Link
                  key={p}
                  href="/programs"
                  className="text-warm-white/50 hover:text-warm-white text-sm transition-colors hover-underline"
                >
                  {p}
                </Link>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-gold/80 text-xs tracking-[0.2em] uppercase mb-5">
              Navigate
            </h4>

            <div className="flex flex-col gap-3">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About Us" },
                { href: "/tuition", label: "Tuition & Fees" },
                { href: "/licensing", label: "Licensing" },
                { href: "/contact", label: "Contact" },
              ].map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="text-warm-white/50 hover:text-warm-white text-sm transition-colors hover-underline"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-gold/80 text-xs tracking-[0.2em] uppercase mb-5">
              Contact
            </h4>

            <div className="flex flex-col gap-4">
              
              <a
                href="tel:2014511599"
                className="flex items-center gap-3 text-warm-white/50 hover:text-warm-white text-sm transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-gold/60" />
                (201) 451-1599
              </a>

              <div className="flex items-center gap-3 text-warm-white/50 text-sm">
                <MapPin className="w-3.5 h-3.5 text-gold/60 flex-shrink-0" />
                Jersey City, New Jersey
              </div>

              <a
                href="https://www.csjcnj.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-warm-white/50 hover:text-warm-white text-sm transition-colors"
              >
                <Globe className="w-3.5 h-3.5 text-gold/60" />
                www.csjcnj.com
              </a>

              <a
                href="https://instagram.com/cosmetologyschoolofjerseycity"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-warm-white/50 hover:text-warm-white text-sm transition-colors"
              >
                <AtSign className="w-3.5 h-3.5 text-gold/60" />
                @cosmetologyschoolofjerseycity
              </a>
            </div>
          </div>
        </div>

        <div className="divider-gold mb-6" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-warm-white/30 text-xs tracking-wide">
          <p>
            Cosmetology School of Jersey City · Student Catalog 2025–2026
          </p>

          <p>
            NJ State Board of Cosmetology &amp; Hairstyling Approved · N.J.A.C.
            13:28
          </p>
        </div>
      </div>
    </footer>
  );
}