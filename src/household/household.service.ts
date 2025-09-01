import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateHouseholdDto } from "./household.dtos";

@Injectable()
export class HouseholdService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreateHouseholdDto) {
    return this.prisma.household.create({ data: dto })
  }

  async getAll() {
    return this.prisma.household.findMany()
  }

  async getById(id: string) {
    const houseHoldId = Number(id)
    return this.prisma.household.findUnique({ where: { id: houseHoldId } })
  }

  async update(id: string, dto: CreateHouseholdDto) {
    const houseHoldId = Number(id)
    return this.prisma.household.update({ where: { id: houseHoldId }, data: dto })
  }

  async updateName(id: string, name: string) {
    const houseHoldId = Number(id)
    return await this.prisma.household.update({ where: { id: houseHoldId }, data: { name } })
  }

  async delete(id: string) {
    const houseHoldId = Number(id)
    return this.prisma.household.delete({ where: { id: houseHoldId } })
  }

}
