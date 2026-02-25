"use client";

import Image from "next/image";
import styles from "../pool.module.css";
import { ExternalLink, Tag, Copy, LucideProps, Check } from "lucide-react";
import { ForwardRefExoticComponent, useState } from "react";

type Partner = {
  name: string;
  url: string;
  image?: string;
  description: string;
  promoCode?: string;
  discount?: string;
};

const partners: Partner[] = [
  {
    name: "Silexperience",
    url: "https://silexperience.company.site",
    image: "/silexperience.jpg",
    description: "Matériel de minage",
    promoCode: "CHAUFFAGISTES",
    discount: "-5%",
  },
  {
    name: "MineShop",
    url: "https://mineshop.eu/?wpam_id=71",
    description: "Boutique de mineurs",
    promoCode: "CHAUFFAGISTES",
    discount: "-2%",
    image: "/mineshop.png",
  },
  {
    name: "Bitcoin Bazar",
    url: "https://bitcoinbazar.fr",
    description: "Boutique Bitcoin",
    promoCode: "chauffagistes21",
    discount: "-5%",
    image: "/bitcoin-bazar.webp",
  },
  {
    name: "21energy",
    url: "https://21energy.com/?sca_ref=10705407.oK6BJJq0SM",
    image: "/21energy.png",
    description: "Boutique de mineurs",
    promoCode: "CHAUFFAGISTES",
    discount: "-5%",
  },
  {
    name: "B.O.B",
    url: "https://drink-bob.com",
    image: "/bob.jpg",
    description: "Récompenses mensuelles pour les mineurs",
  },
];

const clients: Partner[] = [
  {
    name: "BEF",
    url: "https://www.bitcoin-energy-forum.com",
    image: "/bef.jpg",
    description: "Pool hébergée sur notre infrastructure",
  },
];

function PartnerLogo({ partner }: Readonly<{ partner: Partner }>) {
  if (partner.image) {
    return (
      <Image
        src={`/partners${partner.image}`}
        width={48}
        height={48}
        alt={partner.name}
        style={{ borderRadius: 10, objectFit: "cover" }}
        quality={100}
      />
    );
  }

  return (
    <div style={{
      width: 48,
      height: 48,
      borderRadius: 10,
      background: "var(--accent-soft)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "1.2rem",
      fontWeight: 800,
      color: "var(--accent)",
    }}>
      {partner.name.charAt(0)}
    </div>
  );
}

function PartnerCard({ partner }: Readonly<{ partner: Partner }>) {
  const [Icon, setIcon] = useState<ForwardRefExoticComponent<LucideProps>>(Copy)

  return (
    <div style={{
      background: "var(--bg-blue)",
      padding: 24,
      borderRadius: "var(--radius)",
      border: "1px solid #323242",
      display: "flex",
      flexDirection: "column",
      gap: 16,
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
        <PartnerLogo partner={partner} />
        <div>
          <h4 style={{ margin: 0, fontSize: "1rem" }}>{partner.name}</h4>
          <p style={{ margin: 0, fontSize: "0.85rem" }}>{partner.description}</p>
        </div>
      </div>

      {partner.promoCode && (
        <button
          onClick={async () => {
            await navigator.clipboard.writeText(partner.promoCode!.toString())
            setIcon(Check);
            setTimeout(() => setIcon(Copy), 1000);
          }}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            background: "var(--accent-soft)",
            border: "1px solid rgba(255, 138, 0, 0.25)",
            borderRadius: 10,
            padding: "10px 14px",
            cursor: "pointer",
            width: "100%",
          }}
        >
          <Tag size={14} color="var(--accent)" />
          <code style={{
            color: "var(--accent)",
            fontWeight: 700,
            fontSize: "0.85rem",
            flex: 1,
            textAlign: "left",
          }}>
            {partner.promoCode}
          </code>
          <span style={{
            fontWeight: 700,
            fontSize: "0.85rem",
            color: "var(--text-main)",
          }}>
            {partner.discount}
          </span>
          <Icon size={14} color="var(--text-muted)" />
        </button>
      )}

      <a
        href={partner.url}
        target="_blank"
        style={{
          display: "flex",
          alignItems: "center",
          gap: 6,
          color: "var(--text-muted)",
          fontSize: "0.85rem",
          textDecoration: "none",
          marginTop: "auto",
        }}
      >
        Visiter <ExternalLink size={13} />
      </a>
    </div>
  );
}

export default function Partners() {
  return (
    <section style={{ background: "var(--bg-alt)" }}>
      <div className={styles.container}>
        <h2>Écosystème</h2>

        <h3 style={{ marginTop: 32, marginBottom: 16 }}>Nos partenaires</h3>
        <div className={styles.grid + " " + styles.grid3}>
          {partners.map(p => <PartnerCard key={p.name} partner={p} />)}
        </div>

        <h3 style={{ marginTop: 48, marginBottom: 16 }}>Ils utilisent nos services</h3>
        <div className={styles.grid + " " + styles.grid3}>
          {clients.map(p => <PartnerCard key={p.name} partner={p} />)}
        </div>

        <div style={{ marginTop: 40 }}>
          <a className={styles.button} href="/partners">
            Intégrer l&apos;écosystème
          </a>
        </div>
      </div>
    </section>
  );
}
