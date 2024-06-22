'use client';
import { animated, useSpring } from '@react-spring/web';
import React, { useState } from 'react';

const IntroImageAnimation = () => {
    const [isHovered, setIsHovered] = useState(false);
    const slideDistance = 250;

    // Animation for the left image
    const leftImageSpring = useSpring({
        to: {
            transform: isHovered ? `translateX(-${slideDistance}px)` : 'translateX(0px)',
        },
    });

    // Animation for the right image
    const rightImageSpring = useSpring({
        to: {
            transform: isHovered ? `translateX(${slideDistance}px)` : 'translateX(0px)',
        },
    });
    return (
        <div className="relative w-auto min-w-full min-h-full max-w-none">
            <img
                src="/images/intro/BG_VCT.png"
                alt="intro_image_1"
                className="object-cover"
            />
            <animated.img
                src="/images/intro/CLOUD_YELLOW_LEFT.png"
                alt="left_image"
                className="absolute top-0 left-0 transform -translate-y-1/2"
                style={leftImageSpring}
                onMouseEnter={() => setIsHovered(true)} // Listen for hover here
                // onMouseLeave={() => setIsHovered(false)}
            />
            <animated.img
                src="/images/intro/CLOUD_YELLOW_RIGHT.png"
                alt="right_image"
                className="absolute top-0 right-0 transform -translate-y-1/2"
                style={rightImageSpring}
                onMouseEnter={() => setIsHovered(true)} // And here
                // onMouseLeave={() => setIsHovered(false)}
            />
        </div>
    );
};

export default IntroImageAnimation;