/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Autore } from './entities/autore.entity';
import { CreateAutoreDto } from './dto/create-autore.dto';
import { UpdateAutoreDto } from './dto/update-autore.dto';

@Injectable()
export class AutoresService {
  constructor(
    @InjectRepository(Autore)
    private readonly autoreRepository: Repository<Autore>,
  ) {}

  async crearAutor(createAutoreDto: CreateAutoreDto) {
    const autore = this.autoreRepository.create(createAutoreDto);
    return this.autoreRepository.save(autore);
  }

  async obtenerAutor(){
    return this.autoreRepository.find();
  }

  async findOne(id: number): Promise<Autore> {
    return this.autoreRepository.findOneBy({ id });
  }

  async ActualizarAutor(id: number, updateAutoreDto: UpdateAutoreDto): Promise<Autore> {
    await this.autoreRepository.update(id,updateAutoreDto);
    return this.findOne(id);  // Ensure to return the updated entity
  }

  async eliminarAutor(id: number): Promise<void> {
    await this.autoreRepository.delete(id);
  }
}
