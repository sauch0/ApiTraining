import { Router } from "express";
import { EnrollmentController } from "../controller/enrollment.controller";
import { validateRequest } from "../middleware/validateRequest.middleware";
import { createEnrollmentSchema } from "../validations/enrollment.validation";
const router = Router();

router.post("/enrollment", createEnrollmentSchema, validateRequest, EnrollmentController.createEnrollment)
router.get("/enrollments", EnrollmentController.getAllEnrollments)
router.get("/enrollment/:id", EnrollmentController.getEnrollmentById)
router.delete("/enrollment/:id", EnrollmentController.deleteEnrollment)

export default router
