const uploadImage = async (req, res) => {
  try {
    await uploadImage(req, res);
    console.log(req.file);
    if (req.file == undefined) {
      return res.send({
        message: "You must select a file!",
      });
    }
  } catch (error) {
    console.log(error);
    return res.send({
      message: "Error when trying upload image",
    });
  }
};

export default uploadImage;
