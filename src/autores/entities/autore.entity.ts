import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Autore {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column({ nullable: true })
  pais: string;
}
