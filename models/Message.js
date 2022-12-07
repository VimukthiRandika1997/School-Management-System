import mongoose from "mongoose";

const messageSchema = new mongoose.Schema(
    {
        student_id: { type: String, required: true, unique: true },
        information: { type: String, required: true },
        date: { type: Date, required: true },
        student_id: {
            type: mongoose.SchemaTypes.ObjectId,
            ref: "Student",
        },
        teacher_id: {
            type: mongoose.SchemaTypes.ObjectId,
            ref: "Teacher",
        },
    },
    {
        timestamps: true,
    }
);

const Message =
    mongoose.models.Message || mongoose.model("Message", messageSchema);
export default Message;
