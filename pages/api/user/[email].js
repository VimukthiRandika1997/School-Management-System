import nc from "next-connect";
import connection from "../../../middleware/db";
import User from "../../../models/User";
import bcrypt from "bcryptjs";

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
    const body = req.body;
    try {
      const user = await User.findOne({
        email: req.query.email,
      }).exec();
      if (!user) {
        res.status(404).json({ message: "No record is found!" });
        res.end();
        return;
      }
      res.status(200).json(user);
    } catch (error) {
      res.status(404).json({ message: "Error while getting record!" });
      res.end();
      console.log("Error: " + error.message);
      return;
    }
  })
  .patch(async (req, res) => {
    const body = req.body;
    try {
      const user = await User.findOneAndUpdate(
        { email: req.query.email },
        body,
        {
          new: true,
        }
      ).exec();
      console.log(req.body);

      if (!user) {
        res.status(404).json({ message: "No record is found!" });
        res.end();
        return;
      }
      res.status(200).json(user);
    } catch (error) {
      res.status(404).json({ message: "Error while updating record!" });
      res.end();
      console.log("Error: " + error.message);
      return;
    }
  });

handler.use(connection.db_disconnect);

export default handler;
