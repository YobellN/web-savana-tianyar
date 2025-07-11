'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mountain, Sun, Wind, Camera } from 'lucide-react';

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: Mountain,
      title: "Pemandangan Gunung Agung",
      description: "Nikmati panorama Gunung Agung yang megah sebagai latar belakang savana"
    },
    {
      icon: Sun,
      title: "Sunrise & Sunset Terbaik",
      description: "Saksikan matahari terbit dan terbenam yang spektakuler"
    },
    {
      icon: Wind,
      title: "Udara Segar Pegunungan",
      description: "Rasakan kesegaran udara pegunungan yang menyejukkan"
    },
    {
      icon: Camera,
      title: "Spot Foto Instagramable",
      description: "Berbagai sudut menarik untuk mengabadikan momen terbaik"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Tentang Savana Tianyar
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Savana Tianyar adalah permata tersembunyi di Karangasem, Bali. Hamparan padang rumput luas 
            dengan latar belakang Gunung Agung yang menawan, menciptakan pemandangan yang tak terlupakan. 
            Tempat ini menawarkan ketenangan dan kedamaian yang sulit ditemukan di destinasi wisata lainnya.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center justify-center w-12 h-12 bg-emerald-100 rounded-lg mb-4">
                <feature.icon className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}