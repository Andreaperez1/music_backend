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
  id: Number;

  @Column()
  nombre: String;

  @Column({ nullable: true })
  pais: String;

  @OneToMany(() => Cancion, (cancion) => cancion.autor)
  cancion: Cancion[];

  @ManyToMany(() => Genero, (genero) => genero.autor, {
    cascade: true,
  })
  @JoinTable()
  genero: Genero[];
}
