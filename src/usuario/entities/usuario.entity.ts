/* eslint-disable prettier/prettier */
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

/* eslint-disable prettier/prettier */
@Entity()
export class Usuario {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    usuario: string;

    @Column()
    password: string

}
