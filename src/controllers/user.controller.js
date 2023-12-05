import "dotenv/config";
import User from "../models/User.js";
import jwt from "jsonwebtoken";

export const CreateUserController = async (req, res) => {
  const { name, cpf, password, file_perfil_name } = req.body;
  const file = req.file;

  try {
    let src;
    if (!file) {
      src = "src\\uploads\\nophoto.png";
    } else {
      src = file.path;
    }
    const ifUserExixts = User.findOne({ cpf });

    if (ifUserExixts) {
      res.send("Usuário existente");
    } else {
      const user = new User({
        name,
        cpf,
        password,
        file_perfil_name,
        src,
      });

      await user.save();

      const token = jwt.sign({ id: user._id }, process.env.SECRET_JWT, {
        expiresIn: 86400,
      });

      res.send({ user, token });
    }
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};
