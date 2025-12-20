import type { Metadata } from "next";
import "./globals.css";


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
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
