/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';

@Controller('usuario')
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}

  @Post()
  create(@Body() createUsuarioDto: CreateUsuarioDto) {
    return this.usuarioService.crearUsuario(createUsuarioDto);
  }

  @Get()
  findAll() {
    return this.usuarioService.obtenerUsuario();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const idNumber = parseInt(id, 10); // Convert to number
    return this.usuarioService.findOne(idNumber);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateUsuarioDto: UpdateUsuarioDto) {
    const idNumber = parseInt(id, 10); // Convert to number
    return this.usuarioService.ActualizarUsuario(idNumber, updateUsuarioDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const idNumber = parseInt(id, 10); // Convert to number
    return this.usuarioService.eliminarUsuario(idNumber);
  }
}
