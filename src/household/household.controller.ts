import { Body, Controller, Get, Param, Post, UseGuards } from "@nestjs/common";
import { HouseholdService } from "./household.service";
import { JwtAuthGuard } from "src/auth/jwt.auth-guard";
import { CreateHouseholdDto } from "./create-household.dto";


@Controller("/household")
export class HouseHoldController {
  constructor(private readonly householdService: HouseholdService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  async getAll() {
    return await this.householdService.getAll();
  }

  @Get("/:id")
  async getById(@Param("id") id: string) {
    return await this.householdService.getById(id);
  }

  @Post()
  async create(@Body() dto: CreateHouseholdDto) {
    return await this.householdService.create(dto);
  }

}
