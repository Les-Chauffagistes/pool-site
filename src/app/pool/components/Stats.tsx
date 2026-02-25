"use client";

import { useEffect, useState } from "react";
import { PoolService } from "../../../../models/PoolService";
import { getPoolBaseStats } from "@/app/api";
import UnitConverter from "@/../lib/UnitConverter";
import styles from "../pool.module.css"

export default function Stats() {
  const [poolStats, setPoolStats] = useState<PoolService | null>(null);

  useEffect(() => {
    getPoolBaseStats().then(setPoolStats);
  }, []);

  return (
    <section style={{ background: "linear-gradient(180deg, rgba(14, 14, 17, 0), var(--bg-main)" }}>
      <div className={styles.container}>
        <h2>Chauffagistes, en activité</h2>

        <div className={styles.grid + " " + styles.grid4} style={{ marginTop: 32 }}>
          {[
            ["Hashrate (1h)", poolStats ? UnitConverter.fromNumberToString(UnitConverter.fromStringToNumber(poolStats.hashrates.hashrate1hr)) + "H/s" : "—"],
            ["Groupes actifs", poolStats ? poolStats.runtime.Users : "—"],
            ["Machines", poolStats ? poolStats.runtime.Workers : "—"],
            ["Frais", "0 %"],
          ].map(([label, value]) => (
            <div
              key={label}
              style={{
                background: "var(--bg-blue)",
                padding: 24,
                borderRadius: "var(--radius)",
                backdropFilter: "blur(1px)",
                border: "1px solid #323242",
              }}
            >
              <p>{label}</p>
              <h3 style={{ marginTop: 8 }}>{value}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}