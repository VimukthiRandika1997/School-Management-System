import mongoose from "mongoose";
import Teacher from "./Teacher";

const subjectSchema = new mongoose.Schema(
  {
    subject_id: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    notes: [
      {
        topic: { type: String },
        data: [{ type: String, unique: true, sparse: true }],
      },
    ],
    teacher_id: {
      type: String,
      ref: Teacher,
    },
  },
  {
    timestamps: true,
  }
);

// Virtuals for creating custom attributes
subjectSchema.virtual("notesCount").get(function () {
  console.log("virtual notesCount from Subject");
  return this.notes.length;
});

const Subject =
  mongoose.models.Subject || mongoose.model("Subject", subjectSchema);
export default Subject;
