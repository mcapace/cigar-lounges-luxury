'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export function HeroSection() {

  return (
        <section className="min-h-[90vh] bg-gradient-to-b from-white via-cream to-off-white flex items-center relative">

      <div className="container mx-auto px-8 text-center max-w-6xl relative z-10">
        
        {/* Cigar Aficionado Logo */}
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <div className="flex justify-center mb-6">
            <Image
              src="/images/cigar_aficionado_logo.png"
              alt="Cigar Aficionado"
              width={240}
              height={72}
              className="h-14 w-auto"
            />
          </div>
          <span className="text-xs tracking-[0.3em] text-medium-gray uppercase font-light">
            Cigar Aficionado Select Partners
          </span>
        </motion.div>
        
            {/* Large, elegant headline as one cohesive title */}
            <div className="mb-16">
              <motion.div
                initial={{ opacity: 0, y: 80 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                <h1 className="hero-title text-charcoal font-display-optimized leading-tight">
                  Three Distinguished{' '}
                  <span className="text-gold italic font-serif">Destinations</span>
                </h1>
              </motion.div>
            </div>
        
        {/* Refined subtext */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <p className="body-text text-xl text-medium-gray max-w-3xl mx-auto leading-relaxed">
            An exclusive partnership showcasing New York's most storied cigar establishments. 
            From Davidoff's Swiss excellence across two Manhattan locations to 
            Barclay Rex's 113-year Wall Street legacy.
          </p>
        </motion.div>
        
        {/* Show all three partner logos */}
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
        >
          <div className="flex items-center justify-center gap-16">
            <img 
              src="/images/Davidoff Logo.png" 
              alt="Davidoff"
              className="h-12 object-contain"
            />
            <div className="w-px h-12 bg-gray-300"></div>
            <img 
              src="/images/Barclay Rex logo.png" 
              alt="Barclay Rex"
              className="h-18 object-contain"
            />
          </div>
        </motion.div>
        
        {/* Enhanced CTAs */}
        <motion.div 
          className="flex gap-6 justify-center"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6 }}
        >
                <motion.button
                  className="px-8 py-4 bg-gradient-to-r from-charcoal to-gray-700 text-white hover:from-gold hover:to-gold-dark transition-all duration-300 font-medium tracking-wide shadow-lg hover:shadow-xl"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Explore Their Stories
                </motion.button>
                <motion.button
                  className="px-8 py-4 border-2 border-gold text-gold hover:bg-gold hover:text-white transition-all duration-300 font-medium tracking-wide shadow-md hover:shadow-lg"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Visit Their Locations
                </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
