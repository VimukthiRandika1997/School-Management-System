import nc from "next-connect";
import connection from "../../../middleware/db";
import Subject from "../../../models/Subject";

const error_pages = {
  onError: (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).end("Something broke!");
  },
  onNoMatch: (req, res) => {
    res.status(404).end("Page is not found");
  },
};

const handler = nc(error_pages);

handler.use(connection.db_connect);

handler.get(async (req, res) => {
  try {
    const subjects = await Subject.find({}).exec();
    const data = await Subject.find({}).where({ teacher_id: "001" }).populate();
    console.log(subjects);
    if (!subjects) {
      res.status(404).json({ message: "No record is found!" });
      res.end();
      return;
    }
    res.status(200).json(subjects);
  } catch (error) {
    res.status(404).json({ message: "Error while getting record!" });
    res.end();
    console.log("Error: " + error.message);
    return;
  }
});

handler.use(connection.db_disconnect);

export default handler;
