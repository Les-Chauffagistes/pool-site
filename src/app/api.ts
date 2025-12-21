import { Reward } from "../../models/API Payloads/Reward";
import { BestRecord } from "../../models/BestRecord";
import { Pool } from "../../models/Pool";



export async function getPoolBaseStats(): Promise<Pool> {
    return await fetch("https://chauffagistes-pool.fr:3000/api/pool").then(res => res.json());
}

export async function getMonthlyBests(): Promise<BestRecord[]> {
    return await fetch("https://chauffagistes-pool.fr:3000/api/monthlyBests").then(res => res.json());
}

export async function getRewards(): Promise<Reward[]> {
    return await fetch("/api/rewards").then(res => res.json());
}