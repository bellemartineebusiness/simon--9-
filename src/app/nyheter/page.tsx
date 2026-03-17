import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Nyheter – Belle Martinée",
  description: "Senaste nyheter, kollektioner och inspiration från Belle Martinée.",
};

const articles = [
  {
    id: 1,
    title: "Vårkollektion 2025 – Inspiration från det nordiska landskapet",
    date: "15 mars 2025",
    category: "Kollektion",
    excerpt: "Vår nya vårkollektion hämtar inspiration från det vackra nordiska landskapet under vårens första dagar. Mjuka pasteller möter klassiska linjer i en kollektion som hyllar det enkla och vackra.",
    color: "#e8d8c8",
  },
  {
    id: 2,
    title: "Hållbarhet i fokus – Vår GOTS-certifiering",
    date: "2 mars 2025",
    category: "Hållbarhet",
    excerpt: "Vi är stolta att meddela att vår produktion nu är fullt GOTS-certifierad. Det innebär att alla våra plagg tillverkas av ekologiska material under kontrollerade och rättvisa förhållanden.",
    color: "#d8e8d0",
  },
  {
    id: 3,
    title: "Bakom kulisserna – En dag i atelén",
    date: "20 februari 2025",
    category: "Story",
    excerpt: "Följ med oss in i atelén i Stockholm för att se hur ett plagg skapas från skiss till färdigt plagget. Vi berättar om vår designprocess och de svåra val vi gör längs vägen.",
    color: "#d8d0e8",
  },
  {
    id: 4,
    title: "Stilguide: Så mixar du vår Kaschmir Tröja",
    date: "10 februari 2025",
    category: "Stilguide",
    excerpt: "Vår bestseller Kaschmir Tröja är otroligt mångsidig. I den här stilguiden visar vi dig fem sätt att bära den – från kontoret till helgens avslappnade look.",
    color: "#e8e0d0",
  },
];

export default function NyheterPage() {
  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <div className="bg-[#f5ede0] py-16 md:py-24 text-center">
        <p className="text-xs tracking-[0.4em] uppercase text-[#c8a87a] mb-4">Aktuellt</p>
        <h1 className="text-3xl md:text-5xl font-light tracking-wide text-[#1a1a1a] mb-4">Nyheter</h1>
        <div className="w-16 h-0.5 bg-[#c8a87a] mx-auto"></div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Featured Article */}
        <div className="mb-16">
          <Link href={`/nyheter/${articles[0].id}`} className="group">
            <div
              className="aspect-[16/7] mb-6 flex items-center justify-center"
              style={{ backgroundColor: articles[0].color }}
            >
              <div className="text-center p-8">
                <p className="text-xs tracking-widest uppercase text-[#c8a87a] mb-3">{articles[0].category}</p>
                <h2 className="text-2xl md:text-3xl font-light text-[#1a1a1a] max-w-lg">{articles[0].title}</h2>
              </div>
            </div>
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-3">
                  <span className="text-xs tracking-widest uppercase text-[#c8a87a]">{articles[0].category}</span>
                  <span className="text-xs text-[#999]">{articles[0].date}</span>
                </div>
                <h2 className="text-xl md:text-2xl font-light text-[#1a1a1a] mb-3 group-hover:text-[#c8a87a] transition-colors">
                  {articles[0].title}
                </h2>
                <p className="text-[#666] text-sm leading-relaxed max-w-2xl">{articles[0].excerpt}</p>
              </div>
            </div>
            <div className="mt-4">
              <span className="text-xs tracking-widest uppercase text-[#1a1a1a] border-b border-[#1a1a1a] pb-1 group-hover:text-[#c8a87a] group-hover:border-[#c8a87a] transition-colors">
                Läs mer
              </span>
            </div>
          </Link>
        </div>

        <div className="w-full h-0.5 bg-[#e8e0d5] mb-16"></div>

        {/* Other Articles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.slice(1).map((article) => (
            <Link key={article.id} href={`/nyheter/${article.id}`} className="group">
              <div
                className="aspect-square mb-4 flex items-center justify-center"
                style={{ backgroundColor: article.color }}
              >
                <div className="text-center p-6">
                  <p className="text-xs tracking-widest uppercase text-[#c8a87a] mb-2">{article.category}</p>
                  <p className="text-sm font-light text-[#1a1a1a]">{article.title}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 mb-2">
                <span className="text-xs tracking-widest uppercase text-[#c8a87a]">{article.category}</span>
                <span className="text-xs text-[#999]">{article.date}</span>
              </div>
              <h3 className="text-base font-light text-[#1a1a1a] mb-2 group-hover:text-[#c8a87a] transition-colors leading-snug">
                {article.title}
              </h3>
              <p className="text-xs text-[#666] leading-relaxed line-clamp-3">{article.excerpt}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
