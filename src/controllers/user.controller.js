import User from "../models/User.js";

const CreateUserController = async (req, res) => {
  const { name, cpf, password, file_perfil_name } = req.body;
  const file = req.file;

  try {
    let src;
    if (!file) {
      src = "uploads\\nophoto.png";
    } else {
      src = file.path;
    }

    const user = new User({
      name,
      cpf,
      password,
      file_perfil_name,
      src,
    });

    await user.save();

    return user;
  } catch (error) {
    return res
      .status(500)
      .send({ message: error.message, part: "CreateUserController" });
  }
};
