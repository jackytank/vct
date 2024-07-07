export const fetchTTS = async ({
    text
}: {
    text: string;
}) => {
    try {
        const response = await fetch('https://api.fpt.ai/hmi/tts/v5', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'api-key': process.env.FPT_AI_API_KEY as string,
            },
            body: text, // Replace with your desired text
        });

        if (response.ok) {
            const data: FPTAiResponse = await response.json();
            const mp3Url = data.async; // Extract the async MP3 URL
            return mp3Url;
        } else {
            console.error('Error fetching TTS data:', response.statusText);
            return null; // Handle the error case appropriately
        }
    } catch (error) {
        console.error('An error occurred while fetching TTS data:', error);
        return null; // Handle the error case appropriately
    }
};

export interface FPTAiResponse {
    async: string;
    error: number;
    message: string;
    request_id: string;
}
