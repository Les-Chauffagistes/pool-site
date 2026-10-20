import { config } from "@/lib/config";
import { Reward } from "../../models/API Payloads/Reward";
import { BestRecord } from "../../models/PoolService/BestRecord";
import { HashrateHistory } from "../../models/PoolService/HashrateHistory";
import { Node } from "../../models/PoolService/Node";
import { Pings } from "../../models/PoolService/Pings";
import { PoolService } from "../../models/PoolService/PoolService";
import { Top } from "../../models/PoolService/Top";



export async function getPoolBaseStats(): Promise<PoolService> {
    return await fetch(`${config.POOL_SERVICE_API_URL}/v1/pool`).then(res => res.json());
}

export async function getMonthlyBests(): Promise<BestRecord[]> {
    return await fetch(`${config.POOL_SERVICE_API_URL}/v1/monthlyBests`).then(res => res.json());
}

export async function getRewards(): Promise<Reward[]> {
    return await fetch("/api/rewards").then(res => res.json());
}

export async function getServiceInfo(): Promise<PoolService> {
    return await fetch(`${config.POOL_SERVICE_API_URL}/v1/pool`).then(res => res.json());
}

export async function getPings(): Promise<Pings> {
    return await fetch(`${config.POOL_SERVICE_API_URL}/v1/pings`).then(res => res.json());
}

export async function getNode(): Promise<Node> {
    return await fetch(`${config.POOL_SERVICE_API_URL}/v1/node`).then(res => res.json());
}

export async function getTop(): Promise<Top> {
    return await fetch(`${config.POOL_SERVICE_API_URL}/v1/top`).then(res => res.json());
}

export async function getLegacyHashrateHistory(): Promise<HashrateHistory[]> {
    return await fetch(`${config.POOL_SERVICE_API_URL}/v1/hashrate`).then(res => res.json());
}