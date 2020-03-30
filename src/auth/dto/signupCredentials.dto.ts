import { IsString, IsNotEmpty, MinLength, Matches } from 'class-validator';

export class SignupCredentialsDto {
  @IsNotEmpty()
  @IsString()
  firstname: string;

  @IsNotEmpty()
  @IsString()
  lastname: string;

  @IsNotEmpty()
  @IsString()
  email: string;

  @MinLength(4)
  @IsNotEmpty()
  @IsString()
  username: string;

  @MinLength(8)
  @IsNotEmpty()
  @IsString()
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'Password is too weak',
  })
  password: string;
}
