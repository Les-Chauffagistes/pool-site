import styles from "../page.module.css";


export default function Partners() {
  return (
    <section style={{ background: "var(--bg-alt)" }}>
      <div className={styles.container}>
        <h2>Écosystème</h2>

        <p style={{ marginTop: 16 }}>
          Partenaires techniques et fournisseurs.
        </p>
      </div>
    </section>
  );
}