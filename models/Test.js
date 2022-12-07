import mongoose from "mongoose";

const testSchema = new mongoose.Schema(
    {
        my_id: { type: mongoose.SchemaTypes.ObjectId },
        url: { type: String },
    },
    { _id: false }
);

const Test = mongoose.models.Test || mongoose.model("Test", testSchema);

export default Test;
