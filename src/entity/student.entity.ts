import {Column, PrimaryGeneratedColumn, Entity} from "typeorm"

@Entity("students")
export class Students{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({unique: true})
    email: string;

    @Column({unique: true})
    phone: string;

    @Column()
    age: number;
}