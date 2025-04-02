/** @type { import("drizzle-kit").Config} */
export default {
    schema: "./utils/schema.js",
    dialect: "postgresql",
    dbCredentials: {
        url: 'postgresql://neondb_owner:npg_wR2DJL5icmzl@ep-dry-block-a5eqpbyu-pooler.us-east-2.aws.neon.tech/neondb?sslmode=require',
    }
};