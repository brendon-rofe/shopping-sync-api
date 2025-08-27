import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateHouseholdDto } from "./household.dtos";

@Injectable()
export class HouseholdService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreateHouseholdDto) {
    return this.prisma.household.create({ data: dto })
  }

  async findAll() {
    return this.prisma.household.findMany()
  }

}
