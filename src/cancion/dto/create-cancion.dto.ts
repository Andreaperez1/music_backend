/* eslint-disable prettier/prettier */
import { IsNotEmpty } from 'class-validator';
import { Autore } from 'src/autores/entities/autore.entity';
import { Genero } from 'src/genero/entities/genero.entity';

export class CreateCancionDto {
  
  @IsNotEmpty()
  nombre: string;

  @IsNotEmpty()
  year: number;

  @IsNotEmpty()
  cancion: string;

  @IsNotEmpty()
  portada: string;

  @IsNotEmpty()
  genero: Genero[];

  @IsNotEmpty()
  autor: Autore[];
}
