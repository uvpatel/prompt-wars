import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI!;

// Cache the client on globalThis to prevent multiple connections
// during Next.js hot-reload in development mode.
const globalForMongo = globalThis as typeof globalThis & {
  _mongoClient?: MongoClient;
  _mongoConnectPromise?: Promise<MongoClient>;
};

const client = globalForMongo._mongoClient ?? new MongoClient(uri);

if (process.env.NODE_ENV !== "production") {
  globalForMongo._mongoClient = client;
}

export async function connectMongoClient(): Promise<MongoClient> {
  if (!globalForMongo._mongoConnectPromise) {
    globalForMongo._mongoConnectPromise = client.connect();
  }
  return globalForMongo._mongoConnectPromise;
}

export { client };