import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { UserService } from "./user.service";
import { User } from "@prisma/client";

@Controller()
export class UserController {
  constructor (private readonly userService: UserService) {}

  @Get("/user")
  async getAll(): Promise<User[] | null> {
    return await this.userService.getAll();
  }

  @Post("/user")
  async create(@Body() user): Promise<User> {
    return await this.userService.create(user);
  }

  @Get("/user/:email")
  async findByEmail(@Param("email") email: string): Promise<User | null> {
    return await this.userService.findByEmail(email);
  }
  
}
