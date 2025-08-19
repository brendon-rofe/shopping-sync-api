import { Body, Controller, Post, UnauthorizedException } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { LoginDto } from "./dto/auth.dtos";
import { UserService } from "src/user/user.service";

@Controller()
export class AuthController{
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UserService,
  ) {}

  @Post("auth/login")
  async login(@Body() dto: LoginDto) {
    const user = await this.userService.findByEmail(dto.email);
    const isPasswordValid = await this.authService.comparePasswords(dto.password, user.password);
    if (!isPasswordValid) {
      throw new UnauthorizedException('Password incorrect');
    }
    return { message: "Login successful" };
  }

}
