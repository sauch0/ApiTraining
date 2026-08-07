import { StudentController } from "../controller/student.controller";
import { Router } from "express";

const router = Router()

router.post("/student", StudentController.createStudent)
router.get("/students", StudentController.getAllUsers)
export default router;