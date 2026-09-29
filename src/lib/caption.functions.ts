import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { GALLERY_CATEGORIES } from "@/data/heritage";

/**
 * Sends a heritage photo to Lovable AI Gateway and returns a suggested
 * caption + gallery category. Streams the response and returns the final JSON.
 */
export const suggestCaption = createServerFn({ method: "POST" })
  .inputValidator((d) => z.object({
    image: z.string().startsWith("data:image/").max(4_000_000),
    note: z.string().max(300).optional(),
  }).parse(d))
  .handler(async ({ data }) => {
    const key = process.env.LOVABLE_API_KEY;
    if (!key) return { error: "AI is not configured yet." } as const;

    const res = await fetch("https://ai.gateway.lovable.dev/v1/responses", {
      method: "POST",
      headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json", "X-Lovable-AIG-SDK": "fetch" },
      body: JSON.stringify({
        model: "openai/gpt-6-astra",
        stream: true,
        store: false,
        reasoning: { effort: "low" },
        instructions: "You help document Mumbai Ganpati festival heritage for a student archive. Describe only what is visible. Never invent mandal names, dates or history. Caption: one factual sentence, max 20 words.",
        input: [{ role: "user", content: [
          { type: "input_text", text: `Suggest a caption and category for this photo.${data.note ? ` Contributor note: ${data.note}` : ""}` },
          { type: "input_image", image_url: data.image },
        ] }],
        text: { format: { type: "json_schema", name: "caption", strict: true, schema: {
          type: "object", additionalProperties: false, required: ["caption", "category", "tags"],
          properties: {
            caption: { type: "string" },
            category: { type: "string", enum: [...GALLERY_CATEGORIES] },
            tags: { type: "array", items: { type: "string" } },
          },
        } } },
      }),
    });

    if (!res.ok || !res.body) {
      const msg = res.status === 429 ? "Too many requests — please wait a moment and try again."
        : res.status === 402 ? "AI credits have run out for this workspace."
        : `AI request failed (${res.status}).`;
      return { error: msg } as const;
    }

    // Read the SSE stream and collect the text output
    const reader = res.body.getReader();
    const decoder = new TextDecoder();
    let buf = "", text = "", refused = false;
    for (;;) {
      const { done, value } = await reader.read();
      if (done) break;
      buf += decoder.decode(value, { stream: true });
      const lines = buf.split("\n");
      buf = lines.pop() ?? "";
      for (const line of lines) {
        if (!line.startsWith("data:")) continue;
        const payload = line.slice(5).trim();
        if (!payload || payload === "[DONE]") continue;
        try {
          const ev = JSON.parse(payload);
          if (ev.type === "response.output_text.delta") text += ev.delta;
          if (ev.type === "response.refusal.delta") refused = true;
        } catch { /* partial frame */ }
      }
    }
    if (refused || !text) return { error: "The AI could not describe this photo." } as const;
    try {
      const out = JSON.parse(text) as { caption: string; category: string; tags: string[] };
      return { result: out } as const;
    } catch {
      return { error: "Unexpected AI response. Please try again." } as const;
    }
  });
