'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';

export function RefinedNavigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Refined Desktop Navigation */}
      <motion.nav 
        className={`
          sticky top-0 w-full z-50 transition-all duration-500 bg-white/95 backdrop-blur-xl border-b border-light-gray/50 shadow-sm
        `}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <div className="container mx-auto px-8 py-4">
          <div className="flex items-center justify-between max-w-7xl mx-auto">
            
            {/* Left: Cigar Aficionado Logo */}
            <div className="flex items-center">
              <Image
                src="/images/cigar_aficionado_logo.png"
                alt="Cigar Aficionado"
                width={120}
                height={36}
                className="h-8 w-auto"
              />
            </div>
            
            {/* Center: Empty space for balance */}
            <div className="hidden lg:flex items-center justify-center">
              {/* Navigation links removed as requested */}
            </div>
            
            {/* Right: Visit Links */}
            <div className="hidden lg:flex items-center space-x-4">
              <motion.a 
                href="https://davidoff.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-sm font-medium text-charcoal hover:text-gold transition-all duration-300"
                whileHover={{ y: -2 }}
              >
                Visit Davidoff
              </motion.a>
              <motion.a 
                href="https://barclayrex.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-sm font-medium text-charcoal hover:text-gold transition-all duration-300"
                whileHover={{ y: -2 }}
              >
                Visit Barclay Rex
              </motion.a>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Button */}
      <motion.button
        className="lg:hidden fixed top-6 right-6 z-50 p-3 bg-white/90 backdrop-blur-xl rounded-full shadow-lg"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        whileTap={{ scale: 0.95 }}
        whileHover={{ scale: 1.05 }}
      >
        <AnimatePresence mode="wait">
          {isMobileMenuOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <X size={20} className="text-charcoal" />
            </motion.div>
          ) : (
            <motion.div
              key="menu"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Menu size={20} className="text-charcoal" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Refined Mobile Menu */}
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
              className="absolute inset-0 bg-white/95 backdrop-blur-xl"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            
            {/* Menu Content */}
            <motion.div
              className="relative h-full flex flex-col justify-center items-center text-center px-8"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <div className="space-y-12">
                
                    {/* Navigation Links Removed */}
                    <div className="space-y-8">
                      {/* Navigation links removed as requested */}
                    </div>

                {/* Reserve CTA */}
                <motion.button
                  className="px-8 py-4 text-sm font-medium text-charcoal border border-charcoal hover:bg-charcoal hover:text-white transition-all duration-300"
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
