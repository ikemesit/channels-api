import { User } from '../user.entity';

export interface AuthResult {
  accessToken: string;
  expiresIn: number;
  user: Partial<User>;
}
