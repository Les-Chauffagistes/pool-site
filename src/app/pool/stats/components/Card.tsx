import { LucideIcon } from "lucide-react";



export type CardProps = { title: string, value: number | string, Icon: LucideIcon }

export default function Card({ title, value, Icon }: Readonly<CardProps>) {
    return (
        <div
            style={{
                background: "var(--bg-blue)",
                padding: 24,
                borderRadius: "var(--radius)",
                backdropFilter: "blur(1px)",
                border: "1px solid #323242",
            }}
        >
            <div style={{
                display: "flex",
                alignItems: "center",
                gap: 5
            }}>
                <Icon size={16} color="var(--text-muted)" />
                <h5 style={{
                    textTransform: "uppercase",
                    color: "var(--text-muted)",
                    fontWeight: 500,
                    letterSpacing: 0.2,
                    margin: "5px 0"
                }}>{title}</h5>
            </div>
            <h3 style={{
                margin: "5px 0 0",
                fontWeight: 800,
                fontSize: "1.3rem",
            }}>{value}</h3>
        </div>
    )
}