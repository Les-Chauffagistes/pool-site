import Image from "next/image";
import styles from "../page.module.css";
import Code from "./Code";
import componentStyles from "./support.module.css";

export default function Support() {
  return (
    <section className={componentStyles.suport}>
      <div className={styles.container}>
        <h2>Soutenir le projet</h2>

        <p style={{ marginTop: 16, maxWidth: 600 }}>
          La pool fonctionne sans frais. Les dons financent l’infrastructure, le développement et la cagnotte.
        </p>

        <div style={{
          display: "flex",
          flexDirection: "column",
          gap: 20,
          justifyContent: "space-around",
          alignItems: "stretch",
          width: "fit-content",
          margin: "32px auto",
          maxWidth: "100%"
        }}>
          <div className={componentStyles.card}>
            <p style={{marginBottom: 10}}>Bitcoin (on-chain)</p>
            <Code><p>bc1qkt3n2yzu0kxlm72hhhx9vnxge8zhr5k2q4zc6l</p></Code>
          </div>
          <div className={componentStyles.card}>
            <p>Lightning Network</p>
            <div style={{
              display: "flex",
              flexDirection: "column",
              gap: 10,
              alignItems: "center",
              marginTop: 10
            }}>

              <div style={{ backgroundColor: "white", padding: 10, width: "fit-content", borderRadius: 5 }}>
                <Image src="/qr.jpg" alt="LN" width={200} height={200} />
              </div>
              <Code><p>chauffagistes@walletofsatoshi.com</p></Code>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}