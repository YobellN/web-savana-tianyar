'use client';

import { Clock, Ticket, Phone } from 'lucide-react';

export default function TopInfoHeader() {
  return (
    <div className="bg-emerald-700 text-white py-2 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          {/* Left side - Opening hours */}
          <div className="flex items-center space-x-6">
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-2" />
              <span>Buka Setiap Hari: 05:00 - 18:00 WITA</span>
            </div>
            <div className="hidden sm:flex items-center">
              <Ticket className="w-4 h-4 mr-2" />
              <span>HTM: Domestik Rp 10.000 | Mancanegara Rp 20.000</span>
            </div>
          </div>
          
          {/* Right side - Contact */}
          <div className="flex items-center">
            <Phone className="w-4 h-4 mr-2" />
            <a 
              href="tel:+6281234567890" 
              className="hover:text-emerald-200 transition-colors"
            >
              +62 812-3456-7890
            </a>
          </div>
        </div>
        
        {/* Mobile HTM info */}
        <div className="sm:hidden mt-1 flex items-center">
          <Ticket className="w-4 h-4 mr-2" />
          <span>HTM: Domestik Rp 10.000 | Mancanegara Rp 20.000</span>
        </div>
      </div>
    </div>
  );
}