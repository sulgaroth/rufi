import type { Config } from "drizzle-kit";
import * as dotenv from "dotenv";

dotenv.config({
  path: ".env.local",
});

export default {
  schema: "./src/lib/schema.ts",
  out: "./drizzle",
  driver: "pg", 
  dbCredentials: {
    connectionString: process.env.DATABASE_URL!,
  },
  // Print all statements
  verbose: true,
  // Always ask for confirmation
  strict: true,
} satisfies Config; 