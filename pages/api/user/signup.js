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
    res.status(404).end("Page is not found!");
  },
};

const handler = nc(error_pages);

handler.use(connection.db_connect);

handler.post(async (req, res) => {
  const body = req.body;
  try {
    if (!(body.email && body.password)) {
      return res.status(400).json({ error: "Data not formatted corrrectly!" });
    }
    const already_in = User.findOne({ email: body.email });
    if (already_in) {
      return res.status(400).json({ message: "User is already in there!" });
    }
    // creating a new mongoose doc from user data
    const user = new User(body);
    // generate salt to hash password
    const salt = await bcrypt.genSalt(10);
    // now we set user password to hashed password
    user.password = await bcrypt.hash(user.password, salt);
    user.save().then((doc) => res.status(201).send(doc));
  } catch (error) {
    res.status(404).json({ message: "Error while signing!" });
    res.end();
    console.log("Error: " + error.message);
    return;
  }
});

handler.use(connection.db_disconnect);

export default handler;
