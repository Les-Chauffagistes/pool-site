"use client"

import { CSSProperties } from "react"
import NoisyBackground from "@/app/components/NoisyBackground"
import { Globe, User, Users } from "lucide-react"
import Checked from "./components/Checked"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import styles from "./page.module.css"



export default function Page() {
    const pathname = usePathname();
    console.log(pathname)
    const cardStyle: CSSProperties = {
        borderRadius: 20,
        padding: 20,
        position: 'relative',
        overflow: 'hidden',
    }

    const h1Style: CSSProperties = {
        marginBottom: 20
    }

    const buttonStyle: CSSProperties = {
        borderRadius: 10,
        border: "none",
        padding: 10,
        color: "white",
        marginTop: 20,
        fontWeight: 600,
        fontSize: 14,
        boxShadow: "0px 0px 15px 0px #1919197a"
    }

    const decriptionStyle: CSSProperties = {
        flex: 2
    }

    return (
        <main style={{ flex: 1, display: "flex", flexDirection: "column" }} className={styles.modes}>
            <div style={{ display: "flex", alignItems: "center", gap: 20, padding: 20 }}>
                <Link href="/">
                    <Image src="/brand-icon.png" alt="icon" width={100} height={100}></Image>
                </Link>
                <div>
                    <h1 className={styles.title}>Les Chauffagistes ont tout ce qu&apos;il vous faut</h1>
                    <p>Minez du Bitcoin seul, avec vos amis, ou avec la communauté</p>
                </div>
            </div>
            <div style={{
                display: "flex",
                justifyContent: "center",
                padding: 20,
                flex: 1
            }}>
                <div className={styles.container} style={{
                    display: "flex",
                    gap: 20,
                    alignItems: "stretch",
                    height: "fit-content"
                }}>
                    <NoisyBackground style={{ ...cardStyle, border: "solid 1px rgba(51, 52, 85, 1)" }} grainIntensity={45}>
                        <div style={{ display: "flex", flexDirection: "column", flex: 1, height: "100%" }}>
                            <User />
                            <h1 style={h1Style}>Minage en solo</h1>
                            <div className={styles.cardContent}>
                                <div style={decriptionStyle}>
                                    <p>Pour miner seul, sans devoir maintenir un node. Si vous avez déjà votre propre node, ce mode ne vous apportera pas davantage.</p>
                                    <p style={{ marginBottom: 14 }}>La récompense du bloc tombe directement sur votre wallet, sans frais ni transit chez nous.</p>
                                </div>
                                <div style={{ flex: 1, alignContent: "end", marginTop: 20 }}>
                                    <Checked>
                                        <p>Aucun node requis</p>
                                    </Checked>
                                    <Checked>
                                        <p>0% de frais</p>
                                    </Checked>
                                    <Checked>
                                        <p>La récompense tombe directement sur votre wallet</p>
                                    </Checked>
                                </div>
                            </div>
                            <Link href={`${pathname}/solo`}>
                                <button style={{ backgroundColor: "rgba(51, 52, 85, 1)", ...buttonStyle }}>Commencer</button>
                            </Link>
                        </div>
                    </NoisyBackground>

                    <NoisyBackground style={{ ...cardStyle, border: "solid 1px rgba(55, 81, 51, 1)" }} grainIntensity={45} blob1Color="rgba(57, 142, 80, 1)" blob2Color="rgba(62, 173, 153, 1)" blob3Color="rgba(48, 94, 32, 1)" backgroundColor="rgba(31, 42, 27, 1)">
                        <div style={{ display: "flex", flexDirection: "column", flex: 1, height: "100%" }}>
                            <Users />
                            <h1 style={h1Style}>Minage collaboratif</h1>
                            <div className={styles.cardContent}>
                                <div style={decriptionStyle}>
                                    <p>Pour miner entre amis / communauté, sans exposer un node public et partager les gains selon vos règles.</p>
                                    <p>La récompense tombe sur le wallet indiqué en User</p>
                                </div>
                                <div style={{ flex: 1, alignContent: "end", marginTop: 20 }}>
                                    <Checked>
                                        <p>Aucun node requis</p>
                                    </Checked>
                                    <Checked>
                                        <p>0% de frais</p>
                                    </Checked>
                                    <Checked>
                                        <p>La récompense tombe sur le wallet défini en User</p>
                                    </Checked>
                                    <Checked>
                                        <p>Répartissez la récompense comme vous le souhaitez</p>
                                    </Checked>
                                </div>
                            </div>
                            <Link href={`${pathname}/team`}>
                                <button style={{ backgroundColor: "rgba(55, 81, 51, 1)", ...buttonStyle }}>Commencer</button>
                            </Link>

                        </div>
                    </NoisyBackground>

                    <NoisyBackground style={{ ...cardStyle, border: "solid 1px rgba(85, 64, 51, 1)" }} grainIntensity={45} blob1Color="rgba(213, 178, 61, 1)" blob2Color="rgba(207, 110, 61, 1)" blob3Color="rgba(189, 112, 18, 1)" backgroundColor="rgba(52, 37, 26, 1)">
                        <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
                            <Globe />
                            <h1 style={h1Style}>Minage en pool</h1>
                            <div className={styles.cardContent}>
                                <div style={decriptionStyle}>
                                    <p>Pour maximiser les chances de trouver un bloc en mutualisant la puissance.</p>
                                    <p>Les récompenses vont sur un wallet multi-signature détenu par plusieurs membres. Personne ne peut agir seul. Répartition calculée en temps réel :</p>
                                    <p>[Somme diff. des shares d’un utilisateur] / [Somme diff. totale du groupe]</p>
                                </div>
                                <div style={{ flex: 1, alignContent: "end", marginTop: 20 }}>
                                    <Checked>
                                        <p>Aucun node requis</p>
                                    </Checked>
                                    <Checked>
                                        <p>0% de frais</p>
                                    </Checked>
                                    <Checked>
                                        <p>Chances élevées de trouver un bloc</p>
                                    </Checked>
                                    <Checked>
                                        <p>Répartition juste basée sur le travail effectif (PoW)</p>
                                    </Checked>
                                    <Checked>
                                        <p>La récompense tombe sur le wallet multi-sig de la pool avant redistribution</p>
                                    </Checked>
                                </div>
                            </div>
                            <Link href={`${pathname}/pool`}>
                                <button style={{ backgroundColor: "rgba(85, 64, 51, 1)", ...buttonStyle }}>Commencer</button>
                            </Link>
                        </div>
                    </NoisyBackground>
                </div>
            </div>
        </main>
    )
}