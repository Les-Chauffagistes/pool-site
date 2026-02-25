"use client";

import NoisyBackground from "../components/NoisyBackground";
import Code from "../../components/Code";
import NavigationBar from "../components/NavigationBar";
import { COMMUNITY_POOL_ADDRESS, HEATBOARD_URL } from "@/app/constants/columns";
import Link from "next/link";

export default function Solo() {
    return (
        <>
            <NavigationBar name="Minage en pool"/>
            <NoisyBackground style={{ flex: 1, minHeight: "600px" }} grainIntensity={45} blob1Color="rgba(213, 178, 61, 1)" blob2Color="rgba(207, 110, 61, 1)" blob3Color="rgba(189, 112, 18, 1)" backgroundColor="rgba(52, 37, 26, 1)">
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
                        border: "1px solid rgba(85, 64, 51, 1)",
                        backdropFilter: "blur(1px)",
                        backgroundColor: "rgba(85, 64, 51, 0.28)",
                        width: "fit-content",
                    }}>
                        <h2 style={{marginBottom: 20}}>Rejoindre la pool mutualisée</h2>
                        <h4>Prêt à miner dans la pool communautaire ?</h4>
                        <p style={{marginBottom: 10}}>Lorsque la pool communautaire minera un bloc, les mineurs recevront une récompense proportionelle au travail fourni selon la formule suivante</p>
                        <Code notCopiable>[Somme diff. de vos shares] / [Somme diff. du groupe]</Code>
                        <p style={{marginBottom: 10, marginTop: 10}}>Cette récompense théorique est consultable à n&apos;importe quel moment depuis le dashboard. Elle est actualisée toutes les 30 minutes</p>
                        <p>Nous distribuons 100% de la récompense de block et ne gardons aucun frais</p>
                        <div style={{display: "flex", paddingTop: 20, justifyContent: "center"}}>
                            <Link href={HEATBOARD_URL + "/start/" + COMMUNITY_POOL_ADDRESS}>
                                <button className="primary">
                                    Enregistrer un mineur
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </NoisyBackground>
        </>
    )
}