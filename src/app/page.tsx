import Image from "next/image";
import styles from "./page.module.css";

export default function HomePage() {
    return <main className={styles.page}>
        <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            flex: 1,
            gap: 20
        }}>
            <Image src="/brand-icon.png" width={200} height={200} alt="Chauffagistes" />
            <p>Insérer ici super page de présentation des Chauffagistes</p>
        </div>
    </main>
}