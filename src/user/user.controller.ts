import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { UserService } from "./user.service";
import { User } from "@prisma/client";
import { CreateUserDto, UpdateUserEmailDto } from "./dto/user.dtos";

@Controller()
export class UserController {
  constructor (private readonly userService: UserService) {}

  @Post("/user")
  async create(@Body() user: CreateUserDto): Promise<User> {
    return await this.userService.create(user);
  }

  @Get("/user/:email")
  async findByEmail(@Param("email") email: string): Promise<User | null> {
    return await this.userService.findByEmail(email);
  }

  @Put("/user/:email")
  async updateUser(@Param("email") email: string, @Body() newEmail: UpdateUserEmailDto) {
    return await this.userService.updateUserEmail(email, newEmail.email)
  }

  @Delete("/user/:email")
  async deleteUser(@Param("email") email: string) {
    return await this.userService.deleteUser(email)
  }

}
