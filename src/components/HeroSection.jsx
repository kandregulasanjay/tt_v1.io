import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'; 
import Hero_section from '../assets/webp/Hero_section-bg.webp';

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1 } }
};

const HeroSection = () => {
  return (
    <motion.section
      className="w-full h-[90vh] flex flex-col justify-center items-center text-center relative"
      style={{
        backgroundImage: `url(${Hero_section})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      variants={fadeIn}
      initial="hidden"
      animate="visible"
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10 flex flex-col items-center">
        <h1 className="text-white text-4xl md:text-6xl font-bold mb-6">
          Empowering the Future of Business with AI
        </h1>
        <p className="text-white text-lg md:text-xl mb-8 max-w-2xl">
          Discover scalable, intelligent solutions tailored to your industry needs
        </p>
        <button className="rounded-full bg-[#3DC1B1] text-white px-8 py-3 text-lg font-semibold shadow hover:bg-[#34a99b] transition">
          Begin your journey
        </button>
      </div>
    </motion.section>
  );
};

export default HeroSection;