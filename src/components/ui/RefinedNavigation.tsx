'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Menu, X } from 'lucide-react';
import Image from 'next/image';

export function RefinedNavigation() {
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

  return (
    <>
      {/* Refined Desktop Navigation */}
      <motion.nav 
        className={`
          fixed top-0 w-full z-50 transition-all duration-500
          ${isScrolled 
            ? 'bg-white/80 backdrop-blur-xl border-b border-light-gray/50 shadow-lg' 
            : 'bg-transparent'
          }
        `}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <div className="container mx-auto px-8 py-4">
          <div className="flex items-center justify-between max-w-7xl mx-auto">
            
            {/* Left: Cigar Aficionado Logo */}
            <motion.div 
              className="flex items-center"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src="/images/cigar_aficionado_logo.png"
                alt="Cigar Aficionado"
                width={140}
                height={42}
                className="h-10 w-auto"
              />
            </motion.div>
            
            {/* Center: Navigation Links */}
            <div className="hidden lg:flex items-center space-x-12">
              <div className="relative group">
                <motion.button 
                  className="flex items-center gap-2 text-charcoal hover:text-gold transition-all duration-300 font-medium text-base tracking-wide"
                  onMouseEnter={() => setIsDavidoffDropdownOpen(true)}
                  onMouseLeave={() => setIsDavidoffDropdownOpen(false)}
                  whileHover={{ y: -2 }}
                >
                  Davidoff
                  <motion.div
                    animate={{ rotate: isDavidoffDropdownOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </motion.div>
                </motion.button>
                
                {/* Elegant Dropdown */}
                <AnimatePresence>
                  {isDavidoffDropdownOpen && (
                    <motion.div 
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-4 bg-white/95 backdrop-blur-xl shadow-2xl p-6 min-w-[280px] border border-light-gray/30"
                      initial={{ opacity: 0, y: -10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -10, scale: 0.95 }}
                      transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                      onMouseEnter={() => setIsDavidoffDropdownOpen(true)}
                      onMouseLeave={() => setIsDavidoffDropdownOpen(false)}
                    >
                      <div className="space-y-3">
                        <a 
                          href="#davidoff-madison" 
                          className="block py-3 px-4 hover:bg-gold/10 hover:text-gold transition-all duration-300 rounded-lg group"
                        >
                          <div className="font-medium">Madison Avenue</div>
                          <div className="text-xs text-medium-gray">Flagship Experience</div>
                        </a>
                        <a 
                          href="#davidoff-sixth" 
                          className="block py-3 px-4 hover:bg-gold/10 hover:text-gold transition-all duration-300 rounded-lg group"
                        >
                          <div className="font-medium">6th Avenue</div>
                          <div className="text-xs text-medium-gray">Downtown Sophistication</div>
                        </a>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              
              <motion.a 
                href="#barclay-rex" 
                className="text-charcoal hover:text-gold transition-all duration-300 font-medium text-base tracking-wide"
                whileHover={{ y: -2 }}
              >
                Barclay Rex
              </motion.a>
            </div>
            
            {/* Right: Refined CTA */}
            <motion.button 
              className="px-6 py-3 text-sm font-medium text-charcoal border border-charcoal/30 hover:bg-charcoal hover:text-white transition-all duration-300 backdrop-blur-sm"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Reserve
            </motion.button>
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
                
                {/* Navigation Links */}
                <div className="space-y-8">
                  <motion.a 
                    href="#davidoff-madison" 
                    className="block text-2xl font-medium text-charcoal hover:text-gold transition-all duration-300"
                    onClick={() => setIsMobileMenuOpen(false)}
                    whileHover={{ scale: 1.05 }}
                  >
                    Davidoff
                  </motion.a>
                  <motion.a 
                    href="#barclay-rex" 
                    className="block text-2xl font-medium text-charcoal hover:text-gold transition-all duration-300"
                    onClick={() => setIsMobileMenuOpen(false)}
                    whileHover={{ scale: 1.05 }}
                  >
                    Barclay Rex
                  </motion.a>
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
