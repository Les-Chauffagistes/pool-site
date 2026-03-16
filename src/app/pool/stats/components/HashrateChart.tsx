"use client";

import { LineChart } from "@mui/x-charts/LineChart";
import { useTheme, useMediaQuery } from "@mui/material";
import type { HashrateHistory } from "../../../../../models/PoolService/HashrateHistory";
import UnitConverter from "@/../lib/UnitConverter";
import componentStyles from "./hashrateChart.module.css";


export default function HashrateChart({
  data,
}: Readonly<{ data: HashrateHistory[] | null }>) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  if (!data || data.length === 0) {
    return <p style={{ color: "var(--text-muted)" }}>Chargement...</p>;
  }

  const sorted = [...data].sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
  );

  const xData = sorted.map((d) => new Date(d.date));
  const yData = sorted.map((d) => d.hashrate);

  const formatHashrate = (value: number | null) =>
    value != null ? `${UnitConverter.fromNumberToString(value)}H/s` : "—";

  return (
    <div
      style={{
        width: "100%",
        marginTop: 12,
      }}
    >
      <LineChart
        xAxis={[
          {
            data: xData,
            scaleType: "time",
            tickLabelStyle: {
              fill: "#b3b3bd",
              fontSize: isMobile ? 9 : 11,
            },
            disableLine: false,
            disableTicks: false,
            valueFormatter: (date: Date) =>
              date.toLocaleDateString("fr-FR", {
                day: "2-digit",
                month: "2-digit",
              }),
            tickNumber: isMobile ? 3 : 6,
          },
        ]}
        yAxis={[
          {
            tickLabelStyle: {
              fill: "#b3b3bd",
              fontSize: isMobile ? 9 : 11,
            },
            valueFormatter: (value: number) =>
              isMobile
                ? UnitConverter.fromNumberToString(value)
                : `${UnitConverter.fromNumberToString(value)}H/s`,
            width: isMobile ? 42 : 90,
            tickNumber: isMobile ? 4 : 5,
          },
        ]}
        series={[
          {
            data: yData,
            color: "#ff8a00",
            showMark: false,
            valueFormatter: formatHashrate,
            curve: "linear",
          },
        ]}
        height={isMobile ? 240 : 350}
        grid={{ horizontal: true }}
        margin={{
          top: 12,
          right: isMobile ? 8 : 20,
          bottom: isMobile ? 24 : 20,
          left: isMobile ? 6 : 20,
        }}
        sx={{
          ".MuiLineElement-root": {
            strokeWidth: isMobile ? 2.4 : 2,
          },
          ".MuiChartsAxis-line, .MuiChartsAxis-tick": {
            stroke: "#323242",
          },
          ".MuiChartsGrid-line": {
            stroke: "rgba(50,50,66,0.35)",
          },
          ".MuiChartsAxis-tickLabel": {
            fill: "#b3b3bd",
          },
        }}
      />
    </div>
  );
}