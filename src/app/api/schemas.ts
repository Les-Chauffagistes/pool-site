import { z } from "zod";

export const postRewardSchema = z.object({
  month: z.number().max(12).min(1),
  year: z.number().min(2025),
  rewardName: z.string().trim()
}).transform(({ month, year, rewardName }) => ({
  month,
  year,
  reward_name: rewardName,
}));

export const patchRewardSchema = z.object({
  month: z.number().max(12).min(1).optional(),
  year: z.number().min(2025).optional(),
  rewardName: z.string().trim().optional()
}).transform(({ month, year, rewardName }) => ({
  ...(month !== undefined && { month }),
  ...(year !== undefined && { year }),
  ...(rewardName !== undefined && { reward_name: rewardName }),
}));