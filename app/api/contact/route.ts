import { NextResponse } from "next/server";
import { sendContactEmail } from "@/lib/brevo";

interface ContactBody {
  name: string;
  phone: string;
  email: string;
  service: string;
  message: string;
  website?: string;
}

function isValidBody(body: unknown): body is ContactBody {
  if (typeof body !== "object" || body === null) return false;
  const b = body as Record<string, unknown>;
  return (
    typeof b.name === "string" &&
    b.name.trim().length > 0 &&
    typeof b.phone === "string" &&
    b.phone.trim().length > 0 &&
    typeof b.email === "string" &&
    b.email.trim().length > 0 &&
    typeof b.service === "string" &&
    b.service.trim().length > 0 &&
    typeof b.message === "string" &&
    b.message.trim().length > 0
  );
}

export async function POST(request: Request) {
  const body: unknown = await request.json();

  if (!isValidBody(body)) {
    return NextResponse.json({ error: "Invalid submission" }, { status: 400 });
  }

  // Honeypot: bots fill hidden fields; humans never see or populate this one.
  if (typeof body.website === "string" && body.website.trim().length > 0) {
    return NextResponse.json({ ok: true });
  }

  try {
    await sendContactEmail(body);
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact form submission failed", error);
    return NextResponse.json({ error: "Failed to send message" }, { status: 502 });
  }
}
