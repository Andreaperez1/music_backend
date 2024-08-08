import { Autore } from "src/autores/entities/autore.entity";
import { Genero } from "src/genero/entities/genero.entity";
import { Column, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Cancion {
    @PrimaryGeneratedColumn()
    id: Number;

    @Column()
    nombre: String;

    @Column()
    ano: number;

    @Column({type:'text'})
    portada: string;


    @ManyToOne(() => Autore, (autor) => autor.cancion)
     autor : Autore[]

    @ManyToOne(() => Genero, (genero) => genero.cancion)
     genero : Genero[]







    
}
