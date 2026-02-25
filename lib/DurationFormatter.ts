export default function durationToDHM(duration?: number) {
    if (!duration) return "0s"
    const d = Math.floor(duration / 86400);
    const h = Math.floor((duration % 86400) / 3600);
    const m = Math.floor((duration % 3600) / 60);

    const result: string[] = []
    if (d > 0) result.push(`${d}j`)
    if (h > 0) result.push(`${h}h`)
    if (m > 0) result.push(`${m}m`)
    if (result.length == 0) return "0m"
    return result.join(' ')
}