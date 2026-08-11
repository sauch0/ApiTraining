import { Router } from "express";
import { CourseController } from "../controller/course.controller";
import { validateRequest } from "../middleware/validateRequest.middleware";
import { createCourseSchema, updateCourseSchema } from "../validations/course.validation";

const router = Router()

router.post("/course", createCourseSchema, validateRequest, CourseController.createCourse)
router.get("/courses", CourseController.getAllCourses)
router.get("/course/:id", CourseController.getCourseById)
router.put("/course/:id", updateCourseSchema, validateRequest, CourseController.updateCourse)
router.delete("/course/:id", CourseController.deleteCourse)

export default router