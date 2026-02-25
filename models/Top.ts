export type Top = {
    topBestSahres: TopBestShares[]
    topHasshrate: TopHashrate[]
}

export type TopBestShares = {
    address: string
    workerCount: number
    bestShare: number
}

export type TopHashrate = {
    address: string
    workerCount: number
    totalHashrate1hr: number
}