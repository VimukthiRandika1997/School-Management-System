import nc from "next-connect";
import db from "../../../utils/db";
import Student from "../../../models/Student";

const handler = nc()
  .post(async (req, res) => {
    try {
      await db.connect();
      // Create the record
      await Student.create(req.body);
      await db.disconnect();
      res
        .status(201)
        .json({ message: "Student record is created successfully!" });
    } catch (error) {
      res.status(400).json({ message: "Error while creating record!" });
      res.end();
      console.log("Error: " + error.message);
      return;
    }
  })
  .get((req, res) => {});

export default handler;
