
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('doctor')
export class Doctor {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    nombre: string

    @Column()
    genero: string

    @Column()
    pais: string

}

