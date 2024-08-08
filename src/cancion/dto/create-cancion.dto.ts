import { IsDate, IsNotEmpty, IsString } from 'class-validator';
import { Autore } from 'src/autores/entities/autore.entity';
import { Genero } from 'src/genero/entities/genero.entity';

export class CreateCancionDto {
  
  @IsNotEmpty()
  nombre: String;

  @IsNotEmpty()
  ano: number;

  @IsNotEmpty()
  portada: string;

  @IsNotEmpty()
  genero: Genero[];

  @IsNotEmpty()
  autor: Autore[];
}
