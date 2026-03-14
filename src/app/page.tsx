import Image from "next/image";
import styles from "./page.module.css";
import poolStyles from "./pool/pool.module.css";
import Partners from "./pool/components/Partners";

const features = [
  {
    title: "Minage utile",
    text: "Nous encourageons les usages où le minage participe aussi au chauffage d’un logement, d’un atelier ou d’un local.",
  },
  {
    title: "Réutilisation de chaleur",
    text: "Au lieu de dissiper l’énergie dans le vide, nous cherchons à valoriser les calories produites par les machines.",
  },
  {
    title: "Transmission",
    text: "Nous partageons des retours d’expérience, des conseils techniques et une vision accessible du minage domestique ou intégré.",
  },
  {
    title: "Écosystème",
    text: "Nous faisons vivre une communauté autour de partenaires, d’outils, d’infrastructures et d’initiatives alignées avec cette philosophie.",
  },
];

export default function HomePage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroInner}>
            <Image
              src="/brand-icon.png"
              width={180}
              height={180}
              alt="Chauffagistes"
              priority
            />

            <div className={styles.heroText}>
              <p className={styles.eyebrow}>Communauté Bitcoin & chaleur utile</p>
              <h1 className={styles.heroTitle}>Les Chauffagistes</h1>
              <p className={styles.heroLead}>
                Les Chauffagistes, c’est une communauté qui promeut un minage de Bitcoin
                utile, concret et ancré dans le réel. Notre conviction est simple : la
                chaleur produite par les mineurs ne doit pas être considérée comme une
                perte, mais comme une ressource.
              </p>
            </div>

            <div className={styles.features}>
              {features.map((item) => (
                <div key={item.title} className={styles.featureCard}>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>

            <div className={styles.closingText}>
              <p>
                Au-delà de la pool, Les Chauffagistes défendent une approche plus
                intelligente de l’énergie : utiliser le minage comme une brique technique
                capable de produire à la fois de la sécurité pour le réseau Bitcoin et de
                la chaleur réellement exploitée.
              </p>
            </div>
          </div>
        </div>
      </section>

        <div className={styles.communityLinks}>
            <a href="https://discord.gg/5s9xfbZPBR" target="_blank" rel="noopener noreferrer">
                <img src="https://cdn.simpleicons.org/discord" alt="Discord" width="28" height="28" />
                <span>Discord</span>
            </a>

            <a href="https://x.com/Chauff_pool" target="_blank" rel="noopener noreferrer">
                <img src="https://cdn.simpleicons.org/x" alt="X" width="28" height="28" />
                <span>X</span>
            </a>

            <a href="https://learn.chauffagistes-btc.fr/" target="_blank" rel="noopener noreferrer">
                <img src="https://cdn.simpleicons.org/wikipedia" alt="Wiki" width="28" height="28" />
                <span>Wiki</span>
            </a>

            <a href="https://www.youtube.com/@chauffagistes" target="_blank" rel="noopener noreferrer">
                <img src="https://cdn.simpleicons.org/youtube" alt="YouTube" width="28" height="28" />
                <span>YouTube</span>
            </a>

            <a href="/pool">
                <img src="https://cdn.simpleicons.org/bitcoin" alt="Pool" width="28" height="28" />
                <span>La pool</span>
            </a>
        </div>

      <div className={poolStyles.pool}>
        <Partners embedded />
      </div>
    </main>
  );
}