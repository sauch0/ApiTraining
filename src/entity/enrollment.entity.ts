import { PrimaryGeneratedColumn, Column, Entity, ManyToOne, JoinColumn } from "typeorm";
import { Students } from "./student.entity";
import { Courses } from "./courses.entity";

@Entity('Enrollments')
export class Enrollments {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ name: "student_id" })
    studentId: number;

    @Column({ name: "course_id" })
    courseId: number;

    @ManyToOne(() => Students)
    @JoinColumn({ name: "student_id" })
    student: Students

    @ManyToOne(() => Courses)
    @JoinColumn({ name: "course_id" })
    course: Courses

}