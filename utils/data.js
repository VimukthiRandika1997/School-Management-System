import bcrypt from "bcryptjs";

const data = {
  users: [
    {
      name: "vithushan",
      email: "vithu@gmail.com",
      password: bcrypt.hashSync("12345"),
      isAdmin: true,
    },
    {
      name: "vithusha",
      email: "vithusa@gmail.com",
      password: bcrypt.hashSync("12345"),
      isAdmin: false,
    },
  ],
  students: [
    {
      first_name: "Vimukthi",
      last_name: "Randika",
      date_of_birth: "1997-05-22",
      student_address: "Flower road, Kekirawa",
      gender: "male",
    },
  ],
};

export default data;
