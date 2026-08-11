import { StudentController } from "../controller/student.controller";
import { Router } from "express";
import { validateRequest } from "../middleware/validateRequest.middleware";
import { createStudentSchema, updateStudentSchema } from "../validations/student.validation";
const router = Router()

router.post("/student", createStudentSchema, validateRequest, StudentController.createStudent)
router.get("/students", StudentController.getAllUsers)
router.get("/student/:id", StudentController.getUserById)
router.put("/student/:id", updateStudentSchema, validateRequest, StudentController.updateStudent)
router.delete("/student/:id", StudentController.deleteStudent)
export default router