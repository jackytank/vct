import { animated, useSpring } from '@react-spring/web';
import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';

const IntroImageAnimation = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [leaveTimer, setLeaveTimer] = useState<NodeJS.Timeout | null>(null);
    const homepageBgImage = '/images/intro/BG_VCT.png';
    const yellowLeftCloudImage = '/images/intro/CLOUD_YELLOW_LEFT.png';
    const yellowRightCloudImage = '/images/intro/CLOUD_YELLOW_RIGHT.png';
    const whiteLeftCloudImage = '/images/intro/CLOUD_WHITE_LEFT.png';
    const whiteRightCloudImage = '/images/intro/CLOUD_WHITE_RIGHT.png';
    const centerHomepageBrandText = '/images/intro/CO_TICH_TYPO.png';
    const starsImage = '/images/intro/STARS.png';
    const slideDistance = 250;

    const handleMouseEnter = () => {
        if (leaveTimer) {
            clearTimeout(leaveTimer);
            setLeaveTimer(null);
        }
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        const timer = setTimeout(() => {
            setIsHovered(false);
        }, 5000); // 5 seconds delay
        setLeaveTimer(timer);
    };

    const leftImageSpring = useSpring({
        to: {
            transform: isHovered ? `translateX(-${slideDistance}px)` : 'translateX(0px)',
        },
        config: { duration: 3500 }, // Adjust duration as needed
    });

    const rightImageSpring = useSpring({
        to: {
            transform: isHovered ? `translateX(${slideDistance}px)` : 'translateX(0px)',
        },
        config: { duration: 3500 }, // Adjust duration as needed
    });
    const centerTextSpring = useSpring({
        opacity: isHovered ? 1 : 0.5,
        config: { duration: 1000 }, // Adjust duration as needed
    });

    // Cleanup on component unmount
    useEffect(() => {
        return () => {
            if (leaveTimer) {
                clearTimeout(leaveTimer);
            }
        };
    }, [leaveTimer]);

    useEffect(() => {
        let timeoutId: NodeJS.Timeout;
        if (!isHovered) {
            timeoutId = setTimeout(() => {
                setIsHovered(false);
            }, 3000);
        }
        return () => clearTimeout(timeoutId);
    }, [isHovered]);

    return (
        <div className="relative w-auto min-w-full min-h-full max-w-none">
            <img
                src={homepageBgImage}
                alt="intro_image_1"
                className="object-cover w-full h-full"
            />
            <animated.img
                src={centerHomepageBrandText}
                alt="center_brand_text"
                className="absolute top-[65%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0"
                style={centerTextSpring}
            />
            <motion.img
                src={starsImage}
                alt="stars"
                className="absolute top-0 z-1"
                initial="hidden"
                animate="visible"
                variants={{
                    hidden: { opacity: 0, y: -5 },
                    visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 1, delay: 0.1, repeat: Infinity, repeatType: "reverse" }}
            />
            <div>
                <animated.img
                    src={yellowLeftCloudImage}
                    alt="left_yellow_cloud"
                    className="absolute top-0 left-0 transform -translate-y-1/2 z-10"
                    style={leftImageSpring}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                />
                <animated.img
                    src={whiteLeftCloudImage}
                    alt="left_white_cloud"
                    className="absolute top-0 left-0 transform -translate-y-1/2 z-10"
                    style={leftImageSpring}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                />
            </div>
            <div>
                <animated.img
                    src={yellowRightCloudImage}
                    alt="right_yellow_cloud"
                    className="absolute top-0 right-0 transform -translate-y-1/2 z-10"
                    style={rightImageSpring}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                />
                <animated.img
                    src={whiteRightCloudImage}
                    alt="right_white_cloud"
                    className="absolute top-0 right-0 transform -translate-y-1/2 z-10"
                    style={rightImageSpring}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                />
            </div>
        </div>
    );
};

export default IntroImageAnimation;