import TimeFormatter from "@/../lib/TimeFormatter";
import UnitConverter from "@/../lib/UnitConverter";
import { BestRecord } from "@/../models/BestRecord";
import styles from "../pool.module.css";


export default function MonthReward({ record, month, year, reward }: Readonly<{ record?: BestRecord, month: number, year: number, reward: string[] }>) {
    const fullDate = new Date(year, month - 1);
    const isThisMonth = fullDate.getMonth() === new Date().getMonth();

    return (
        <div style={{
            borderRadius: 15,
            border: "1px solid var(--bg-blue)",
            display: "flex",
            flexDirection: "column",
            padding: 10,
            backgroundColor: "var(--bg-soft)",
            flexShrink: 0,
            maxWidth: "90%"
        }}>
            <div style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                marginBottom: 10
            }}>
                {isThisMonth && <span style={{
                    backgroundColor: "var(--accent)",
                    borderRadius: 100,
                    width: 10,
                    height: 10,
                    boxShadow: "0 0 0 0 rgba(247,147,26,.7)",
                    marginLeft: 5
                }} className={styles.pulsable}/>
                }
                <h3>{TimeFormatter.monthAndYear(fullDate)}</h3>
            </div>
            <h4>{record &&UnitConverter.fromNumberToString(record.sdiff)}</h4>
            <div style={{
                display: "flex",
                alignItems: "center",
                gap: 10
            }}>
                <p>{record?.address}</p>
                <p>{record && TimeFormatter.dayHourMinutes(new Date(record.epoch * 1000))}</p>
            </div>
            <h4 style={{
                marginTop: 10,
                marginBottom: 5
            }}>Récompense :</h4>
            {reward.map(reward => <p key={reward}>•  {reward}</p>)}
        </div>
    )
}