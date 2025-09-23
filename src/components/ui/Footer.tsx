'use client';

import Image from 'next/image';

export function Footer() {
  return (
    <footer className="bg-charcoal text-white py-20">
      <div className="container mx-auto px-8 max-w-7xl">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          
          {/* Cigar Aficionado Column */}
          <div className="md:col-span-1">
            <Image
              src="/images/cigar_aficionado_logo.png"
              alt="Cigar Aficionado"
              width={200}
              height={60}
              className="h-16 mb-6"
            />
            <p className="text-sm text-gray-300 leading-relaxed">
              Curating exceptional cigar experiences since 1992
            </p>
          </div>
          
          {/* Davidoff Column */}
          <div className="md:col-span-1">
            <h4 className="text-lg font-medium mb-6 text-white">Davidoff of Geneva</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li>
                <a href="https://davidoff.com" className="hover:text-gold transition-colors">
                  Madison Avenue Flagship
                </a>
              </li>
              <li>
                <a href="https://davidoff.com" className="hover:text-gold transition-colors">
                  6th Avenue Location
                </a>
              </li>
              <li className="text-gray-400">Swiss Excellence Since 1911</li>
            </ul>
          </div>
          
          {/* Barclay Rex Column */}
          <div className="md:col-span-1">
            <h4 className="text-lg font-medium mb-6 text-white">Barclay Rex</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li>
                <a href="https://barclayrex.com" className="hover:text-gold transition-colors">
                  Wall Street Location
                </a>
              </li>
              <li className="text-gray-400">Family-Owned Since 1910</li>
              <li className="text-gray-400">113 Years of Tradition</li>
            </ul>
          </div>
          
          {/* Contact Column */}
          <div className="md:col-span-1">
            <h4 className="text-lg font-medium mb-6 text-white">Visit</h4>
            <p className="text-sm text-gray-300 leading-relaxed">
              For reservations and current offerings, 
              please visit each venue's website
            </p>
          </div>
        </div>
        
        {/* Footer Bottom */}
        <div className="pt-8 border-t border-gray-600 text-center">
          <p className="text-sm text-gray-400 mb-2">© 2024 Cigar Aficionado. Partner content.</p>
          <p className="text-xs text-gray-500">
            Featuring: Davidoff Madison Avenue • Davidoff 6th Avenue • Barclay Rex Wall Street
          </p>
        </div>
      </div>
    </footer>
  );
}