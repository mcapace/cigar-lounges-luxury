'use client';

import Image from 'next/image';

export function Footer() {
  return (
    <footer className="bg-cream py-12 border-t border-light-gray">
      <div className="container mx-auto px-8">
        <div className="flex flex-col items-center space-y-6">
          
          {/* Cigar Aficionado Logo */}
          <div className="flex justify-center">
            <Image
              src="/images/cigar_aficionado_logo.png"
              alt="Cigar Aficionado"
              width={150}
              height={45}
              className="h-10 w-auto"
            />
          </div>
          
          {/* Copyright */}
          <div className="text-center text-sm text-medium-gray">
            © 2025 Cigar Aficionado. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}