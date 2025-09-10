import { Module } from "@nestjs/common";
import { HouseHoldController } from "./household.controller";
import { HouseholdService } from "./household.service";
import { MembershipModule } from "src/membership/membership.module";
import { PrismaModule } from "src/prisma/prisma.module";

@Module({
  imports: [PrismaModule, MembershipModule],
  controllers: [HouseHoldController],
  providers: [HouseholdService],
})
export class HouseholdModule {}
