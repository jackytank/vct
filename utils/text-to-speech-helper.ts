import { useState, useEffect } from "react";
import textToSpeech from '@google-cloud/text-to-speech';
import { google } from "@google-cloud/text-to-speech/build/protos/protos";
import util from 'util';
import fs from 'fs';

const client = new textToSpeech.TextToSpeechClient();

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

// use @google-cloud/text-to-speech
export const toSpeechUsingGoogleCloud = async (text: string) => {
    const request: google.cloud.texttospeech.v1.ISynthesizeSpeechRequest | undefined = {
        input: { text },
        voice: { languageCode: "en-US", ssmlGender: "NEUTRAL" },
        audioConfig: { audioEncoding: "MP3" },
    };

    const [response] = await client.synthesizeSpeech(request);
    // Write the binary audio content to a local file
    const writeFile = util.promisify(fs.writeFile);
    await writeFile('output.mp3', response.audioContent as any, 'binary');
    console.log('Audio content written to file: output.mp3');
};