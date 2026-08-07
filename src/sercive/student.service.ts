import { error } from "node:console";
import { studentRepository } from "../repository";
import bcrypt from "bcrypt"

interface Student{
  id: number,
  name: string,
  email: string,
  phone: string,
  age: number
}

const SALT = 10;

export class StudentService{

    static async createStudent(studentData: Student){
        const emailExists = await studentRepository.findOne({
            where: {email: studentData.email}
        })

        if(emailExists){
            throw new Error("Email already exists")
        }

        const numberExists = await studentRepository.findOne({
            where: {phone: studentData.phone}
        })
        if(numberExists){
            throw new Error("This phone number already exists")
        }
        if(studentData.age<=15){
            throw new Error("Student age must be greater than 15")
        }

        const student = studentRepository.create(studentData)
        return await studentRepository.save(student)
    }

    static async getAllStudents(){
        return await studentRepository.find()
    }

    static async getStudentsById(id: number){
        return await studentRepository.findOne({
            where: {id:id}
        })
    }
}