import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from "@nestjs/common";
import { UserService } from "./user.service";
import { CreateUserDto, UpdateUserEmailDto } from "./dto/user.dtos";
import { JwtAuthGuard } from "src/auth/jwt.auth-guard";

@Controller("/user")
export class UserController {
  constructor (private readonly userService: UserService) {}

  @Post()
  async create(@Body() user: CreateUserDto) {
    return await this.userService.create(user);
  }

  @UseGuards(JwtAuthGuard)
  @Get("/:email")
  async findByEmail(@Param("email") email: string) {
    return await this.userService.findByEmail(email);
  }

  @UseGuards(JwtAuthGuard)
  @Put("/user/:email")
  async updateUser(@Param("email") email: string, @Body() password: UpdateUserEmailDto) {
    return await this.userService.updateUserPassword(email, password.password)
  }

  @UseGuards(JwtAuthGuard)
  @Delete("/user/:email")
  async deleteUser(@Param("email") email: string) {
    return await this.userService.deleteUser(email)
  }

}
