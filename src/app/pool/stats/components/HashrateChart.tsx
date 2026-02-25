import { LineChart } from "@mui/x-charts/LineChart";
import type { HashrateHistory } from "../../../../../models/PoolService/HashrateHistory";
import UnitConverter from "@/../lib/UnitConverter";

export default function HashrateChart({ data }: Readonly<{ data: HashrateHistory[] | null }>) {
    if (!data || data.length === 0) {
        return <p style={{ color: "var(--text-muted)" }}>Chargement...</p>;
    }

    const sorted = [...data].sort(
        (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
    );

    const xData = sorted.map(d => new Date(d.date));
    const yData = sorted.map(d => d.hashrate);

    return (
        <LineChart
            xAxis={[{
                data: xData,
                scaleType: "time",
                tickLabelStyle: { fill: "#b3b3bd", fontSize: 11 },
                label: "Date",
                valueFormatter: (date: Date) =>
                    date.toLocaleDateString("fr-FR", { day: "2-digit", month: "2-digit"}),
            }]}
            yAxis={[{
                tickLabelStyle: { fill: "#b3b3bd", fontSize: 11 },
                valueFormatter: (value: number) => UnitConverter.fromNumberToString(value) + "H/s",
                width: 90,
                label: "Hashrate",
            }]}
            series={[{
                data: yData,
                color: "#ff8a00",
                showMark: false,
                valueFormatter: (value: number | null) =>
                    value != null ? UnitConverter.fromNumberToString(value) + "H/s" : "—",
            }]}
            height={350}
            sx={{
                ".MuiLineElement-root": {
                    strokeWidth: 2,
                },
                ".MuiChartsAxis-line, .MuiChartsAxis-tick": {
                    stroke: "#323242",
                },
                ".MuiChartsGrid-line": {
                    stroke: "rgba(50,50,66,0.5)",
                },
            }}
            grid={{ horizontal: true }}
            margin={{ left: 20, right: 20, top: 20, bottom: 0 }}
        />
    );
}
