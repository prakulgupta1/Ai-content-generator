import { config } from 'dotenv';

config({ path: '.env.local' });

export default {
  schema: "./utils/schema.tsx",
  out: "./migrations",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.NEXT_PUBLIC_DRIZZLE_DB_URL!,
  },
};