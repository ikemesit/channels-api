import { User } from '../../user/user.entity';

export interface AuthResult {
  accessToken: string;
  expiresIn: number;
  user: Partial<User>;
}
