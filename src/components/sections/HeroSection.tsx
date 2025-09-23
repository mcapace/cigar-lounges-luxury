'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { AdvancedMotion, MagneticHover, TextReveal } from '@/components/animations/AdvancedMotion';
import { useParallaxScroll } from '@/hooks/useParallaxScroll';

export function HeroSection() {
  const { ref: parallaxRef, transform } = useParallaxScroll({ speed: 0.3, direction: 'up' });

  return (
        <section className="min-h-[90vh] bg-gradient-to-b from-white via-cream to-off-white flex items-center relative overflow-hidden">
      {/* Enhanced Parallax Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div 
          ref={parallaxRef}
          style={{ transform }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold rounded-full blur-3xl"
        />
        <div 
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-charcoal rounded-full blur-3xl"
          style={{ transform: 'translateY(-20px)' }}
        />
        <div 
          className="absolute top-1/2 right-1/3 w-64 h-64 bg-gold/30 rounded-full blur-2xl"
          style={{ transform: 'translateY(30px)' }}
        />
        <div 
          className="absolute bottom-1/3 left-1/3 w-72 h-72 bg-charcoal/20 rounded-full blur-3xl"
          style={{ transform: 'translateY(-40px)' }}
        />
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
            Discover the heritage, craftsmanship, and unique experiences that define 
            each of these celebrated venues.
          </p>
        </AdvancedMotion>
        
        {/* Enhanced CTAs */}
        <AdvancedMotion variant="slide" direction="up" distance={40} delay={1.4}>
          <div className="flex gap-8 justify-center">
            <MagneticHover strength={0.2}>
              <motion.button 
                className="btn-luxury-premium luxury-button px-8 py-4 text-sm font-medium tracking-wide"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore Their Stories
              </motion.button>
            </MagneticHover>
            <MagneticHover strength={0.2}>
              <motion.button 
                className="btn-luxury-outline luxury-button px-8 py-4 text-sm font-medium tracking-wide"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Visit Their Locations
              </motion.button>
            </MagneticHover>
          </div>
        </AdvancedMotion>
      </div>
    </section>
  );
}
