'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { venueData } from '@/data/venues';
import { BRAND_COLORS } from '@/lib/constants';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDavidoffDropdownOpen, setIsDavidoffDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const davidoffBrand = venueData.brands.find(b => b.id === 'davidoff');
  const barclayRexBrand = venueData.brands.find(b => b.id === 'barclay-rex');

  return (
    <>
      {/* Desktop Navigation */}
      <motion.nav 
        className={`
          fixed top-0 left-0 right-0 z-50 transition-all duration-300
          ${isScrolled 
            ? 'bg-luxury-charcoal/95 backdrop-blur-lg border-b border-luxury-slate/20' 
            : 'bg-transparent'
          }
        `}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-20 lg:h-24">
            
            {/* Left: Empty space for balance */}
            <div className="hidden lg:block w-40"></div>

            {/* Center: Brand Navigation */}
            <div className="flex flex-col items-center flex-1">
              {/* Centered Brand Navigation */}
              <div className="hidden lg:flex items-center space-x-8">
                
                {/* Davidoff Dropdown */}
                <div className="relative">
                  <motion.button
                    className="flex items-center space-x-2 text-luxury-cream hover:text-cigar-gold transition-colors"
                    onMouseEnter={() => setIsDavidoffDropdownOpen(true)}
                    onMouseLeave={() => setIsDavidoffDropdownOpen(false)}
                    whileHover={{ scale: 1.05 }}
                  >
                    <Image
                      src={davidoffBrand?.logo || ''}
                      alt="Davidoff"
                      width={80}
                      height={32}
                      className="filter brightness-0 invert"
                    />
                    <span className="text-sm font-medium">Davidoff</span>
                    <svg 
                      className="w-4 h-4 transition-transform"
                      style={{ 
                        transform: isDavidoffDropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)' 
                      }}
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </motion.button>

                  <AnimatePresence>
                    {isDavidoffDropdownOpen && (
                      <motion.div
                        className="absolute top-full left-0 mt-2 w-64 bg-luxury-charcoal/95 backdrop-blur-lg rounded-lg border border-luxury-slate/20 shadow-2xl"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        onMouseEnter={() => setIsDavidoffDropdownOpen(true)}
                        onMouseLeave={() => setIsDavidoffDropdownOpen(false)}
                      >
                        <div className="p-4">
                          <div className="space-y-3">
                            {davidoffBrand?.locations.map((location) => (
                              <motion.a
                                key={location.id}
                                href={`#${location.id}`}
                                className="block p-3 rounded-lg hover:bg-cigar-gold/10 transition-colors group"
                                whileHover={{ x: 5 }}
                              >
                                <div className="font-medium text-luxury-cream group-hover:text-cigar-gold">
                                  {location.name}
                                </div>
                                <div className="text-sm text-luxury-cream/60">
                                  {location.neighborhood}
                                </div>
                              </motion.a>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Barclay Rex */}
                <motion.a
                  href="#barclay-rex-wall-st"
                  className="flex items-center space-x-2 text-luxury-cream hover:text-cigar-copper transition-colors"
                  whileHover={{ scale: 1.05 }}
                >
                  <Image
                    src={barclayRexBrand?.logo || ''}
                    alt="Barclay Rex"
                    width={80}
                    height={32}
                    className="filter brightness-0 invert"
                  />
                  <span className="text-sm font-medium">Barclay Rex</span>
                </motion.a>
              </div>

              {/* Cigar Aficionado Logo Below */}
              <motion.div 
                className="flex items-center space-x-2 mt-1"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <span className="text-lg font-bold text-luxury-cream">
                  Cigar Aficionado
                </span>
                <span className="text-cigar-gold text-sm">Select</span>
              </motion.div>
            </div>

            {/* Right: Reserve Experience Button */}
            <div className="flex items-center space-x-4">
              <motion.button
                className="btn-luxury-premium text-sm px-6 py-2 hidden lg:block"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Reserve Experience
              </motion.button>
              
              {/* Mobile Menu Button */}
              <motion.button
                className="lg:hidden text-luxury-cream"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                whileTap={{ scale: 0.95 }}
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Backdrop */}
            <div 
              className="absolute inset-0 bg-luxury-charcoal/95 backdrop-blur-lg"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            
            {/* Menu Content */}
            <motion.div
              className="relative h-full flex flex-col justify-center items-center text-center"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <div className="space-y-12">
                
                {/* Our Partners Section */}
                <div>
                  <h3 className="text-cigar-gold text-lg font-medium mb-8">Our Partners</h3>
                  
                  <div className="space-y-8">
                    
                    {/* Davidoff Section */}
                    <div>
                      <div className="flex items-center justify-center space-x-3 mb-4">
                        <Image
                          src={davidoffBrand?.logo || ''}
                          alt="Davidoff"
                          width={120}
                          height={48}
                          className="filter brightness-0 invert"
                        />
                        <span className="text-luxury-cream font-medium">(2 locations)</span>
                      </div>
                      <div className="space-y-3">
                        {davidoffBrand?.locations.map((location) => (
                          <motion.a
                            key={location.id}
                            href={`#${location.id}`}
                            className="block text-luxury-cream/80 hover:text-cigar-gold transition-colors"
                            onClick={() => setIsMobileMenuOpen(false)}
                            whileHover={{ scale: 1.05 }}
                          >
                            {location.name}
                          </motion.a>
                        ))}
                      </div>
                    </div>

                    {/* Barclay Rex Section */}
                    <div>
                      <div className="flex items-center justify-center space-x-3 mb-4">
                        <Image
                          src={barclayRexBrand?.logo || ''}
                          alt="Barclay Rex"
                          width={120}
                          height={48}
                          className="filter brightness-0 invert"
                        />
                      </div>
                      <motion.a
                        href="#barclay-rex-wall-st"
                        className="block text-luxury-cream/80 hover:text-cigar-copper transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                        whileHover={{ scale: 1.05 }}
                      >
                        Barclay Rex
                      </motion.a>
                    </div>
                  </div>
                </div>

                {/* Reserve CTA */}
                <motion.button
                  className="btn-luxury-premium px-8 py-4"
                  onClick={() => setIsMobileMenuOpen(false)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Reserve Experience
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
