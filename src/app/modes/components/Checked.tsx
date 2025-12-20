import { Check } from "lucide-react";



export default function Checked({children}: {children: React.ReactNode}) {
    return (
        <div style={{display: "flex", alignItems: "center", gap: 10}}>
            <Check width={20} style={{minWidth: 20}} />
            {children}
        </div>
    )
}