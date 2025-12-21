"use client";

import NoisyBackground from "../components/NoisyBackground";
import Code from "../../components/Code";
import NavigationBar from "../components/NavigationBar";

export default function Solo() {
    return (
        <>
            <NavigationBar name="Minage collaboratif"/>
            <NoisyBackground style={{ flex: 1, minHeight: "600px" }} grainIntensity={45} blob1Color="rgba(57, 142, 80, 1)" blob2Color="rgba(62, 173, 153, 1)" blob3Color="rgba(48, 94, 32, 1)" backgroundColor="rgba(31, 42, 27, 1)">
                <div style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100%",
                    maxWidth: 600,
                    margin: "auto"
                }}>
                    <div style={{
                        padding: 30,
                        borderRadius: 30,
                        border: "solid 1px rgba(55, 81, 51, 1)",
                        backdropFilter: "blur(1px)",
                        backgroundColor: "rgba(55, 81, 51, 0.24)",
                        width: "fit-content",
                    }}>
                        <h2>Configurer vos mineurs</h2>
                        <h4 style={{
                            margin: "20px 0 5px"
                        }}>URL stratum</h4>
                        <Code>stratum+tcp://chauffagistes-pool.fr:3333</Code>
                        <h4 style={{
                            margin: "10px 0 5px"
                        }}>Identifiant (user/pass)</h4>
                        <div style={{
                            display: "flex",
                            marginBottom: 30,
                            gap: 10,
                        }}>
                            <Code>adresse_btc.workername</Code>
                            <Code>X</Code>
                        </div>
                        <p>100% de la récompense tombera sur l&apos;adresse Bitcoin que vous utiliserez dans le champ User</p>
                        <p>Utilisez la même adresse Bitcoin sur tous les mineurs qui participent.</p>
                        <p>Utilisez différents workernames pour différencier les utilisateurs ou les machines</p>
                    </div>
                </div>
            </NoisyBackground>
        </>
    )
}