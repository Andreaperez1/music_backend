/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { CancionService } from './cancion.service';
import { CreateCancionDto } from './dto/create-cancion.dto';
import { UpdateCancionDto } from './dto/update-cancion.dto';

@Controller('cancion')
export class CancionController {
  constructor(private readonly cancionService: CancionService) {}

  @Post('/crear')
   async create(@Body() createCancionDto: CreateCancionDto) {
    return  await this.cancionService.crearCancion(createCancionDto);
  }

  @Get()
  findAll() {
    return this.cancionService.obtenerCancion();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cancionService.findOne(+id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateCancionDto: UpdateCancionDto) {
    const idNumber = parseInt(id, 10); // Convert to number
    return this.cancionService.actualizarCancion(idNumber, updateCancionDto);
  }
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cancionService.eliminarCancion(+id);
  }
}
