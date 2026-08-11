import { body } from "express-validator";

export const createCourseSchema = [
    body("title")
        .notEmpty()
        .withMessage("Title is required.")
        .isLength({ min: 4 })
        .withMessage("Title must be atleast 4 characters long.")
        .isLength({ max: 50 })
        .withMessage("Title cannot be more than 50 characters long.")
    ,
    body("description")
        .notEmpty()
        .withMessage("Description is required.")
        .isLength({ min: 10 })
        .withMessage("Description must be atleast 10 characters long.")
        .isLength({ max: 2000 })
        .withMessage("Description cannot be more than 200 characters long.")
    ,
    body("duration")
        .notEmpty()
        .withMessage("Duration is required.")
    ,
]

export const updateCourseSchema = [
    body("title")
        .notEmpty()
        .withMessage("Title is required.")
        .isLength({ min: 4 })
        .withMessage("Title must be atleast 4 characters long.")
        .isLength({ max: 50 })
        .withMessage("Title cannot be more than 50 characters long.")
    ,
    body("description")
        .notEmpty()
        .withMessage("Description is required.")
        .isLength({ min: 10 })
        .withMessage("Description must be atleast 10 characters long.")
        .isLength({ max: 2000 })
        .withMessage("Description cannot be more than 200 characters long.")
    ,
    body("duration")
        .notEmpty()
        .withMessage("Duration is required.")
]
