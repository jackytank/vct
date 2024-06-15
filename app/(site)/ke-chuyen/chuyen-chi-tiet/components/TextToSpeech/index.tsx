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
        if (!('speechSynthesis' in window)) {
            console.log('Text-to-speech not supported.');
            return;
        }
        const synth = window.speechSynthesis;
        // const voices = synth.getVoices();
        // const vnVoice = voices.find((voice) => voice.lang === 'vi-VN');
        // if (vnVoice) {
        //     utterance.voice = vnVoice;
        // }
        // utterance.pitch = pitch;
        // utterance.rate = rate;
        // utterance.volume = volume;
        // // Set the text in case it changes
        // utterance.text = text;

        return () => {
            synth.cancel();
        };
    }, [text, pitch, rate, volume, utterance]);

    const handlePlay = () => {
        if (!('speechSynthesis' in window)) {
            console.log('Text-to-speech not supported.');
            return;
        }
        const synth = window.speechSynthesis;
        const voice = synth.getVoices().filter(function (voice) {
            return voice.lang === 'vi-VN';
        })[0];
        console.log('findVoice', voice);

        // Create an utterance object
        const ut = {
            voice: voice,
            pitch: 1,
            rate: 1,
            volume: 1,
            text: text,
        } as any;
        // Set utterance properties
        // ut.voice = voice;
        // ut.pitch = 1;
        // ut.rate = 1;
        // ut.volume = 1;
        // ut.text = text;
        if (isPaused) {
            synth.resume();
        } else {
            synth.speak(ut);
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
