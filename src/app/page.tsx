import Hero from "@/app/components/Hero";
import Stats from "@/app/components/Stats";
import QuickStart from "@/app/components/QuickStart";
import Why from "@/app/components/Why";
import Differentiation from "@/app/components/Differentiation";
import Community from "@/app/components/Community";
import Support from "@/app/components/Support";
import Partners from "@/app/components/Partners";
import NoisyBackground from "./components/NoisyBackground";

import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.page}>
      <NoisyBackground noiseOpacity={45}>
        <Hero />
        <Stats />
      </NoisyBackground>
      <QuickStart />
      <Why />
      <Differentiation />
      <Community />
      <Support />
      <Partners />
    </main>
  );
}