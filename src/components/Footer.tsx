import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-[#e8e0d5] mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="text-xl font-light tracking-[0.3em] uppercase mb-4">
              Belle Martinée
            </h3>
            <p className="text-sm text-[#a89880] leading-relaxed">
              Tidlöst mode för den moderna kvinnan. Skapad med kärlek och hållbarhet i fokus.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs tracking-widest uppercase mb-4 text-[#c8a87a]">
              Navigation
            </h4>
            <ul className="space-y-2">
              {[
                { href: "/", label: "Hem" },
                { href: "/nyheter", label: "Nyheter" },
                { href: "/shop", label: "Butik" },
                { href: "/om-oss", label: "Om oss" },
                { href: "/kontakt", label: "Kontakt" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#a89880] hover:text-[#c8a87a] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kundservice */}
          <div>
            <h4 className="text-xs tracking-widest uppercase mb-4 text-[#c8a87a]">
              Kundservice
            </h4>
            <ul className="space-y-2">
              {[
                { href: "/villkor", label: "Köpvillkor & Ångerrätt" },
                { href: "/gdpr", label: "Integritetspolicy (GDPR)" },
                { href: "/cookies", label: "Cookiepolicy" },
                { href: "/kontakt", label: "Kontakta oss" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#a89880] hover:text-[#c8a87a] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kontakt */}
          <div>
            <h4 className="text-xs tracking-widest uppercase mb-4 text-[#c8a87a]">
              Kontakt
            </h4>
            <address className="not-italic text-sm text-[#a89880] space-y-2">
              <p>Belle Martinée AB</p>
              <p>Storgatan 1</p>
              <p>111 22 Stockholm</p>
              <p>Sverige</p>
              <p className="pt-2">
                <a
                  href="mailto:info@bellemartinee.se"
                  className="hover:text-[#c8a87a] transition-colors"
                >
                  info@bellemartinee.se
                </a>
              </p>
              <p>
                <a
                  href="tel:+46701234567"
                  className="hover:text-[#c8a87a] transition-colors"
                >
                  070-123 45 67
                </a>
              </p>
            </address>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-[#333] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-[#666] text-center md:text-left">
            © {new Date().getFullYear()} Belle Martinée AB. Org.nr: 556123-4567. Alla rättigheter förbehålls.
          </p>
          <p className="text-xs text-[#666] text-center md:text-right">
            Moms ingår i alla priser (25% moms enligt Mervärdesskattelagen).
          </p>
        </div>
      </div>
    </footer>
  );
}
