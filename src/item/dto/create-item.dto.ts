enum ItemStatus {
  NEEDED,     
  IN_CART,
  BOUGHT,
}

export class CreateItemDto {

  name: string
  quantity: number
  status: ItemStatus
  unit: string

}