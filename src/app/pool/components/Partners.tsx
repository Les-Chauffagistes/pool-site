import Image from "next/image";
import styles from "../pool.module.css";


export default function Partners() {
  return (
    <section style={{ background: "var(--bg-alt)" }}>
      <div className={styles.container}>
        <h2>Écosystème</h2>

        <div className={styles.grid3 + " " + styles.grid} style={{marginTop: 32}}>
          <div style={{width: "fit-content"}}>

            <p>Partenaires techniques et fournisseurs</p>
            <div style={{
              display: "flex",
              gap: 10,
              marginTop: 16,
              marginBottom: 32,

            }}>
              <a href="https://silexperience.company.site" target="_blank">
                <Image src="/silexperience.jpg" width={100} height={100} alt="Silexperience" />
              </a>
              <a href="https://drink-bob.com" target="_blank">
                <Image src="/bob.jpg" width={100} height={100} alt="B.O.B" />
              </a>
            </div>
          </div>

          <div style={{width: "fit-content"}}>
            <p>Événements et collaborations</p>

            <div style={{
              marginTop: 16,
              marginBottom: 32,
              width: "fit-content"
            }}>
              <a href="https://silexperience.company.site" target="_blank">
                <Image src="/bef.png" width={100 * 1.87} height={100} alt="BEF" />
              </a>
            </div>
          </div>
        </div>

        <div style={{ marginTop: 32 }}>
          <a className={styles.button} href="/partners">
            Intégrer l&apos;écosystème
          </a>
        </div>
      </div>
    </section>
  );
}