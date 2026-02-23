import styles from "../pool.module.css"

export default function QuickStart() {
  return (
    <section>
      <div className={styles.container}>
        <h2>Configurer en quelques minutes</h2>

        <div className={styles.grid + " " + styles.grid3} style={{ marginTop: 24 }}>
          <p>3 modes, une seule pool : Solo · Team · Pool</p>
          <p>Données publiques. Règles claires.</p>
          <p>Pas de KYC.</p>
        </div>

        <div style={{ marginTop: 32 }}>
          <a className={styles.button} href="/modes">
            Voir les configurations
          </a>
        </div>
      </div>
    </section>
  );
}