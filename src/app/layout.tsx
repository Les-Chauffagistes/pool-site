import type { Metadata } from "next";
import "./globals.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

export const metadata: Metadata = {
  title: {
    default: "Les Chauffagistes — Projet communautaire autour du minage Bitcoin",
    template: "%s | Les Chauffagistes",
  },

  description:
    "Les Chauffagistes est un projet communautaire autour du minage Bitcoin valorisant la chaleur des machines pour le chauffage. Découvrez nos services dont notre pool de minage à 0% de frais.",

  metadataBase: new URL("https://chauffagistes-btc.fr"),

  alternates: {
    canonical: "/",
  },

  icons: {
    icon: "/brand-icon.png",
    shortcut: "/brand-icon.png",

    apple: [
      { url: "/apple-touch-icon.png" },
      { url: "/apple-touch-icon-128.png", sizes: "128x128" },
      { url: "/apple-touch-icon-256.png", sizes: "256x256" },
      { url: "/apple-touch-icon-512.png", sizes: "512x512" },
    ],
  },

  openGraph: {
    title: "Les Chauffagistes — Projet communautaire autour du minage Bitcoin",
    description:
      "Projet communautaire valorisant la chaleur du minage Bitcoin. Découvrez nos services dont notre pool de minage à 0% de frais.",
    url: "https://chauffagistes-btc.fr",
    siteName: "Les Chauffagistes",
    images: [
      {
        url: "/brand.jpg",
        width: 1200,
        height: 630,
        alt: "Les Chauffagistes",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Les Chauffagistes — Projet communautaire autour du minage Bitcoin",
    description:
      "Projet communautaire valorisant la chaleur du minage Bitcoin.",
    images: ["/brand.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Les Chauffagistes",
    alternateName: "Chauffagistes Pool",
    url: "https://chauffagistes-btc.fr",
    logo: "https://chauffagistes-btc.fr/brand-icon.png",
    description:
      "Les Chauffagistes est un projet communautaire autour du minage Bitcoin valorisant la chaleur des machines pour le chauffage.",
    sameAs: [
      "https://discord.gg/5s9xfbZPBR",
      "https://x.com/Chauff_pool",
      "https://www.youtube.com/@chauffagistes",
      "https://github.com/Les-Chauffagistes",
      "https://learn.chauffagistes-btc.fr",
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Les Chauffagistes",
    url: "https://chauffagistes-btc.fr",
  },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <script defer src="https://umami.chauffagistes-btc.fr/script.js" data-website-id="d51d4c76-7623-4191-8eeb-24fa47f97df4"></script>
        <meta name="theme-color" content="#cc640e" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>

      <body>
        <main
          style={{
            display: "flex",
            flexDirection: "column",
            minHeight: "100dvh",
          }}
        >
          <Navbar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}