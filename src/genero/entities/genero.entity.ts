import { Autore } from 'src/autores/entities/autore.entity';
import { Cancion } from 'src/cancion/entities/cancion.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, OneToMany } from 'typeorm';

@Entity()
export class Genero {
  @PrimaryGeneratedColumn()
  id: Number;

  @Column()
  nombre: String;
  
  @OneToMany(() => Cancion, (cancion) => cancion.genero)
  cancion: Cancion[];
  
  @ManyToMany(() => Autore, (autor) => autor.genero)
  autor: Autore[]

}
