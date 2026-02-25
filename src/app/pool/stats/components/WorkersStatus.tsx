import { CSSProperties } from "react"

export default function WorkerStatus({ idle, disco, total }: Readonly<{ idle: number, disco: number, total: number }>) {
    const divStyle: CSSProperties = {
        display: "flex",
        alignItems: "center",
        gap: 7
    }

    const dotStyle = {
        width: 8,
        height: 8,
        borderRadius: "50%",
    }
    return (
        <div>
            <div style={divStyle}>
                <div style={{ ...dotStyle, backgroundColor: "green" }}></div>
                <p>Actif : {total - idle - disco}</p>
            </div>

            <div style={divStyle}>
                <div style={{ ...dotStyle, backgroundColor: "orange" }}></div>
                <p>Veille : {idle}</p>
            </div>

            <div style={divStyle}>
                <div style={{ ...dotStyle, backgroundColor: "red" }}></div>
                <p>Hors ligne : {disco}</p>
            </div>
        </div>
    )
}