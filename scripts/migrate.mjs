import { readFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import pg from "pg";

const { Pool } = pg;
const connectionString = process.env.DATABASE_URL_UNPOOLED;

if (!connectionString) {
  throw new Error(
    "DATABASE_URL_UNPOOLED is required to run schema migrations against Neon.",
  );
}

const migrationId = "0001_fleet_and_enquiries";
const scriptDirectory = dirname(fileURLToPath(import.meta.url));
const migrationPath = resolve(
  scriptDirectory,
  "../apps/web/src/db/migrations/0001_fleet_and_enquiries.sql",
);
const migrationSql = await readFile(migrationPath, "utf8");
const pool = new Pool({ connectionString, max: 1 });

try {
  await pool.query("BEGIN");
  await pool.query(
    `CREATE TABLE IF NOT EXISTS schema_migrations (
       id text PRIMARY KEY,
       executed_at timestamptz NOT NULL DEFAULT now()
     )`,
  );

  const result = await pool.query(
    "SELECT 1 FROM schema_migrations WHERE id = $1",
    [migrationId],
  );

  if (result.rowCount === 0) {
    await pool.query(migrationSql);
    await pool.query("INSERT INTO schema_migrations (id) VALUES ($1)", [
      migrationId,
    ]);
    console.log(`Applied migration ${migrationId}.`);
  } else {
    console.log(`Migration ${migrationId} is already applied.`);
  }

  await pool.query("COMMIT");
} catch (error) {
  await pool.query("ROLLBACK");
  throw error;
} finally {
  await pool.end();
}
