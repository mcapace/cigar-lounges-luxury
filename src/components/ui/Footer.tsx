'use client';

import Image from 'next/image';

export function Footer() {
  return (
    <footer className="bg-charcoal text-white py-16">
      <div className="container mx-auto px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          
          {/* Cigar Aficionado Column */}
          <div>
            <h4 className="text-lg font-medium mb-4">Cigar Aficionado</h4>
            <p className="text-sm text-gray-400">
              Curating exceptional cigar experiences since 1992
            </p>
          </div>
          
          {/* Davidoff Column */}
          <div>
            <h4 className="text-lg font-medium mb-4">Davidoff</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="https://davidoff.com" className="hover:text-gold">
                  Madison Avenue Flagship
                </a>
              </li>
              <li>
                <a href="https://davidoff.com" className="hover:text-gold">
                  6th Avenue Location
                </a>
              </li>
              <li>Swiss Excellence Since 1911</li>
            </ul>
          </div>
          
          {/* Barclay Rex Column */}
          <div>
            <h4 className="text-lg font-medium mb-4">Barclay Rex</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="https://barclayrex.com" className="hover:text-gold">
                  Wall Street Location
                </a>
              </li>
              <li>Family-Owned Since 1910</li>
              <li>113 Years of Tradition</li>
            </ul>
          </div>
          
          {/* Contact Column */}
          <div>
            <h4 className="text-lg font-medium mb-4">Visit</h4>
            <p className="text-sm text-gray-400">
              For reservations and current offerings, 
              please visit each venue's website
            </p>
          </div>
        </div>
        
        {/* Footer Bottom */}
        <div className="pt-8 border-t border-gray-700 text-center text-xs text-gray-400">
          <p>© 2024 Cigar Aficionado. Partner content.</p>
          <p className="mt-2">
            Featuring: Davidoff Madison Avenue • Davidoff 6th Avenue • Barclay Rex Wall Street
          </p>
        </div>
      </div>
    </footer>
  );
}