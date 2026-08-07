import { Request, Response } from "express";
import { StudentService } from "../sercive/student.service";

export class StudentController{
    static async createStudent(req: Request, res:Response){
        try{
            const student = await StudentService.createStudent(req.body)

            return res.status(201).json({
                success: true,
                message: "Student created Successfully",
                data: student
            })
        }catch(e){
            if (e.message === "Email already exists"){
                return res.status(409).json({
                    success: false,
                    message: e.message
                })
            }
            if (e.message === "This phone number already exists"){
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

    static async getAllUsers(req: Request, res: Response){
        try{
            const student = await StudentService.getAllStudents()
            return res.status(200).json({
                success: true,
                message: "Students fetched successfully",
                data: {student}
            })
        } catch(e){
            console.log(e)
            return res.status(500).json({
                success: false,
                message: "Internal Server Error"
            })
        }
    }
}