ALTER TABLE "rewards"
ADD COLUMN "id" SERIAL;

ALTER TABLE "rewards"
DROP CONSTRAINT "rewards_pk";

ALTER TABLE "rewards"
ALTER COLUMN "id" SET NOT NULL;

ALTER TABLE "rewards"
ADD CONSTRAINT "rewards_pkey" PRIMARY KEY ("id");

CREATE UNIQUE INDEX "rewards_year_month_reward_name_key"
ON "rewards"("year", "month", "reward_name");
