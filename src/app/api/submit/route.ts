import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
// OpenNext helper to access Cloudflare env at runtime
let maybeGetCloudflareContext: any = undefined;
try {
  // import lazily so build doesn't fail in non-OpenNext environments
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  maybeGetCloudflareContext = require("@opennextjs/cloudflare").getCloudflareContext;
} catch (e) {
  maybeGetCloudflareContext = undefined;
}

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

function getZapierWebhookUrl() {
  try {
    if (maybeGetCloudflareContext) {
      const ctx = maybeGetCloudflareContext();
      // Cloudflare env bindings live under ctx.env
      if (ctx?.env?.ZAPIER_WEBHOOK_URL) return ctx.env.ZAPIER_WEBHOOK_URL;
    }
  } catch (err) {
    // ignore and fallback
  }
  // fallback to process.env for other runtimes (and local dev where env is available at runtime)
  return process.env.ZAPIER_WEBHOOK_URL;
}

export async function POST(req: NextRequest) {
  try {
    const payload = await req.json();
    const webhook = getZapierWebhookUrl();
    if (!webhook) {
      return NextResponse.json({ error: "Zapier webhook is not configured (runtime)" }, { status: 500, headers: corsHeaders() });
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

export async function GET(req: NextRequest) {
  return NextResponse.json({ ok: true, message: 'POST to this endpoint to forward to Zapier', method: req.method, url: req.url }, { headers: corsHeaders() });
}
