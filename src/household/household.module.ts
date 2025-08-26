import { Module } from "@nestjs/common";
import { HouseHoldController } from "./household.controller";
import { HouseholdService } from "./household.service";

@Module({
  imports: [],
  controllers: [HouseHoldController],
  providers: [HouseholdService],
})
export class HouseholdModule {}
