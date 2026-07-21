import { NextResponse } from "next/server";

export async function POST() {
  return NextResponse.json({
    message: "Thanks! We will contact you soon.",
  });
}
