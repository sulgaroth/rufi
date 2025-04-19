import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import * as schema from './schema';
import * as dotenv from "dotenv";

dotenv.config({ path: ".env.local" });

if (!process.env.DATABASE_URL) {
  throw new Error('DATABASE_URL environment variable is not set');
}

// Supabase için bağlantı istemcisi
const client = postgres(process.env.DATABASE_URL);

// Veritabanı bağlantısını şema ile birlikte yap
export const db = drizzle(client, { schema });

// Gelecekte şemayı eklediğimizde:
// export const db = drizzle(sql, { schema }); 