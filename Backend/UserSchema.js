import mongoose, { Schema, model } from "mongoose";

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    enum: ["Male", "Female"], 
    required: true,
  },
  phone: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  photoUrl: {
    type: String,
    default: "", 
  },
  address: {
    type: String,
    default: "",
  },
});

export const Users = model("Users", userSchema);