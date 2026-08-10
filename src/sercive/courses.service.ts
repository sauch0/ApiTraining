import { courseRepository } from "../repository";
import { Courses } from "../interfaces/courses.interface";

export class CourseService {
    static async createCourse(courseData: Courses) {
        const titleExists = await courseRepository.findOne({
            where: { title: courseData.title }
        })

        if (titleExists) {
            throw new Error("Title already exists")
        }

        const course = courseRepository.create(courseData)
        return await courseRepository.save(course)
    }

    static async getAllCourses() {
        return await courseRepository.find()
    }

    static async getCourseById(id: number) {
        return await courseRepository.findOne({
            where: { id: id }
        })
    }

    static async updateCourse(id: number, courseData: Courses) {
        const course = await courseRepository.findOne({
            where: { id: id }
        })
        if (!course) {
            return null
        }
        const titleExists = await courseRepository.findOne({
            where: { title: courseData.title }
        })
        if (titleExists) {
            throw new Error("Title already exists")
        }
        const updatedCourse = courseRepository.merge(course, courseData)
        return await courseRepository.save(updatedCourse)
    }

    static async deleteCourse(id: number) {
        const course = await courseRepository.findOne({
            where: { id: id }
        })
        if (!course) {
            return null
        }
        await courseRepository.delete(course)
        return true
    }
}