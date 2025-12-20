import NoisyBackground from "./NoisyBackground";
import styles from "../page.module.css";


export default function Hero() {
  return (

      <section style={{minHeight: 500}}>

        <div className={styles.container + " " + styles.fadeUp}>
          <h1>
            Minage Bitcoin collectif.
            <br />
            <span style={{ color: "var(--accent)" }}>0 % de frais.</span> Chaleur utile.
          </h1>

          <p style={{ marginTop: 16, maxWidth: 520 }}>
            Pool française de minage Bitcoin valorisant la chaleur des machines pour le chauffage,
            sans frais sur les blocs.
          </p>

          <div style={{ marginTop: 32 }}>
            <a className={styles.button} href="/start">
              Commencer à miner
            </a>
          </div>
        </div>
      </section>

  );
}