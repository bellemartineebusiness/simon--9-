import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Om oss – Belle Martinée",
  description: "Lär känna Belle Martinée – ett svenskt klädesmärke grundat 2018 med fokus på hållbarhet och tidlös design.",
};

export default function OmOssPage() {
  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <div className="bg-[#f5ede0] py-16 md:py-24 text-center">
        <p className="text-xs tracking-[0.4em] uppercase text-[#c8a87a] mb-4">Vår historia</p>
        <h1 className="text-3xl md:text-5xl font-light tracking-wide text-[#1a1a1a] mb-4">Om Belle Martinée</h1>
        <div className="w-16 h-0.5 bg-[#c8a87a] mx-auto"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Mission */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-light text-[#1a1a1a] mb-6">Vår mission</h2>
          <p className="text-[#555] leading-relaxed text-lg mb-6">
            Belle Martinée grundades 2018 i Stockholm med en enkel men kraftfull vision: att skapa 
            kläder som är lika vackra på insidan som på utsidan. Kläder som är tillverkade under 
            rättvisa förhållanden, av material som är snälla mot planeten, och som håller i många 
            år framöver.
          </p>
          <p className="text-[#555] leading-relaxed text-lg">
            Vi tror att mode och hållbarhet inte behöver stå i konflikt med varandra. Tvärtom – 
            vi menar att de bästa plaggen är de som man bär om och om igen, år efter år.
          </p>
        </section>

        {/* Values */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-light text-[#1a1a1a] mb-8">Våra värderingar</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Hållbarhet",
                icon: "🌿",
                text: "Vi använder enbart certifierade, hållbara material. Vår produktion är GOTS-certifierad och vi arbetar aktivt för att minska vårt koldioxidavtryck.",
              },
              {
                title: "Rättvis handel",
                icon: "🤝",
                text: "Alla våra tillverkare är certifierade enligt Fair Trade-principerna. Vi besöker regelbundet våra partners för att säkerställa goda arbetsförhållanden.",
              },
              {
                title: "Tidlös design",
                icon: "✨",
                text: "Vi skapar kläder för att hålla, inte för att kasseras. Varje kollektion bygger på klassiska siluetter anpassade för den moderna livsstilen.",
              },
            ].map((value) => (
              <div key={value.title} className="text-center p-8 bg-[#f5ede0]">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-lg font-medium text-[#1a1a1a] mb-3 tracking-wide">{value.title}</h3>
                <p className="text-sm text-[#666] leading-relaxed">{value.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Story */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-light text-[#1a1a1a] mb-6">Vår berättelse</h2>
          <div className="space-y-6 text-[#555] leading-relaxed">
            <p>
              Det hela började i en liten ateljé i Stockholms innerstad. Grundaren Belle Martinée, 
              med bakgrund inom modedesign och textilteknik, var frustrerad över den snabba modens 
              påverkan på miljön och arbetsförhållanden i branschen.
            </p>
            <p>
              Med hjälp av ett litet men hängivet team började hon skapa en alternativ väg – 
              kläder designade att hålla, tillverkade av material med dokumenterat ursprung, och 
              producerade av arbetare med rättvisa löner och goda förhållanden.
            </p>
            <p>
              Idag är Belle Martinée ett etablerat varumärke inom hållbart mode med kunder i hela 
              Sverige och Norden. Men vi håller fortfarande fast vid de principer som grundade oss 
              – varje beslut vi tar börjar med frågan: är det bra för människor och planeten?
            </p>
          </div>
        </section>

        {/* Team */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-light text-[#1a1a1a] mb-8">Teamet</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: "Belle Martinée", role: "Grundare & Kreativ chef", initials: "BM" },
              { name: "Sofia Lindqvist", role: "Head of Design", initials: "SL" },
              { name: "Marcus Holm", role: "Hållbarhetschef", initials: "MH" },
            ].map((member) => (
              <div key={member.name} className="text-center">
                <div className="w-24 h-24 rounded-full bg-[#e8d8c8] flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-light text-[#c8a87a]">{member.initials}</span>
                </div>
                <h3 className="text-base font-medium text-[#1a1a1a]">{member.name}</h3>
                <p className="text-xs text-[#999] tracking-wide">{member.role}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="text-center bg-[#f5ede0] p-12">
          <h2 className="text-2xl font-light text-[#1a1a1a] mb-4">Redo att utforska kollektionen?</h2>
          <p className="text-[#666] mb-8">Upptäck plagg skapade med kärlek och omtanke.</p>
          <Link
            href="/shop"
            className="inline-block px-8 py-4 bg-[#1a1a1a] text-white text-xs tracking-[0.3em] uppercase hover:bg-[#c8a87a] transition-colors"
          >
            Shoppa nu
          </Link>
        </section>
      </div>
    </div>
  );
}
