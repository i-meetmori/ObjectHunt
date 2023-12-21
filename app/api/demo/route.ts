import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  let json_response = {
    status: 200,
    results: "LOL",
  };
  return NextResponse.json(json_response);
}
