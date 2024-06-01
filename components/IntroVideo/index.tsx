'use client';
import { motion } from 'framer-motion';
import React from 'react';

const IntroVideo = () => {
  return (
    <section className="pt-30 lg:pt-0 xl:pt-0">
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
        <video
          autoPlay
          loop
          muted
          className="z-98989898 w-auto min-w-full min-h-full max-w-none object-cover"
        >
          <source src="/videos/intro_video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </motion.div>
    </section>
  );
};

export default IntroVideo;