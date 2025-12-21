import { prisma } from "@/server/prisma";
import { NextResponse } from "next/server";


export async function GET() {
  const result = await prisma.rewards.findMany({})
  return NextResponse.json(JSON.parse(JSON.stringify(result)))
}