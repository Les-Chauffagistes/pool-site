import Image from "next/image";
import styles from "../pool.module.css";


export default function Hero() {
  return (

    <section style={{ minHeight: 500, paddingTop: 90 }}>
      <div style={{display: 'flex', alignItems: 'center'}}
        className={styles.container}
      >
        <div className={styles.fadeUp} style={{flex: 1}}>
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
            <a className={styles.button} href="/start">
              Commencer à miner
            </a>
          </div>
        </div>
        <Image src="/brand-icon.png" width={300} height={300} alt="Chauffagistes" unoptimized/>
      </div>
    </section>

  );
}