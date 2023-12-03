import mongoose from "mongoose";
import bcrypt from "bcrypt";

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  cpf: {
    type: String,
    require: true,
  },
  add_student: {
    type: Boolean,
    default: false,
  },
  add_teacher: {
    type: Boolean,
    default: false,
  },
  src: {
    type: String,
    required: true,
  },
  file_name_image_perfil: {
    type: String,
    require: true,
  },
});

UserSchema.pre("save", async function (next) {
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

const User = mongoose.model("User", UserSchema);

export default User;