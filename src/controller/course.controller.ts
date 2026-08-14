import { CourseService } from "../sercive/courses.service";
import { Request, Response } from "express";

export class CourseController {
    static async createCourse(req: Request, res: Response) {
        try {
            const course = await CourseService.createCourse(req.body)
            return res.status(201).json({
                success: true,
                message: "Course created successfully",
                data: course
            })
        } catch (e) {
            if (e.message === "Title already exists") {
                return res.status(409).json({
                    success: false,
                    message: e.message
                })
            }
            return res.status(500).json({
                success: false,
                message: "Internal server error"
            })
        }
    }

    static async getAllCourses(req: Request, res: Response) {
        try {
            const courses = await CourseService.getAllCourses(req.query)
            return res.status(200).json({
                success: true,
                message: "Courses fetched successfully",
                data: courses.data
            })
        } catch (e) {
            console.log(e)
            return res.status(500).json({
                success: false,
                message: "Internal Server Error"
            })
        }
    }

    static async getCourseById(req: Request, res: Response) {
        try {
            const id = Number(req.params.id)
            const course = await CourseService.getCourseById(id)
            return res.status(200).json({
                success: true,
                messege: `Successfully fetched course having id: ${id}`,
                data: course
            })
        } catch (e) {
            console.log(e)
            return res.status(500).json({
                success: false,
                message: "Internal Server Error"
            })
        }
    }

    static async updateCourse(req: Request, res: Response) {
        try {
            const id = Number(req.params.id)
            const course = await CourseService.updateCourse(id, req.body)
            if (course === null) {
                return res.status(404).json({
                    success: false,
                    message: "Course not found"
                })
            }
            return res.status(200).json({
                success: true,
                message: `Successfully updated course having id: ${id}`,
                data: course
            })
        } catch (e) {
            if (e.message === "Title already exists") {
                return res.status(409).json({
                    success: false,
                    message: e.message
                })
            }
            console.log(e)
            return res.status(500).json({
                success: false,
                message: "Internal Server Error"
            })
        }
    }

    static async deleteCourse(req: Request, res: Response) {
        try {
            const id = Number(req.params.id)
            const course = await CourseService.deleteCourse(id)
            if (course === null) {
                return res.status(404).json({
                    success: false,
                    message: "Course not found"
                })
            }
            return res.status(200).json({
                success: true,
                message: `Successfully deleted course having id: ${id}`,
            })
        } catch (e) {
            console.log(e)
            return res.status(500).json({
                success: false,
                message: "Internal Server Error"
            })
        }
    }
}