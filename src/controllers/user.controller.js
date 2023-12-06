import "dotenv/config";
import User from "../models/User.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

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

    const user = new User({
      name,
      cpf,
      password,
      file_perfil_name,
      src,
    });

    await user.save();

    const token = jwt.sign({ _id: user._id }, process.env.SECRET_JWT, {
      expiresIn: 86400,
    });

    res.send({ token });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

export const ChangeUserPasswordController = async (req, res) => {
  const { current_password, new_password } = req.body;
  const userId = req.userId;

  try {
    const user = await User.findById(userId);

    if (!bcrypt.compare(current_password, user.password)) {
      res.status(403).send({ message: "Senha atual incorreta." });
    }

    user.password = await bcrypt.hash(new_password, 10);
    await user.save();
    return res.status(200).send("Senha atualizada com sucesso.");
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

export const findAllUsersController = async (req, res) => {
  let users = [];
  try {
    const usersFindAll = await User.find();

    users.push(
      usersFindAll.map((user) => {
        const userActual = {
          name: user.name,
          cpf: user.cpf,
          add_student: user.add_student,
          add_teacher: user.add_teacher,
        };
        return userActual;
      })
    );

    return res.status(200).json({ users });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};
