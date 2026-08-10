import { AppDataSource } from "../config/data-source";
import { Students } from "../entity/student.entity";
import { Courses } from "../entity/courses.entity";

export const studentRepository = AppDataSource.getRepository(Students);
export const courseRepository = AppDataSource.getRepository(Courses);


