export class CreateUserDto {

  username: string;
  email: string;
  password: string

}

export class UpdateUserEmailDto {

  password: string;

}

export class GetUserDto {

  userId: number;
  email: string;

}
