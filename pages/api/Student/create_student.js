import db from "../../../utils/db";
import Student from "../../../models/Student";

export default async function create_student(req, res) {
  try {
    await db.connect();

    // Validate the data

    // Create the record
    await Student.create(req.body);
    await db.disconnect();
    res.json({ message: "Student record is created successfully!" });
  } catch (error) {
    console.log("Error: " + error);
    res.json({ message: "Record isn't created!" });
  }
}
