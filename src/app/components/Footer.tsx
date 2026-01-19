import Link from "next/link";
import Image from "next/image"
import { ChartLineIcon } from "lucide-react";
import styles from "./footer.module.css"
import { HEATBOARD_URL } from "@/app/constants/columns";


const iconSize = 18;

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div>
                <Link href="/"><p>Chauffagistes Pool </p></Link>
                <p style={{ textAlign: "center", marginTop: 10 }}>© 2024 — 2025</p>
            </div>
            <div className={styles.category} style={{ borderLeft: "solid 1px rgba(255, 255, 255, 0.47)", paddingLeft: 50 }}>
                <h4>Réseaux</h4>
                <Link href="https://discord.gg/7fvxDPjRgj">
                    <Image src={"/Discord-Symbol-White.svg"} width={iconSize} height={iconSize} alt="Discord Logo" color="var(--orange)" />
                    <p>Discord</p>
                </Link>
                <Link href="https://x.com/Chauff_pool">
                    <Image src={"/x.svg"} width={iconSize} height={iconSize} alt="X Logo" />
                    <p>X</p>
                </Link>
                <Link href="https://www.youtube.com/@chauffagistes">
                    <Image src={"/youtube-app-white-icon.svg"} width={iconSize} height={iconSize} alt="YouTube Logo" />
                    <p>YouTube</p>
                </Link>
            </div>
            <div className={styles.category}>
                <h4>Ressources</h4>
                <Link href="https://github.com/Les-Chauffagistes">
                    <Image src={"/GitHub_Invertocat_Light.svg"} width={iconSize} height={iconSize} alt="Discord Logo" color="var(--orange)" />
                    <p>GitHub</p>
                </Link>
            </div>
            <div className={styles.category}>
                <h4>Services</h4>
                <Link href={HEATBOARD_URL}>
                    <ChartLineIcon size={iconSize} />
                    <p>Dashboard</p>
                </Link>
            </div>
        </footer>
    )
}