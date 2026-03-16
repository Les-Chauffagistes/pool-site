import Image from "next/image";
import styles from "../pool.module.css";

export default function Hero() {
  return (
    <section style={{ minHeight: 500, paddingTop: 90 }}>
      <div
        className={styles.container}
        style={{
          display: "flex",
          alignItems: "center",
          gap: 24,
          flexWrap: "wrap",
        }}
      >
        <div
          className={styles.fadeUp}
          style={{ flex: 1, minWidth: 280 }}
        >
          <h1>
            Minage Bitcoin collectif.
            <br />
            <span style={{ color: "var(--accent)" }}>0 % de frais.</span> Chaleur utile.
          </h1>

          <p style={{ marginTop: 16, maxWidth: 520 }}>
            Solution de minage Bitcoin Française valorisant la chaleur des machines pour le chauffage,
            sans frais sur les blocs.
          </p>

          <div style={{ marginTop: 32 }}>
            <a className={styles.button} href="/pool/modes">
              Commencer à miner
            </a>
          </div>
        </div>

        <div
          style={{
            flexShrink: 0,
            width: "100%",
            maxWidth: 300,
            margin: "0 auto",
          }}
        >
          <Image
            src="/brand-icon.png"
            width={300}
            height={300}
            alt="Chauffagistes"
            unoptimized
            style={{
              width: "100%",
              height: "auto",
              display: "block",
            }}
          />
        </div>
      </div>
    </section>
  );
}