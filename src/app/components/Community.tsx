import styles from "../page.module.css";

export default function Community() {
  return (
    <section style={{ background: "var(--bg-alt)" }}>
      <div className={styles.container}>
        <h2>Une pool vivante</h2>

        <p style={{ marginTop: 16 }}>
          Best Share du mois. Activité réelle. Reconnaissance factuelle.
        </p>
      </div>
    </section>
  );
}