import { ObjectId } from "mongodb";
import mongoose from "mongoose";
import Teacher from "./Teacher";

const noticeSchema = new mongoose.Schema(
    {
        notice_id: { type: String, required: true, unique: true },
        category: { type: String },
        release_date: { type: Date, required: true },
        information: { type: String, required: true },
        teacher_id: {
            type: ObjectId,
            ref: Teacher,
        },
    },
    {
        timestamps: true,
    }
);

const Notice = mongoose.models.Notice || mongoose.model("Notice", noticeSchema);
export default Notice;
