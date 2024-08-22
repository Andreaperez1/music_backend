/* eslint-disable prettier/prettier */

import { Cancion } from "src/cancion/entities/cancion.entity";
import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Playlist {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre: string;

    @ManyToMany(()=> Cancion, (cancion)=> cancion.playlist,{
        eager: true,
        cascade: true,
      })
      @JoinTable()
      cancion: Cancion[];

    
}
