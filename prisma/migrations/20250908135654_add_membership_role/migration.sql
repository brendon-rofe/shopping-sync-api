-- CreateEnum
CREATE TYPE "public"."MembershipRole" AS ENUM ('OWNER', 'ADMIN', 'MEMBER', 'VIEWER');

-- AlterTable
ALTER TABLE "public"."Membership" ADD COLUMN     "role" "public"."MembershipRole" NOT NULL DEFAULT 'OWNER';
