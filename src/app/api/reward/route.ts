import { prisma } from "@/server/prisma";
import { NextResponse } from "next/server";
import { postRewardSchema } from "../schemas"
import { requiresAuth } from "@/../lib/Auth"


export async function POST(req: Request) {
  const authError = requiresAuth(req)
  if (authError) return authError

  const payload = await req.json()
  const parsed = postRewardSchema.safeParse(payload)
  if (!parsed.success) {
    return NextResponse.json({ error: "Failed to parse data", fields: JSON.parse(parsed.error.message)}, { status: 400 });
  }
  const reward = await prisma.rewards.create({ data: parsed.data })
  return NextResponse.json(structuredClone(reward), { status: 201 });
}