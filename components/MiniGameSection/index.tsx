import React from 'react';

const MiniGameSection = () => {
    return (
        <section id="miniGameSection" className="overflow-hidden pb-20 pt-15 lg:pb-25 xl:pb-30">
            <iframe
                title='mini-game'
                src="/surf-game/game.htm"
                className='w-full h-screen border-none'
                allowFullScreen
                loading='lazy'
            />
        </section>
    );
};

export default MiniGameSection;