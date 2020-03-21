import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRepository } from './user.respository';
import { SignupCredentialsDto } from './dto/signupCredentials.dto';
import { User } from './user.entity';
import { SigninCredentialsDto } from './dto/signinCredentials.dto';
import { AuthResult } from './interfaces/auth-result.interface';
import { JwtPayload } from './interfaces/jwt-payload.interface';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserRepository)
    private userRepository: UserRepository,
    private jwtService: JwtService,
  ) {}

  async signUp(signupCredentialsDto: SignupCredentialsDto): Promise<User> {
    return this.userRepository.signUp(signupCredentialsDto);
  }

  async signIn(
    signinCredentialsDto: SigninCredentialsDto,
  ): Promise<AuthResult> {
    const user = await this.userRepository.validateUserPassword(
      signinCredentialsDto,
    );

    if (!user || !user.username) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const payload: JwtPayload = { username: user.username };
    const expiresIn = 3600;
    const accessToken = await this.jwtService.sign(payload);

    // Strip sensitive & irrelevant properties
    delete user.password;
    delete user.salt;
    delete user.validatePassword;
    delete user.save;
    delete user.hasId;
    delete user.remove;

    return { accessToken, expiresIn, user };
  }
}
