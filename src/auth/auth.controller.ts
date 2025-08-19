import { Body, Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { LoginDto } from "./dto/auth.dtos";

@Controller()
export class AuthController{
  constructor(
    private readonly authService: AuthService,
  ) {}

  @Post("/Login")
  async login(@Body() dto: LoginDto) {
    return
  }

}
