import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class ItemService {
  constructor(private prisma: PrismaService) {}

  async getAll() {
    return await this.prisma.item.findMany();
  }

  async getById(id: string) {
    const itemId = Number(id)
    return await this.prisma.item.findUnique({ where: { id: itemId } })
  }

}
