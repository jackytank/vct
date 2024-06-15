'use client';
import React, { useState, useEffect } from "react";
import { AiFillCaretRight, AiOutlinePauseCircle, AiOutlineStop } from "react-icons/ai";

const TextToSpeech = ({ text }) => {
    const [isPaused, setIsPaused] = useState(false);
    const [utterance, setUtterance] = useState<SpeechSynthesisUtterance | null>(null);
    const [pitch, setPitch] = useState(1);
    const [rate, setRate] = useState(1);
    const [volume, setVolume] = useState(1);

    useEffect(() => {
        const synth = window.speechSynthesis;
        const voices = synth.getVoices();
        console.log(voices);
        const vnVoice = voices.find((voice) => voice.lang === 'vi-VN');
        if (!utterance) return;
        if (vnVoice) {
            utterance.voice = vnVoice;
        }
        utterance.pitch = pitch;
        utterance.rate = rate;
        utterance.volume = volume;
        // Set the text in case it changes
        utterance.text = text;

        return () => {
            synth.cancel();
        };
    }, [text, pitch, rate, volume, utterance]);

    const handlePlay = () => {
        const synth = window.speechSynthesis;
        const voices = synth.getVoices();
        const vnVoice = voices.find((voice) => voice.lang === 'vi-VN');
        if (!utterance) return;
        if (vnVoice) {
            utterance.voice = vnVoice;
        }
        utterance.pitch = pitch;
        utterance.rate = rate;
        utterance.volume = volume;
        // Set the text in case it changes
        utterance.text = text;
        if (isPaused) {
            synth.resume();
        } else {
            synth.speak(utterance);
        }
        setIsPaused(false);
    };

    const handlePause = () => {
        window.speechSynthesis.pause();
        setIsPaused(true);
    };

    const handleStop = () => {
        window.speechSynthesis.cancel();
        setIsPaused(false);
    };

    return (
        <div style={{ margin: "1rem", whiteSpace: "pre-wrap" }}>
            <div className="flex justify-center gap-3">
                <button className="flex items-center gap-2 text-lg" onClick={handlePlay}>
                    <AiFillCaretRight className="text-green-500 text-2xl" />
                    <span>{isPaused ? "Resume" : "Play"}</span>
                </button>
                <button
                    className="flex items-center gap-2 text-lg"
                    onClick={handlePause}
                >
                    <AiOutlinePauseCircle className="text-gray-500 text-2xl" />
                    <span>Pause</span>
                </button>
                <button
                    className="flex items-center gap-2 text-lg"
                    onClick={handleStop}
                >
                    <AiOutlineStop className="text-red-500 text-2xl" />
                    <span>Stop</span>
                </button>
            </div>
            {/* <Text /> */}
        </div>

    );
};

export default TextToSpeech;
