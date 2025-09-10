import { MembershipRole } from "@prisma/client";

export class CreateMembershipDto {

  userId: number;
  householdId: number;
  role: MembershipRole;

}