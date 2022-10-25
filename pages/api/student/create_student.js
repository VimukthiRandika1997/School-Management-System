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

      res.status(401).json({ message: "Access is denied!" });
    } catch (error) {
      console.log("Error: " + error.message);
    }
  })
  .get((req, res) => {});

export default handler;
