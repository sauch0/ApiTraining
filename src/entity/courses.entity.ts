import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Enrollments } from "./enrollment.entity";

@Entity()
export class Courses {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ nullable: false })
    title: string

    @Column()
    description: string

    @Column({ nullable: false })
    duration: string

    @OneToMany(() => Enrollments, enrollment => enrollment.course)
    enrollments: Enrollments[];
}