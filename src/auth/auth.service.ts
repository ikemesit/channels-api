import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRepository } from './user.respository';
import { SignupCredentialsDto } from './dto/signupCredentials.dto';
import { User } from './user.entity';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserRepository)
    private userRepository: UserRepository,
  ) {}

  async signUp(signupCredentialsDto: SignupCredentialsDto): Promise<User> {
    return this.userRepository.signUp(signupCredentialsDto);
  }
}
