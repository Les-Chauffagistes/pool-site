import type { Metadata } from "next";
import "./globals.css";
import Footer from "./components/Footer";


export const metadata: Metadata = {
  title: "Les Chauffagistes — Pool Bitcoin",
  description: "Pool française de minage Bitcoin valorisant la chaleur. 0% fees.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <meta name="theme-color" content="#cc640eff" />
        <meta name="og:image:secure_url" content="/brand.jpg" />
      </head>

      <body>
        <main style={{ display: "flex", flexDirection: "column", minHeight: "100dvh" }}>
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
