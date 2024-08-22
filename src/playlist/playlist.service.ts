/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreatePlaylistDto } from './dto/create-playlist.dto';
import { UpdatePlaylistDto } from './dto/update-playlist.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Playlist } from './entities/playlist.entity';
import { Repository } from 'typeorm';


@Injectable()
export class PlaylistService {
  constructor(
    @InjectRepository(Playlist)
    private readonly playlistRepository: Repository<Playlist>
  ){}
  async  crearPlaylist(createPlaylistDto: CreatePlaylistDto) {
    const playlist = this.playlistRepository.create(createPlaylistDto)
     return this.playlistRepository.save(playlist);
  }

   async obtenerPlaylist() {
    
   return this.playlistRepository.find();
  }

  async findOne(id: number) {
    return this.playlistRepository.findOneBy({ id });
  }

  async ActualizarPlaylist(id: number, updatePlaylistDto: UpdatePlaylistDto) {
    await this.playlistRepository.update(id,updatePlaylistDto);
    return this.findOne(id);  // Ensure to return the updated entity
  }
  async eliminarPlaylist(id: number) {
    await this.playlistRepository.delete(id);
  }
}
