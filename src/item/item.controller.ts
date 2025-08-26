import { Body, Controller, Get, Param, Post, UseGuards } from "@nestjs/common";
import { ItemService } from "./item.service";
import { CreateItemDto } from "./dto/create-item.dto";
import { JwtAuthGuard } from "src/auth/jwt.auth-guard";
import { GetUser } from "src/auth/get-user.decorator";
import { GetUserDto } from "src/user/dto/user.dtos";

@UseGuards(JwtAuthGuard)
@Controller("/items")
export class ItemController {
  constructor(private readonly itemService: ItemService) {}

  @Post()
  async create(@Body() dto: CreateItemDto, @GetUser('userId') user: GetUserDto) {
    return await this.itemService.create(dto, user.userId);
  }

  @Get()
  async getAll(@GetUser('userId') user: GetUserDto) {
    return await this.itemService.getAll(user.userId);
  }

  @Get("/:id")
  async getById(@Param("id") id: string, @GetUser('userId') user: GetUserDto) {
    return await this.itemService.getById(id, user.userId);
  }

}
