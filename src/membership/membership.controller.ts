import { Controller, Get, Param } from '@nestjs/common';
import { MembershipService } from './membership.service';

@Controller('membership')
export class MembershipController {
  constructor(private membershipService: MembershipService) {}

  @Get("/:id")
  async getById(@Param('id') id: string) {
    return await this.membershipService.getById(id)
  }

}
