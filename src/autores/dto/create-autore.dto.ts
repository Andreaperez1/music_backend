import { IsString, IsOptional, IsNotEmpty } from 'class-validator';
import { Genero } from 'src/genero/entities/genero.entity';

export class CreateAutoreDto {
  @IsString()
  nombre: string;

  @IsOptional()
  @IsString()
  pais?: string;

  @IsNotEmpty()
  genero: Genero[]; 

}
