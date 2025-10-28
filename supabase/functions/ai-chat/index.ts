
// supabase/functions/ai-chat/index.ts
// Deno Deploy Edge Function for Supabase
// Proxies to an OpenAI-compatible API (Groq default - free tier as of now).

import "jsr:@supabase/functions-js/edge-runtime.d.ts";

const PROVIDER_BASE = Deno.env.get("OPENAI_COMPAT_BASE") ?? "https://api.groq.com/openai/v1";
const PROVIDER_KEY = Deno.env.get("PROVIDER_API_KEY") ?? Deno.env.get("GROQ_API_KEY");
const MODEL = Deno.env.get("MODEL") ?? "llama-3.1-70b-versatile";

type ChatMessage = { role: "system" | "user" | "assistant"; content: string };

Deno.serve(async (req) => {
  if (req.method !== "POST") {
    return new Response("Method not allowed", { status: 405 });
  }

  if (!PROVIDER_KEY) {
    return new Response("Server missing PROVIDER API KEY", { status: 500 });
  }

  try {
    const { messages } = await req.json() as { messages: ChatMessage[]; stream?: boolean };

    const resp = await fetch(`${PROVIDER_BASE}/chat/completions`, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${PROVIDER_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: MODEL,
        messages,
        temperature: 0.4,
        max_tokens: 600,
      }),
    });

    if (!resp.ok) {
      const t = await resp.text();
      return new Response(`Upstream error ${resp.status}: ${t}`, { status: 500 });
    }

    const data = await resp.json();
    const reply = data.choices?.[0]?.message?.content ?? "Sorry, I couldn't generate a response.";
    return new Response(JSON.stringify({ reply }), {
      headers: { "Content-Type": "application/json" }
    });
  } catch (e) {
    return new Response(`Bad request: ${e?.message ?? e}`, { status: 400 });
  }
});
