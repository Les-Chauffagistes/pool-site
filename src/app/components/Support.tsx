import styles from "../page.module.css";

export default function Support() {
  return (
    <section>
      <div className={styles.container}>
        <h2>Soutenir le projet</h2>

        <p style={{ marginTop: 16, maxWidth: 600 }}>
          La pool fonctionne sans frais. Les dons financent l’infrastructure et le développement.
        </p>

        <div style={{ marginTop: 32 }}>
          <a className={styles.button} href="/donate">
            Faire un don
          </a>
        </div>
      </div>
    </section>
  );
}