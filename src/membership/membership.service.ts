import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

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

}
