import mongoose from "mongoose";

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
        teacher: {
            type: mongoose.SchemaTypes.ObjectId,
            ref: "Teacher",
        },
        // --------MN-relations---------
        // Student-Subject
        students: [
            {
                student: {
                    type: mongoose.SchemaTypes.ObjectId,
                    ref: "Student",
                },
                term: [
                    {
                        term_name: { type: String },
                        mark: { type: Number },
                    },
                ],
            },
        ],
        // Class-Subject
        classes: [
            {
                type: mongoose.SchemaTypes.ObjectId,
                ref: "Class",
            },
        ],
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

subjectSchema.virtual("studentCount").get(function () {
    console.log("virtual studentCount from Subject");
    return this.studentsIDs.length;
});

subjectSchema.virtual("classesCount").get(function () {
    console.log("virtula total classes from subject");
    return this.classes.length;
});

const Subject =
    mongoose.models.Subject || mongoose.model("Subject", subjectSchema);
export default Subject;
