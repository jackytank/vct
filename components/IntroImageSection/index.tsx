'use client';
import { Carousel } from '@material-tailwind/react';
import { motion } from 'framer-motion';
import React from 'react';

const withMotion = (children: React.ReactNode) => {
    return (
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
            {children}
        </motion.div>
    );
};

const IntroImageSection = () => {
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
                        className="h-full w-full object-cover object-center"
                        alt='i11'
                    />
                    <img
                        src="/images/intro/img2.jpg"
                        className="h-full w-full object-cover object-center"
                        alt='i12'
                    />
                    <img
                        src="/images/intro/img3.jpg"
                        className="h-full w-full object-cover object-center"
                        alt='i13'
                    />
                </Carousel>
            </motion.div>
            <div className="absolute bottom-10 left-2/4 z-50 -translate-x-2/4">
                <a href="#miniGameSection" className="p-2 bg-blue-500 text-white rounded-md">
                    Play Mini-Game
                </a>
            </div>
        </section>
    );
};

export default IntroImageSection;