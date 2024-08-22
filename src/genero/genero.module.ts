/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GeneroService } from './genero.service';
import { GeneroController } from './genero.controller';
import { Genero } from './entities/genero.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Genero])],
  providers: [GeneroService],
  controllers: [GeneroController],
  exports:[TypeOrmModule]
})
export class GeneroModule {}
