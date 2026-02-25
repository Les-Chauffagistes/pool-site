export type Pings = {
    updatedAt: Date
    total: number
    online: number
    offline: number
    hosts: Host[]
}

export type Host = {
    name: string
    online: boolean
    latencyMs: number
    raw: `time=${number}ms`
}