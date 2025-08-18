import { Injectable } from "@nestjs/common";
import { User } from "@prisma/client";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateUserDto } from "./dto/user.dtos";

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async create(user: CreateUserDto): Promise<User> {
    const result = await this.prisma.user.findUnique({ where: { email: user.email } })
    if (result) {
      return result
    } else {
      return await this.prisma.user.create({ data: user })
    }
  }

  async findByEmail(email: string): Promise<User | null> {
    return await this.prisma.user.findUnique({ where: { email } })
  }

  async updateUserPassword(email: string, newPassword: string) {
    return await this.prisma.user.update({ where: { email }, data: { password: newPassword } })
  }

  async deleteUser(email: string) {
    await this.prisma.user.delete({ where: { email} })
  }

}
