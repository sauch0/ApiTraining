import { Request, Response } from "express";
import { StudentService } from "../sercive/student.service";
import { ApiResponse } from "../utils/apiResponse";


export class StudentController {
    static async createStudent(req: Request, res: Response) {
        try {
            const student = await StudentService.createStudent(req.body)

            return ApiResponse.success(res, student, "Student created Successfully", 201)
        } catch (e) {
            if (e.message === "Email already exists") {
                return ApiResponse.error(res, e.message, 409)
            }
            if (e.message === "This phone number already exists") {
                return ApiResponse.error(res, e.message, 409)
            }

            if (e.message === "Student age must be greater than 15") {
                return ApiResponse.error(res, e.message, 401)
            }
            return ApiResponse.error(res, "Internal Server Error", 500)
        }
    }

    static async getAllUsers(req: Request, res: Response) {
        try {
            const student = await StudentService.getAllStudents(req.query)
            return ApiResponse.success(res, student.data, "Students fetched successfully", 200)
        } catch (e) {
            console.log(e)
            return ApiResponse.error(res, "Internal Server Error", 500)
        }
    }

    static async getUserById(req: Request, res: Response) {
        try {
            const id = Number(req.params.id)
            const student = await StudentService.getStudentsById(id)
            return ApiResponse.success(res, student, `Successfully fetched student having id: ${id}`, 200)
        } catch (e) {
            console.log(e)
            return ApiResponse.error(res, "Internal Server Error", 500)
        }
    }

    static async updateStudent(req: Request, res: Response) {
        try {
            const id = Number(req.params.id)
            const student = await StudentService.updateStudent(id, req.body)
            if (student === null) {
                return ApiResponse.error(res, "Student Not Found", 404)
            }
            return ApiResponse.success(res, student, "Student data updated successfully", 200)
        } catch (e) {
            if (e.message === "Email already exists") {
                return ApiResponse.error(res, e.message, 409)
            }
            if (e.message === "This phone number already exists") {
                return ApiResponse.error(res, e.message, 409)
            }

            if (e.message === "Student age must be greater than 15") {
                return ApiResponse.error(res, e.message, 401)
            }
            console.log(e)
            return ApiResponse.error(res, "Internal Server Error", 500)
        }
    }

    static async deleteStudent(req: Request, res: Response) {
        try {
            const id = Number(req.params.id)
            const student = await StudentService.deleteStudent(id)
            if (student === null) {
                return ApiResponse.error(res, "Student Not Found", 404)
            }
            return ApiResponse.success(res, student, `Successfully deleted student having id: ${id}`, 200)
        } catch (e) {
            console.log(e)
            return ApiResponse.error(res, "Internal Server Error", 500)
        }
    }
}