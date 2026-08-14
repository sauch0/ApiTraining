import { Request, Response } from "express";
import { StudentService } from "../sercive/student.service";


export class StudentController {
    static async createStudent(req: Request, res: Response) {
        try {
            const student = await StudentService.createStudent(req.body)

            return res.status(201).json({
                success: true,
                message: "Student created Successfully",
                data: student
            })
        } catch (e) {
            if (e.message === "Email already exists") {
                return res.status(409).json({
                    success: false,
                    message: e.message
                })
            }
            if (e.message === "This phone number already exists") {
                return res.status(409).json({
                    success: false,
                    message: e.message
                })
            }

            if (e.message === "Student age must be greater than 15") {
                return res.status(401).json({
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

    static async getAllUsers(req: Request, res: Response) {
        try {
            const student = await StudentService.getAllStudents(req.query)
            return res.status(200).json({
                success: true,
                message: "Students fetched successfully",
                data: student.data
            })
        } catch (e) {
            console.log(e)
            return res.status(500).json({
                success: false,
                message: "Internal Server Error"
            })
        }
    }

    static async getUserById(req: Request, res: Response) {
        try {
            const id = Number(req.params.id)
            const student = await StudentService.getStudentsById(id)
            return res.status(200).json({
                success: true,
                messege: `Successfully fetched student having id: ${id}`,
                data: student
            })
        } catch (e) {
            console.log(e)
            return res.status(500).json({
                success: false,
                message: "Internal Server Error"
            })
        }
    }

    static async updateStudent(req: Request, res: Response) {
        try {
            const id = Number(req.params.id)
            const student = await StudentService.updateStudent(id, req.body)
            if (student === null) {
                return res.status(404).json({
                    success: false,
                    message: "Student not found"
                })
            }
            return res.status(200).json({
                success: true,
                message: `Successfully updated student having id: ${id}`,
                data: student
            })
        } catch (e) {
            if (e.message === "Email already exists") {
                return res.status(409).json({
                    success: false,
                    message: e.message
                })
            }
            if (e.message === "This phone number already exists") {
                return res.status(409).json({
                    success: false,
                    message: e.message
                })
            }

            if (e.message === "Student age must be greater than 15") {
                return res.status(401).json({
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

    static async deleteStudent(req: Request, res: Response) {
        try {
            const id = Number(req.params.id)
            const student = await StudentService.deleteStudent(id)
            if (student === null) {
                return res.status(404).json({
                    success: false,
                    message: "Student not found"
                })
            }
            return res.status(200).json({
                success: true,
                message: `Successfully deleted student having id: ${id}`,
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