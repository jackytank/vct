'use client';
import { Carousel } from '@material-tailwind/react';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const IntroImageSection = () => {
    const { theme } = useTheme();
    const [scrollIcon, setScrollIcon] = useState('/images/icon/down-light.png');
    const handleScrollToSection = (e) => {
        e.preventDefault(); // Prevent default anchor behavior
        const miniGameSection = document.getElementById('miniGameSection');
        if (miniGameSection) {
            // Calculate the position to scroll to, accounting for the fixed header height as a percentage of the viewport height
            const headerOffset = window.innerHeight * 0.125; // 12.5% of the viewport height
            const sectionPosition = miniGameSection.offsetTop - headerOffset;
            window.scrollTo({
                top: sectionPosition,
                behavior: 'smooth',
            });
        }
    };
    
    useEffect(() => {
        console.log(theme);
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
            </motion.div>
            <div className="absolute bottom-10 left-2/4 z-50 -translate-x-2/4">
                <Link href="#miniGameSection" onClick={handleScrollToSection}>
                    <Image
                        src={scrollIcon}
                        alt="Scroll Down"
                        height={76}
                        width={76}
                        className="mx-auto cursor-pointer"
                    />
                </Link>
            </div>
        </section>
    );
};

export default IntroImageSection;