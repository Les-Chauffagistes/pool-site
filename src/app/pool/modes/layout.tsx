import { Metadata } from "next";


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
    <>
      {children}
    </>
  );
}
