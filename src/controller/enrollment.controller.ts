import { EnrollmentService } from "../sercive/enrollment.service";
import { Request, Response } from "express";

export class EnrollmentController {
    static async createEnrollment(req: Request, res: Response) {
        try {
            const enrollment = await EnrollmentService.createEnrollment(req.body)
            return res.status(201).json({
                success: true,
                message: "Enrollment created successfully",
                data: enrollment
            })
        } catch (e) {
            if (e.message === "Enrollment already exists") {
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

    static async getAllEnrollments(req: Request, res: Response) {
        try {
            const enrollment = await EnrollmentService.getAllEnrollments()
            return res.status(200).json({
                success: true,
                message: "Enrollments fetched successfully",
                data: enrollment
            })
        } catch (e) {
            console.log(e)
            return res.status(500).json({
                success: false,
                message: "Internal Server Error"
            })
        }
    }

    static async getEnrollmentById(req: Request, res: Response) {
        try {
            const id = Number(req.params.id)
            const enrollment = await EnrollmentService.getEnrollmentById(id)
            return res.status(200).json({
                success: true,
                message: `Successfully fetched enrollment having id: ${id}`,
                data: enrollment
            })
        } catch (e) {
            console.log(e)
            return res.status(500).json({
                success: false,
                message: "Internal Server Error"
            })
        }
    }

    static async deleteEnrollment(req: Request, res: Response) {
        try {
            const id = Number(req.params.id)
            const enrollment = await EnrollmentService.deleteEnrollment(id)
            if (enrollment === null) {
                return res.status(404).json({
                    success: false,
                    message: "Enrollment not found"
                })
            }
            return res.status(200).json({
                success: true,
                message: `Successfully deleted enrollment having id: ${id}`,
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