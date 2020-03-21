import { Controller, Inject, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignupCredentialsDto } from './dto/signupCredentials.dto';
import { User } from './user.entity';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signup')
  signUp(@Body() signupCredentialsDto: SignupCredentialsDto): Promise<User> {
    return this.authService.signUp(signupCredentialsDto);
  }
}
