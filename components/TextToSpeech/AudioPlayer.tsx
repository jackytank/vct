'use client';

import { fetchTTS } from '@/utils/helper';
import { useEffect, useState } from 'react';

const AudioPlayer: React.FC<{ text: string; }> = ({ text }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [mp3Url, setMp3Url] = useState('');

    const handleCanPlay = () => {
        setIsLoading(false);
    };

    const handleError = () => {
        setIsLoading(true);
    };

    const fetchAndCacheTTS = async () => {
        const cacheUrl = localStorage.getItem(text);
        if (cacheUrl) {
            console.log('Cached URL found', cacheUrl);
            try {
                // test if cacheUrl not return 404 
                const response = await fetch(cacheUrl, { method: 'GET', cache: 'no-store' });
                if (response.ok) {
                    console.log('Cached URL is valid', cacheUrl);
                    setMp3Url(cacheUrl);
                    setIsLoading(false);
                    return;
                } else {
                    localStorage.removeItem(text);
                }
            } catch (error) {
                console.error('Error verifying cached URL', error);
                localStorage.removeItem(text); // Remove invalid cache entry
            }
        }
        // Fetch new TTS URL if not cached or cache is invalid
        const newUrl = await fetchTTS({ text });
        if (newUrl) {
            console.log('Fetched new URL', newUrl);
            localStorage.setItem(text, newUrl);
            setMp3Url(newUrl);
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchAndCacheTTS();
    }, [text]);


    return (
        <div className="max-w-4xl px-6 mx-auto bg-gray-200 p-4 rounded-lg flex justify-center items-center">
            <audio controls onCanPlay={handleCanPlay} onError={handleError}>
                <source src={mp3Url} type="audio/mpeg" />
                <track kind="captions" label="English" src="your-captions.vtt" srcLang="en" />
                Your browser does not support the audio element.
            </audio>
            {isLoading && (
                <div className="tooltip">
                    Đang load giọng đọc, vui lòng chờ trong giây lát
                </div>
            )}
        </div>
    );
};

export default AudioPlayer;
