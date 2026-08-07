import {Column, PrimaryGeneratedColumn, Entity} from "typeorm"

@Entity("students")
export class Studnets{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    phone: number;

    @Column()
    age: number;
}