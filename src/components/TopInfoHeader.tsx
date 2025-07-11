'use client';

import { useState, useEffect } from 'react';
import { Clock, Ticket, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function TopInfoHeader() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show header after scrolling 100px
      setIsVisible(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed top-0 left-0 right-0 z-50 bg-emerald-700/95 backdrop-blur-md text-white shadow-lg border-b border-emerald-600/30"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-center justify-between gap-3 py-3">
              {/* Left side - Opening hours and ticket info */}
              <div className="flex flex-wrap items-center gap-4 sm:gap-6">
                <div className="flex items-center group">
                  <Clock className="w-4 h-4 mr-2 text-emerald-200 group-hover:text-white transition-colors" />
                  <span className="text-sm font-medium">
                    Buka Setiap Hari: 
                    <span className="font-bold ml-1">05:00 - 18:00 WITA</span>
                  </span>
                </div>
                
                <div className="hidden md:flex items-center group">
                  <Ticket className="w-4 h-4 mr-2 text-emerald-200 group-hover:text-white transition-colors" />
                  <span className="text-sm font-medium">
                    HTM: 
                    <span className="font-bold ml-1">Domestik Rp 10.000</span>
                    <span className="text-emerald-200 mx-1">|</span>
                    <span className="font-bold">Mancanegara Rp 20.000</span>
                  </span>
                </div>
              </div>
              
              {/* Right side - Contact */}
              <div className="flex items-center">
                <a 
                  href="tel:+6281234567890" 
                  className="flex items-center group hover:bg-emerald-600/50 px-3 py-1.5 rounded-full transition-all duration-200"
                >
                  <Phone className="w-4 h-4 mr-2 text-emerald-200 group-hover:text-white transition-colors" />
                  <span className="text-sm font-semibold group-hover:text-white">
                    +62 812-3456-7890
                  </span>
                </a>
              </div>
            </div>
            
            {/* Mobile HTM info */}
            <div className="md:hidden pb-2">
              <div className="flex items-center group">
                <Ticket className="w-4 h-4 mr-2 text-emerald-200 group-hover:text-white transition-colors" />
                <span className="text-sm font-medium">
                  HTM: 
                  <span className="font-bold ml-1">Domestik Rp 10.000</span>
                  <span className="text-emerald-200 mx-1">|</span>
                  <span className="font-bold">Mancanegara Rp 20.000</span>
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}