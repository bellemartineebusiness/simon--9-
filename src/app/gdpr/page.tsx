import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Integritetspolicy (GDPR) – Belle Martinée",
  description: "Läs om hur Belle Martinée behandlar dina personuppgifter i enlighet med GDPR och dataskyddsförordningen.",
};

export default function GDPRPage() {
  const lastUpdated = "1 januari 2025";

  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <div className="bg-[#f5ede0] py-16 md:py-20 text-center">
        <p className="text-xs tracking-[0.4em] uppercase text-[#c8a87a] mb-4">Rättslig information</p>
        <h1 className="text-3xl md:text-4xl font-light tracking-wide text-[#1a1a1a] mb-4">
          Integritetspolicy
        </h1>
        <p className="text-sm text-[#999]">Senast uppdaterad: {lastUpdated}</p>
        <div className="w-16 h-0.5 bg-[#c8a87a] mx-auto mt-4"></div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-sm max-w-none">

          <div className="bg-[#f5ede0] border-l-4 border-[#c8a87a] p-6 mb-10">
            <p className="text-sm text-[#555] leading-relaxed">
              Belle Martinée AB värnar om din personliga integritet. Denna integritetspolicy förklarar
              hur vi samlar in, använder och skyddar dina personuppgifter i enlighet med{" "}
              <strong>EU:s dataskyddsförordning (GDPR)</strong>, Dataskyddslagen (2018:218) och
              övriga tillämpliga dataskyddsregler.
            </p>
          </div>

          <section className="mb-10">
            <h2 className="text-xl font-medium text-[#1a1a1a] mb-4 pb-2 border-b border-[#e8e0d5]">
              1. Personuppgiftsansvarig
            </h2>
            <p className="text-[#555] text-sm leading-relaxed mb-3">
              Personuppgiftsansvarig är:
            </p>
            <address className="not-italic text-sm text-[#555] bg-[#f5f5f5] p-4 leading-relaxed">
              <strong>Belle Martinée AB</strong><br />
              Organisationsnummer: 556123-4567<br />
              Storgatan 1, 111 22 Stockholm<br />
              E-post:{" "}
              <a href="mailto:gdpr@bellemartinee.se" className="text-[#c8a87a] hover:underline">
                gdpr@bellemartinee.se
              </a><br />
              Telefon: 070-123 45 67
            </address>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-medium text-[#1a1a1a] mb-4 pb-2 border-b border-[#e8e0d5]">
              2. Vilka personuppgifter samlar vi in?
            </h2>
            <p className="text-[#555] text-sm leading-relaxed mb-4">
              Vi samlar in personuppgifter i följande situationer:
            </p>
            <div className="space-y-4">
              {[
                {
                  title: "När du gör ett köp",
                  items: ["Namn och efternamn", "Fakturaadress och leveransadress", "E-postadress", "Telefonnummer", "Betalningsinformation (behandlas av certifierad betalleverantör)", "Orderhistorik"],
                },
                {
                  title: "När du skapar ett konto",
                  items: ["E-postadress", "Lösenord (krypterat)", "Namn"],
                },
                {
                  title: "När du prenumererar på nyhetsbrev",
                  items: ["E-postadress", "Eventuellt förnamn"],
                },
                {
                  title: "När du kontaktar kundtjänst",
                  items: ["Namn", "E-postadress", "Innehållet i ditt meddelande"],
                },
              ].map((group) => (
                <div key={group.title}>
                  <h3 className="text-sm font-semibold text-[#1a1a1a] mb-2">{group.title}:</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    {group.items.map((item) => (
                      <li key={item} className="text-sm text-[#555]">{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-medium text-[#1a1a1a] mb-4 pb-2 border-b border-[#e8e0d5]">
              3. Rättslig grund och ändamål
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-xs border-collapse">
                <thead>
                  <tr className="bg-[#f5ede0]">
                    <th className="text-left p-3 border border-[#e8e0d5] font-semibold text-[#1a1a1a]">Ändamål</th>
                    <th className="text-left p-3 border border-[#e8e0d5] font-semibold text-[#1a1a1a]">Rättslig grund</th>
                    <th className="text-left p-3 border border-[#e8e0d5] font-semibold text-[#1a1a1a]">Lagringstid</th>
                  </tr>
                </thead>
                <tbody className="text-[#555]">
                  {[
                    { purpose: "Hantera ditt köp och leverans", basis: "Avtal (GDPR art. 6.1 b)", retention: "3 år" },
                    { purpose: "Bokföring och redovisning", basis: "Rättslig förpliktelse (Bokföringslagen)", retention: "7 år" },
                    { purpose: "Skicka nyhetsbrev", basis: "Samtycke (GDPR art. 6.1 a)", retention: "Till avregistrering" },
                    { purpose: "Kundtjänst", basis: "Berättigat intresse (GDPR art. 6.1 f)", retention: "2 år" },
                    { purpose: "Marknadsföring (befintliga kunder)", basis: "Berättigat intresse (GDPR art. 6.1 f)", retention: "3 år" },
                    { purpose: "Förhindra bedrägeri", basis: "Berättigat intresse (GDPR art. 6.1 f)", retention: "5 år" },
                  ].map((row) => (
                    <tr key={row.purpose} className="border-b border-[#e8e0d5]">
                      <td className="p-3 border border-[#e8e0d5]">{row.purpose}</td>
                      <td className="p-3 border border-[#e8e0d5]">{row.basis}</td>
                      <td className="p-3 border border-[#e8e0d5]">{row.retention}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-medium text-[#1a1a1a] mb-4 pb-2 border-b border-[#e8e0d5]">
              4. Dela vi dina uppgifter?
            </h2>
            <p className="text-[#555] text-sm leading-relaxed mb-4">
              Vi delar aldrig dina personuppgifter med tredje part i marknadsföringssyfte utan ditt
              samtycke. Vi delar uppgifter med följande kategorier av mottagare:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-sm text-[#555]">
              <li><strong>Betalleverantörer</strong> (t.ex. Klarna, Stripe) – för att behandla betalningar</li>
              <li><strong>Fraktbolag</strong> (t.ex. PostNord, DHL) – för att leverera dina beställningar</li>
              <li><strong>Molntjänstleverantörer</strong> – för drift av vår e-handelsplattform</li>
              <li><strong>Bokföringsbyrå</strong> – för redovisning (strikt konfidentialitetsavtal)</li>
              <li><strong>Myndigheter</strong> – när vi är rättsligt skyldiga (t.ex. Skatteverket)</li>
            </ul>
            <p className="text-[#555] text-sm leading-relaxed mt-4">
              Alla personuppgiftsbiträden behandlar dina uppgifter enligt avtal och i enlighet med GDPR.
              Vi överför inte personuppgifter till länder utanför EU/EES utan lämpliga skyddsåtgärder.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-medium text-[#1a1a1a] mb-4 pb-2 border-b border-[#e8e0d5]">
              5. Dina rättigheter
            </h2>
            <p className="text-[#555] text-sm leading-relaxed mb-4">
              Du har följande rättigheter enligt GDPR:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { right: "Rätt till tillgång (art. 15)", desc: "Du kan begära ett utdrag av de personuppgifter vi har om dig." },
                { right: "Rätt till rättelse (art. 16)", desc: "Du kan begära att felaktiga uppgifter rättas." },
                { right: "Rätt till radering (art. 17)", desc: "Du kan begära att dina uppgifter raderas ('rätten att bli glömd')." },
                { right: "Rätt till begränsning (art. 18)", desc: "Du kan begära att behandlingen av dina uppgifter begränsas." },
                { right: "Rätt till dataportabilitet (art. 20)", desc: "Du kan begära att få dina uppgifter i ett maskinläsbart format." },
                { right: "Rätt att invända (art. 21)", desc: "Du kan invända mot behandling baserad på berättigat intresse." },
                { right: "Återkalla samtycke", desc: "Du kan när som helst återkalla ett samtycke utan att det påverkar lagligheten av tidigare behandling." },
                { right: "Rätt att klaga", desc: "Du kan lämna in klagomål till Integritetsskyddsmyndigheten (IMY), imy.se." },
              ].map((r) => (
                <div key={r.right} className="bg-[#f5f5f5] p-4">
                  <p className="text-xs font-semibold text-[#1a1a1a] mb-1">{r.right}</p>
                  <p className="text-xs text-[#666]">{r.desc}</p>
                </div>
              ))}
            </div>
            <p className="text-[#555] text-sm leading-relaxed mt-4">
              För att utöva dina rättigheter, kontakta oss på{" "}
              <a href="mailto:gdpr@bellemartinee.se" className="text-[#c8a87a] hover:underline">
                gdpr@bellemartinee.se
              </a>
              . Vi svarar inom 30 dagar.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-medium text-[#1a1a1a] mb-4 pb-2 border-b border-[#e8e0d5]">
              6. Säkerhet
            </h2>
            <p className="text-[#555] text-sm leading-relaxed">
              Vi vidtar lämpliga tekniska och organisatoriska säkerhetsåtgärder för att skydda dina
              personuppgifter mot obehörig åtkomst, förlust eller förstöring. Vår webbplats använder
              SSL-kryptering. Betalningsinformation behandlas av PCI DSS-certifierade leverantörer.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-medium text-[#1a1a1a] mb-4 pb-2 border-b border-[#e8e0d5]">
              7. Cookies
            </h2>
            <p className="text-[#555] text-sm leading-relaxed">
              Vi använder cookies på vår webbplats. Läs mer i vår{" "}
              <Link href="/cookies" className="text-[#c8a87a] hover:underline">
                cookiepolicy
              </Link>
              .
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-medium text-[#1a1a1a] mb-4 pb-2 border-b border-[#e8e0d5]">
              8. Ändringar i integritetspolicyn
            </h2>
            <p className="text-[#555] text-sm leading-relaxed">
              Vi kan komma att uppdatera denna integritetspolicy. Vid väsentliga ändringar informerar
              vi dig via e-post eller tydlig notis på webbplatsen. Den senast uppdaterade versionen
              finns alltid på denna sida.
            </p>
          </section>

          <div className="bg-[#f5ede0] p-6 mt-10">
            <h3 className="text-sm font-semibold text-[#1a1a1a] mb-2">Kontakta oss om dataskydd</h3>
            <p className="text-xs text-[#666] mb-3">
              Dataskyddsombudets e-post:{" "}
              <a href="mailto:gdpr@bellemartinee.se" className="text-[#c8a87a] hover:underline">
                gdpr@bellemartinee.se
              </a>
            </p>
            <p className="text-xs text-[#666]">
              Integritetsskyddsmyndigheten (IMY):{" "}
              <a
                href="https://www.imy.se"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#c8a87a] hover:underline"
              >
                www.imy.se
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
