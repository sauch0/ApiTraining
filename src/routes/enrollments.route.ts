import { Router } from "express";
import { EnrollmentController } from "../controller/enrollment.controller";

const router = Router();

router.post("/enrollment", EnrollmentController.createEnrollment)
router.get("/enrollments", EnrollmentController.getAllEnrollments)
router.get("/enrollment/:id", EnrollmentController.getEnrollmentById)
router.delete("/enrollment/:id", EnrollmentController.deleteEnrollment)

export default router
