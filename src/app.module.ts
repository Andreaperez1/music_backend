import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AutoresModule } from './autores/autores.module';
import { GeneroModule } from './genero/genero.module';
import { CancionModule } from './cancion/cancion.module';



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
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      autoLoadEntities: true,
      synchronize: false,
    }),
    AutoresModule,GeneroModule,CancionModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
