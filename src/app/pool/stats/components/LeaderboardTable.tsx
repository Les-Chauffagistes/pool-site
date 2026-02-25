import type { LucideIcon } from "lucide-react";

export type LeaderboardEntry = {
    address: string;
    secondary: string;
    value: string;
};

function truncateAddress(address: string): string {
    if (address.length <= 16) return address;
    return address.slice(0, 8) + "..." + address.slice(-6);
}

export default function LeaderboardTable({ title, entries, Icon }: Readonly<{
    title: string;
    entries: LeaderboardEntry[];
    Icon: LucideIcon;
}>) {
    return (
        <div style={{
            background: "var(--bg-blue)",
            padding: 24,
            borderRadius: "var(--radius)",
            border: "1px solid #323242",
        }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 20 }}>
                <Icon size={18} color="var(--accent)" />
                <h4 style={{ margin: 0 }}>{title}</h4>
            </div>

            {entries.length === 0 && (
                <p style={{ color: "var(--text-muted)" }}>Aucune donnée</p>
            )}

            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {entries.map((entry, i) => (
                    <div
                        key={entry.address}
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: 12,
                            padding: "10px 14px",
                            borderRadius: 10,
                            backgroundColor: "rgba(255,255,255,0.03)",
                        }}
                    >
                        <span style={{
                            color: "var(--accent)",
                            fontWeight: 800,
                            fontSize: "1rem",
                            minWidth: 24,
                        }}>
                            #{i + 1}
                        </span>
                        <div style={{ flex: 1, minWidth: 0 }}>
                            <p style={{
                                margin: 0,
                                fontWeight: 600,
                                fontSize: "0.9rem",
                                color: "var(--text-main)",
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                                whiteSpace: "nowrap",
                            }}>
                                {truncateAddress(entry.address)}
                            </p>
                            <p style={{
                                margin: 0,
                                fontSize: "0.78rem",
                                color: "var(--text-muted)",
                            }}>
                                {entry.secondary}
                            </p>
                        </div>
                        <span style={{
                            fontWeight: 700,
                            fontSize: "0.9rem",
                            whiteSpace: "nowrap",
                        }}>
                            {entry.value}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}
