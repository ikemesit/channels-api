import {
  Controller,
  Post,
  Body,
  ValidationPipe,
  Req,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignupCredentialsDto } from './dto/signupCredentials.dto';
import { User } from '../user/user.entity';
import { AuthResult } from './interfaces/auth-result.interface';
import { LocalAuthGuard } from './local-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signup')
  signUp(
    @Body(ValidationPipe) signupCredentialsDto: SignupCredentialsDto,
  ): Promise<User> {
    return this.authService.signUp(signupCredentialsDto);
  }

  @UseGuards(LocalAuthGuard)
  @Post('login')
  login(@Req() req: any): Promise<AuthResult> {
    return this.authService.login(req.user);
  }
}
