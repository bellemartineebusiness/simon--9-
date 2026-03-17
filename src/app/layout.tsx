import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";

export const metadata: Metadata = {
  title: "Belle Martinée – Tidlöst Mode",
  description:
    "Belle Martinée är ett svenskt klädesmärke som erbjuder tidlöst och hållbart mode för den moderna kvinnan. Shoppa våra kollektion online.",
  keywords: ["klädermärke", "mode", "kläder", "svensk design", "Belle Martinée"],
  openGraph: {
    title: "Belle Martinée – Tidlöst Mode",
    description: "Tidlöst och hållbart mode för den moderna kvinnan.",
    locale: "sv_SE",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sv">
      <body className="antialiased bg-[#faf9f7] text-[#1a1a1a]">
        <Header />
        <main>{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}

