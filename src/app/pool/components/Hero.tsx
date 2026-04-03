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

          <div
            style={{
              marginTop: 32,
              display: "flex",
              alignItems: "center",
              gap: 16,
              flexWrap: "wrap",
            }}
          >
            <a className={styles.button} href="/pool/modes">
              Commencer à miner
            </a>

            <a
              href="https://shares-viewer.chauffagistes-btc.fr/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                padding: "10px 14px",
                borderRadius: 14,
                textDecoration: "none",
                color: "inherit",
                background: "rgba(255, 255, 255, 0.05)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                transition: "all 0.15s ease",
              }}
            >
              <span
                style={{
                  padding: "3px 8px",
                  borderRadius: 999,
                  background: "var(--accent)",
                  color: "#000",
                  fontSize: "0.7rem",
                  fontWeight: 800,
                  flexShrink: 0,
                }}
              >
                NEW
              </span>

              <span
                style={{
                  display: "flex",
                  flexDirection: "column",
                  lineHeight: 1.2,
                }}
              >
                <span
                  style={{
                    fontSize: "0.9rem",
                    fontWeight: 700,
                  }}
                >
                  Shares Viewer
                </span>

                <span
                  style={{
                    fontSize: "0.75rem",
                    color: "var(--text-muted)",
                  }}
                >
                  Quand le minage devient un jeu : Bitcoin Workers Life
                </span>
              </span>
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