import { BanknoteX, FileChartPie, Handshake, Heater, Landmark } from "lucide-react";
import styles from "../pool.module.css";
import { ComponentType } from "react";

export default function Differentiation() {

  type Item = {
    label: string;
    Icon: ComponentType;
  };

  const ITEMS: Item[] = [
    { label: "0 % de frais sur les blocs", Icon: BanknoteX },
    { label: "Valorisation réelle de la chaleur", Icon: Heater },
    { label: "Projet communautaire français", Icon: Handshake },
    { label: "Transparence des statistiques", Icon: FileChartPie },
    { label: "Aucun intermédiaire financier", Icon: Landmark },
  ];

  return (
    <section style={{ background: "var(--bg-alt)" }}>
      <div className={styles.container}>
        <h2>Ce qui nous distingue</h2>

        <div className={`${styles.grid} ${styles.grid3} ${styles.spaced}`} style={{
          marginTop: 32
        }}>
          {ITEMS.map(({ label, Icon }) => (
            <div key={label} className={styles.card} style={{

              background: "var(--bg-soft)",
              padding: 24,
              borderRadius: "var(--radius)",
              display: "flex",
              alignItems: "center",
              gap: 15

            }}>
              <Icon />
              <p>{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}