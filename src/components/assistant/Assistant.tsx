
// src/components/assistant/Assistant.tsx
import { useEffect, useRef, useState } from "react";
import { chatCompletion, type ChatMessage } from "@/integrations/aiClient";
import { useSpeech } from "@/hooks/useSpeech";
import { MessageSquare, Mic, Volume2, X } from "lucide-react";

type Msg = { role: "user" | "assistant"; content: string };

export default function Assistant() {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState("");
  const [msgs, setMsgs] = useState<Msg[]>([
    { role: "assistant", content: "Namaste! Main aapka Ayurveda AI Assistant hoon. Aap apna sawal bolkar ya likhkar puch sakte ho." }
  ]);
  const { listening, transcript, startListening, supported, speak } = useSpeech();
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (transcript) {
      setInput(transcript);
    }
  }, [transcript]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [msgs, open]);

  const send = async (text?: string) => {
    const content = (text ?? input).trim();
    if (!content) return;
    const newMsgs = [...msgs, { role: "user", content } as Msg];
    setMsgs(newMsgs);
    setInput("");
    setLoading(true);
    try {
      const system: ChatMessage = {
        role: "system",
        content: "You are an Ayurveda assistant. Keep answers concise, safe, and educational. For medical emergencies, advise seeing a doctor. Avoid definitive diagnoses. Prefer Hinglish (English+Hindi) style like an Indian teacher. Keep answers under 180 words unless asked."
      };
      const response = await chatCompletion([
        system,
        ...newMsgs.map(m => ({ role: m.role, content: m.content } as ChatMessage)),
      ]);
      setMsgs(m => [...m, { role: "assistant", content: response }]);
      // Auto-speak the reply (optional)
      await speak(response);
    } catch (e:any) {
      setMsgs(m => [...m, { role: "assistant", content: "Error: " + (e?.message ?? "something went wrong") }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Floating Action Button */}
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 z-50 rounded-full p-4 bg-emerald-600 text-white shadow-2xl hover:bg-emerald-700 transition"
        aria-label="Open AI Assistant"
      >
        <MessageSquare className="w-6 h-6" />
      </button>

      {/* Drawer / Modal */}
      {open && (
        <div className="fixed inset-0 z-50 bg-black/40 flex items-end sm:items-center justify-center p-2 sm:p-4">
          <div className="w-full sm:max-w-lg bg-white rounded-2xl shadow-xl flex flex-col max-h-[85vh]">
            <div className="flex items-center justify-between p-3 border-b">
              <h3 className="font-semibold">Ayurveda AI Assistant</h3>
              <button onClick={() => setOpen(false)} className="p-2 rounded hover:bg-gray-100"><X className="w-5 h-5"/></button>
            </div>

            <div className="flex-1 overflow-y-auto p-3 space-y-3">
              {msgs.map((m, i) => (
                <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div className={`px-3 py-2 rounded-2xl text-sm max-w-[85%] ${m.role === "user" ? "bg-emerald-600 text-white rounded-br-none" : "bg-gray-100 text-gray-900 rounded-bl-none"}`}>
                    {m.content}
                  </div>
                </div>
              ))}
              <div ref={bottomRef} />
            </div>

            <div className="p-3 border-t space-y-2">
              <div className="flex items-center gap-2">
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => { if (e.key === "Enter") send(); }}
                  placeholder="Type your question... (e.g., Vata diet tips)"
                  className="flex-1 border rounded-xl px-3 py-2 outline-none focus:ring-2 focus:ring-emerald-500"
                />
                <button
                  onClick={() => send()}
                  disabled={loading}
                  className="px-3 py-2 rounded-xl bg-emerald-600 text-white disabled:opacity-50"
                >
                  {loading ? "..." : "Send"}
                </button>
              </div>
              <div className="flex items-center justify-between text-xs text-gray-500">
                <div className="flex items-center gap-2">
                  <button
                    onClick={startListening}
                    disabled={!supported || listening}
                    className="inline-flex items-center gap-1 px-2 py-1 rounded-lg border hover:bg-gray-50 disabled:opacity-50"
                    title="Speak your question"
                  >
                    <Mic className="w-4 h-4" /> {listening ? "Listening..." : "Speak"}
                  </button>
                  <div className="hidden sm:block">Use mic to ask in Hinglish</div>
                </div>
                <div className="flex items-center gap-1">
                  <Volume2 className="w-4 h-4" />
                  Auto voice reply enabled
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
