import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Statistiques",
  description:
    "Consultez les statistiques en temps réel de la pool de minage Bitcoin Les Chauffagistes : hashrate, workers, récompenses.",
  alternates: {
    canonical: "/pool/stats",
  },
};

export default function StatsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
