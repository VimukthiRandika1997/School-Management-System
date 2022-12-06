const { ObjectID } = require("bson");
const mongoose = require("mongoose");
import Student from "./Student";
import Subject from "./Subject";

const AssignmentSchema = new mongoose.Schema({
    assignment_id: { type: String, required: true, unique: true },
    due_data: { type: Date },
    assignment_result: { type: Number },
    submit_date: { type: Date },
    student_id: {
        type: ObjectID,
        ref: Student,
    },
    subject_id: {
        type: ObjectID,
        ref: Subject,
    },
    title: {
        type: String,
        required: [true, "Please add Your Title"],
        unique: true,
        trim: true,
        maxlength: [40, "Title cannot be more than 40"],
    },

    desription: {
        type: String,
        required: [true, "Please add Your Description"],
        unique: true,
        trim: true,
        maxlength: [60, "Description cannot more than 60"],
    },
});

module.exports =
    mongoose.models.Assignment ||
    mongoose.model("Assignment", AssignmentSchema);
