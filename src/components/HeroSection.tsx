'use client';

import { motion } from 'framer-motion';
import { ChevronDown, Play, MapPin, Clock } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

export default function HeroSection() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  const stats = [
    { number: "500+", label: "Hektar Savana" },
    { number: "1,200m", label: "Ketinggian" },
    { number: "365", label: "Hari Terbuka" }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.pexels.com/photos/1624496/pexels-photo-1624496.jpeg"
          alt="Savana Tianyar dengan latar Gunung Agung"
          fill
          className="object-cover object-center scale-105"
          priority
          quality={90}
          sizes="100vw"
        />
        
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50" />
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/20 to-transparent" />
        
        <motion.div
          animate={{ 
            y: [0, -20, 0],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 right-20 w-32 h-32 bg-white/10 rounded-full blur-xl"
        />
        <motion.div
          animate={{ 
            y: [0, 15, 0],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute bottom-32 left-16 w-24 h-24 bg-emerald-400/20 rounded-full blur-lg"
        />
      </div>

      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-6 border border-white/30"
        >
          <MapPin className="w-4 h-4 mr-2" />
          Karangasem, Bali Timur
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
        >
          <span className="block bg-gradient-to-r from-white via-emerald-100 to-white bg-clip-text text-transparent">
            Savana Tianyar
          </span>
          <span className="block text-2xl sm:text-3xl lg:text-4xl font-light mt-4 text-emerald-200">
            Surga Tersembunyi di Ujung Timur Bali
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg sm:text-xl lg:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed"
        >
          Hamparan savana seluas 500 hektar dengan panorama Gunung Agung yang memukau. 
          Tempat di mana langit bertemu bumi dalam harmoni sempurna.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-8 mb-10"
        >
          {stats.map((stat, index) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-emerald-300">
                {stat.number}
              </div>
              <div className="text-sm text-gray-300">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <button
            onClick={scrollToAbout}
            className="group inline-flex items-center px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Jelajahi Sekarang
            <ChevronDown className="ml-2 w-5 h-5 group-hover:translate-y-1 transition-transform" />
          </button>
          
          <button
            onClick={() => setIsVideoPlaying(true)}
            className="group inline-flex items-center px-8 py-4 border-2 border-white/50 hover:border-white text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 backdrop-blur-sm hover:bg-white/10"
          >
            <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
            Tonton Video
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-12 flex flex-wrap justify-center gap-6 text-sm text-gray-300"
        >
          <div className="flex items-center">
            <Clock className="w-4 h-4 mr-2" />
            Buka 24 Jam
          </div>
          <div className="flex items-center">
            <MapPin className="w-4 h-4 mr-2" />
            45 Menit dari Denpasar
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="cursor-pointer flex flex-col items-center"
          onClick={scrollToAbout}
        >
          <span className="text-xs mb-2 opacity-75">Scroll untuk melihat lebih</span>
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </motion.div>

      {isVideoPlaying && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <button
            onClick={() => setIsVideoPlaying(false)}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors text-2xl"
          >
            ×
          </button>
          <div className="relative w-full max-w-4xl aspect-video bg-gray-900 rounded-lg overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center text-white">
              <div className="text-center">
                <Play className="w-16 h-16 mx-auto mb-4 opacity-50" />
                <p className="text-lg">Video akan segera tersedia</p>
                <p className="text-sm opacity-75">Dokumentasi visual Savana Tianyar</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}