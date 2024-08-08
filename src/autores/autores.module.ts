import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AutoresService } from './autores.service';
import { AutoresController } from './autores.controller';
import { Autore } from './entities/autore.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Autore])],
  controllers: [AutoresController],
  providers: [AutoresService],
  exports:[TypeOrmModule]
})
export class AutoresModule {}
