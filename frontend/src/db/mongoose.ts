import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI!;

// Cache the connection promise on globalThis to prevent multiple
// connections during Next.js hot-reload in development mode.
const globalForMongoose = globalThis as typeof globalThis & {
  _mongoosePromise?: Promise<typeof mongoose>;
};

async function connectDB(): Promise<typeof mongoose> {
  if (!globalForMongoose._mongoosePromise) {
    globalForMongoose._mongoosePromise = mongoose
      .connect(MONGODB_URI)
      .then((m) => {
        console.log("Mongoose connected");
        return m;
      });
  }
  return globalForMongoose._mongoosePromise;
}

export default connectDB;