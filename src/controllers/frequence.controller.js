import Frequence from "../models/Frequence.js";

export const findAllFrequencesByDateController = async (req, res) => {
  const { class_date } = req.body;

  try {
    const frequences = await Frequence.find({ class_date });

    if (frequences.length === 0) {
      return res
        .status(400)
        .send({ message: "Não existe nenhuma frequência nessa data." });
    }

    return res.status(200).json({ frequences });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};
