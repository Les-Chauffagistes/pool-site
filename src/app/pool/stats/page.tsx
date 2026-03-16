"use client";

import { useEffect, useMemo, useState } from "react";
import { PoolService } from "../../../../models/PoolService/PoolService";
import { Pings } from "../../../../models/PoolService/Pings";
import { Node } from "../../../../models/PoolService/Node";
import { Top } from "../../../../models/PoolService/Top";
import { HashrateHistory } from "../../../../models/PoolService/HashrateHistory";
import { getServiceInfo, getPings, getNode, getTop, getLegacyHashrateHistory } from "@/app/api";
import durationToDHMS from "../../../../lib/DurationFormatter";
import UnitConverter from "@/../lib/UnitConverter";
import formatNumber from "@/../lib/NumberFormatter";
import TimeFormatter from "@/../lib/TimeFormatter";
import {
    CircleFadingArrowUp, Computer, Users, Clock,
    Layers, Trophy, CheckCircle, XCircle,
    Hash, Code2, Network,
    Flame, Server,
    Gauge,
} from "lucide-react";
import styles from "../pool.module.css";
import Card from "./components/Card";
import WorkerStatus from "./components/WorkersStatus";
import InfrastructureStatus from "./components/InfrastructureStatus";
import LeaderboardTable from "./components/LeaderboardTable";
import HashrateChart from "./components/HashrateChart";
import type { LeaderboardEntry } from "./components/LeaderboardTable";
import { createTheme, ThemeProvider, useMediaQuery } from "@mui/material";

function formatHashrate(value?: string): string {
    if (!value) return "—";
    return UnitConverter.fromNumberToString(UnitConverter.fromStringToNumber(value)) + " H/s";
}

