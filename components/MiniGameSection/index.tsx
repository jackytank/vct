'use client';
import React, {  } from 'react';

const MiniGameSection = () => {
    return (
        <section id="miniGameSection" className="overflow-hidden">
            <iframe
                title='mini-game'
                src="/game.html"
                className='w-full h-[100vh] border-none'
                allowFullScreen
                loading='lazy'
            />
        </section>
    );
};

export default MiniGameSection;