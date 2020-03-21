import { Controller, Inject, Post, Body, ValidationPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignupCredentialsDto } from './dto/signupCredentials.dto';
import { User } from './user.entity';
import { SigninCredentialsDto } from './dto/signinCredentials.dto';
import { AuthResult } from './interfaces/auth-result.interface';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signup')
  signUp(
    @Body(ValidationPipe) signupCredentialsDto: SignupCredentialsDto,
  ): Promise<User> {
    return this.authService.signUp(signupCredentialsDto);
  }

  @Post('signin')
  signIn(
    @Body(ValidationPipe) signinCredentialsDto: SigninCredentialsDto,
  ): Promise<AuthResult> {
    return this.authService.signIn(signinCredentialsDto);
  }
}
