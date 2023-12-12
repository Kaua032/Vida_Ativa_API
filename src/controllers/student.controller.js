import Student from "../models/Student.js";

export const registerStudentController = async (req, res) => {
  const { name, cpf, registration } = req.body;

  try {
    if (!name || !cpf || !registration) {
      return res.status(400).send({ message: "Preencha todos os campos." });
    }

    const student = await Student.create({ name, cpf, registration });

    return res.status(200).json({ student });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};