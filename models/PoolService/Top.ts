export type Top = {
    topBestShares: TopBestShares[]
    topHashrate: TopHashrate[]
}

export type TopBestShares = {
    address: string
    workerCount: number
    bestshare: number
}

export type TopHashrate = {
    address: string
    workerCount: number
    totalHashrate1hr: number
}