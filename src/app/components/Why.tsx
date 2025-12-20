import Link from "next/link";
import styles from "../page.module.css";

export default function Why() {
  return (
    <section style={{ background: "var(--bg-alt)" }}>
      <div className={styles.container}>
        <h2>Pourquoi Les Chauffagistes</h2>

        <p style={{ marginTop: 16, maxWidth: 700 }}>
          Les Chauffagistes est une pool de minage Bitcoin française à 0 % de frais.
          La chaleur produite par le minage est réutilisée pour chauffer des logements ou des locaux.
          Le minage sécurise le réseau Bitcoin. La chaleur n’est pas perdue.
        </p>

        <div style={{ marginTop: 32 }}>
          <Link href="/about" className={styles.button}>
            En savoir plus
          </Link>
        </div>
      </div>
    </section>
  );
}