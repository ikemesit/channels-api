import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { UserPost } from '../userpost/user-post.entity';

export const typeormConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'myapp',
  entities: [UserPost],
  synchronize: true,
};
