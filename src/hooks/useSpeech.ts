
// src/hooks/useSpeech.ts
import { useEffect, useMemo, useRef, useState } from "react";

type SpeechHook = {
  listening: boolean;
  transcript: string;
  startListening: () => void;
  stopListening: () => void;
  speak: (text: string) => Promise<void>;
  supported: boolean;
};

export function useSpeech(): SpeechHook {
  const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
  const recognition = useMemo(() => {
    if (!SpeechRecognition) return null;
    const r = new SpeechRecognition();
    r.continuous = false;
    r.interimResults = false;
    r.lang = "en-IN";
    return r;
  }, [SpeechRecognition]);

  const [listening, setListening] = useState(false);
  const [transcript, setTranscript] = useState("");
  const stopRef = useRef<() => void>(() => {});

  useEffect(() => {
    if (!recognition) return;
    const onResult = (e: SpeechRecognitionEvent) => {
      const text = Array.from(e.results).map(r => r[0].transcript).join(" ");
      setTranscript(text);
      setListening(false);
    };
    const onEnd = () => setListening(false);
    const onError = () => setListening(false);

    recognition.addEventListener("result", onResult as any);
    recognition.addEventListener("end", onEnd as any);
    recognition.addEventListener("error", onError as any);

    return () => {
      recognition.removeEventListener("result", onResult as any);
      recognition.removeEventListener("end", onEnd as any);
      recognition.removeEventListener("error", onError as any);
    };
  }, [recognition]);

  const startListening = () => {
    if (!recognition) return;
    setTranscript("");
    setListening(true);
    recognition.start();
  };

  const stopListening = () => {
    if (!recognition) return;
    recognition.stop();
    setListening(false);
  };

  const speak = async (text: string) => {
    if (!("speechSynthesis" in window)) return;
    const utter = new SpeechSynthesisUtterance(text);
    utter.lang = "en-IN";
    utter.rate = 1;
    return new Promise<void>((resolve) => {
      utter.onend = () => resolve();
      window.speechSynthesis.speak(utter);
    });
  };

  return {
    listening,
    transcript,
    startListening,
    stopListening,
    speak,
    supported: !!recognition && "speechSynthesis" in window,
  };
}
