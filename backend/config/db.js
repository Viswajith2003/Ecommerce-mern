import mongoose from "mongoose";

const ConnectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Mongodb connected successfully");
  } catch (error) {
    console.log("Mongodb failed");
  }
};

export default ConnectDB;
