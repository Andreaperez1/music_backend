import { PartialType } from '@nestjs/mapped-types';

import {  IsOptional, IsString } from 'class-validator';

export class UpdateAutoreDto{
    @IsString()
    nombre: string;
  


    @IsOptional()
    @IsString()
    pais?: string;

}
