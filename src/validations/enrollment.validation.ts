import { body } from "express-validator";

export const createEnrollmentSchema = [
    body("student_id")
        .notEmpty()
        .withMessage("Student ID is required.")
        .isInt()
        .withMessage("Student ID must be an integer.")
    ,
    body("course_id")
        .notEmpty()
        .withMessage("Course ID is required.")
        .isInt()
        .withMessage("Course ID must be an integer.")
    ,
]

export const updateEnrollmentSchema = [
    body("student_id")
        .notEmpty()
        .withMessage("Student ID is required.")
        .isInt()
        .withMessage("Student ID must be an integer.")
    ,
    body("course_id")
        .notEmpty()
        .withMessage("Course ID is required.")
        .isInt()
        .withMessage("Course ID must be an integer.")
]
