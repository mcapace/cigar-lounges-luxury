'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { AdvancedMotion, MagneticHover, TextReveal } from '@/components/animations/AdvancedMotion';

export function HeroSection() {

  return (
        <section className="min-h-[90vh] flex items-center relative overflow-hidden">
          {/* Video Background */}
          <div className="absolute inset-0 w-full h-full">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            >
              <source src="/Video/AdobeStock_181849900.mov" type="video/mp4" />
              <source src="/Video/AdobeStock_181849900.mov" type="video/quicktime" />
            </video>
            {/* Overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-cream/70 to-off-white/80"></div>
          </div>

      <div className="container mx-auto px-8 text-center max-w-6xl relative z-10">
        
        {/* Cigar Aficionado Logo */}
        <AdvancedMotion variant="fade" delay={0.2} className="mb-8">
          <MagneticHover>
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
          </MagneticHover>
        </AdvancedMotion>
        
        {/* Large, elegant headline with text reveal */}
        <div className="mb-16">
          <AdvancedMotion variant="slide" direction="up" distance={80} delay={0.4}>
            <h1 className="hero-title text-charcoal mb-8 font-display-optimized leading-normal">
              <TextReveal delay={0.6}>
                Three Distinguished
              </TextReveal>
            </h1>
          </AdvancedMotion>
          
          <AdvancedMotion variant="scale" delay={0.8}>
            <motion.span 
              className="hero-subtitle block text-gold gradient-text leading-tight"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              Destinations
            </motion.span>
          </AdvancedMotion>
        </div>
        
        {/* Refined subtext */}
        <AdvancedMotion variant="fade" delay={1.2} className="mb-16">
          <p className="body-text text-xl text-medium-gray max-w-3xl mx-auto leading-relaxed">
            An exclusive partnership showcasing New York's most storied cigar establishments. 
            From Davidoff's Swiss excellence across two Manhattan locations to 
            Barclay Rex's 113-year Wall Street legacy.
          </p>
        </AdvancedMotion>
        
        {/* Show all three partner logos */}
        <AdvancedMotion variant="fade" delay={1.4} className="mb-12">
          <div className="flex items-center justify-center gap-12">
            <img 
              src="/images/Davidoff Logo.png" 
              alt="Davidoff"
              className="h-8 object-contain"
            />
            <div className="w-px h-8 bg-gray-300"></div>
            <img 
              src="/images/Barclay Rex logo.png" 
              alt="Barclay Rex"
              className="h-10 object-contain"
            />
          </div>
        </AdvancedMotion>
        
        {/* Enhanced CTAs */}
        <AdvancedMotion variant="slide" direction="up" distance={40} delay={1.6}>
          <div className="flex gap-6 justify-center">
            <motion.a 
              href="#heritage"
              className="px-8 py-4 bg-charcoal text-white hover:bg-gold transition-all duration-300 font-medium tracking-wide inline-block"                                                                                          
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Their Stories
            </motion.a>
            <motion.a 
              href="#plan-visit"
              className="px-8 py-4 border border-charcoal text-charcoal hover:bg-charcoal hover:text-white transition-all duration-300 font-medium tracking-wide inline-block"                                                       
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Visit Their Locations
            </motion.a>
          </div>
        </AdvancedMotion>
      </div>
    </section>
  );
}
