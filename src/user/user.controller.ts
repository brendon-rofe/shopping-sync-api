import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put } from "@nestjs/common";
import { UserService } from "./user.service";
import { User } from "@prisma/client";
import { CreateUserDto, UpdateUserEmailDto } from "./dto/user.dtos";

@Controller()
export class UserController {
  constructor (private readonly userService: UserService) {}

  @Post("/user")
  async create(@Body() user: CreateUserDto) {
    return await this.userService.create(user);
  }

  @Get("/user/:email")
  async findByEmail(@Param("email") email: string) {
    return await this.userService.findByEmail(email);
  }

  @Put("/user/:email")
  async updateUser(@Param("email") email: string, @Body() password: UpdateUserEmailDto) {
    return await this.userService.updateUserPassword(email, password.password)
  }

  @Delete("/user/:email")
  async deleteUser(@Param("email") email: string) {
    return await this.userService.deleteUser(email)
  }

}
