import db from "../utils/db";

const db_connect = async (req, res, next) => {
  try {
    await db.connect();
  } catch (error) {
    console.log(error.message);
  }
  next();
};

const db_disconnect = async (req, res, next) => {
  try {
    await db.disconnect();
  } catch (error) {
    console.log("Error: " + error.message);
  }
  next();
};

const connection = { db_connect, db_disconnect };

export default connection;
