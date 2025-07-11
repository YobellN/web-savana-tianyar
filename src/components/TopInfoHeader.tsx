'use client';

import { useState, useEffect } from 'react';
import { Clock, Ticket, Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function TopInfoHeader() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show header after scrolling past hero section (approximately 80vh)
      setIsVisible(window.scrollY > window.innerHeight * 0.8);
    };

    // Set initial state
    handleScroll();
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.div
      animate={isVisible ? { y: 0, opacity: 1 } : { y: -60, opacity: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-emerald-700/95 backdrop-blur-md text-white shadow-lg border-b border-emerald-600/30"
      style={{ pointerEvents: isVisible ? 'auto' : 'none' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-2">
          <div className="flex items-center gap-4 text-xs">
            <div className="flex items-center">
              <Clock className="w-3 h-3 mr-1.5 text-emerald-200" />
              <span className="font-medium">
                05:00-18:00 WITA
              </span>
            </div>
            
            <div className="hidden sm:flex items-center">
              <Ticket className="w-3 h-3 mr-1.5 text-emerald-200" />
              <span className="font-medium">
                HTM: <span className="font-bold">10K</span>/<span className="font-bold">20K</span>
              </span>
            </div>
          </div>
          
          {/* Right side - Contact */}
          <Link 
            href="tel:+6281234567890" 
            className="flex items-center hover:bg-emerald-600/50 px-2 py-1 rounded-md transition-all duration-200 text-xs"
          >
            <Phone className="w-3 h-3 mr-1.5 text-emerald-200" />
            <span className="font-semibold">
              0812-3456-7890
            </span>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}