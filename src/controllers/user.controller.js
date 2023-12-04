import User from "../models/User.js";

const CreateUserController = async (req, res) => {
  const body = req.body;

  try {
    const token = []
  } catch (error) {
    return res.status(500).send({ message: error.message, part: "CreateUserController"})
  }
};
