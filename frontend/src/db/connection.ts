// db/connection.ts
import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI!;
const client = new MongoClient(uri);
let connectPromise: Promise<MongoClient> | null = null;

export async function connectMongoClient() {
    if (!connectPromise) {
        connectPromise = client.connect().then((connectedClient) => {
            console.log("MongoDB Client connected");
            return connectedClient;
        });
    }

    return connectPromise;
}

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

export { client };