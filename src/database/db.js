import mongoose from "mongoose";

const connectDatabase = async () => {
  console.log("Wait connecting to the database");

  await mongoose
    .connect(
      `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@dbvidaativa.bvargny.mongodb.net/`,
      { useNewUrlParser: true, useUnifiedTopology: true }
    )
    .then(() => console.log("MongoDB Atlas Connected"))
    .catch((error) => console.log(error));
};

export default connectDatabase;
