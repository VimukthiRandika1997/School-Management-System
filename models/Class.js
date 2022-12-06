import { ObjectID } from "bson";
import mongoose from "mongoose";
import Teacher from "./Teacher";

const classSchema = new mongoose.Schema(
    {
        grade: { type: String, required: true, unique: true },
        division: { type: String, required: true, unique: true },
        information: { type: String, required: true, unique: true },
        teacher_id: {
            type: ObjectID,
            ref: Teacher,
        },
    },
    {
        timestamps: true,
    }
);

const Class = mongoose.models.Class || mongoose.model("Class", classSchema);
export default Class;
