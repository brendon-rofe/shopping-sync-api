import { Injectable, UnauthorizedException } from "@nestjs/common";
import * as bcrypt from 'bcrypt';
import { LoginDto } from "./dto/auth.dtos";
import { UserService } from "src/user/user.service";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class AuthService {

  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async comparePasswords(password: string, hash: string): Promise<boolean> {
    return await bcrypt.compare(password, hash);
  }

  async login(dto: LoginDto) {
    const user = await this.userService.findByEmail(dto.email);

    const ok = await this.comparePasswords(dto.password, user.password);
    if(!ok) {
      throw new UnauthorizedException('Invalid password');
    }
    const payload = { sub: user.id, email: user.email };
    const accessToken = await this.jwtService.signAsync(payload);
    return { accessToken };
  }

}
