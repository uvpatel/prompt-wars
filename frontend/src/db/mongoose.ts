// db/mongoose.ts
import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI!);
        console.log("Mongoose connected");
    } catch (error) {
        console.error("Mongoose error:", error);
        process.exit(1);
    }
};

export default connectDB;