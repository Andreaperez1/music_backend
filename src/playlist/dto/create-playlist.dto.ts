/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsString } from "class-validator";
import { Cancion } from "src/cancion/entities/cancion.entity";

export class CreatePlaylistDto {
    @IsString()
    nombre: string;

    @IsNotEmpty()
      cancion: Cancion[];

}
