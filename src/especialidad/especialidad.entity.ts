import { Entity, PrimaryGeneratedColumn,Column } from "typeorm"

@Entity("especialidad")
export class Especialidad{
    @PrimaryGeneratedColumn()
    id_especialidad: number
    
    @Column()
    nombre_especialidad: string
}