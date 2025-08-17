import { Injectable } from "@nestjs/common";


@Injectable()
export class UserService {
  constructor() {}

  async createUser() {
    return { message: "This will create a new user" }
  }

}
