'use client';
import { useTheme } from 'next-themes';
import React, { useEffect, useState } from 'react';

const MiniGameSection = () => {
    return (
        <section id="miniGameSection" className="overflow-hidden">
            <iframe
                title='mini-game'
                src="/surf-game/game.html"
                className='w-full h-[100vh] border-none'
                allowFullScreen
                loading='lazy'
            />
        </section>
    );
};

export default MiniGameSection;