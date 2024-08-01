import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AutoresModule } from './autores/autores.module';
import { Autore } from './autores/entities/autore.entity';
import { GeneroModule } from './genero/genero.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306, 
      username: 'root',
      password: '',
      database: 'Music',
      autoLoadEntities: true,
      synchronize: false,
    }),
    AutoresModule,
    GeneroModule,
  ],
})
export class AppModule {}
