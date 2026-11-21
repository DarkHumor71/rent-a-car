import { createEnquiry, getCar } from "@/lib/db";

export const runtime = "nodejs";

type EnquiryInput = {
  carSlug?: unknown;
  name?: unknown;
  contact?: unknown;
  pickupDate?: unknown;
  returnDate?: unknown;
  location?: unknown;
  message?: unknown;
  consent?: unknown;
};

function isNonEmptyString(value: unknown): value is string {
  return typeof value === "string" && value.trim().length > 0;
}

function isIsoDate(value: unknown): value is string {
  return (
    typeof value === "string" &&
    /^\d{4}-\d{2}-\d{2}$/.test(value) &&
    !Number.isNaN(Date.parse(value)) &&
    new Date(`${value}T00:00:00.000Z`).toISOString().slice(0, 10) === value
  );
}

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return Response.json(
      { error: "Request body must be valid JSON." },
      { status: 400 },
    );
  }

  if (typeof body !== "object" || body === null || Array.isArray(body)) {
    return Response.json(
      { error: "Request body must be a JSON object." },
      { status: 400 },
    );
  }

  const input = body as EnquiryInput;
  const { carSlug, name, contact, pickupDate, returnDate, location, message } =
    input;

  if (
    !isNonEmptyString(carSlug) ||
    !isNonEmptyString(name) ||
    name.length > 200 ||
    !isNonEmptyString(contact) ||
    contact.length > 320 ||
    !isIsoDate(pickupDate) ||
    !isIsoDate(returnDate) ||
    returnDate <= pickupDate ||
    !isNonEmptyString(location) ||
    location.length > 300 ||
    (message !== undefined && typeof message !== "string") ||
    (typeof message === "string" && message.length > 5000) ||
    input.consent !== true
  ) {
    return Response.json(
      { error: "Please provide valid enquiry details and consent." },
      { status: 400 },
    );
  }

  try {
    const car = await getCar(carSlug);
    if (!car) {
      return Response.json(
        { error: "The selected car was not found." },
        { status: 404 },
      );
    }

    await createEnquiry({
      carSlug,
      name: name.trim(),
      contact: contact.trim(),
      pickupDate,
      returnDate,
      location: location.trim(),
      message: typeof message === "string" ? message.trim() : "",
    });

    return Response.json({ saved: true }, { status: 201 });
  } catch (error) {
    console.error("Failed to save rental enquiry to Neon.", error);
    return Response.json(
      { error: "Unable to save the enquiry." },
      { status: 500 },
    );
  }
}
