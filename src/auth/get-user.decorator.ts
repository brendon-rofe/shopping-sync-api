import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export interface JwtUser {
  userId: number;
  email: string;
}

export const GetUser = createParamDecorator(
  (_data: unknown, ctx: ExecutionContext): JwtUser => {
    const req = ctx.switchToHttp().getRequest();
    return req.user as JwtUser;
  },
);
