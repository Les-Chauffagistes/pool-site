import { Hashrates } from "../PoolService/Hashrates"
import { Worker } from "../PoolService/Worker"

// User in /api/stats/{btc_address}
export interface UserInstantStats {
    address: string
    globalStats: Hashrates & { shares: number, bestshare: number, bestever: number, workers: number }
    workers: Worker[]
}