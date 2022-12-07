import mongoose from "mongoose";

const classSchema = new mongoose.Schema(
    {
        grade: { type: String, required: true, unique: true },
        division: { type: String, required: true, unique: true },
        information: { type: String, required: true, unique: true },
        teacher: {
            type: mongoose.SchemaTypes.ObjectId,
            ref: "Teacher",
        },
        // Many-one relation
        students: [
            {
                type: mongoose.SchemaTypes.ObjectId,
                ref: "Student",
            },
        ],
        subjects: [
            {
                type: mongoose.SchemaType.ObjectId,
                ref: "Subject",
            },
        ],
    },
    {
        timestamps: true,
    }
);

const Class = mongoose.models.Class || mongoose.model("Class", classSchema);
export default Class;
