/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { AutoresService } from './autores.service';
import { CreateAutoreDto } from './dto/create-autore.dto';
import { UpdateAutoreDto } from './dto/update-autore.dto';

@Controller('autores')
export class AutoresController {
  constructor(private readonly autoresService: AutoresService) {}

  @Post()
  create(@Body() createAutoreDto: CreateAutoreDto) {
    return this.autoresService.crearAutor(createAutoreDto);
  }

  @Get()
  findAll() {
    return this.autoresService.obtenerAutor();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const idNumber = parseInt(id, 10); // Convert to number
    return this.autoresService.findOne(idNumber);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateAutoreDto: UpdateAutoreDto) {
    const idNumber = parseInt(id, 10); // Convert to number
    return this.autoresService.ActualizarAutor(idNumber, updateAutoreDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const idNumber = parseInt(id, 10); // Convert to number
    return this.autoresService.eliminarAutor(idNumber);
  }
}
