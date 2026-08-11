import { body } from "express-validator";

export const createUserSchema = [
    body("name")
        .notEmpty()
        .withMessage("Name is required.")
        .isLength({ min: 4 })
        .withMessage("Name must be atleast 4 characters long.")
        .isLength({ max: 25 })
        .withMessage("Name cannot be more than 25 characters long.")
    ,
    body("email")
        .notEmpty()
        .withMessage("Email is required.")
        .isEmail()
        .withMessage("Invalid email address.")
    ,
    body("phone")
        .notEmpty()
        .withMessage("Phone number is required.")
        .isLength({ min: 10, max: 10 })
        .withMessage("Phone number must be 10 digits long.")
        .isNumeric()
        .withMessage("Phone number must be numeric.")
    ,
    body("age")
        .notEmpty()
        .withMessage("Age is required.")
        .isNumeric()
        .withMessage("Age must be numeric.")
        .isInt({ min: 16 })
        .withMessage("Age must be greater than 15")
]

