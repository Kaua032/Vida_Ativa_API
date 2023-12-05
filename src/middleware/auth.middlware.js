import User from "../models/User.js";

export const checkUserExists = async (req, res, next) => {
  const { cpf } = req.body;
  const userExists = await User.findOne({ cpf });

  if (userExists) {
    return res.status(400).send("Usuário existente");
  }

  next();
};
