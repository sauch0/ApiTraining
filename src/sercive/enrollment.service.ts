import { enrollmentRepository } from "../repository";
import { Enrollment } from "../interfaces/enrollment.interface";

export class EnrollmentService {
    static async createEnrollment(enrollmentData: Enrollment) {
        const existingEnrollment = await enrollmentRepository.findOne({
            where: {
                studentId: enrollmentData.student_id,
                courseId: enrollmentData.course_id
            }
        })
        if (existingEnrollment) {
            throw new Error("Enrollment already exists")
        }
        const enrollment = enrollmentRepository.create({
            studentId: enrollmentData.student_id,
            courseId: enrollmentData.course_id
        })
        return await enrollmentRepository.save(enrollment)
    }

    static async getAllEnrollments(query) {
        const qb = enrollmentRepository.createQueryBuilder("enrollments")
            .select([
                "enrollments.id",
                "enrollments.studentId",
                "enrollments.courseId"
            ])
        const page = Math.max(Number(query.page) || 1, 1)
        const limit = Number(query.limit) || 5
        qb.skip((page - 1) * limit)
            .take(limit)
        const [data, total] = await qb.getManyAndCount()
        return { data, total }
    }

    static async getEnrollmentById(id: number) {
        const enrollment = await enrollmentRepository.findOne({
            where: { id: id }
        })

        if (!enrollment) {
            return null
        }
        return await enrollmentRepository.findOne({
            where: { id: id }
        })
    }

    static async deleteEnrollment(id: number) {
        const enrollment = await enrollmentRepository.findOne({
            where: { id: id }
        })
        if (!enrollment) {
            return null
        }
        await enrollmentRepository.delete(enrollment)
        return true
    }
}
