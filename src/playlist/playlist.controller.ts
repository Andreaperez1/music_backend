/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { PlaylistService } from './playlist.service';
import { CreatePlaylistDto } from './dto/create-playlist.dto';
import { UpdatePlaylistDto } from './dto/update-playlist.dto';

@Controller('playlist')
export class PlaylistController {
  constructor(private readonly playlistService: PlaylistService) {}

  @Post('/crear')
  create(@Body() createPlaylistDto: CreatePlaylistDto) {
    return this.playlistService.crearPlaylist(createPlaylistDto);
  }

  @Get()
  findAll() {
    return this.playlistService.obtenerPlaylist();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const idNumber = parseInt(id, 10); // Convert to number
    return this.playlistService.findOne(idNumber);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updatePlaylistDto: UpdatePlaylistDto) {
    const idNumber = parseInt(id, 10)
    return this.playlistService.ActualizarPlaylist(idNumber, updatePlaylistDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    const idNumber = parseInt(id,10);
    return this.playlistService.eliminarPlaylist(idNumber);
  }
}
