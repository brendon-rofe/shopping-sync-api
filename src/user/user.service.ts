import { Injectable } from "@nestjs/common";
import { User } from "@prisma/client";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async create(user): Promise<User> {
    return await this.prisma.user.create({ data: user })
  }

  async findByEmail(email: string): Promise<User | null> {
    return await this.prisma.user.findFirst({ where: { email } })
  }

  async updateUserPassword(email: string, newPassword: string) {
    return await this.prisma.user.update({ where: { email }, data: { password: newPassword } })
  }

  async deleteUser(email: string) {
    await this.prisma.user.delete({ where: { email} })
  }

}
