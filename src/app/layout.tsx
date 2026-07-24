import type { Metadata } from "next";
import { Inter, Bebas_Neue } from "next/font/google";
import BusinessJsonLd from "@/components/seo/BusinessJsonLd";
import { business } from "@/config/business";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
});

export const metadata: Metadata = {
  title: business.name,
  description: `${business.category} in ${business.city}, ${business.state}.`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${bebas.variable} bg-[#0A0A0A] text-white`}
      >
        <BusinessJsonLd />
        {children}
      </body>
    </html>
  );
}
