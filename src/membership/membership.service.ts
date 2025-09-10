import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateMembershipDto } from './creat-membership.dto';

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

}
