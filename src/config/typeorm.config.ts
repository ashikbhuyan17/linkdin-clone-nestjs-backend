import { TypeOrmModule } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModule = {
    type: 'postgres',
    host: process.env.POSTGRES_HOST,
    port: parseInt(<string>process.env.POSTGRES_PORT),
    username: 'postgres',
    password: 'ashik183',
    database: process.env.POSTGRES__DATABASE,
    entities: [__dirname + '/../**/*.entity.ts'],
    synchronize: true,
    autoLoadEntities: true,
};