import { Router } from "express";
import { CourseController } from "../controller/course.controller";

const router = Router()

router.post("/course", CourseController.createCourse)
router.get("/courses", CourseController.getAllCourses)
router.get("/course/:id", CourseController.getCourseById)
router.put("/course/:id", CourseController.updateCourse)
router.delete("/course/:id", CourseController.deleteCourse)

export default router