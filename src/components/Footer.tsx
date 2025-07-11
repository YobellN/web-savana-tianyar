'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Instagram, Facebook, Mail, Phone, MapPin, Heart } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <footer className="bg-gray-900 text-white">
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-emerald-800">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Siap Menjelajahi Savana Tianyar?
            </h2>
            <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
              Jangan lewatkan kesempatan untuk merasakan keajaiban alam Bali yang tersembunyi. 
              Rencanakan perjalanan Anda sekarang!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="https://wa.me/6281234567890?text=Halo,%20saya%20tertarik%20untuk%20berkunjung%20ke%20Savana%20Tianyar"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-white text-emerald-700 font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <Phone className="w-5 h-5 mr-2" />
                Hubungi Kami
              </Link>
              <button
                onClick={() => {
                  if (navigator.share) {
                    navigator.share({
                      title: 'Savana Tianyar - Alam Liar di Ujung Timur Bali',
                      text: 'Temukan ketenangan di hamparan savana dengan latar Gunung Agung',
                      url: window.location.href,
                    });
                  } else {
                    navigator.clipboard.writeText(window.location.href);
                    alert('Link berhasil disalin!');
                  }
                }}
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-emerald-700 transition-all duration-300 transform hover:scale-105"
              >
                <Heart className="w-5 h-5 mr-2" />
                Bagikan
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer Content */}
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* About */}
            <div>
              <h3 className="text-xl font-bold mb-4">Savana Tianyar</h3>
              <p className="text-gray-400 mb-4">
                Destinasi wisata alam tersembunyi di Karangasem, Bali. 
                Nikmati keindahan savana dengan latar Gunung Agung yang memukau.
              </p>
              <div className="flex space-x-4">
                <Link
                  href="https://instagram.com/savanatianyar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Instagram className="w-6 h-6" />
                </Link>
                <Link
                  href="https://facebook.com/savanatianyar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Facebook className="w-6 h-6" />
                </Link>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-bold mb-4">Menu Cepat</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#about" className="text-gray-400 hover:text-white transition-colors">
                    Tentang
                  </Link>
                </li>
                <li>
                  <Link href="#gallery" className="text-gray-400 hover:text-white transition-colors">
                    Galeri
                  </Link>
                </li>
                <li>
                  <Link href="#info" className="text-gray-400 hover:text-white transition-colors">
                    Informasi
                  </Link>
                </li>
                <li>
                  <Link href="#testimonial" className="text-gray-400 hover:text-white transition-colors">
                    Testimoni
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-bold mb-4">Kontak</h3>
              <div className="space-y-3">
                <div className="flex items-center text-gray-400">
                  <MapPin className="w-5 h-5 mr-2 flex-shrink-0" />
                  <span className="text-sm">Tianyar, Karangasem, Bali</span>
                </div>
                <div className="flex items-center text-gray-400">
                  <Phone className="w-5 h-5 mr-2 flex-shrink-0" />
                  <span className="text-sm">+62 812-3456-7890</span>
                </div>
                <div className="flex items-center text-gray-400">
                  <Mail className="w-5 h-5 mr-2 flex-shrink-0" />
                  <span className="text-sm">info@savanatianyar.com</span>
                </div>
              </div>
            </div>

            {/* Visit Hours */}
            <div>
              <h3 className="text-xl font-bold mb-4">Jam Kunjungan</h3>
              <div className="space-y-2 text-gray-400 text-sm">
                <p>Setiap Hari: 05:00 - 18:00 WITA</p>
                <p className="text-emerald-400 font-medium">
                  Sunrise: 05:30 - 07:00
                </p>
                <p className="text-amber-400 font-medium">
                  Sunset: 17:00 - 18:30
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Savana Tianyar. Dibuat dengan ❤️ untuk pariwisata Bali.
            </p>
            <p className="text-gray-400 text-sm mt-2 sm:mt-0">
              Desa Tianyar, Karangasem, Bali
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}