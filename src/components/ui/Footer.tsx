'use client';

import Image from 'next/image';

export function Footer() {
  return (
    <footer className="bg-cream py-8 border-t border-light-gray">
      <div className="container mx-auto px-8 max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Cigar Aficionado Logo */}
          <div className="flex items-center gap-4">
            <Image
              src="/images/cigar_aficionado_logo.png"
              alt="Cigar Aficionado"
              width={160}
              height={48}
              className="h-10"
            />
          </div>
          
          {/* Partner Links */}
          <div className="flex items-center gap-8">
            <a 
              href="https://us.davidoffgeneva.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm text-gray-600 hover:text-gold transition-colors"
            >
              Davidoff
            </a>
            <a 
              href="https://barclayrex.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm text-gray-600 hover:text-gold transition-colors"
            >
              Barclay Rex
            </a>
          </div>
        </div>
        
        {/* Footer Bottom */}
        <div className="pt-6 border-t border-gray-300 text-center">
          <p className="text-sm text-gray-500">© 2025 Cigar Aficionado. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}