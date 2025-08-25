import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { ItemService } from "./item.service";
import { CreateItemDto } from "./dto/create-item.dto";

@Controller("/items")
export class ItemController {
  constructor(private readonly itemService: ItemService) {}

  @Post()
  async create(@Body() dto: CreateItemDto, @Body() userId: number) {
    return await this.itemService.create(dto, userId);
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
