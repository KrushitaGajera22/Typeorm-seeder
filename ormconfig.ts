// import { User, Post } from "./src/db/entities";

import { Post } from './src/db/entities/post';
import { User } from './src/db/entities/user';

export default {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'password',
  database: 'seeder',
  entities: [User, Post],
  logging: ['warn', 'error'],
  synchronize: 'false',
  // These two lines have been added:
  seeds: ['src/db/seeding/seeds/**/*{.ts,.js}'],
  factories: ['src/db/seeding/factories/**/*{.ts,.js}'],
};
