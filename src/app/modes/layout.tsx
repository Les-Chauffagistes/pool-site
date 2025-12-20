import { Metadata } from "next";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Rejoindre Les Chauffagistes",
  description: "Minez en France, Chauffez vous",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100dvh" }}>
      {children}
      <Footer />
    </div>
  );
}
