import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AutoresModule } from './autores/autores.module';
import { GeneroModule } from './genero/genero.module';
import { ConfigModule } from '@nestjs/config';
import { Autore } from './autores/entities/autore.entity';
import { Genero } from './genero/entities/genero.entity';



@Module({
  imports: [
     ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ".env"
     }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port:parseInt( process.env.DB_PORT),
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_DATABASE,
      entities: [Autore,Genero],
      autoLoadEntities: true,
      synchronize: true,
    }),
    AutoresModule, GeneroModule,
  ],
})
export class AppModule {}
