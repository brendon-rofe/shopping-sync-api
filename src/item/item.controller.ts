import { Controller, Get, Param } from "@nestjs/common";
import { ItemService } from "./item.service";

@Controller("/items")
export class ItemController {
  constructor(private readonly itemService: ItemService) {}

  @Get()
  async getAll() {
    return await this.itemService.getAll();
  }

  @Get("/:id")
  async getById(@Param("id") id: number) {
    return await this.itemService.getById(id);
  }

}
