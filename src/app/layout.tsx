import type { Metadata } from "next";
import { Inter, Bebas_Neue } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import BusinessJsonLd from "@/components/seo/BusinessJsonLd";
import { business, getAbsoluteSiteUrl } from "@/config/business";
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

const homeUrl = getAbsoluteSiteUrl("/");
const homeSocialImage = getAbsoluteSiteUrl(
  "/images/services/roofing/projects/completed-roof-replacement-drone-front.jpg",
);
const homeTitle = `Roofing & Exterior Contractor in Central Wisconsin | ${business.name}`;
const homeDescription =
  "Roofing, siding, gutters, soffit, and fascia services for homes and businesses throughout Central Wisconsin.";

export const metadata: Metadata = {
  ...(business.siteUrl ? { metadataBase: new URL(business.siteUrl) } : {}),
  title: homeTitle,
  description: homeDescription,
  ...(homeUrl ? { alternates: { canonical: homeUrl } } : {}),
  openGraph: {
    type: "website",
    title: homeTitle,
    description: homeDescription,
    siteName: business.name,
    ...(homeUrl ? { url: homeUrl } : {}),
    ...(homeSocialImage
      ? {
          images: [
            {
              url: homeSocialImage,
              alt: "Completed residential shingle roof photographed from the front by drone",
            },
          ],
        }
      : {}),
  },
  twitter: {
    card: homeSocialImage ? "summary_large_image" : "summary",
    title: homeTitle,
    description: homeDescription,
    ...(homeSocialImage ? { images: [homeSocialImage] } : {}),
  },
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
        <Analytics />
      </body>
    </html>
  );
}
