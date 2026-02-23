"use client";

import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavigationBar({name}: {name: string}) {
    const path = usePathname();
    return <div style={{
        backgroundColor: "var(--gray)",
        display: "flex",
        alignItems: "center",
        gap: 20,
        padding: "10px 20px"
    }}>
        <Link href={`${path.split("/").slice(0, -1).join("/")}/`}>
            <div style={{
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: 10,
                border: "1px solid var(--card-outline-color)",
                padding: 5,
                borderRadius: 100
            }}>
                <ChevronLeft />
            </div>
        </Link>
        <h1>{name}</h1>
    </div>;
}