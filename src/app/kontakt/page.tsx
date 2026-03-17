import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontakt – Belle Martinée",
  description: "Kontakta Belle Martinée för frågor om beställningar, returer eller samarbeten.",
};

export default function KontaktPage() {
  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <div className="bg-[#f5ede0] py-16 md:py-24 text-center">
        <p className="text-xs tracking-[0.4em] uppercase text-[#c8a87a] mb-4">Vi hjälper dig</p>
        <h1 className="text-3xl md:text-5xl font-light tracking-wide text-[#1a1a1a] mb-4">Kontakta oss</h1>
        <div className="w-16 h-0.5 bg-[#c8a87a] mx-auto"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
          {/* Contact Form */}
          <div>
            <h2 className="text-xl font-light text-[#1a1a1a] mb-6 tracking-wide">Skicka ett meddelande</h2>
            <form className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="forename" className="block text-xs tracking-widest uppercase text-[#666] mb-2">
                    Förnamn *
                  </label>
                  <input
                    id="forename"
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-[#e8e0d5] bg-white text-[#1a1a1a] text-sm focus:outline-none focus:border-[#c8a87a] transition-colors"
                    placeholder="Anna"
                  />
                </div>
                <div>
                  <label htmlFor="surname" className="block text-xs tracking-widest uppercase text-[#666] mb-2">
                    Efternamn *
                  </label>
                  <input
                    id="surname"
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-[#e8e0d5] bg-white text-[#1a1a1a] text-sm focus:outline-none focus:border-[#c8a87a] transition-colors"
                    placeholder="Svensson"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-xs tracking-widest uppercase text-[#666] mb-2">
                  E-post *
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  className="w-full px-4 py-3 border border-[#e8e0d5] bg-white text-[#1a1a1a] text-sm focus:outline-none focus:border-[#c8a87a] transition-colors"
                  placeholder="anna@exempel.se"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-xs tracking-widest uppercase text-[#666] mb-2">
                  Ämne *
                </label>
                <select
                  id="subject"
                  required
                  className="w-full px-4 py-3 border border-[#e8e0d5] bg-white text-[#1a1a1a] text-sm focus:outline-none focus:border-[#c8a87a] transition-colors"
                >
                  <option value="">Välj ämne</option>
                  <option value="order">Fråga om beställning</option>
                  <option value="return">Retur / Ångerrätt</option>
                  <option value="product">Produktfråga</option>
                  <option value="gdpr">Dataskydd (GDPR)</option>
                  <option value="collaboration">Samarbete</option>
                  <option value="other">Övrigt</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-xs tracking-widest uppercase text-[#666] mb-2">
                  Meddelande *
                </label>
                <textarea
                  id="message"
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-[#e8e0d5] bg-white text-[#1a1a1a] text-sm focus:outline-none focus:border-[#c8a87a] transition-colors resize-none"
                  placeholder="Skriv ditt meddelande här..."
                ></textarea>
              </div>
              <div className="flex items-start gap-3">
                <input
                  id="gdpr-consent"
                  type="checkbox"
                  required
                  className="mt-1 w-4 h-4 border-[#e8e0d5] text-[#c8a87a]"
                />
                <label htmlFor="gdpr-consent" className="text-xs text-[#666] leading-relaxed">
                  Jag godkänner att Belle Martinée behandlar mina personuppgifter för att besvara mitt meddelande
                  i enlighet med{" "}
                  <a href="/gdpr" className="underline hover:text-[#c8a87a]">
                    integritetspolicyn (GDPR)
                  </a>
                  . *
                </label>
              </div>
              <button
                type="submit"
                className="w-full px-8 py-4 bg-[#1a1a1a] text-white text-xs tracking-[0.3em] uppercase hover:bg-[#c8a87a] transition-colors"
              >
                Skicka meddelande
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-xl font-light text-[#1a1a1a] mb-6 tracking-wide">Kontaktuppgifter</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <span className="text-[#c8a87a] text-xl mt-0.5">📍</span>
                  <div>
                    <p className="text-sm font-medium text-[#1a1a1a] mb-1">Adress</p>
                    <address className="not-italic text-sm text-[#666]">
                      Belle Martinée AB<br />
                      Storgatan 1<br />
                      111 22 Stockholm<br />
                      Sverige
                    </address>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-[#c8a87a] text-xl mt-0.5">✉️</span>
                  <div>
                    <p className="text-sm font-medium text-[#1a1a1a] mb-1">E-post</p>
                    <a
                      href="mailto:info@bellemartinee.se"
                      className="text-sm text-[#666] hover:text-[#c8a87a] transition-colors"
                    >
                      info@bellemartinee.se
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-[#c8a87a] text-xl mt-0.5">📞</span>
                  <div>
                    <p className="text-sm font-medium text-[#1a1a1a] mb-1">Telefon</p>
                    <a
                      href="tel:+46701234567"
                      className="text-sm text-[#666] hover:text-[#c8a87a] transition-colors"
                    >
                      070-123 45 67
                    </a>
                    <p className="text-xs text-[#999] mt-1">Mån–Fre 09:00–17:00</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#f5ede0] p-6">
              <h3 className="text-sm font-semibold text-[#1a1a1a] mb-3 tracking-wide">Ångerrätt & Returer</h3>
              <p className="text-xs text-[#666] leading-relaxed mb-3">
                Enligt <strong>Distansavtalslagen</strong> har du 14 dagars ångerrätt på alla köp.
                För att utöva din ångerrätt, kontakta oss via formuläret eller e-post med ditt
                ordernummer och anledning till retur.
              </p>
              <a
                href="/villkor"
                className="text-xs tracking-widest uppercase text-[#c8a87a] hover:underline"
              >
                Läs hela returpolicyn →
              </a>
            </div>

            <div className="bg-[#f5ede0] p-6">
              <h3 className="text-sm font-semibold text-[#1a1a1a] mb-3 tracking-wide">Företagsinformation</h3>
              <dl className="text-xs text-[#666] space-y-1">
                <div className="flex gap-4">
                  <dt className="font-medium text-[#1a1a1a] w-28">Företag:</dt>
                  <dd>Belle Martinée AB</dd>
                </div>
                <div className="flex gap-4">
                  <dt className="font-medium text-[#1a1a1a] w-28">Org.nr:</dt>
                  <dd>556123-4567</dd>
                </div>
                <div className="flex gap-4">
                  <dt className="font-medium text-[#1a1a1a] w-28">Moms nr:</dt>
                  <dd>SE556123456701</dd>
                </div>
                <div className="flex gap-4">
                  <dt className="font-medium text-[#1a1a1a] w-28">Säte:</dt>
                  <dd>Stockholm</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
