import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

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
}
