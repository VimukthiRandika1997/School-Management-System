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
      student_id: "001",
      first_name: "Vimukthi",
      last_name: "Randika",
      date_of_birth: "1997-05-22",
      student_address: "Flower road, Kekirawa",
      gender: "male",
    },
  ],

  teachers: [
    {
      teacher_id: "001",
      first_name: "Andrew",
      last_name: "Martella",
      date_of_birth: "1974-06-23",
      teacher_address: "Flower road, Colombo",
      gender: "male",
      phone_number: "0772348962",
    },
  ],
};

export default data;
