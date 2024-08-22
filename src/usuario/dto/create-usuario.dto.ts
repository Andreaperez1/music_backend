/* eslint-disable prettier/prettier */
import { IsString } from "class-validator";

/* eslint-disable prettier/prettier */
export class CreateUsuarioDto {
    @IsString()
    usuario: string;

    @IsString()
    password: string
}
