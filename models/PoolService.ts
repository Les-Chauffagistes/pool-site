import type { PoolHashrates } from "./PoolHashrate";
import type { PoolRuntime } from "./PoolRuntime";
import type { PoolShares } from "./PoolShares";

export interface PoolService {
    runtime: PoolRuntime;
    hashrates: PoolHashrates;
    shares: PoolShares
}