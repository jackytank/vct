'use client';
import { Carousel } from '@material-tailwind/react';
import React from 'react';

const IntroCarousel = () => {
    return (
        <Carousel
            loop={true}
            autoplay={true}
            autoplayDelay={3000}
            className="rounded-xl"
            prevArrow={() => undefined}
            nextArrow={() => undefined}
            navigation={({ setActiveIndex, activeIndex, length }) => (
                <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                    {new Array(length).fill("").map((_, i) => (
                        <span
                            key={i}
                            className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                                }`}
                            onClick={() => setActiveIndex(i)}
                        />
                    ))}
                </div>
            )}
            transition={{
                duration: 1,
                delay: 0.1,

            }}
        >
            <img
                src="/images/intro/img1.jpg"
                className='h-[100vh] w-full object-cover object-center'
                alt='i11'
            />
            <img
                src="/images/intro/img2.jpg"
                className="h-[100vh] w-full object-cover object-center"
                alt='i12'
            />
            <img
                src="/images/intro/img3.jpg"
                className="h-[100vh] w-full object-cover object-center"
                alt='i13'
            />
        </Carousel>
    );
};

export default IntroCarousel;