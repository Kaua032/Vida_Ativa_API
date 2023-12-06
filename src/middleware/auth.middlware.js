import dotenv from "dotenv/config";
import User from "../models/User.js";
import jwt from "jsonwebtoken";

export const checkUserExists = async (req, res, next) => {
  const { cpf } = req.body;
  const userExists = await User.findOne({ cpf });

  if (userExists) {
    return res.status(400).send("Usuário existente");
  }

  next();
};

export const authMiddleware = async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.send(401);
  }

  const parts = authorization.split(" ");

  if (parts.length !== 2) {
    return res.send(401);
  }

  const [schema, token] = parts;

  if (schema !== "Bearer") {
    return res.send(401);
  }

  jwt.verify(token, process.env.SECRET_JWT, async (error, decoded) => {
    if (error) {
      return res.send(401).send({ message: "Token Invalid" });
    }

    const user = await User.findById({ _id: decoded.id });

    if (!user || !user._id) {
      return res.send(401).send({ message: "Token Invalid" });
    }

    req.userId = user._id;

    return next();
  });
};
