import Link from "next/link";

const featuredProducts = [
  {
    id: 1,
    name: "Klassisk Linne Blazer",
    price: "2 495 kr",
    category: "Ytterkläder",
    description: "Tidlös blazer i 100% linne. Perfekt för kontoret eller en avslappnad kväll.",
    color: "#d4c5b0",
  },
  {
    id: 2,
    name: "Silke Midi Klänning",
    price: "3 295 kr",
    category: "Klänningar",
    description: "Elegant midi-klänning i lyxig silke. Finns i flera färger.",
    color: "#c8b8a8",
  },
  {
    id: 3,
    name: "High-Waist Culotte",
    price: "1 695 kr",
    category: "Byxor",
    description: "Modern culotte med hög midja i mjuk bomullsblandning.",
    color: "#b8a898",
  },
  {
    id: 4,
    name: "Kaschmir Tröja",
    price: "2 895 kr",
    category: "Toppar",
    description: "Mjuk och varm tröja i 100% kaschmir. En garderobsklassiker.",
    color: "#e8d8c8",
  },
];

const categories = [
  { name: "Klänningar", count: "24 plagg", slug: "klänningar" },
  { name: "Toppar", count: "18 plagg", slug: "toppar" },
  { name: "Byxor", count: "15 plagg", slug: "byxor" },
  { name: "Ytterkläder", count: "12 plagg", slug: "ytterkläder" },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-[#f5ede0] min-h-[85vh] flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 w-full">
          <div className="max-w-2xl">
            <p className="text-xs tracking-[0.4em] uppercase text-[#c8a87a] mb-6">
              Ny Kollektion 2025
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light leading-tight tracking-tight text-[#1a1a1a] mb-8">
              Tidlöst mode
              <br />
              <em className="italic">för dig</em>
            </h1>
            <p className="text-base md:text-lg text-[#666] leading-relaxed mb-10 max-w-lg">
              Upptäck Belle Martinées kollektion av noggrant utvalda plagg skapade för den moderna,
              medvetna kvinnan. Hållbart mode med en tidlös elegans.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/shop"
                className="inline-block px-8 py-4 bg-[#1a1a1a] text-white text-xs tracking-[0.3em] uppercase hover:bg-[#c8a87a] transition-colors duration-300 text-center"
              >
                Shoppa nu
              </Link>
              <Link
                href="/om-oss"
                className="inline-block px-8 py-4 border border-[#1a1a1a] text-[#1a1a1a] text-xs tracking-[0.3em] uppercase hover:bg-[#1a1a1a] hover:text-white transition-colors duration-300 text-center"
              >
                Om oss
              </Link>
            </div>
          </div>
        </div>
        {/* Decorative element */}
        <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-[#ede3d5] hidden lg:block" aria-hidden="true">
          <div className="h-full flex items-center justify-center">
            <div className="w-48 h-48 rounded-full bg-[#c8a87a] opacity-20"></div>
          </div>
        </div>
      </section>

      {/* Category Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-light tracking-wide text-[#1a1a1a] mb-4">
              Utforska våra kategorier
            </h2>
            <div className="w-16 h-0.5 bg-[#c8a87a] mx-auto"></div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {categories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/shop?kategori=${cat.slug}`}
                className="group relative bg-[#f5ede0] aspect-square flex flex-col items-center justify-center p-6 hover:bg-[#ede3d5] transition-colors duration-300"
              >
                <h3 className="text-sm md:text-base tracking-widest uppercase text-[#1a1a1a] group-hover:text-[#c8a87a] transition-colors">
                  {cat.name}
                </h3>
                <p className="text-xs text-[#999] mt-2">{cat.count}</p>
                <span className="mt-4 text-xs tracking-wider text-[#c8a87a] opacity-0 group-hover:opacity-100 transition-opacity">
                  Se alla →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 md:py-24 bg-[#faf9f7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <p className="text-xs tracking-[0.3em] uppercase text-[#c8a87a] mb-3">Utvalda plagg</p>
              <h2 className="text-2xl md:text-3xl font-light tracking-wide text-[#1a1a1a]">
                Bästsäljare
              </h2>
            </div>
            <Link
              href="/shop"
              className="text-xs tracking-widest uppercase text-[#1a1a1a] border-b border-[#1a1a1a] pb-1 hover:text-[#c8a87a] hover:border-[#c8a87a] transition-colors self-start md:self-auto"
            >
              Se hela kollektionen
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <Link key={product.id} href={`/shop/${product.id}`} className="group">
                <div
                  className="aspect-[3/4] mb-4 flex items-center justify-center transition-transform duration-300 group-hover:scale-[1.02]"
                  style={{ backgroundColor: product.color }}
                >
                  <div className="text-center p-6">
                    <p className="text-xs tracking-widest uppercase text-[#666] mb-2">{product.category}</p>
                    <p className="text-sm font-light text-[#1a1a1a]">{product.name}</p>
                  </div>
                </div>
                <div>
                  <p className="text-xs tracking-widest uppercase text-[#999] mb-1">{product.category}</p>
                  <h3 className="text-sm font-medium text-[#1a1a1a] mb-1 group-hover:text-[#c8a87a] transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-xs text-[#666] mb-2 line-clamp-2">{product.description}</p>
                  <p className="text-sm font-medium text-[#1a1a1a]">{product.price}</p>
                  <p className="text-xs text-[#999]">inkl. moms</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-24 bg-[#f5ede0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
            <div>
              <p className="text-xs tracking-[0.3em] uppercase text-[#c8a87a] mb-4">Vår berättelse</p>
              <h2 className="text-3xl md:text-4xl font-light leading-tight text-[#1a1a1a] mb-6">
                Mode med mening och hållbarhet
              </h2>
              <p className="text-[#666] leading-relaxed mb-6">
                Belle Martinée grundades med en vision om att skapa mode som håller över tid –
                både i stil och kvalitet. Vi väljer noggrant våra material och samarbetar med
                ansvarsfulla tillverkare för att minska vår miljöpåverkan.
              </p>
              <p className="text-[#666] leading-relaxed mb-8">
                Varje plagg är designat för att passa in i din vardag, från morgon till kväll,
                och att hålla i många år framöver. Vi tror på slow fashion och tidlös design
                framför snabbt förgängliga trender.
              </p>
              <Link
                href="/om-oss"
                className="inline-block px-8 py-4 border border-[#1a1a1a] text-[#1a1a1a] text-xs tracking-[0.3em] uppercase hover:bg-[#1a1a1a] hover:text-white transition-colors duration-300"
              >
                Läs mer om oss
              </Link>
            </div>
            <div className="bg-[#ede3d5] aspect-square flex items-center justify-center">
              <div className="text-center p-12">
                <div className="w-24 h-0.5 bg-[#c8a87a] mx-auto mb-6"></div>
                <p className="text-3xl font-light text-[#1a1a1a] mb-2">2018</p>
                <p className="text-xs tracking-widest uppercase text-[#999]">Grundat</p>
                <div className="w-24 h-0.5 bg-[#c8a87a] mx-auto mt-6 mb-8"></div>
                <p className="text-3xl font-light text-[#1a1a1a] mb-2">100%</p>
                <p className="text-xs tracking-widest uppercase text-[#999]">Hållbara material</p>
                <div className="w-24 h-0.5 bg-[#c8a87a] mx-auto mt-6 mb-8"></div>
                <p className="text-3xl font-light text-[#1a1a1a] mb-2">Sverige</p>
                <p className="text-xs tracking-widest uppercase text-[#999]">Design & HQ</p>
                <div className="w-24 h-0.5 bg-[#c8a87a] mx-auto mt-6"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 md:py-20 bg-[#1a1a1a]">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs tracking-[0.3em] uppercase text-[#c8a87a] mb-4">Nyhetsbrev</p>
          <h2 className="text-2xl md:text-3xl font-light text-white mb-4">
            Håll dig uppdaterad
          </h2>
          <p className="text-sm text-[#a89880] leading-relaxed mb-8">
            Prenumerera på vårt nyhetsbrev och få exklusiva erbjudanden, inspirationsstyling
            och nyheter om nya kollektioner. Enligt <strong className="text-[#c8a87a]">GDPR</strong> kan
            du när som helst avregistrera dig.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Din e-postadress"
              className="flex-1 px-4 py-3 bg-[#2d2d2d] text-white placeholder-[#666] text-sm border border-[#444] focus:outline-none focus:border-[#c8a87a]"
              required
              aria-label="E-postadress för nyhetsbrev"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-[#c8a87a] text-white text-xs tracking-widest uppercase hover:bg-[#a88a5a] transition-colors"
            >
              Prenumerera
            </button>
          </form>
          <p className="text-xs text-[#555] mt-4">
            Genom att prenumerera godkänner du vår{" "}
            <Link href="/gdpr" className="underline hover:text-[#c8a87a]">
              integritetspolicy
            </Link>
            . Du kan avregistrera dig när som helst.
          </p>
        </div>
      </section>
    </div>
  );
}