export default function StatsPage() {
    const [poolServiceStats, setPoolServiceStats] = useState<PoolService | null>(null);
    const [pings, setPings] = useState<Pings | null>(null);
    const [node, setNode] = useState<Node | null>(null);
    const [top, setTop] = useState<Top | null>(null);
    const [hashrateHistory, setHashrateHistory] = useState<HashrateHistory[] | null>(null);

    const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
    const muiTheme = useMemo(() => createTheme({ palette: { mode: prefersDarkMode ? "dark" : "light" } }), [prefersDarkMode]);


    useEffect(() => {
        Promise.all([
            getServiceInfo(),
            getPings(),
            getNode(),
            getTop(),
            getLegacyHashrateHistory(),
        ]).then(([service, pings, node, top, history]) => {
            setPoolServiceStats(service);
            setPings(pings);
            setNode(node);
            setTop(top);
            setHashrateHistory(history);
        });
    }, []);

    useEffect(() => {
        console.log(top)
    }, [top]);

    const hashrates = poolServiceStats?.hashrates;
    const shares = poolServiceStats?.shares;

    const topHashrateEntries: LeaderboardEntry[] = top?.topHashrate?.map(e => ({
        address: e.address,
        secondary: `${e.workerCount} machine${e.workerCount > 1 ? "s" : ""}`,
        value: UnitConverter.fromNumberToString(e.totalHashrate1hr) + " H/s",
    })) ?? [];

    const topSharesEntries: LeaderboardEntry[] = top?.topBestShares?.map(e => ({
        address: e.address,
        secondary: `${e.workerCount} machine${e.workerCount > 1 ? "s" : ""}`,
        value: UnitConverter.fromNumberToString(e.bestshare),
    })) ?? [];

    return (
        <main className={styles.pool} style={{ flex: 1 }}>
            <ThemeProvider theme={muiTheme}>
                {/* Section 1 — Pool Overview */}
                <section style={{paddingTop: 90}}>
                    <div className={styles.container}>
                        <h2>Vue d&apos;ensemble</h2>
                        <div className={styles.grid + " " + styles.grid4} style={{ marginTop: 24 }}>
                            <Card
                                title="Uptime"
                                value={durationToDHMS(poolServiceStats?.runtime.runtime)}
                                Icon={CircleFadingArrowUp}
                            />
                            <Card
                                title="Pools"
                                value={poolServiceStats?.runtime.Users ?? "—"}
                                Icon={Users}
                            />
                            <div style={{
                                background: "var(--bg-blue)",
                                padding: 24,
                                borderRadius: "var(--radius)",
                                border: "1px solid #323242",
                            }}>
                                <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
                                    <Computer size={16} color="var(--text-muted)" />
                                    <h5 style={{
                                        textTransform: "uppercase",
                                        color: "var(--text-muted)",
                                        fontWeight: 500,
                                        letterSpacing: 0.2,
                                        margin: "5px 0",
                                    }}>Machines</h5>
                                </div>
                                <WorkerStatus
                                    disco={poolServiceStats?.runtime.Disconnected ?? 0}
                                    idle={poolServiceStats?.runtime.Idle ?? 0}
                                    total={poolServiceStats?.runtime.Workers ?? 0}
                                />
                            </div>
                            <Card
                                title="Dernière maj"
                                  value={poolServiceStats ? TimeFormatter.full(new Date(poolServiceStats.runtime.lastupdate * 1000)) : "—"}
                                Icon={Clock}
                            />
                        </div>
                    </div>
                </section>

                {/* Section 2 — Puissance de calcul */}
                <section style={{ backgroundColor: "var(--bg-alt)" }}>
                    <div className={styles.container}>
                        <h2>Puissance de calcul</h2>
                        <div className={styles.grid + " " + styles.grid4} style={{ marginTop: 24 }}>
                            <Card title="Hashrate 5m" value={formatHashrate(hashrates?.hashrate5m)} Icon={Flame} />
                            <Card title="Hashrate 1h" value={formatHashrate(hashrates?.hashrate1hr)} Icon={Flame} />
                            <Card title="Hashrate 1j" value={formatHashrate(hashrates?.hashrate1d)} Icon={Flame} />
                            <Card title="Hashrate 7j" value={formatHashrate(hashrates?.hashrate7d)} Icon={Flame} />
                        </div>
                        <div style={{
                            marginTop: 24,
                            background: "var(--bg-blue)",
                            borderRadius: "var(--radius)",
                            border: "1px solid #323242",
                            padding: "24px 0",
                        }}>
                            <h4 style={{ margin: "0 0 16px 24px" }}>Évolution du hashrate</h4>
                            <HashrateChart data={hashrateHistory} />
                        </div>
                    </div>
                </section>

                {/* Section 3 — Activité de minage */}
                <section>
                    <div className={styles.container}>
                        <h2>Activité de minage</h2>
                        <div className={styles.grid + " " + styles.grid4} style={{ marginTop: 24 }}>
                            <Card title="Diff. courante" value={shares ? formatNumber(shares.diff) : "—"} Icon={Layers} />
                            <Card title="Best Share" value={shares ? UnitConverter.fromNumberToString(shares.bestshare) : "—"} Icon={Trophy} />
                            <Card title="Accepted" value={shares ? UnitConverter.fromNumberToString(shares.accepted) : "—"} Icon={CheckCircle} />
                            <Card title="Rejected" value={shares ? UnitConverter.fromNumberToString(shares.rejected) : "—"} Icon={XCircle} />
                        </div>
                        <div className={styles.grid + " " + styles.grid4} style={{ marginTop: 24 }}>
                            <Card title="SPS 1h" value={shares?.SPS1h?.toFixed(2) ?? "—"} Icon={Gauge} />
                        </div>
                    </div>
                </section>

                {/* Section 4 — Noeud Bitcoin */}
                <section style={{ backgroundColor: "var(--bg-alt)" }}>
                    <div className={styles.container}>
                        <h2>Noeud Bitcoin</h2>
                        <div className={styles.grid + " " + styles.grid3} style={{ marginTop: 24 }}>
                            <Card title="Bloc actuel" value={node ? formatNumber(node.height) : "—"} Icon={Hash} />
                            <Card title="Version" value={node?.subversion ?? "—"} Icon={Code2} />
                            <Card title="Pairs connectés" value={node?.peers ?? "—"} Icon={Network} />
                        </div>
                    </div>
                </section>

                {/* Section 5 — Infrastructure */}
                <section>
                    <div className={styles.container}>
                        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 24 }}>
                            <Server size={22} color="var(--text-main)" />
                            <h2 style={{ margin: 0 }}>Infrastructure</h2>
                        </div>
                        <InfrastructureStatus pings={pings} />
                    </div>
                </section>

                {/* Section 6 — Classement */}
                <section style={{ backgroundColor: "var(--bg-alt)" }}>
                    <div className={styles.container}>
                        <h2>Classement</h2>
                        <div className={styles.grid + " " + styles.grid2} style={{ marginTop: 24 }}>
                            <LeaderboardTable
                                title="Top Hashrate (1h)"
                                entries={topHashrateEntries}
                                Icon={Flame}
                            />
                            <LeaderboardTable
                                title="Meilleurs Shares"
                                entries={topSharesEntries}
                                Icon={Trophy}
                            />
                        </div>
                    </div>
                </section>
            </ThemeProvider>
        </main>
    );
}
