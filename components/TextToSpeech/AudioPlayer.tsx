'use client';

import { useState } from 'react';

const AudioPlayer: React.FC<{ audioUrl: string; }> = ({ audioUrl }) => {
    const [isLoading, setIsLoading] = useState(true);

    const handleCanPlay = () => {
        setIsLoading(false);
    };

    const handleError = () => {
        setIsLoading(true);
    };

    return (
        <div className="max-w-4xl px-6 mx-auto bg-gray-200 p-4 rounded-lg flex justify-center items-center">
            <audio controls onCanPlay={handleCanPlay} onError={handleError}>
                <source src={audioUrl} type="audio/mpeg" />
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
