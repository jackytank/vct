'use client';
import React from "react";
import { useSpeech } from "react-text-to-speech";
import { AiFillCaretRight, AiOutlinePauseCircle, AiOutlineStop } from "react-icons/ai";

type TestTextToSpeechProps = {
    text: string;
};

export default function TestTextToSpeech({ text }: Readonly<TestTextToSpeechProps>) {
    const { speechStatus, start, pause, stop } = useSpeech({
        text,
        pitch: 1,
        rate: 1,
        volume: 1,
        lang: "vi-VN",
        voiceURI: "Microsoft An - Vietnamese (Vietnam)",
        highlightText: false
    });

    return (
        <div style={{ margin: "1rem", whiteSpace: "pre-wrap" }}>
            <div className="flex justify-center gap-3">
                <button className="flex items-center gap-2 text-lg" disabled={speechStatus === "started"} onClick={start}>
                    <AiFillCaretRight className="text-green-500 text-2xl" />
                    <span>Start</span>
                </button>
                <button className="flex items-center gap-2 text-lg" disabled={speechStatus === "paused"} onClick={pause}>
                    <AiOutlinePauseCircle className="text-gray-500 text-2xl" />
                    <span>Pause</span>
                </button>
                <button className="flex items-center gap-2 text-lg" disabled={speechStatus === "stopped"} onClick={stop}>
                    <AiOutlineStop className="text-red-500 text-2xl" />
                    <span>Stop</span>
                </button>
            </div>
            {/* <Text /> */}
        </div>
    );
}
