import { IsString, IsOptional } from 'class-validator';

export class CreateAutoreDto {
  @IsString()
  nombre: string;

  @IsOptional()
  @IsString()
  pais?: string;
}
