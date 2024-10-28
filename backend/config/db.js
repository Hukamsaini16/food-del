
import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(
      'mongodb+srv://hukamsaini43644:peHlAbemK9uqse06@cluster0.ziwui.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
    );
    console.log("DB Connected");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
  }
};










