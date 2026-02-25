import type { Pings } from "../../../../../models/PoolService/Pings";

const dotStyle = {
    width: 8,
    height: 8,
    borderRadius: "50%",
};

function latencyColor(ms: number): string {
    if (ms < 100) return "#4ade80";
    if (ms < 300) return "orange";
    return "#ef4444";
}

export default function InfrastructureStatus({ pings }: Readonly<{ pings: Pings | null }>) {
    if (!pings) return <p style={{ color: "var(--text-muted)" }}>Chargement...</p>;

    const allOnline = pings.online === pings.total;

    return (
        <div>
            <div style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                marginBottom: 20,
            }}>
                <div style={{
                    ...dotStyle,
                    width: 10,
                    height: 10,
                    backgroundColor: allOnline ? "#4ade80" : "#ef4444",
                }} />
                <h4 style={{ margin: 0 }}>
                    {pings.online} / {pings.total} serveurs en ligne
                </h4>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {pings.hosts.map(host => (
                    <div
                        key={host.name}
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            background: "var(--bg-blue)",
                            padding: "14px 20px",
                            borderRadius: "var(--radius)",
                            border: "1px solid #323242",
                        }}
                    >
                        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                            <div style={{
                                ...dotStyle,
                                backgroundColor: host.online ? "#4ade80" : "#ef4444",
                            }} />
                            <span>{host.name}</span>
                        </div>
                        <span style={{
                            color: host.online ? latencyColor(host.latencyMs) : "#ef4444",
                            fontWeight: 600,
                            fontSize: "0.9rem",
                        }}>
                            {host.online ? `${(Math.round(host.latencyMs * 100) / 100).toFixed(2)} ms` : "Hors ligne"}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}
