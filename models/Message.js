import { ObjectID } from "bson";
import mongoose from "mongoose";
import Student from "./Student";
import Teacher from "./Teacher";

const messageSchema = new mongoose.Schema(
    {
        student_id: { type: String, required: true, unique: true },
        information: { type: String, required: true },
        date: { type: Date, required: true },
        student_id: {
            type: ObjectID,
            ref: Student,
        },
        teacher_id: {
            type: ObjectID,
            ref: Teacher,
        },
    },
    {
        timestamps: true,
    }
);

const Message =
    mongoose.models.Message || mongoose.model("Message", messageSchema);
export default Message;
