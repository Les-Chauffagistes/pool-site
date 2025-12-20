import { Pool } from "../../models/Pool";



export async function getPoolBaseStats(): Promise<Pool> {
    return await fetch("https://chauffagistes-pool.fr:3000/api/pool").then(res => res.json());
}