import { createClient } from "@supabase/supabase-js";

export type ChatMessage = { role: "system" | "user" | "assistant"; content: string };

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL!,
  import.meta.env.VITE_SUPABASE_ANON_KEY!
);

export async function chatCompletion(messages: ChatMessage[], stream = false): Promise<string> {
  const { data, error } = await supabase.functions.invoke("ai-chat", {
    body: { messages, stream },
  });

  if (error) throw new Error(`AI function failed: ${error.message}`);
  return data.reply as string;
}
