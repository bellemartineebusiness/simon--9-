import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cookiepolicy – Belle Martinée",
  description: "Läs om hur Belle Martinée använder cookies på sin webbplats i enlighet med ePrivacydirektivet.",
};

export default function CookiesPage() {
  const lastUpdated = "1 januari 2025";

  return (
    <div className="min-h-screen">
      <div className="bg-[#f5ede0] py-16 md:py-20 text-center">
        <p className="text-xs tracking-[0.4em] uppercase text-[#c8a87a] mb-4">Rättslig information</p>
        <h1 className="text-3xl md:text-4xl font-light tracking-wide text-[#1a1a1a] mb-4">
          Cookiepolicy
        </h1>
        <p className="text-sm text-[#999]">Senast uppdaterad: {lastUpdated}</p>
        <div className="w-16 h-0.5 bg-[#c8a87a] mx-auto mt-4"></div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-[#f5ede0] border-l-4 border-[#c8a87a] p-6 mb-10">
          <p className="text-sm text-[#555] leading-relaxed">
            Denna cookiepolicy beskriver hur Belle Martinée AB använder cookies och liknande
            spårningstekniker på vår webbplats. Vi följer{" "}
            <strong>ePrivacydirektivet (2002/58/EG)</strong> och svensk implementering i
            lagen om elektronisk kommunikation.
          </p>
        </div>

        <section className="mb-10">
          <h2 className="text-xl font-medium text-[#1a1a1a] mb-4 pb-2 border-b border-[#e8e0d5]">
            Vad är cookies?
          </h2>
          <p className="text-[#555] text-sm leading-relaxed mb-4">
            Cookies är små textfiler som lagras på din enhet (dator, mobil eller surfplatta) när
            du besöker en webbplats. De används för att komma ihåg dina inställningar, förbättra
            din upplevelse och analysera hur webbplatsen används.
          </p>
          <p className="text-[#555] text-sm leading-relaxed">
            Det finns också liknande tekniker som lokal lagring (localStorage), sessioncookies och
            pixlar – dessa fungerar på liknande sätt och omfattas av samma regler.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-medium text-[#1a1a1a] mb-4 pb-2 border-b border-[#e8e0d5]">
            Vilka cookies använder vi?
          </h2>

          <div className="space-y-6">
            <div className="border border-[#e8e0d5] p-6">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-sm font-semibold text-[#1a1a1a]">🔒 Nödvändiga cookies</h3>
                <span className="text-xs bg-[#1a1a1a] text-white px-3 py-1">Alltid aktiv</span>
              </div>
              <p className="text-xs text-[#666] leading-relaxed mb-3">
                Dessa cookies är nödvändiga för att webbplatsen ska fungera korrekt. De lagrar
                sessionsinformation, varukorgsinnehåll och säkerhetsinformation. De kräver inte
                ditt samtycke.
              </p>
              <table className="w-full text-xs border-collapse">
                <thead>
                  <tr className="bg-[#f5f5f5]">
                    <th className="text-left p-2 border border-[#e8e0d5]">Cookie</th>
                    <th className="text-left p-2 border border-[#e8e0d5]">Syfte</th>
                    <th className="text-left p-2 border border-[#e8e0d5]">Varaktighet</th>
                  </tr>
                </thead>
                <tbody className="text-[#555]">
                  <tr>
                    <td className="p-2 border border-[#e8e0d5] font-mono">session_id</td>
                    <td className="p-2 border border-[#e8e0d5]">Hanterar din inloggningssession</td>
                    <td className="p-2 border border-[#e8e0d5]">Session</td>
                  </tr>
                  <tr>
                    <td className="p-2 border border-[#e8e0d5] font-mono">cart_token</td>
                    <td className="p-2 border border-[#e8e0d5]">Sparar innehållet i din varukorg</td>
                    <td className="p-2 border border-[#e8e0d5]">14 dagar</td>
                  </tr>
                  <tr>
                    <td className="p-2 border border-[#e8e0d5] font-mono">cookie-consent</td>
                    <td className="p-2 border border-[#e8e0d5]">Sparar dina cookieinställningar</td>
                    <td className="p-2 border border-[#e8e0d5]">12 månader</td>
                  </tr>
                  <tr>
                    <td className="p-2 border border-[#e8e0d5] font-mono">csrf_token</td>
                    <td className="p-2 border border-[#e8e0d5]">Skyddar mot CSRF-attacker</td>
                    <td className="p-2 border border-[#e8e0d5]">Session</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="border border-[#e8e0d5] p-6">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-sm font-semibold text-[#1a1a1a]">📊 Analyticscookies</h3>
                <span className="text-xs bg-[#f5ede0] text-[#c8a87a] border border-[#c8a87a] px-3 py-1">
                  Kräver samtycke
                </span>
              </div>
              <p className="text-xs text-[#666] leading-relaxed mb-3">
                Dessa cookies hjälper oss att förstå hur besökare använder vår webbplats.
                Informationen är anonym och används för att förbättra webbplatsen.
              </p>
              <table className="w-full text-xs border-collapse">
                <thead>
                  <tr className="bg-[#f5f5f5]">
                    <th className="text-left p-2 border border-[#e8e0d5]">Cookie</th>
                    <th className="text-left p-2 border border-[#e8e0d5]">Syfte</th>
                    <th className="text-left p-2 border border-[#e8e0d5]">Varaktighet</th>
                  </tr>
                </thead>
                <tbody className="text-[#555]">
                  <tr>
                    <td className="p-2 border border-[#e8e0d5] font-mono">_ga</td>
                    <td className="p-2 border border-[#e8e0d5]">Google Analytics – identifierar unika besökare</td>
                    <td className="p-2 border border-[#e8e0d5]">2 år</td>
                  </tr>
                  <tr>
                    <td className="p-2 border border-[#e8e0d5] font-mono">_gid</td>
                    <td className="p-2 border border-[#e8e0d5]">Google Analytics – skiljer på besökare</td>
                    <td className="p-2 border border-[#e8e0d5]">24 timmar</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="border border-[#e8e0d5] p-6">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-sm font-semibold text-[#1a1a1a]">🎯 Marknadsföringscookies</h3>
                <span className="text-xs bg-[#f5ede0] text-[#c8a87a] border border-[#c8a87a] px-3 py-1">
                  Kräver samtycke
                </span>
              </div>
              <p className="text-xs text-[#666] leading-relaxed mb-3">
                Dessa cookies används för att visa relevanta annonser för dig. De kan spåra din
                aktivitet på andra webbplatser.
              </p>
              <table className="w-full text-xs border-collapse">
                <thead>
                  <tr className="bg-[#f5f5f5]">
                    <th className="text-left p-2 border border-[#e8e0d5]">Cookie</th>
                    <th className="text-left p-2 border border-[#e8e0d5]">Syfte</th>
                    <th className="text-left p-2 border border-[#e8e0d5]">Varaktighet</th>
                  </tr>
                </thead>
                <tbody className="text-[#555]">
                  <tr>
                    <td className="p-2 border border-[#e8e0d5] font-mono">_fbp</td>
                    <td className="p-2 border border-[#e8e0d5]">Facebook Pixel – spårar konverteringar</td>
                    <td className="p-2 border border-[#e8e0d5]">3 månader</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-medium text-[#1a1a1a] mb-4 pb-2 border-b border-[#e8e0d5]">
            Hantera ditt samtycke
          </h2>
          <p className="text-[#555] text-sm leading-relaxed mb-4">
            Du kan hantera dina cookieinställningar när som helst. Du kan:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-sm text-[#555] mb-6">
            <li>Ändra ditt samtycke i vår cookiebanderoll (visas vid ditt första besök)</li>
            <li>Ändra inställningar i din webbläsare för att blockera alla cookies</li>
            <li>Radera cookies via webbläsarinställningarna</li>
          </ul>
          <div className="bg-[#f5ede0] p-4">
            <p className="text-xs text-[#666]">
              <strong>Observera:</strong> Om du blockerar nödvändiga cookies kan delar av vår
              webbplats sluta fungera korrekt, t.ex. varukorgen eller inloggning.
            </p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-medium text-[#1a1a1a] mb-4 pb-2 border-b border-[#e8e0d5]">
            Tredjepartscookies
          </h2>
          <p className="text-[#555] text-sm leading-relaxed">
            Vissa cookies placeras av tredjepartsleverantörer. Dessa parters integritetspolicys
            reglerar hur de behandlar informationen från deras cookies. Vi ansvarar inte för
            tredjepartsleverantörers behandling av personuppgifter.
          </p>
        </section>

        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            href="/gdpr"
            className="text-xs tracking-widest uppercase border-b border-[#c8a87a] text-[#c8a87a] pb-1 hover:text-[#a88a5a]"
          >
            Läs integritetspolicyn →
          </Link>
          <Link
            href="/kontakt"
            className="text-xs tracking-widest uppercase border-b border-[#1a1a1a] text-[#1a1a1a] pb-1 hover:text-[#c8a87a] hover:border-[#c8a87a]"
          >
            Kontakta oss →
          </Link>
        </div>
      </div>
    </div>
  );
}
