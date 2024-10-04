import mongoose from "mongoose";
import { MONGODB_URI } from "./config.js";


export const connectDB = async () => {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log(">>> DB is Connected");
  } catch (error) {
    console.log(error);
  }
};
