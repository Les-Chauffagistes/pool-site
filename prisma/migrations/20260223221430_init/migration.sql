-- CreateTable
CREATE TABLE "rewards" (
    "year" INTEGER NOT NULL,
    "month" INTEGER NOT NULL,
    "reward_name" TEXT NOT NULL,

    CONSTRAINT "rewards_pk" PRIMARY KEY ("year","month","reward_name")
);
