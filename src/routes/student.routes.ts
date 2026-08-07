import { StudentController } from "../controller/student.controller";
import { Router } from "express";

const router = Router()

router.post("/student", StudentController.createStudent)
export default router;