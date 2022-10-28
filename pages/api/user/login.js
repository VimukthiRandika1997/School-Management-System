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

handler.post(async (req, res) => {
  const body = req.body;
  try {
    const user = await User.findOne({ email: body.email });
    if (user) {
      // check user password with hashed password stored in the database
      const validPassword = await bcrypt.compare(body.password, user.password);
      if (validPassword) {
        res.status(200).json({ message: "Valid password" });
      } else {
        res.status(400).json({ error: "Invalid Password" });
      }
    } else {
      res.status(401).json({ error: "User does not exist" });
      res.end();
      return;
    }
  } catch (error) {
    res.status(404).json({ message: "Error while logging!" });
    res.end();
    console.log("Error: " + error.message);
    return;
  }
});

handler.use(connection.db_disconnect);

export default handler;
