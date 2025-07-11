'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Clock, MapPin, Thermometer, Backpack, ExternalLink } from 'lucide-react';

export default function InfoSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const infoCards = [
    {
      icon: Clock,
      title: "Waktu Terbaik Berkunjung",
      content: [
        "Pagi hari (05:30 - 08:00) untuk sunrise",
        "Sore hari (16:00 - 18:30) untuk sunset",
        "Musim kemarau (April - Oktober) untuk cuaca optimal"
      ]
    },
    {
      icon: MapPin,
      title: "Akses Lokasi",
      content: [
        "45 menit dari Denpasar via Klungkung",
        "30 menit dari Candidasa",
        "Jalan beraspal hingga area parkir",
        "Trekking ringan 15 menit ke savana"
      ]
    },
    {
      icon: Thermometer,
      title: "Kondisi Cuaca",
      content: [
        "Suhu: 18-25°C (sejuk pegunungan)",
        "Angin cukup kencang di area terbuka",
        "Sinar UV tinggi, gunakan sunscreen",
        "Bawa jaket untuk pagi/sore hari"
      ]
    },
    {
      icon: Backpack,
      title: "Tips Praktis",
      content: [
        "Bawa air minum dan snack ringan",
        "Gunakan sepatu trekking yang nyaman",
        "Kamera/HP dengan baterai penuh",
        "Datang lebih awal untuk spot terbaik"
      ]
    }
  ];

  return (
    <section className="py-20 bg-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Informasi Wisata
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Panduan lengkap untuk perjalanan Anda ke Savana Tianyar
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {infoCards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="flex items-center justify-center w-12 h-12 bg-emerald-100 rounded-lg mr-4">
                  <card.icon className="w-6 h-6 text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {card.title}
                </h3>
              </div>
              <ul className="space-y-3">
                {card.content.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start text-gray-600">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Google Maps Link */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
          <a
            href="https://maps.google.com/?q=Savana+Tianyar+Karangasem+Bali"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <MapPin className="w-5 h-5 mr-2" />
            Buka di Google Maps
            <ExternalLink className="w-4 h-4 ml-2" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}