import nc from "next-connect";
import db from "../../../utils/db";
import Teacher from "../../../models/Teacher";

const handler = nc()
  .post(async (req, res) => {
    try {
      await db.connect();
      // Create the record
      await Teacher.create(req.body);
      await db.disconnect();
      res
        .status(201)
        .json({ message: "Teacher record is created successfully!" });
    } catch (error) {
      res.status(400).json({ message: "Error while creating record!" });
      res.end();
      console.log("Error: " + error.message);
      return;
    }
  })
  .get((req, res) => {});

export default handler;
