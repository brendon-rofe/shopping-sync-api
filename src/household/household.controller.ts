import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from "@nestjs/common";
import { HouseholdService } from "./household.service";
import { JwtAuthGuard } from "src/auth/jwt.auth-guard";
import { CreateHouseholdDto } from "./create-household.dto";
import { GetUser } from "src/auth/get-user.decorator";
import { GetUserDto } from "src/user/dto/user.dtos";

@UseGuards(JwtAuthGuard)
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
  async create(@Body() dto: CreateHouseholdDto, @GetUser('userId') user: GetUserDto) {
    return await this.householdService.create(user.userId, dto);
  }

  @Put("/:id")
  async update(@Param("id") id: string, @Body() dto: CreateHouseholdDto) {
    return await this.householdService.update(id, dto);
  }

  @Delete("/:id")
  async delete(@Param("id") id: string) {
    return await this.householdService.delete(id);
  }

}
