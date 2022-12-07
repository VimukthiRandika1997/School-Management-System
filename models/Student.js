import mongoose from "mongoose";

const studentSchema = new mongoose.Schema(
    {
        student_id: { type: String, required: true, unique: true },
        first_name: { type: String, required: true },
        last_name: { type: String, required: true },
        date_of_birth: { type: Date, required: true },
        student_address: { type: String, required: true },
        profile_image: { type: String, required: false },
        gender: { type: String, required: true },
        phone_numbers: [{ type: String }],
        // MN-relations
        subjects: [
            {
                type: mongoose.SchemaTypes.ObjectId,
                ref: "Subject",
            },
        ],
        class: {
            year_of_study: { type: String },
            _class: { type: mongoose.SchemaTypes.ObjectId, ref: "Class" },
        },
    },
    {
        timestamps: true,
    }
);

const Student =
    mongoose.models.Student || mongoose.model("Student", studentSchema);
export default Student;
