/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Usuario } from './entities/usuario.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsuarioService {
  constructor(
    @InjectRepository(Usuario)
    private readonly usuarioRepository: Repository<Usuario>,
  ){}

   async crearUsuario(createUsuarioDto: CreateUsuarioDto) {
    const usuario = this.usuarioRepository.create(createUsuarioDto);
    return this.usuarioRepository.save(usuario);
  }

  async obtenerUsuario(){
    return this.usuarioRepository.find();
  }

   async findOne(id: number) {
    return this.usuarioRepository.findOneBy({id});
  }

  async ActualizarUsuario(id: number, updateUsuarioDto: UpdateUsuarioDto){
    await this.usuarioRepository.update(id,updateUsuarioDto);
    return this.findOne(id);  
  }

  async eliminarUsuario(id: number): Promise<void> {
    await this.usuarioRepository.delete(id);
  }
}
