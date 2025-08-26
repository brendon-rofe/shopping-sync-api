import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateItemDto } from "./dto/create-item.dto";

@Injectable()
export class ItemService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreateItemDto, userId: number) {
    return await this.prisma.item.create({ data: { ...dto, userId } })
  }

  async getAll(userId: number) {
    return await this.prisma.item.findMany({ where: { userId } });
  }

  async getById(id: string, userId: number) {
    const itemId = Number(id)
    return await this.prisma.item.findUnique({ where: { id: itemId, userId } })
  }

}
