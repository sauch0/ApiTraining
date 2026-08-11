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
        const enrollment = enrollmentRepository.create(enrollmentData)
        return await enrollmentRepository.save(enrollment)
    }

    static async getAllEnrollments() {
        return await enrollmentRepository.find()
    }

    static async getEnrollmentById(id: number) {
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
