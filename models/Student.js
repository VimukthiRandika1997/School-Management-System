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
  },
  {
    timestamps: true,
  }
);

const Student =
  mongoose.models.Student || mongoose.model("Student", studentSchema);
export default Student;
