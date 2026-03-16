import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://chauffagistes-btc.fr";

  return [
    { url: base, priority: 1 },
    { url: `${base}/pool`, priority: 0.8 },
    { url: `${base}/pool/stats`, priority: 0.7 },
    { url: `${base}/pool/modes`, priority: 0.7 },
  ];
}