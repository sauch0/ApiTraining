
import { studentRepository } from "../repository";
import { Student } from "../interfaces/student.interface";

export class StudentService {

    static async createStudent(studentData: Student) {
        const emailExists = await studentRepository.findOne({
            where: { email: studentData.email }
        })

        if (emailExists) {
            throw new Error("Email already exists")
        }

        const numberExists = await studentRepository.findOne({
            where: { phone: studentData.phone }
        })
        if (numberExists) {
            throw new Error("This phone number already exists")
        }
        if (studentData.age <= 15) {
            throw new Error("Student age must be greater than 15")
        }

        const student = studentRepository.create(studentData)
        return await studentRepository.save(student)
    }

    static async getAllStudents(query) {
        const page = Math.max(Number(query.page) || 1, 1)
        const limit = Number(query.limit) || 5

        const qb = studentRepository.createQueryBuilder("students")
            .select([
                "students.id",
                "students.name",
                "students.email",
                "students.phone",
                "students.age",
            ])
        if (query.name) {
            qb.where("students.name LIKE :name", { name: `%${query.name}%` })

        }

        qb.orderBy("students.id", "DESC")

        qb.skip((page - 1) * limit)
        qb.take(limit)

        const [data, total] = await qb.getManyAndCount()
        return { data, total }
    }

    static async getStudentsById(id: number) {
        return await studentRepository.findOne({
            where: { id: id }
        })
    }

    static async updateStudent(id: number, studentData: Student) {
        const student = await studentRepository.findOne({
            where: { id: id },
        });

        if (!student) {
            return null;
        }
        const emailExists = await studentRepository.findOne({
            where: { email: studentData.email }
        })
        if (emailExists) {
            throw new Error("Email already exists")
        }

        const numberExists = await studentRepository.findOne({
            where: { phone: studentData.phone }
        })
        if (numberExists) {
            throw new Error("This phone number already exists")
        }
        if (studentData.age <= 15) {
            throw new Error("Student age must be greater than 15")
        }

        const updatedUser = studentRepository.merge(student, studentData)
        return await studentRepository.save(updatedUser);
    }

    static async deleteStudent(id: number) {
        const student = await studentRepository.findOne({
            where: { id: id },
        });
        if (!student) {
            return null
        }
        await studentRepository.delete(student)
        return true
    }
}