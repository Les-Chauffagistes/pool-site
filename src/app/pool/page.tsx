import Hero from "@/app/pool/components/Hero";
import Stats from "./components/Stats";
import QuickStart from "@/app/pool/components/QuickStart";
import Why from "@/app/pool/components/Why";
import Differentiation from "@/app/pool/components/Differentiation";
import Community from "@/app/pool/components/Community";
import Support from "./components/Support";
import Partners from "@/app/pool/components/Partners";
import NoisyBackground from "../components/NoisyBackground";

import styles from "./pool.module.css";

export default function Home() {
  return (
    <main className={styles.pool}>
      <NoisyBackground noiseOpacity={45}>
        <Hero />
        <Stats />
      </NoisyBackground>
      <QuickStart />
      <Partners />
      <Why />
      <Differentiation />
      <Community />
      <Support />
    </main>
  );
}