import Link from "next/link";
import styles from "../pool.module.css";

export default function Why() {
  return (
    <section style={{ background: "var(--bg)" }}>
      <div className={styles.container}>
        <h2>Pourquoi Chauffagistes</h2>

        <p style={{ marginTop: 16, maxWidth: 700 }}>
          Chauffagistes est une solution de minage Bitcoin française à 0 % de frais.
          Créer sa propre pool n&apos;a jamais été aussi simple et rapide.
          Aucun node requis, aucun setup long et compliqué, rien qu&apos;une adresse Bitcoin à fournir.
          La chaleur produite par le minage est réutilisée pour chauffer des logements ou des locaux.
          Le minage sécurise le réseau Bitcoin. La chaleur n’est pas perdue.
        </p>

        <div style={{ marginTop: 32 }}>
          <Link href="/" className={styles.button}>
            En savoir plus
          </Link>
        </div>
      </div>
    </section>
  );
}