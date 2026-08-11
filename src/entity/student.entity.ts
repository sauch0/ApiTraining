import { Column, PrimaryGeneratedColumn, Entity, OneToMany } from "typeorm"
import { Enrollments } from "./enrollment.entity";

@Entity("students")
export class Students {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({ unique: true })
    email: string;

    @Column({ unique: true })
    phone: string;

    @Column()
    age: number;

    @OneToMany(() => Enrollments, enrollment => enrollment.student)
    enrollments: Enrollments[];
}