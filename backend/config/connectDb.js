import mongoose from "mongoose";

const connectDb = () => {
  mongoose.connect(process.env.MONGODB_URL);

  mongoose.connection.on("connected", () => {
    console.log("DB Connected");
  });
};

export default connectDb;
