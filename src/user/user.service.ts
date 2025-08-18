import { ConflictException, Injectable, NotFoundException } from "@nestjs/common";
import { User } from "@prisma/client";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateUserDto } from "./dto/user.dtos";

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async create(user: CreateUserDto): Promise<User> {
    try {
      const result = await this.prisma.user.findUnique({ where: { email: user.email } })
      if (result) {
        throw new ConflictException('User already exists');
      } else {
        return await this.prisma.user.create({ data: user })
      }
    } catch (error) {
      console.error(error)
      throw error
    }
  }

  async findByEmail(email: string): Promise<User> {
    try {
      const result = await this.prisma.user.findUnique({ where: { email } })
      if (result) {
        return result
      } else {
        throw new NotFoundException(`User with email ${email} not found`)
      }
    } catch (error) {
      console.error(error)
      throw error
    }
  }

  async updateUserPassword(email: string, newPassword: string): Promise<User> {
    try {
      const result = await this.prisma.user.findUnique({ where: { email } })
      if (!result) {
        throw new NotFoundException(`User with email ${email} not found`)
      } else {
        return await this.prisma.user.update({ where: { email }, data: { password: newPassword } })
      }
    } catch (error) {
      console.error(error)
      throw error
    }
  }

  async deleteUser(email: string) {
    try {
      const result = await this.prisma.user.findUnique({ where: { email } })
      if (!result) {
        throw new NotFoundException(`User with email ${email} not found`)
      } else {
        return await this.prisma.user.delete({ where: { email } })
      }
    } catch (error) {
      console.error(error)
      throw error
    }
  }

}
