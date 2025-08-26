import { ItemStatus } from "@prisma/client"

export class CreateItemDto {

  name: string
  quantity?: number
  status?: ItemStatus
  unit?: string

}