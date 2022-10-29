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

handler
  .get(async (req, res) => {
    try {
      const subject = await Subject.findOne({
        subject_id: req.query.id,
      }).exec();
      if (!subject) {
        res.status(404).json({ message: "No record is found!" });
        res.end();
        return;
      }
      res.status(200).json(subject);
    } catch (error) {
      res.status(404).json({ message: "Error while getting record!" });
      res.end();
      console.log("Error: " + error.message);
      return;
    }
  })
  .post(async (req, res) => {
    // put notes in the db
    const body = req.body;
    try {
      const subject = await Subject.findOne({ subject_id: req.query.id });
      subject.notes = subject.notes.concat(body.notes);
      //   subject.notes = [...subject.notes, body.notes.toString()];
      subject.save();
      console.log(req.body);
      console.log(req.query.id);

      if (!subject) {
        res.status(404).json({ message: "No record is found!" });
        res.end();
        return;
      }
      res.status(200).json(subject);
    } catch (error) {
      res.status(404).json({ message: "Error while updating record!" });
      res.end();
      console.log("Error: " + error.message);
      return;
    }
  });

handler.use(connection.db_disconnect);

export default handler;
