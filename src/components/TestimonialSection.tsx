'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Star, Quote } from 'lucide-react';
import Image from 'next/image';

export default function TestimonialSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const testimonials = [
    {
      name: "Kadek Sari",
      location: "Denpasar, Bali",
      avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
      rating: 5,
      text: "Subhanallah, pemandangannya luar biasa indah! Sunrise di Savana Tianyar benar-benar tak terlupakan. Tempatnya masih asri dan belum terlalu ramai wisatawan. Sangat recommended untuk yang suka fotografi alam!"
    },
    {
      name: "Made Wirawan",
      location: "Ubud, Bali",
      avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg",
      rating: 5,
      text: "Tempat yang sempurna untuk melepas penat dari hiruk pikuk kota. Udaranya segar, pemandangannya menakjubkan, dan suasananya sangat tenang. Gunung Agung terlihat jelas dari sini, masya Allah!"
    },
    {
      name: "Ni Luh Ayu",
      location: "Sanur, Bali",
      avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
      rating: 5,
      text: "Pertama kali ke sini langsung jatuh cinta! Savana yang luas dengan latar Gunung Agung, perfect banget buat foto pre-wedding. Aksesnya juga tidak terlalu sulit, cuma perlu trekking sebentar."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Testimoni Pengunjung
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Dengarkan pengalaman mereka yang telah merasakan keajaiban Savana Tianyar
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-gray-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 relative"
            >
              <Quote className="absolute top-4 right-4 w-8 h-8 text-emerald-200" />
              
              <div className="flex items-center mb-6">
                <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                    sizes="64px"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg">
                    {testimonial.name}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {testimonial.location}
                  </p>
                  <div className="flex items-center mt-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
              
              <p className="text-gray-700 leading-relaxed italic">
                "{testimonial.text}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}