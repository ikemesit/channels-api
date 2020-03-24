import { Injectable } from '@nestjs/common';
import { SignupCredentialsDto } from './dto/signupCredentials.dto';
import { User } from '../user/user.entity';
import { AuthResult } from './interfaces/auth-result.interface';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async signUp(signupCredentialsDto: SignupCredentialsDto): Promise<User> {
    return this.userService.signUp(signupCredentialsDto);
  }

  async login(user: User): Promise<AuthResult> {
    const payload = { username: user.username, sub: user.id };
    const expiresIn = 3600;

    return { accessToken: this.jwtService.sign(payload), expiresIn, user };
  }

  async validateUser(username: string, pass: string): Promise<Partial<User>> {
    const user = await this.userService.findOne(username);

    if (user && user.password === (await bcrypt.hash(pass, user.salt))) {
      const { password, salt, ...result } = user;
      return result;
    }

    return null;
  }
}
