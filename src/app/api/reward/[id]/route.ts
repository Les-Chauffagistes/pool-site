import { prisma } from "@/server/prisma";
import { NextResponse } from "next/server";
import { patchRewardSchema } from "../../schemas"
import { requiresAuth } from "@/../lib/Auth"


export async function PATCH(req: Request, { params }: { params: Promise<{ id: string }> }) {
  const authError = requiresAuth(req)
  if (authError) return authError

  const p = await params
  const payload = await req.json()
  const parsed = patchRewardSchema.safeParse(payload)
  if (!parsed.success) {
    return NextResponse.json({ "error": "Failed to parse data" }, { status: 400 })
  }

  const data = parsed.data

  if (Object.keys(data).length === 0) {
    return NextResponse.json({ "error": "No fields to update" }, { status: 400 })
  }

  const reward = await prisma.rewards.update({
    where: {
      id: Number.parseInt(p.id)
    },
    data: data
  })

  return NextResponse.json(structuredClone(reward))
}

export async function DELETE(req: Request, { params }: { params: Promise<{ id: string }> }) {
  const authError = requiresAuth(req)
  if (authError) return authError

  const p = await params
  const deleted = await prisma.rewards.delete({where: {id: Number.parseInt(p.id)}})
  return NextResponse.json(structuredClone(deleted))
}