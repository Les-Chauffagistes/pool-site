import { NextResponse } from "next/server";

export function requiresAuth(req: Request): NextResponse | null {
  const apiKey = req.headers.get("X-Api-Key")
  if (!apiKey || apiKey !== process.env.API_KEY) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }
  return null
}