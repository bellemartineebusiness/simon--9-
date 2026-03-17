import type { Metadata } from "next";
import Link from "next/link";

const products = [
  { id: 1, name: "Klassisk Linne Blazer", price: "2 495 kr", priceNum: 2495, category: "Ytterkläder", color: "#d4c5b0", description: "Tidlös blazer i 100% linne. Perfekt för kontoret eller en avslappnad kväll. Strukturerad passform med slitsade ärmar och fickor. Beställ ett nummer större för en mer oversized look.", material: "100% Linne", care: "Handtvätt 30°C eller torktvätt", new: false },
  { id: 2, name: "Silke Midi Klänning", price: "3 295 kr", priceNum: 3295, category: "Klänningar", color: "#c8b8a8", description: "Elegant midi-klänning i lyxig mulberry-silke. En tidlös siluett med smygknäppning och justerbara axelband. Finns i sand, svart och burgundy.", material: "100% Mulberry-silke", care: "Torrtvätt rekommenderas", new: true },
  { id: 3, name: "High-Waist Culotte", price: "1 695 kr", priceNum: 1695, category: "Byxor", color: "#b8a898", description: "Modern culotte med hög midja och löst ben. Tillverkad av mjuk bomullsblandning med stretch. Perfekt för både kontor och fritid.", material: "95% Bomull, 5% Elastan", care: "Maskintvättbar 40°C", new: false },
  { id: 4, name: "Kaschmir Tröja", price: "2 895 kr", priceNum: 2895, category: "Toppar", color: "#e8d8c8", description: "Mjuk och varm tröja i 100% mongolisk kaschmir. En garderobsklassiker med avslappnad passform och ribbade muddar.", material: "100% Kaschmir", care: "Handtvätt 30°C", new: true },
];

export async function generateStaticParams() {
  return products.map((p) => ({ id: String(p.id) }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const product = products.find((p) => p.id === Number(id));
  return {
    title: product ? `${product.name} – Belle Martinée` : "Produkt – Belle Martinée",
    description: product?.description,
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = products.find((p) => p.id === Number(id)) ?? products[0];
  const vatAmount = Math.round(product.priceNum * 0.2);
  const exclVat = product.priceNum - vatAmount;

  return (
    <div className="min-h-screen">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <nav className="flex items-center gap-2 text-xs text-[#999]">
          <Link href="/" className="hover:text-[#c8a87a]">Hem</Link>
          <span>/</span>
          <Link href="/shop" className="hover:text-[#c8a87a]">Butik</Link>
          <span>/</span>
          <span className="text-[#1a1a1a]">{product.name}</span>
        </nav>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          {/* Product Image */}
          <div
            className="aspect-[3/4] flex items-center justify-center"
            style={{ backgroundColor: product.color }}
          >
            <div className="text-center p-8">
              {product.new && (
                <span className="inline-block bg-[#c8a87a] text-white text-xs px-3 py-1 tracking-widest uppercase mb-4">
                  Nyhet
                </span>
              )}
              <p className="text-sm tracking-widest uppercase text-[#666] mb-3">{product.category}</p>
              <p className="text-lg font-light text-[#1a1a1a]">{product.name}</p>
            </div>
          </div>

          {/* Product Details */}
          <div className="py-4">
            <p className="text-xs tracking-widest uppercase text-[#c8a87a] mb-2">{product.category}</p>
            <h1 className="text-2xl md:text-3xl font-light text-[#1a1a1a] mb-4">{product.name}</h1>

            {/* Price with VAT info */}
            <div className="mb-6">
              <p className="text-2xl font-light text-[#1a1a1a]">{product.price}</p>
              <p className="text-xs text-[#999] mt-1">
                inkl. 25% moms ({vatAmount} kr) | exkl. moms: {exclVat} kr
              </p>
            </div>

            <p className="text-[#555] text-sm leading-relaxed mb-6">{product.description}</p>

            {/* Size selector */}
            <div className="mb-6">
              <p className="text-xs tracking-widest uppercase text-[#1a1a1a] mb-3">Välj storlek</p>
              <div className="flex gap-2 flex-wrap">
                {["XS", "S", "M", "L", "XL"].map((size) => (
                  <button
                    key={size}
                    className="w-12 h-12 border border-[#e8e0d5] text-sm text-[#1a1a1a] hover:border-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white transition-colors"
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Add to cart */}
            <button className="w-full py-4 bg-[#1a1a1a] text-white text-xs tracking-[0.3em] uppercase hover:bg-[#c8a87a] transition-colors mb-4">
              Lägg i varukorg
            </button>

            {/* Product info */}
            <div className="border-t border-[#e8e0d5] pt-6 mt-6 space-y-3">
              <div className="flex justify-between text-xs">
                <span className="text-[#999]">Material</span>
                <span className="text-[#1a1a1a]">{product.material}</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-[#999]">Skötselråd</span>
                <span className="text-[#1a1a1a]">{product.care}</span>
              </div>
            </div>

            {/* Legal notice */}
            <div className="mt-6 p-4 bg-[#f5ede0] text-xs text-[#666]">
              <p className="mb-1">
                <strong className="text-[#1a1a1a]">✓ 14 dagars ångerrätt</strong> – Fri retur inom 14 dagar
                (Distansavtalslagen)
              </p>
              <p>
                <strong className="text-[#1a1a1a]">✓ 3 års reklamationsrätt</strong> – Vid fabriksfel
                (Konsumentköplagen)
              </p>
              <Link href="/villkor" className="text-[#c8a87a] hover:underline mt-2 inline-block">
                Läs köpvillkoren →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
