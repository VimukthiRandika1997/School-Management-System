const mongoose = require("mongoose");

const AssignmentSchema = new mongoose.Schema({
    assignment_id: { type: String, required: true, unique: true },
    due_data: { type: Date },
    assignment_result: { type: Number },
    submit_date: { type: Date },
    student_id: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Student",
    },
    subject_id: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Subject",
    },
});

module.exports =
    mongoose.models.Assignment ||
    mongoose.model("Assignment", AssignmentSchema);
