import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as path from 'path';

export const typeormConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'myapp',
  autoLoadEntities: true,
  entities: [path.join(__dirname, '../**/*.entity{.js,.ts}')],
  synchronize: true,
};
