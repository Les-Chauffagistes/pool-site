"use client";

import NoisyBackground from "../components/NoisyBackground";
import Code from "../../components/Code";
import NavigationBar from "../components/NavigationBar";

export default function Solo() {
    return (
        <div style={{flex: 1, display: "flex", flexDirection: "column"}}>
            <NavigationBar name="Minage en solo"/>
            <NoisyBackground style={{ flex: 1, minHeight: "600px" }} grainIntensity={45}>
                <div style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flex: 1,
                    height: "100%",
                    maxWidth: 600,
                    margin: "auto"
                }}>
                    <div style={{
                        padding: 30,
                        borderRadius: 30,
                        border: "1px solid rgba(66, 54, 93, 1)",
                        backdropFilter: "blur(1px)",
                        backgroundColor: "rgba(30, 26, 39, 0.1)",
                        width: "fit-content",
                    }}>
                        <h2>Configurer votre mineur</h2>
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
                    </div>
                </div>
            </NoisyBackground>
        </div>
    )
}