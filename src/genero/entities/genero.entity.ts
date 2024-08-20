/* eslint-disable prettier/prettier */
import { Autore } from 'src/autores/entities/autore.entity';
import { Cancion } from 'src/cancion/entities/cancion.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, OneToMany } from 'typeorm';

@Entity()
export class Genero {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;
  
  @OneToMany(() => Cancion, (cancion) => cancion.genero)
  cancion: Cancion[];
  
  @ManyToMany(() => Autore, (autor) => autor.genero)
  autor: Autore[]

}
