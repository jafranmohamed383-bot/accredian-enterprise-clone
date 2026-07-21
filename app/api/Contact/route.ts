import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();

  console.log("Contact Form Data:", body);

  return NextResponse.json({
    success: true,
    message: "Form submitted successfully!",
  });
}