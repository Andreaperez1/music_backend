/* eslint-disable prettier/prettier */
import { Cancion } from 'src/cancion/entities/cancion.entity';
import { Genero } from 'src/genero/entities/genero.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinTable,
  OneToMany,
} from 'typeorm';

@Entity()
export class Autore {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column({ nullable: true })
  pais: string;

  @OneToMany(() => Cancion, (cancion) => cancion.autor)
  cancion: Cancion[];

  @ManyToMany(() => Genero, (genero) => genero.autor, {
    eager:true,
    cascade: true,
  })
  @JoinTable()
  genero: Genero[];
}
