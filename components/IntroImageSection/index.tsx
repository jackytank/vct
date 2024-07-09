'use client';
import { Carousel } from '@material-tailwind/react';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import IntroCarousel from './components/IntroCarousel';
import IntroImageAnimation from './components/IntroImageAnimation';

const IntroImageSection = () => {
    const { theme } = useTheme();
    const [scrollIcon, setScrollIcon] = useState('/images/icon/down-light.png');
    const handleScrollToSection = (e) => {
        e.preventDefault(); // Prevent default anchor behavior
        const miniGameSection = document.getElementById('miniGameSection');
        if (miniGameSection) {
            // Calculate the position to scroll to, accounting for the fixed header height as a percentage of the viewport height
            const headerOffset = window.innerHeight * 0.1; // 12.5% of the viewport height
            const sectionPosition = miniGameSection.offsetTop - headerOffset;
            window.scrollTo({
                top: sectionPosition,
                behavior: 'smooth',
            });
        }
    };

    useEffect(() => {
        setScrollIcon(theme === 'dark' ? '/images/icon/down-dark.png' : '/images/icon/down-light.png');
    }, [theme]);

    return (
        <section className="pt-30 lg:pt-0 xl:pt-0 relative">
            {/* <img src="/images/intro/img1.jpg" alt="intro_image_1" className="w-auto min-w-full min-h-full max-w-none object-cover" /> */}
            <motion.div
                variants={{
                    hidden: {
                        opacity: 0,
                        y: -20,
                    },

                    visible: {
                        opacity: 1,
                        y: 0,
                    },
                }}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 1, delay: 0.1 }}
                viewport={{ once: true }}
                className="animate_top flex justify-center items-center"
            >
                {/* <IntroCarousel /> */}
                <IntroImageAnimation />
            </motion.div>
            <div className="absolute bottom-40 left-2/4 z-50 -translate-x-2/4">
                <Link href="#miniGameSection" onClick={handleScrollToSection}>
                    <Image
                        src={scrollIcon}
                        alt="Scroll Down"
                        height={50}
                        width={50}
                        className="mx-auto cursor-pointer"
                    />
                </Link>
            </div>
        </section>
    );
};

export default IntroImageSection;