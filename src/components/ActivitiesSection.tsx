'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Camera, Heart, Sunrise, Users, Tent, Binoculars } from 'lucide-react';
import Image from 'next/image';

export default function ActivitiesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const activities = [
    {
      icon: Heart,
      title: "Pre-Wedding Photography",
      description: "Lokasi romantis dengan latar Gunung Agung yang memukau untuk sesi foto pre-wedding yang tak terlupakan",
      image: "https://images.pexels.com/photos/1624496/pexels-photo-1624496.jpeg",
      popular: true,
      duration: "2-4 jam",
      bestTime: "Golden Hour"
    },
    {
      icon: Camera,
      title: "Fotografi Landscape",
      description: "Spot foto terbaik untuk mengabadikan keindahan savana luas dengan panorama 360 derajat",
      image: "https://images.pexels.com/photos/1450082/pexels-photo-1450082.jpeg",
      popular: true,
      duration: "1-3 jam",
      bestTime: "Sunrise/Sunset"
    },
    {
      icon: Sunrise,
      title: "Sunrise & Sunset Hunting",
      description: "Nikmati momen magis matahari terbit dan terbenam dengan pemandangan yang spektakuler",
      image: "https://images.pexels.com/photos/1624496/pexels-photo-1624496.jpeg",
      popular: false,
      duration: "1-2 jam",
      bestTime: "05:30 & 17:30"
    },
    {
      icon: Users,
      title: "Family Gathering",
      description: "Tempat ideal untuk berkumpul bersama keluarga dengan suasana alam yang menyegarkan",
      image: "https://images.pexels.com/photos/1450082/pexels-photo-1450082.jpeg",
      popular: false,
      duration: "3-6 jam",
      bestTime: "Pagi-Sore"
    },
    {
      icon: Tent,
      title: "Camping & Glamping",
      description: "Pengalaman bermalam di bawah bintang dengan fasilitas camping yang nyaman",
      image: "https://images.pexels.com/photos/1624496/pexels-photo-1624496.jpeg",
      popular: false,
      duration: "1-2 hari",
      bestTime: "Weekend"
    },
    {
      icon: Binoculars,
      title: "Nature Watching",
      description: "Amati flora dan fauna unik savana serta burung-burung yang hinggap di area ini",
      image: "https://images.pexels.com/photos/1450082/pexels-photo-1450082.jpeg",
      popular: false,
      duration: "2-4 jam",
      bestTime: "Pagi Hari"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Aktivitas & Pengalaman
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Temukan berbagai aktivitas menarik yang bisa Anda lakukan di Savana Tianyar. 
            Dari fotografi hingga camping, setiap momen akan menjadi kenangan berharga.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((activity, index) => (
            <motion.article
              key={activity.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={activity.image}
                  alt={activity.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                
                {/* Popular Badge */}
                {activity.popular && (
                  <div className="absolute top-4 left-4 px-3 py-1 bg-emerald-500 text-white text-xs font-semibold rounded-full">
                    Populer
                  </div>
                )}

                {/* Icon */}
                <div className="absolute bottom-4 right-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <activity.icon className="w-6 h-6 text-emerald-600" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors">
                  {activity.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {activity.description}
                </p>

                {/* Meta Info */}
                <div className="flex justify-between items-center text-sm text-gray-500">
                  <div className="flex items-center">
                    <span className="font-medium">Durasi:</span>
                    <span className="ml-1">{activity.duration}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="font-medium">Waktu:</span>
                    <span className="ml-1">{activity.bestTime}</span>
                  </div>
                </div>

                {/* CTA */}
                <button className="mt-4 w-full py-2 px-4 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 font-medium rounded-lg transition-colors duration-200">
                  Pelajari Lebih Lanjut
                </button>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-emerald-600 text-white p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-4">
              Butuh Bantuan Merencanakan Kunjungan?
            </h3>
            <p className="text-emerald-100 mb-6 max-w-2xl mx-auto">
              Tim kami siap membantu Anda merencanakan aktivitas yang sesuai dengan kebutuhan dan preferensi Anda.
            </p>
            <button className="inline-flex items-center px-8 py-3 bg-white text-emerald-700 font-semibold rounded-full hover:bg-gray-100 transition-colors duration-200">
              Hubungi Guide Lokal
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}