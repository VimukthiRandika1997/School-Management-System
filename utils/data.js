import bcrypt from "bcryptjs";
import mongoose from "mongoose";

const data = {
    users: [
        {
            name: "vithushan",
            email: "vithu@gmail.com",
            password: bcrypt.hashSync("12345"),
            isAdmin: true,
        },
        {
            name: "vithusha",
            email: "vithusa@gmail.com",
            password: bcrypt.hashSync("12345"),
            isAdmin: false,
        },
        {
            name: "Nimal",
            email: "vithu1@gmail.com",
            password: bcrypt.hashSync("12345"),
            isAdmin: true,
        },
    ],
    students: [
        {
            student_id: "001",
            first_name: "Vimukthi",
            last_name: "Randika",
            date_of_birth: "1997-05-22",
            student_address: "Flower road, Kekirawa",
            gender: "male",
        },
    ],

    teachers: [
        {
            teacher_id: "001",
            first_name: "Andrew",
            last_name: "Martella",
            date_of_birth: "1974-06-23",
            teacher_address: "Flower road, Colombo",
            gender: "male",
            phone_number: "0772348962",
        },
    ],
    subjects: [
        {
            subject_id: "ENG11",
            title: "English",
            teacher_id: mongoose.Types.ObjectId(125),
        },
        {
            subject_id: "SIN11",
            title: "Sinhala",
            notes: [{ topic: "Literature" }],
            teacher_id: mongoose.Types.ObjectId(123),
            url: "fafafadf",
        },
        {
            subject_id: "TAM11",
            title: "Sinhala",
            notes: [{ topic: "Literature", data: ["fafa"] }],
        },
    ],
    tests: [
        {
            my_id: mongoose.Types.ObjectId(123),
            url: "fafafadf",
        },
    ],
};

export default data;
