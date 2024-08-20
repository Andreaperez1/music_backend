/* eslint-disable prettier/prettier */
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
  async crearCancion(createCancionDto: CreateCancionDto) {
      return await this.cancionRepository.insert(createCancionDto);
    
  }

   async obtenerCancion() {
    return await this.cancionRepository.find();
  }

  async findOne(id: number) : Promise<Cancion>{
    return await this.cancionRepository.findOneBy({ id });
  }

  async actualizarCancion(id: number, updateCancionDto: UpdateCancionDto): Promise<Cancion> {
    await this.cancionRepository.update(id,updateCancionDto);
    return  await this.findOne(id);  // Ensure to return the updated entity
  }

  async eliminarCancion(id: number): Promise<void> {
    await this.cancionRepository.delete(id);
  }
}
