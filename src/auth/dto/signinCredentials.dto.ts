import { IsString, IsNotEmpty } from 'class-validator';

export class SigninCredentialsDto {
  @IsString()
  @IsNotEmpty()
  username: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}
