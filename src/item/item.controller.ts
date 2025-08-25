import { Body, Controller, Get, Param, Post, UseGuards } from "@nestjs/common";
import { ItemService } from "./item.service";
import { CreateItemDto } from "./dto/create-item.dto";
import { JwtAuthGuard } from "src/auth/jwt.auth-guard";
import { GetUser } from "src/auth/get-user.decorator";
import { GetUserDto } from "src/user/dto/user.dtos";

@Controller("/items")
export class ItemController {
  constructor(private readonly itemService: ItemService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  async create(@Body() dto: CreateItemDto, @GetUser('userId') user: GetUserDto) {

    return await this.itemService.create(dto, user.userId);
  }

  @Get()
  async getAll() {
    return await this.itemService.getAll();
  }

  @Get("/:id")
  async getById(@Param("id") id: string) {
    return await this.itemService.getById(id);
  }

}
