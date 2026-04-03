"use client";

import { useEffect, useMemo, useState } from "react";
import TimeFormatter from "@/../lib/TimeFormatter";
import UnitConverter from "@/../lib/UnitConverter";
import { BestRecord } from "../../../../models/PoolService/BestRecord";
import { Reward } from "../../../../models/API Payloads/Reward";
import { getMonthlyBests, getRewards } from "../../api";
import styles from "../pool.module.css";

export default function CurrentMonthRewardBanner() {
  const [record, setRecord] = useState<BestRecord | undefined>(undefined);
  const [reward, setReward] = useState<string[]>([]);

  const now = useMemo(() => new Date(), []);
  const month = now.getMonth() + 1;
  const year = now.getFullYear();

  const fullDate = new Date(year, month - 1);
  const title = `Best share du mois — ${TimeFormatter.monthAndYear(fullDate)}`;

  useEffect(() => {
    const abortController = new AbortController();

    const fetchData = async () => {
      try {
        const [monthlyBests, rewards] = await Promise.all([
          getMonthlyBests(),
          getRewards(),
        ]);

        if (abortController.signal.aborted) return;

        const currentMonthKey = `${year}-${String(month).padStart(2, "0")}`;

        const currentRecord = monthlyBests.find(
          (item) => item.month === currentMonthKey
        );

        const currentRewards = rewards
          .filter((item: Reward) => item.year === year && item.month === month)
          .map((item: Reward) => item.reward_name);

        setRecord(currentRecord);
        setReward(currentRewards);
      } catch (err) {
        if (!abortController.signal.aborted) {
          console.error(err);
        }
      }
    };

    fetchData();

    return () => abortController.abort();
  }, [month, year]);

  if (!record && reward.length === 0) {
    return null;
  }

  return (
    <section style={{ padding: "20px 20px 0" }}>
      <div className={styles.container}>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 20,
            padding: "18px 20px",
            borderRadius: 18,
            border: "1px solid rgba(247,147,26,0.22)",
            background:
              "linear-gradient(90deg, rgba(247,147,26,0.14), rgba(255,255,255,0.04))",
            backdropFilter: "blur(10px)",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 8,
              minWidth: 260,
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                flexWrap: "wrap",
              }}
            >
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "4px 10px",
                  borderRadius: 999,
                  background: "var(--accent)",
                  color: "#000",
                  fontSize: "0.72rem",
                  fontWeight: 800,
                  letterSpacing: "0.04em",
                }}
              >
                REWARD DU MOIS
              </span>

              <h3 style={{ margin: 0 }}>{title}</h3>
            </div>

            {record ? (
              <>
                <p style={{ margin: 0 }}>
                  Best record actuel :{" "}
                  <strong style={{ color: "white" }}>
                    {UnitConverter.fromNumberToString(record.sdiff)}
                  </strong>
                </p>
                <p style={{ margin: 0 }}>
                  {record.address} —{" "}
                  {TimeFormatter.dayHourMinutes(new Date(record.epoch * 1000))}
                </p>
              </>
            ) : (
              <p style={{ margin: 0 }}>
                Aucun best record enregistré pour le moment ce mois-ci.
              </p>
            )}
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 6,
              minWidth: 220,
            }}
          >
            <h4 style={{ margin: 0, color: "white" }}>À gagner</h4>
            {reward.length > 0 ? (
              reward.map((item) => (
                <p key={item} style={{ margin: 0 }}>
                  • {item}
                </p>
              ))
            ) : (
              <p style={{ margin: 0 }}>Aucune récompense annoncée pour le moment.</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}