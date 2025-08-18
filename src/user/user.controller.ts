import { Body, Controller, Get, Post } from "@nestjs/common";
import { UserService } from "./user.service";
import { User } from "@prisma/client";

@Controller()
export class UserController {
  constructor (private readonly userService: UserService) {}

  @Get("/user")
  async getAll(): Promise<User[]> {
    return this.userService.getAll();
  }

  @Post("/user")
  async create(@Body() user): Promise<User> {
    return this.userService.create(user);
  }

}
