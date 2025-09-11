import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateMembershipDto } from './creat-membership.dto';
import { MembershipRole } from '@prisma/client';

@Injectable()
export class MembershipService {
  constructor(private prisma: PrismaService) {}

  async getById(id: string) {
    const membershipId = Number(id)
    await this.prisma.membership.findUnique({
        where: {
          id: membershipId,
        },
      }
    )
  }

  async create(dto: CreateMembershipDto) {
    return await this.prisma.membership.create({
      data: {
        userId: dto.userId,
        householdId: dto.householdId,
        role: dto.role,
      },
    })
  }

  async updateRole(userId: number, householdId: number, role: MembershipRole) {
    return await this.prisma.membership.update({
      where: { userId_householdId: { userId: userId, householdId } },
      data: { role: role }
    })
  }

  async delete(userId: number, householdId: number) {
    return await this.prisma.membership.delete({
      where: { userId_householdId: { userId, householdId } },
    })
  }

}
