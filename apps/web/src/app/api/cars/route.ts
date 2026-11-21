import { listCars } from "@/lib/db";

export const runtime = "nodejs";

export async function GET() {
  try {
    return Response.json(await listCars());
  } catch (error) {
    console.error("Failed to load fleet from Neon.", error);
    return Response.json({ error: "Unable to load the fleet." }, { status: 500 });
  }
}
