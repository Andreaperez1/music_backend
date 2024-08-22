/* eslint-disable prettier/prettier */
import { Autore } from 'src/autores/entities/autore.entity';
import { Genero } from 'src/genero/entities/genero.entity';
import { Playlist } from 'src/playlist/entities/playlist.entity';
import { Column, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Cancion {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column({ type: 'text' })
  cancion: string;

  @Column({ type: 'text' })
  portada: string;

  @Column()
  year: number;

  @ManyToOne(() => Autore, (autor) => autor.cancion,{
    eager:true
  })
  autor: Autore[];

  @ManyToOne(() => Genero, (genero) => genero.cancion,{
    eager:true
  })
  genero: Genero[];

 @ManyToMany(() => Playlist, (playlist) => playlist.cancion)
  playlist: Playlist[]
 
}
