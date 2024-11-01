import * as dotenv from "dotenv";

dotenv.config();
if (!process.env.DATABASE_URL) throw new Error('NEON DATABASE_URL not found in environment');

export default {
  schema: './src/db/schema.js',
  out: './src/db/migrations',
 dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL,
 },
  strict: true,
};