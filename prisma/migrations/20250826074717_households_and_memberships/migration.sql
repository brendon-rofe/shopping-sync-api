/*
  Warnings:

  - You are about to drop the column `userId` on the `Item` table. All the data in the column will be lost.
  - Added the required column `householdId` to the `Item` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "public"."Item" DROP CONSTRAINT "Item_userId_fkey";

-- DropIndex
DROP INDEX "public"."Item_userId_status_idx";

-- AlterTable
ALTER TABLE "public"."Item" DROP COLUMN "userId",
ADD COLUMN     "addedById" INTEGER,
ADD COLUMN     "householdId" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "public"."Household" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "joinCode" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Household_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Membership" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "householdId" INTEGER NOT NULL,

    CONSTRAINT "Membership_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Household_joinCode_key" ON "public"."Household"("joinCode");

-- CreateIndex
CREATE UNIQUE INDEX "Membership_userId_householdId_key" ON "public"."Membership"("userId", "householdId");

-- CreateIndex
CREATE INDEX "Item_householdId_status_idx" ON "public"."Item"("householdId", "status");

-- AddForeignKey
ALTER TABLE "public"."Membership" ADD CONSTRAINT "Membership_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Membership" ADD CONSTRAINT "Membership_householdId_fkey" FOREIGN KEY ("householdId") REFERENCES "public"."Household"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Item" ADD CONSTRAINT "Item_householdId_fkey" FOREIGN KEY ("householdId") REFERENCES "public"."Household"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Item" ADD CONSTRAINT "Item_addedById_fkey" FOREIGN KEY ("addedById") REFERENCES "public"."User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
