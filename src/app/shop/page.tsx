import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Butik – Belle Martinée",
  description: "Shoppa Belle Martinées kollektion av tidlösa och hållbara kläder. Alla priser inkl. 25% moms.",
};

const allProducts = [
  { id: 1, name: "Klassisk Linne Blazer", price: "2 495 kr", category: "Ytterkläder", color: "#d4c5b0", new: false },
  { id: 2, name: "Silke Midi Klänning", price: "3 295 kr", category: "Klänningar", color: "#c8b8a8", new: true },
  { id: 3, name: "High-Waist Culotte", price: "1 695 kr", category: "Byxor", color: "#b8a898", new: false },
  { id: 4, name: "Kaschmir Tröja", price: "2 895 kr", category: "Toppar", color: "#e8d8c8", new: true },
  { id: 5, name: "Linneskjorta Oversize", price: "1 295 kr", category: "Toppar", color: "#ddd0c0", new: false },
  { id: 6, name: "Wrap Klänning Midi", price: "2 195 kr", category: "Klänningar", color: "#c0b0a0", new: true },
  { id: 7, name: "Wide Leg Jeans", price: "1 895 kr", category: "Byxor", color: "#a8b0c8", new: false },
  { id: 8, name: "Trench Coat", price: "4 495 kr", category: "Ytterkläder", color: "#c8b898", new: false },
  { id: 9, name: "Ribbad Polo Topp", price: "895 kr", category: "Toppar", color: "#d8c8b8", new: true },
  { id: 10, name: "Plissékjol Maxi", price: "1 995 kr", category: "Kjolar", color: "#b8c8d8", new: false },
  { id: 11, name: "Bomull Midi Klänning", price: "1 895 kr", category: "Klänningar", color: "#d0c0b0", new: false },
  { id: 12, name: "Ullkappa", price: "5 995 kr", category: "Ytterkläder", color: "#909090", new: true },
];

export default function ShopPage() {
  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <div className="bg-[#f5ede0] py-16 md:py-24 text-center">
        <p className="text-xs tracking-[0.4em] uppercase text-[#c8a87a] mb-4">Kollektion 2025</p>
        <h1 className="text-3xl md:text-5xl font-light tracking-wide text-[#1a1a1a] mb-4">Butik</h1>
        <div className="w-16 h-0.5 bg-[#c8a87a] mx-auto"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Filter bar */}
        <div className="flex flex-wrap gap-3 mb-10 pb-6 border-b border-[#e8e0d5]">
          <span className="text-xs tracking-widest uppercase text-[#999]">Filtrera:</span>
          {["Alla", "Klänningar", "Toppar", "Byxor", "Kjolar", "Ytterkläder"].map((filter) => (
            <button
              key={filter}
              className="text-xs tracking-widest uppercase px-4 py-2 border border-[#e8e0d5] hover:border-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white transition-colors first-of-type:bg-[#1a1a1a] first-of-type:text-white first-of-type:border-[#1a1a1a]"
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {allProducts.map((product) => (
            <Link key={product.id} href={`/shop/${product.id}`} className="group">
              <div className="relative">
                <div
                  className="aspect-[3/4] mb-3 flex items-center justify-center transition-transform duration-300 group-hover:scale-[1.02]"
                  style={{ backgroundColor: product.color }}
                >
                  <div className="text-center p-4">
                    <p className="text-xs tracking-widest uppercase text-[#666] mb-2">{product.category}</p>
                    <p className="text-sm font-light text-[#1a1a1a]">{product.name}</p>
                  </div>
                </div>
                {product.new && (
                  <span className="absolute top-2 left-2 bg-[#c8a87a] text-white text-xs px-2 py-1 tracking-widest uppercase">
                    Nyhet
                  </span>
                )}
              </div>
              <div>
                <p className="text-xs tracking-widest uppercase text-[#999] mb-1">{product.category}</p>
                <h3 className="text-sm font-medium text-[#1a1a1a] mb-1 group-hover:text-[#c8a87a] transition-colors">
                  {product.name}
                </h3>
                <p className="text-sm font-medium text-[#1a1a1a]">{product.price}</p>
                <p className="text-xs text-[#999]">inkl. moms</p>
              </div>
            </Link>
          ))}
        </div>

        {/* Legal info box */}
        <div className="mt-16 p-6 bg-[#f5ede0] border border-[#e8e0d5]">
          <h3 className="text-sm font-semibold text-[#1a1a1a] mb-3 tracking-wide">Köpinformation</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-[#666]">
            <div>
              <p className="font-semibold text-[#1a1a1a] mb-1">Ångerrätt (14 dagar)</p>
              <p>Enligt Distansavtalslagen har du 14 dagars ångerrätt från det att du mottagit varan.</p>
            </div>
            <div>
              <p className="font-semibold text-[#1a1a1a] mb-1">Priser inkl. moms</p>
              <p>Alla priser inkluderar 25% moms i enlighet med Mervärdesskattelagen.</p>
            </div>
            <div>
              <p className="font-semibold text-[#1a1a1a] mb-1">Fri frakt över 1 000 kr</p>
              <p>Vi levererar till hela Sverige. Frakt ingår vid köp över 1 000 kr.</p>
            </div>
          </div>
          <p className="text-xs text-[#999] mt-4">
            Läs mer i våra{" "}
            <Link href="/villkor" className="underline hover:text-[#c8a87a]">
              köpvillkor
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
