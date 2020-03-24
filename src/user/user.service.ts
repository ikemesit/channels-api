import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRepository } from './user.respository';
import { User } from './user.entity';
import { SignupCredentialsDto } from '../auth/dto/signupCredentials.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserRepository)
    private readonly userRepository: UserRepository,
  ) {}

  async findOne(username: string): Promise<User | undefined> {
    try {
      return await this.userRepository.findOne({ username });
    } catch (error) {}
  }

  async signUp(signupCredentialsDto: SignupCredentialsDto): Promise<User> {
    return await this.userRepository.signUp(signupCredentialsDto);
  }
}
