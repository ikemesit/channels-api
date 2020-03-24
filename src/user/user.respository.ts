import { Repository, EntityRepository } from 'typeorm';
import { User } from './user.entity';
import { SignupCredentialsDto } from '../auth/dto/signupCredentials.dto';
import * as bcrypt from 'bcrypt';
import {
  ConflictException,
  InternalServerErrorException,
} from '@nestjs/common';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  async signUp(signupCredentialsDto: SignupCredentialsDto) {
    const {
      firstname,
      lastname,
      email,
      username,
      password,
    } = signupCredentialsDto;

    const user = new User();
    user.firstname = firstname;
    user.lastname = lastname;
    user.email = email;
    user.username = username;
    user.salt = await bcrypt.genSalt();
    user.password = await this.hashPassword(password, user.salt);

    try {
      await user.save();
    } catch (error) {
      if (error.code === '23505') {
        throw new ConflictException('Username already exists');
      } else {
        throw new InternalServerErrorException(
          'Something went wrong. Your request could not be fulfilled.',
        );
      }
    }

    return user;
  }

  private async hashPassword(password: string, salt: string): Promise<string> {
    return await bcrypt.hash(password, salt);
  }
}
