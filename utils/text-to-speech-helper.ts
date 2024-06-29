import { useState, useEffect } from "react";

export function useVoices() {
    const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
    const onVoicesChanged = () => setVoices(window.speechSynthesis.getVoices());

    useEffect(() => {
        const synth = window.speechSynthesis;
        if (!synth) return;
        synth.addEventListener("voiceschanged", onVoicesChanged);
        synth.getVoices();
        return () => synth.removeEventListener("voiceschanged", onVoicesChanged);
    }, []);

    return voices;
}