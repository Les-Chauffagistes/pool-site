"use client";

import { useEffect, useState } from "react";
import styles from "../page.module.css";
import { BestRecord } from "../../../models/BestRecord";
import MonthReward from "./MonthReward";
import { getMonthlyBests, getRewards } from "../api";
import { Reward } from "../../../models/API Payloads/Reward";

type MonthKey = string;

type TimelineItem = {
  year: number;
  month: number; // 1-12
  record?: BestRecord;
  rewards: string[];
};

export default function Community() {
  const [timeline, setTimeline] = useState<TimelineItem[]>([]);

  const buildTimeline = (
    monthlyBests: BestRecord[],
    rewards: Reward[]
  ): TimelineItem[] => {
    const map = new Map<MonthKey, TimelineItem>();

    for (const record of monthlyBests) {
      const [yearStr, monthStr] = record.month.split("-");
      const year = Number.parseInt(yearStr);
      const month = Number.parseInt(monthStr);
      const key = `${year}-${month}`;
      console.log(key)

      map.set(key, {
        year,
        month,
        record,
        rewards: [],
      });
    }

    for (const reward of rewards) {
      const key = `${reward.year}-${reward.month}`;
            console.log(key)

      if (!map.has(key)) {
        map.set(key, {
          year: reward.year,
          month: reward.month,
          record: undefined,
          rewards: [],
        });
      }

      map.get(key)!.rewards.push(reward.reward_name);
    }

    return Array.from(map.values()).sort(
      (a, b) =>
        a.year !== b.year
          ? a.year - b.year
          : a.month - b.month
    );
  };

  useEffect(() => {
    const abortController = new AbortController();

    const fetchData = async () => {
      try {
        const [monthlyBests, rewards] = await Promise.all([
          getMonthlyBests(),
          getRewards(),
        ]);

        if (abortController.signal.aborted) return;
        if (monthlyBests.length === 0 || rewards.length === 0) return;
        setTimeline(buildTimeline(monthlyBests, rewards));
      } catch (err) {
        if (!abortController.signal.aborted) {
          console.error(err);
        }
      }
    };

    fetchData();
    return () => abortController.abort();
  }, []);

  return (
    <section style={{ background: "var(--bg-alt)" }}>
      <div className={styles.container}>
        <h2>Une pool vivante</h2>

        <p style={{ marginTop: 16 }}>
          Best Share du mois : Des récompenses mensuelles pour le mineur qui atteint la plus grosse diff. Les récompenses sont financées par nos partenaires et les dons sur la cagnotte.
        </p>
        <div
          style={{
            display: "flex",
            alignItems: "stretch",
            marginTop: 16,
            marginBottom: 16,
            flexDirection: "row-reverse",
            overflow: "scroll",
          }}
        >
          {timeline.length > 0 && timeline
            .slice()
            .reverse()
            .map((item, index) => (
              <>
                <MonthReward
                  key={`${item.year}-${item.month}`}
                  record={item.record}
                  month={item.month}
                  year={item.year}
                  reward={item.rewards}
                />

                {index !== timeline.length - 1 && (
                  <div
                    key={`${item.year}-${item.month}-div`}
                    style={{
                      height: 1,
                      width: 30,
                      backgroundColor: "var(--bg-blue)",
                      flexShrink: 0,
                      margin: "auto",
                    }}
                  />
                )}
              </>
            ))}
        </div>
        <p>Rejoingnez une communauté active et diversifiée autour de l&apos;univers Bitcoin, du minage et du chauffage.</p>
      </div>
    </section>
  );
}