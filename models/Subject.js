import mongoose from "mongoose";

const subjectSchema = new mongoose.Schema(
  {
    subject_id: { type: String, required: true },
    title: { type: String, required: true },
    notes: [{ type: String }],
  },
  {
    timestamps: true,
  }
);

const User =
  mongoose.models.Subject || mongoose.model("Subject", subjectSchema);
export default Subject;
