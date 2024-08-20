/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { CancionService } from './cancion.service';
import { CancionController } from './cancion.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cancion } from './entities/cancion.entity';
import { Autore } from 'src/autores/entities/autore.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Cancion,Autore])],
  controllers: [CancionController],
  providers: [CancionService],
  exports: [TypeOrmModule,CancionService],
  
})
export class CancionModule {}
