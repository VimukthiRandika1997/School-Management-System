import db from "../../../utils/db";
import Teacher from "../../../models/Teacher";

export default async function create_teacher(req, res) {
  try {
    await db.connect();

    // Validate the message

    // create the record
    await Teacher.create(req.body);
    await db.disconnect();
    res.json({ message: "Teacher record is created successfully!" });
  } catch (error) {
    console.log("Error" + error);
    res.json({ message: "Record isn't created!" });
  }
}
