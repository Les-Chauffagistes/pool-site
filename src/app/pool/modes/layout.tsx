import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Rejoindre Les Chauffagistes",
  description: "Minez en France, Chauffez vous",
  alternates: {
    canonical: "/pool/modes",
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {children}
    </>
  );
}
