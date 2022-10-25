import mongoose from "mongoose";

const teacherSchema = new mongoose.Schema(
  {
    teacher_id: { type: String, required: true, unique: true },
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    date_of_birth: { type: Date, required: true },
    teacher_address: { type: String, required: true },
    gender: { type: String, required: true },
    profile_image: { type: String, required: false },
    phone_number: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Teacher =
  mongoose.models.Teacher || mongoose.model("Teacher", teacherSchema);
export default Teacher;
