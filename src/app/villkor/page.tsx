import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Köpvillkor – Belle Martinée",
  description: "Köpvillkor för Belle Martinée inkl. ångerrätt (Distansavtalslagen), e-handelslagen, marknadsföringslagen och momsinfo.",
};

export default function VillkorPage() {
  const lastUpdated = "1 januari 2025";

  return (
    <div className="min-h-screen">
      <div className="bg-[#f5ede0] py-16 md:py-20 text-center">
        <p className="text-xs tracking-[0.4em] uppercase text-[#c8a87a] mb-4">Rättslig information</p>
        <h1 className="text-3xl md:text-4xl font-light tracking-wide text-[#1a1a1a] mb-4">
          Köpvillkor & Ångerrätt
        </h1>
        <p className="text-sm text-[#999]">Senast uppdaterad: {lastUpdated}</p>
        <div className="w-16 h-0.5 bg-[#c8a87a] mx-auto mt-4"></div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        {/* Quick nav */}
        <nav className="bg-[#f5f5f5] p-6 mb-10 text-xs">
          <p className="font-semibold text-[#1a1a1a] mb-3">Innehåll:</p>
          <ol className="list-decimal pl-5 space-y-1 text-[#c8a87a]">
            {[
              "Företagsinformation (E-handelslagen)",
              "Produkter och priser (inkl. moms)",
              "Beställning och orderbekräftelse",
              "Betalning",
              "Leverans och frakt",
              "Ångerrätt (Distansavtalslagen)",
              "Reklamation och garanti",
              "Marknadsföring",
              "Ansvarsbegränsning",
              "Tvister och tillämplig lag",
            ].map((item, i) => (
              <li key={i}>
                <a href={`#avsnitt-${i + 1}`} className="hover:underline">{item}</a>
              </li>
            ))}
          </ol>
        </nav>

        <div className="space-y-12">

          {/* 1. Företagsinformation */}
          <section id="avsnitt-1">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs bg-[#c8a87a] text-white px-2 py-1">E-handelslagen</span>
              <h2 className="text-xl font-medium text-[#1a1a1a]">1. Företagsinformation</h2>
            </div>
            <p className="text-[#555] text-sm leading-relaxed mb-4">
              Enligt <strong>E-handelslagen (lag 2002:562 om elektronisk handel och andra
              informationssamhällets tjänster)</strong> ska vi tillhandahålla följande information:
            </p>
            <dl className="bg-[#f5f5f5] p-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
              {[
                { label: "Företagsnamn", value: "Belle Martinée AB" },
                { label: "Organisationsnummer", value: "556123-4567" },
                { label: "Momsregistreringsnummer", value: "SE556123456701" },
                { label: "Adress", value: "Storgatan 1, 111 22 Stockholm" },
                { label: "E-post", value: "info@bellemartinee.se" },
                { label: "Telefon", value: "070-123 45 67" },
                { label: "F-skattebevis", value: "Innehas" },
                { label: "Tillsynsmyndighet", value: "Konsumentverket" },
              ].map((item) => (
                <div key={item.label} className="flex flex-col">
                  <dt className="text-xs font-semibold text-[#1a1a1a]">{item.label}</dt>
                  <dd className="text-[#555]">{item.value}</dd>
                </div>
              ))}
            </dl>
          </section>

          {/* 2. Priser & moms */}
          <section id="avsnitt-2">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs bg-[#c8a87a] text-white px-2 py-1">Mervärdesskattelagen</span>
              <h2 className="text-xl font-medium text-[#1a1a1a]">2. Produkter och priser</h2>
            </div>
            <div className="space-y-3 text-[#555] text-sm leading-relaxed">
              <p>
                Alla priser på bellemartinee.se anges i svenska kronor (SEK) och inkluderar
                <strong> 25% mervärdesskatt (moms)</strong> i enlighet med{" "}
                <strong>Mervärdesskattelagen (1994:200)</strong>. Momsen specificeras separat
                på din orderbekräftelse och faktura.
              </p>
              <p>
                Vi förbehåller oss rätten att ändra priser utan föregående meddelande.
                Det pris som gäller är det som visas vid orderläggning.
              </p>
              <div className="bg-[#f5ede0] p-4 text-xs">
                <p className="font-semibold text-[#1a1a1a] mb-1">Momsuppdelning på din faktura:</p>
                <p>Varans pris inkl. moms – Moms (25%) = Pris exkl. moms</p>
                <p className="mt-1 text-[#999]">Exempel: 1 000 kr inkl. moms = 800 kr exkl. moms + 200 kr moms</p>
              </div>
            </div>
          </section>

          {/* 3. Beställning */}
          <section id="avsnitt-3">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs bg-[#c8a87a] text-white px-2 py-1">E-handelslagen</span>
              <h2 className="text-xl font-medium text-[#1a1a1a]">3. Beställning och orderbekräftelse</h2>
            </div>
            <div className="space-y-3 text-[#555] text-sm leading-relaxed">
              <p>
                En bindande beställning skapas när du slutför köpet och klickar på &quot;Bekräfta köp&quot;.
                Avtalet är bindande för båda parter från det att du mottagit en orderbekräftelse
                via e-post.
              </p>
              <p>
                Orderbekräftelsen skickas till din angivna e-postadress och innehåller:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Ordernummer</li>
                <li>Beställda varor med priser och antal</li>
                <li>Totalbelopp inkl. moms och frakt</li>
                <li>Momsspecifikation</li>
                <li>Beräknad leveranstid</li>
                <li>Information om ångerrätt</li>
              </ul>
              <p>
                Vi förbehåller oss rätten att avboka en beställning vid prissättningsfel,
                force majeure eller lagerbrister. Du meddelas i sådant fall omedelbart.
              </p>
            </div>
          </section>

          {/* 4. Betalning */}
          <section id="avsnitt-4">
            <h2 className="text-xl font-medium text-[#1a1a1a] mb-4 pb-2 border-b border-[#e8e0d5]">
              4. Betalning
            </h2>
            <div className="space-y-3 text-[#555] text-sm leading-relaxed">
              <p>Vi accepterar följande betalningsmetoder:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Klarna (Faktura, Delbetalning, Direktbetalning)</li>
                <li>Kreditkort (Visa, Mastercard) via Stripe</li>
                <li>Swish</li>
              </ul>
              <p>
                Alla betalningar behandlas säkert och krypterat. Vi lagrar aldrig fullständiga
                kortuppgifter på våra servrar.
              </p>
            </div>
          </section>

          {/* 5. Leverans */}
          <section id="avsnitt-5">
            <h2 className="text-xl font-medium text-[#1a1a1a] mb-4 pb-2 border-b border-[#e8e0d5]">
              5. Leverans och frakt
            </h2>
            <div className="space-y-3 text-[#555] text-sm leading-relaxed">
              <div className="overflow-x-auto">
                <table className="w-full text-xs border-collapse">
                  <thead>
                    <tr className="bg-[#f5ede0]">
                      <th className="text-left p-3 border border-[#e8e0d5] font-semibold text-[#1a1a1a]">Leveransmetod</th>
                      <th className="text-left p-3 border border-[#e8e0d5] font-semibold text-[#1a1a1a]">Leveranstid</th>
                      <th className="text-left p-3 border border-[#e8e0d5] font-semibold text-[#1a1a1a]">Kostnad</th>
                    </tr>
                  </thead>
                  <tbody className="text-[#555]">
                    <tr>
                      <td className="p-3 border border-[#e8e0d5]">PostNord Hem</td>
                      <td className="p-3 border border-[#e8e0d5]">2–4 vardagar</td>
                      <td className="p-3 border border-[#e8e0d5]">59 kr (fri vid köp över 1 000 kr)</td>
                    </tr>
                    <tr>
                      <td className="p-3 border border-[#e8e0d5]">PostNord Ombud</td>
                      <td className="p-3 border border-[#e8e0d5]">2–5 vardagar</td>
                      <td className="p-3 border border-[#e8e0d5]">39 kr (fri vid köp över 1 000 kr)</td>
                    </tr>
                    <tr>
                      <td className="p-3 border border-[#e8e0d5]">DHL Express</td>
                      <td className="p-3 border border-[#e8e0d5]">1–2 vardagar</td>
                      <td className="p-3 border border-[#e8e0d5]">149 kr</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-[#999]">
                Leveranstider räknas från det att paketet skickas. Moms ingår i fraktkostnaderna.
              </p>
            </div>
          </section>

          {/* 6. Ångerrätt - MOST IMPORTANT */}
          <section id="avsnitt-6" className="border-2 border-[#c8a87a] p-6">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs bg-[#c8a87a] text-white px-2 py-1">Distansavtalslagen</span>
              <h2 className="text-xl font-medium text-[#1a1a1a]">6. Ångerrätt</h2>
            </div>
            <p className="text-[#555] text-sm leading-relaxed mb-4">
              Enligt <strong>Distansavtalslagen (lag 2005:59 om distansavtal och avtal utanför
              affärslokaler)</strong> har du som konsument rätt att ångra ditt köp.
            </p>

            <div className="bg-[#f5ede0] p-4 mb-4">
              <p className="text-sm font-semibold text-[#1a1a1a] mb-1">
                ⏱ Du har 14 dagars ångerrätt
              </p>
              <p className="text-xs text-[#555]">
                Ångerfristen börjar räknas från den dag du (eller en person du anvisar) tar emot varan.
              </p>
            </div>

            <div className="space-y-4 text-[#555] text-sm leading-relaxed">
              <div>
                <h3 className="font-semibold text-[#1a1a1a] mb-2">Hur utövar du din ångerrätt?</h3>
                <ol className="list-decimal pl-5 space-y-2">
                  <li>
                    Meddela oss ditt beslut att ångra köpet <strong>innan ångerfristens utgång</strong> via:
                    <ul className="list-disc pl-5 mt-1 space-y-1 text-xs">
                      <li>E-post: <a href="mailto:retur@bellemartinee.se" className="text-[#c8a87a] hover:underline">retur@bellemartinee.se</a></li>
                      <li>Telefon: 070-123 45 67</li>
                      <li>Kontaktformuläret på vår webbplats</li>
                      <li>Standardblanketten för ångerrätt (se nedan)</li>
                    </ul>
                  </li>
                  <li>Skicka tillbaka varan inom 14 dagar från ditt ångerbesked.</li>
                  <li>Varan ska returneras i ursprungligt skick med alla etiketter kvar.</li>
                </ol>
              </div>

              <div>
                <h3 className="font-semibold text-[#1a1a1a] mb-2">Återbetalning</h3>
                <p>
                  Vi återbetalar hela köpesumman inklusive ordinarie fraktkostnad så snart vi
                  mottagit och kontrollerat returvaran, dock senast inom 14 dagar. Återbetalning
                  sker med samma betalningsmetod som du använde vid köpet.
                </p>
                <p className="mt-2 text-xs text-[#999]">
                  Returfrakt betalas av kunden. Vi tillhandahåller förbetalt returlabel om du
                  begär det – kostnaden (39 kr) avdras från återbetalningen.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-[#1a1a1a] mb-2">Undantag från ångerrätten</h3>
                <p className="mb-2">Ångerrätten gäller inte för:</p>
                <ul className="list-disc pl-5 space-y-1 text-xs">
                  <li>Varor som av hygien- eller hälsoskäl förseglats och förseglingen brutits (t.ex. underkläder)</li>
                  <li>Skräddarsydda eller personligt anpassade varor</li>
                  <li>Varor som tydligt har använts och inte längre kan säljas som nya</li>
                </ul>
              </div>

              <div className="border border-[#e8e0d5] p-4 bg-white">
                <h3 className="font-semibold text-[#1a1a1a] mb-3 text-xs tracking-widest uppercase">
                  Standardblankett för ångerrätt
                </h3>
                <p className="text-xs text-[#555] italic leading-relaxed">
                  Till Belle Martinée AB, Storgatan 1, 111 22 Stockholm, retur@bellemartinee.se:
                  <br /><br />
                  Jag/Vi (*) meddelar härmed att jag/vi (*) utövar ångerrätten för mitt/vårt (*) köp
                  av följande varor: [Varubenämning]
                  <br />
                  Beställt den (*)/Mottaget den (*): [datum]
                  <br />
                  Konsumentens/Konsumenternas namn: [namn]
                  <br />
                  Konsumentens/Konsumenternas adress: [adress]
                  <br />
                  Datum: [datum]
                  <br /><br />
                  (*) Stryk det som inte är tillämpligt.
                </p>
              </div>
            </div>
          </section>

          {/* 7. Reklamation */}
          <section id="avsnitt-7">
            <h2 className="text-xl font-medium text-[#1a1a1a] mb-4 pb-2 border-b border-[#e8e0d5]">
              7. Reklamation och garanti
            </h2>
            <div className="space-y-3 text-[#555] text-sm leading-relaxed">
              <p>
                Enligt <strong>Konsumentköplagen</strong> har du som konsument rätt att reklamera
                felaktiga varor i 3 år från köpdatum. Vid reklamation åtar vi oss att reparera,
                byta ut eller återbetala varan beroende på omständigheterna.
              </p>
              <p>
                Reklamation ska göras inom skälig tid efter att felet upptäckts. Kontakta
                kundtjänst med ordernummer, beskrivning av felet och gärna bilder.
              </p>
            </div>
          </section>

          {/* 8. Marknadsföring */}
          <section id="avsnitt-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs bg-[#c8a87a] text-white px-2 py-1">Marknadsföringslagen</span>
              <h2 className="text-xl font-medium text-[#1a1a1a]">8. Marknadsföring</h2>
            </div>
            <div className="space-y-3 text-[#555] text-sm leading-relaxed">
              <p>
                All vår marknadsföring följer <strong>Marknadsföringslagen (2008:486)</strong> och
                Internationella handelskammarens (ICC) regler för reklam och marknadskommunikation.
              </p>
              <p>Vi förbinder oss att:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Vara tydliga med att kommunikation är reklam (märkt med &quot;Annons&quot; eller liknande)</li>
                <li>Aldrig använda vilseledande marknadsföring eller orimliga påståenden</li>
                <li>Skicka nyhetsbrev och e-postreklam endast till de som samtyckt till det</li>
                <li>Tydligt märka samarbeten och sponsrat innehåll med &quot;Samarbete&quot; eller &quot;#ad&quot;</li>
                <li>Inte rikta aggressiv marknadsföring mot barn</li>
                <li>Respektera önskan att inte ta emot direktreklam (NIX-registret)</li>
              </ul>
              <p>
                Klagomål på vår marknadsföring kan göras till{" "}
                <a
                  href="https://www.konsumentverket.se"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#c8a87a] hover:underline"
                >
                  Konsumentverket
                </a>{" "}
                eller Reklamombudsmannen (RO).
              </p>
            </div>
          </section>

          {/* 9. Ansvar */}
          <section id="avsnitt-9">
            <h2 className="text-xl font-medium text-[#1a1a1a] mb-4 pb-2 border-b border-[#e8e0d5]">
              9. Ansvarsbegränsning
            </h2>
            <p className="text-[#555] text-sm leading-relaxed">
              Belle Martinée AB ansvarar inte för indirekta skador eller följdskador utöver vad
              som föreskrivs i tvingande konsumentskyddslagstiftning. Vårt ansvar är begränsat
              till produktens inköpspris.
            </p>
          </section>

          {/* 10. Tvister */}
          <section id="avsnitt-10">
            <h2 className="text-xl font-medium text-[#1a1a1a] mb-4 pb-2 border-b border-[#e8e0d5]">
              10. Tvister och tillämplig lag
            </h2>
            <div className="space-y-3 text-[#555] text-sm leading-relaxed">
              <p>
                Dessa villkor regleras av svensk lag. Tvister ska i första hand lösas
                i samförstånd. I andra hand kan du vända dig till:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>Allmänna reklamationsnämnden (ARN)</strong> –{" "}
                  <a
                    href="https://www.arn.se"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#c8a87a] hover:underline"
                  >
                    www.arn.se
                  </a>
                </li>
                <li>
                  <strong>EU:s plattform för onlinetvistlösning (ODR)</strong> –{" "}
                  <a
                    href="https://ec.europa.eu/consumers/odr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#c8a87a] hover:underline"
                  >
                    ec.europa.eu/consumers/odr
                  </a>
                </li>
                <li>
                  <strong>Konsumentverket</strong> –{" "}
                  <a
                    href="https://www.konsumentverket.se"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#c8a87a] hover:underline"
                  >
                    www.konsumentverket.se
                  </a>
                </li>
              </ul>
              <p>
                Vi åtar oss att delta i tvistlösningsförfaranden hos ARN. I sista hand avgörs
                tvister av svensk domstol med Stockholms tingsrätt som förstainstansrätt.
              </p>
            </div>
          </section>

        </div>

        <div className="mt-12 flex flex-wrap gap-4">
          <Link
            href="/gdpr"
            className="text-xs tracking-widest uppercase border-b border-[#c8a87a] text-[#c8a87a] pb-1 hover:text-[#a88a5a]"
          >
            Integritetspolicy →
          </Link>
          <Link
            href="/cookies"
            className="text-xs tracking-widest uppercase border-b border-[#c8a87a] text-[#c8a87a] pb-1 hover:text-[#a88a5a]"
          >
            Cookiepolicy →
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
