import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GeneroService } from './genero.service';
import { CreateGeneroDto } from './dto/create-genero.dto';
import { UpdateGeneroDto } from './dto/update-genero.dto';

@Controller('generos')
export class GeneroController {
  constructor(private readonly generosService: GeneroService) {}

  @Post()
  create(@Body() createGeneroDto: CreateGeneroDto) {
    return this.generosService.create(createGeneroDto);
  }

  @Get()
  findAll() {
    return this.generosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.generosService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateGeneroDto: UpdateGeneroDto) {
    return this.generosService.update(id, updateGeneroDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.generosService.remove(id);
  }
}
