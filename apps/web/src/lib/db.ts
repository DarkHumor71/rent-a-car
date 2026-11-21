import { Pool } from "pg";
import type { FleetCar } from "@/data/fleet";

const globalForDb = globalThis as typeof globalThis & {
  postgresPool?: Pool;
};

function getPool() {
  if (!process.env.DATABASE_URL) {
    throw new Error("DATABASE_URL is required to connect to Neon Postgres.");
  }

  globalForDb.postgresPool ??= new Pool({
    connectionString: process.env.DATABASE_URL,
    max: 5,
    idleTimeoutMillis: 10_000,
  });

  return globalForDb.postgresPool;
}

export async function listCars(): Promise<FleetCar[]> {
  const { rows } = await getPool().query<FleetCar>(
    `SELECT slug, name, description, engine, transmission, fuel, color,
            price, image, category, available
     FROM cars
     ORDER BY name`,
  );

  return rows;
}

export async function getCar(slug: string): Promise<FleetCar | undefined> {
  const { rows } = await getPool().query<FleetCar>(
    `SELECT slug, name, description, engine, transmission, fuel, color,
            price, image, category, available
     FROM cars
     WHERE slug = $1`,
    [slug],
  );

  return rows[0];
}

export type NewEnquiry = {
  carSlug: string;
  name: string;
  contact: string;
  pickupDate: string;
  returnDate: string;
  location: string;
  message: string;
};

export async function createEnquiry(enquiry: NewEnquiry): Promise<void> {
  await getPool().query(
    `INSERT INTO enquiries
       (car_slug, customer_name, contact, pickup_date, return_date, pickup_location, message)
     VALUES ($1, $2, $3, $4, $5, $6, $7)`,
    [
      enquiry.carSlug,
      enquiry.name,
      enquiry.contact,
      enquiry.pickupDate,
      enquiry.returnDate,
      enquiry.location,
      enquiry.message,
    ],
  );
}
