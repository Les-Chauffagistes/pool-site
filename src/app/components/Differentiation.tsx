import styles from "../page.module.css";

export default function Differentiation() {
  return (
    <section>
      <div className={styles.container}>
        <h2>Ce qui nous distingue</h2>

        <div className={styles.grid + " " + styles.grid3} style={{ marginTop: 32 }}>
          {[
            "0 % de frais sur les blocs",
            "Valorisation réelle de la chaleur",
            "Projet communautaire français",
            "Transparence des statistiques",
            "Aucun intermédiaire financier",
          ].map((item) => (
            <div
              key={item}
              style={{
                background: "var(--bg-soft)",
                padding: 24,
                borderRadius: "var(--radius)",
              }}
            >
              <p>{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}