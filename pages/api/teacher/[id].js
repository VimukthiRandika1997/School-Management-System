import nc from "next-connect";
import db from "../../../utils/db";
import Teacher from "../../../models/Teacher";

const handler = nc()
  .get(async (req, res) => {
    try {
      await db.connect();
      const user = await Teacher.findOne({ teacher_id: req.query.id });
      if (!user) {
        res.status(404).json({ message: "No record is found!" });
        res.end();
        return;
      }
      res.status(200).json(user);
      await db.disconnect();
    } catch (error) {
      res.status(400).json({ message: "Error while getting record!" });
      res.end();
      console.log("Error: " + error.message);
      return;
    }
  })
  .patch(async (req, res) => {});

export default handler;
