import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Genero } from './entities/genero.entity';
import { CreateGeneroDto } from './dto/create-genero.dto';
import { UpdateGeneroDto } from './dto/update-genero.dto';

@Injectable()
export class GeneroService {
  constructor(
    @InjectRepository(Genero)
    private readonly generoRepository: Repository<Genero>,
  ) {}

  async create(createGeneroDto: CreateGeneroDto): Promise<Genero> {
    const genero = this.generoRepository.create(createGeneroDto);
    return this.generoRepository.save(genero);
  }

  async findAll(): Promise<Genero[]> {
    return this.generoRepository.find();
  }

  async findOne(id: number): Promise<Genero> {
    const genero = await this.generoRepository.findOne({ where: { id } });
    if (!genero) {
      throw new NotFoundException(`Genero with ID ${id} not found`);
    }
    return genero;
  }

  async update(id: number, updateGeneroDto: UpdateGeneroDto): Promise<Genero> {
    await this.generoRepository.update(id, updateGeneroDto);
    const updatedGenero = await this.generoRepository.findOne({ where: { id } });
    if (!updatedGenero) {
      throw new NotFoundException(`Genero with ID ${id} not found`);
    }
    return updatedGenero;
  }

  async remove(id: number): Promise<void> {
    const result = await this.generoRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Genero with ID ${id} not found`);
    }
  }
}
