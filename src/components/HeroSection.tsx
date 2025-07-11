'use client';

import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import Image from 'next/image';

export default function HeroSection() {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.pexels.com/photos/1624496/pexels-photo-1624496.jpeg"
          alt="Savana Tianyar landscape"
          fill
          className="object-cover object-center"
          priority
          quality={85}
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
        >
          Savana Tianyar
          <span className="block text-2xl sm:text-3xl lg:text-4xl font-normal mt-2 text-emerald-300">
            Alam Liar di Ujung Timur Bali
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg sm:text-xl lg:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto"
        >
          Temukan ketenangan di hamparan savana dengan latar Gunung Agung yang memukau
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          onClick={scrollToAbout}
          className="inline-flex items-center px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
        >
          Lihat Selengkapnya
          <ChevronDown className="ml-2 w-5 h-5" />
        </motion.button>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="cursor-pointer"
          onClick={scrollToAbout}
        >
          <ChevronDown className="w-8 h-8" />
        </motion.div>
      </motion.div>
    </section>
  );
}