import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

function corsHeaders() {
  return {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,POST,OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
  };
}

export async function OPTIONS() {
  return new NextResponse(null, { status: 204, headers: corsHeaders() });
}

export async function POST(req: NextRequest) {
  try {
    const payload = await req.json();

    const webhook = process.env.ZAPIER_WEBHOOK_URL;
    if (!webhook) {
      return NextResponse.json({ error: "Zapier webhook is not configured" }, { status: 500 });
    }

    const res = await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      const text = await res.text();
      return NextResponse.json({ error: "Failed to forward to Zapier", details: text }, { status: 502, headers: corsHeaders() });
    }

    return NextResponse.json({ success: true }, { status: 200, headers: corsHeaders() });
  } catch (err: any) {
    return NextResponse.json({ error: err?.message ?? String(err) }, { status: 500, headers: corsHeaders() });
  }
}
