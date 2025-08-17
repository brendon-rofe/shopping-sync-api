import { Controller, Get, Post } from "@nestjs/common";
import { UserService } from "./user.service";
import { User } from "@prisma/client";

@Controller()
export class UserController {
  constructor (private readonly userService: UserService) {}

  @Get("/user")
  async getAll(): Promise<User[]> {
    return this.userService.getAll();
  }

}
