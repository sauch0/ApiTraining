import { AppDataSource } from "../config/data-source";
import { Students } from "../entity/student.entity";

export const studentRepository = AppDataSource.getRepository(Students);


