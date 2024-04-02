import mongoose from "mongoose";
import dotenv from "dotenv"; 
dotenv.config();

const connectToDatabase = async () => {
    try {
        await mongoose.connect(process.env.DB_URL); // Access DB_URL correctly using process.env
        console.log("MongoDB Database successfully connected");
    } catch (error) {
        console.log("Failed to connect to MongoDB", error);
    }
}

connectToDatabase();
