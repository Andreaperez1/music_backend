import { Injectable } from '@nestjs/common';
import { CreateCancionDto } from './dto/create-cancion.dto';
import { UpdateCancionDto } from './dto/update-cancion.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Cancion } from './entities/cancion.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CancionService {
  constructor(
    @InjectRepository(Cancion)
    private readonly cancionRepository: Repository<Cancion>

  ){}
  async create(createCancionDto: CreateCancionDto) {
      return await this.cancionRepository.save(createCancionDto);
    
  }

  findAll() {
    return `This action returns all cancion`;
  }

  findOne(id: number) {
    return `This action returns a #${id} cancion`;
  }

  update(id: number, updateCancionDto: UpdateCancionDto) {
    return `This action updates a #${id} cancion`;
  }

  remove(id: number) {
    return `This action removes a #${id} cancion`;
  }
}
