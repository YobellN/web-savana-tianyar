'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Trees, Wind, Droplets, Sun, Mountain, Flower2, Bird, Leaf } from 'lucide-react';

export default function SavanaInfoSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const savanaFeatures = [
    {
      icon: Trees,
      title: "Ekosistem Savana Tropis",
      description: "Padang rumput luas dengan pohon-pohon akasia yang tersebar, menciptakan lanskap khas savana Afrika di Bali",
      details: ["Rumput gajah dominan", "Pohon akasia berusia puluhan tahun", "Vegetasi tahan kekeringan"]
    },
    {
      icon: Mountain,
      title: "Panorama Gunung Agung",
      description: "Pemandangan langsung ke Gunung Agung yang megah, gunung tertinggi dan paling suci di Bali",
      details: ["Ketinggian 3.031 mdpl", "Jarak pandang 15-20 km", "View terbaik saat cuaca cerah"]
    },
    {
      icon: Wind,
      title: "Iklim Pegunungan Sejuk",
      description: "Berada di ketinggian 1.200 meter dengan suhu sejuk dan angin yang menyegarkan sepanjang hari",
      details: ["Suhu 18-25°C", "Kelembaban rendah", "Angin kencang di area terbuka"]
    },
    {
      icon: Sun,
      title: "Cahaya Emas Spektakuler",
      description: "Lokasi terbaik untuk menyaksikan sunrise dan sunset dengan cahaya emas yang memukau",
      details: ["Sunrise: 05:30-06:30", "Sunset: 17:30-18:30", "Golden hour sempurna"]
    }
  ];

  const wildlifeInfo = [
    {
      icon: Bird,
      name: "Burung Savana",
      description: "Berbagai jenis burung seperti burung pipit, kutilang, dan elang yang sering terlihat terbang di atas savana"
    },
    {
      icon: Leaf,
      name: "Flora Endemik",
      description: "Tanaman khas daerah kering seperti kaktus, alang-alang, dan berbagai semak belukar"
    },
    {
      icon: Flower2,
      name: "Bunga Liar",
      description: "Musim tertentu menampilkan hamparan bunga liar yang mempercantik lanskap savana"
    },
    {
      icon: Droplets,
      name: "Sumber Air Alami",
      description: "Beberapa mata air kecil yang menjadi sumber kehidupan bagi ekosistem savana"
    }
  ];

  return (
    <section className="py-20 bg-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.header
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Keajaiban Alam Savana Tianyar
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Jelajahi keunikan ekosistem savana yang langka di Indonesia. Savana Tianyar menawarkan 
            pengalaman alam yang autentik dengan keanekaragaman hayati yang menakjubkan.
          </p>
        </motion.header>

        {/* Main Features */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {savanaFeatures.map((feature, index) => (
            <motion.article
              key={feature.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-start mb-6">
                <div className="flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-xl mr-6 flex-shrink-0">
                  <feature.icon className="w-8 h-8 text-emerald-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {feature.description}
                  </p>
                </div>
              </div>
              
              <ul className="space-y-2">
                {feature.details.map((detail, detailIndex) => (
                  <li key={detailIndex} className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full mr-3 flex-shrink-0" />
                    {detail}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>

        {/* Wildlife Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-white p-8 rounded-2xl shadow-lg"
        >
          <header className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Keanekaragaman Hayati
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Savana Tianyar adalah rumah bagi berbagai spesies flora dan fauna yang telah beradaptasi 
              dengan iklim kering dan kondisi tanah vulkanik.
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {wildlifeInfo.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className="text-center p-6 bg-gray-50 rounded-xl hover:bg-emerald-50 transition-colors duration-300"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-emerald-100 rounded-lg mx-auto mb-4">
                  <item.icon className="w-6 h-6 text-emerald-600" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  {item.name}
                </h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Conservation Message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center bg-gradient-to-r from-emerald-600 to-emerald-700 text-white p-8 rounded-2xl"
        >
          <h3 className="text-2xl font-bold mb-4">
            Mari Jaga Kelestarian Savana Tianyar
          </h3>
          <p className="text-emerald-100 mb-6 max-w-3xl mx-auto leading-relaxed">
            Sebagai pengunjung yang bertanggung jawab, mari kita bersama-sama menjaga kelestarian 
            ekosistem unik ini untuk generasi mendatang. Jangan tinggalkan jejak selain kenangan indah.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <span className="px-4 py-2 bg-white/20 rounded-full">🚯 Jangan buang sampah</span>
            <span className="px-4 py-2 bg-white/20 rounded-full">🌱 Jaga vegetasi</span>
            <span className="px-4 py-2 bg-white/20 rounded-full">📸 Foto tanpa merusak</span>
            <span className="px-4 py-2 bg-white/20 rounded-full">🔥 Dilarang membuat api</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}