'use client';

import { useVoices } from "@/utils/text-to-speech-helper";
import React, { useState, useEffect } from "react";
import { AiFillCaretRight, AiOutlinePauseCircle, AiOutlineStop } from "react-icons/ai";

const TextToSpeech = ({ text }) => {
    const [isPaused, setIsPaused] = useState(false);
    const [utterance, setUtterance] = useState<SpeechSynthesisUtterance | null>(null);
    const [voice, setVoice] = useState<SpeechSynthesisVoice | null>(null);
    const [pitch, setPitch] = useState(1);
    const [rate, setRate] = useState(1);
    const [volume, setVolume] = useState(1);
    const voices = useVoices();

    useEffect(() => {
        const synth = window.speechSynthesis;
        const u = new SpeechSynthesisUtterance(text);
        const voices = synth.getVoices();
        setUtterance(u);
        setVoice(voices[0]);

        return () => {
            synth.cancel();
        };
    }, [text]);

    const handlePlay = () => {
        const synth = window.speechSynthesis;

        if (isPaused) {
            synth.resume();
        } else {
            if (!utterance) return;
            utterance.voice = voice;
            utterance.pitch = pitch;
            utterance.rate = rate;
            utterance.volume = volume;
            synth.speak(utterance);
        }

        setIsPaused(false);
    };

    const handlePause = () => {
        const synth = window.speechSynthesis;

        synth.pause();

        setIsPaused(true);
    };

    const handleStop = () => {
        const synth = window.speechSynthesis;

        synth.cancel();

        setIsPaused(false);
    };

    const handleVoiceChange = (event) => {
        const voices = window.speechSynthesis.getVoices();
        setVoice(voices.find((v) => v.name === event.target.value) ?? null);
    };

    const handlePitchChange = (event) => {
        setPitch(parseFloat(event.target.value));
    };

    const handleRateChange = (event) => {
        setRate(parseFloat(event.target.value));
    };

    const handleVolumeChange = (event) => {
        setVolume(parseFloat(event.target.value));
    };

    return (
        <div className="my-4">
            <label className="mb-3">
                <select
                    value={voice?.name}
                    onChange={handleVoiceChange}
                    className="w-full p-1 border border-gray-300 rounded-md"
                >
                    {voices.map((voice) => (
                        <option key={voice.name} value={voice.name}>
                            {voice.name}
                        </option>
                    ))}
                </select>
            </label>
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
