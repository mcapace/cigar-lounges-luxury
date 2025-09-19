'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import { venueData } from '@/data/venues';
import { BRAND_COLORS } from '@/lib/constants';

// Register GSAP ScrollTrigger
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export function HeroSection() {
  const [hoveredBrand, setHoveredBrand] = useState<string | null>(null);
  const [currentTagline, setCurrentTagline] = useState(0);
  const heroRef = useRef<HTMLElement>(null);

  const heroTaglines = [
    "Three Legendary Destinations. One Exceptional Standard.",
    "Where Swiss Precision Meets New York Tradition",
    "Curated Excellence Since 1910"
  ];
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start']
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  // Rotate taglines every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTagline((prev) => (prev + 1) % heroTaglines.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [heroTaglines.length]);

  useEffect(() => {
    if (!heroRef.current) return;

    const ctx = gsap.context(() => {
      // Parallax background images
      gsap.to('.parallax-bg', {
        yPercent: -50,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });

      // Logo animations
      gsap.fromTo('.brand-logo', 
        { scale: 0.8, opacity: 0 },
        { 
          scale: 1, 
          opacity: 1, 
          duration: 1,
          stagger: 0.2,
          ease: 'back.out(1.7)'
        }
      );

      // Text animations
      gsap.fromTo('.hero-text', 
        { y: 50, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 0.8,
          stagger: 0.1,
          delay: 0.3
        }
      );

    }, heroRef);

    return () => ctx.revert();
  }, []);

  const davidoffBrand = venueData.brands.find(b => b.id === 'davidoff');
  const barclayRexBrand = venueData.brands.find(b => b.id === 'barclay-rex');

  if (!davidoffBrand || !barclayRexBrand) return null;

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-luxury-charcoal/90 to-luxury-charcoal/95 z-10" />
      
      {/* Split Screen Container */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
          
          {/* Davidoff Section */}
          <motion.div 
            className={`
              relative flex flex-col items-center justify-center p-8 lg:p-16
              transition-all duration-700 ease-out
              ${hoveredBrand === 'barclay-rex' ? 'lg:w-[40%]' : 'lg:w-[50%]'}
            `}
            onMouseEnter={() => setHoveredBrand('davidoff')}
            onMouseLeave={() => setHoveredBrand(null)}
            style={{
              background: hoveredBrand === 'davidoff' 
                ? `linear-gradient(135deg, ${BRAND_COLORS.davidoff.primary}15, transparent)`
                : 'transparent'
            }}
          >
            {/* Background Image */}
            <div 
              className="absolute inset-0 parallax-bg"
              style={{
                backgroundImage: `url(${davidoffBrand.locations[0].images.hero})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                transform: `translateY(${hoveredBrand === 'davidoff' ? -10 : 0}px)`,
              }}
            />
            
            {/* Content */}
            <div className="relative z-10 text-center">
              {/* Logo */}
              <motion.div 
                className="brand-logo mb-8"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={davidoffBrand.logo}
                  alt="Davidoff of Geneva"
                  width={200}
                  height={80}
                  className="mx-auto filter drop-shadow-2xl"
                  priority
                />
              </motion.div>

              {/* Rotating Tagline */}
              <motion.h2 
                key={currentTagline}
                className="hero-text text-2xl lg:text-3xl font-light text-luxury-cream mb-4"
                style={{ color: BRAND_COLORS.davidoff.accent }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                {heroTaglines[currentTagline]}
              </motion.h2>

              {/* Location Count */}
              <motion.div 
                className="hero-text inline-flex items-center px-4 py-2 rounded-full border border-cigar-gold/30 bg-cigar-gold/10 mb-6"
              >
                <span className="text-cigar-gold font-medium">
                  2 Manhattan Locations
                </span>
              </motion.div>

              {/* Description */}
              <motion.p 
                className="hero-text text-luxury-cream/80 text-lg mb-8 max-w-md mx-auto leading-relaxed"
              >
                Where Swiss Precision Meets New York Tradition
              </motion.p>

              {/* CTA */}
              <motion.button 
                className="hero-text btn-luxury-premium group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Reserve Your Experience</span>
                <svg 
                  className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </motion.button>
            </div>
          </motion.div>

          {/* Barclay Rex Section */}
          <motion.div 
            className={`
              relative flex flex-col items-center justify-center p-8 lg:p-16
              transition-all duration-700 ease-out
              ${hoveredBrand === 'davidoff' ? 'lg:w-[40%]' : 'lg:w-[50%]'}
            `}
            onMouseEnter={() => setHoveredBrand('barclay-rex')}
            onMouseLeave={() => setHoveredBrand(null)}
            style={{
              background: hoveredBrand === 'barclay-rex' 
                ? `linear-gradient(135deg, ${BRAND_COLORS['barclay-rex'].primary}15, transparent)`
                : 'transparent'
            }}
          >
            {/* Background Image */}
            <div 
              className="absolute inset-0 parallax-bg"
              style={{
                backgroundImage: `url(${barclayRexBrand.locations[0].images.hero})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                transform: `translateY(${hoveredBrand === 'barclay-rex' ? -10 : 0}px)`,
              }}
            />
            
            {/* Content */}
            <div className="relative z-10 text-center">
              {/* Logo */}
              <motion.div 
                className="brand-logo mb-8"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={barclayRexBrand.logo}
                  alt="Barclay Rex"
                  width={200}
                  height={80}
                  className="mx-auto filter drop-shadow-2xl"
                  priority
                />
              </motion.div>

              {/* Tagline */}
              <motion.h2 
                className="hero-text text-2xl lg:text-3xl font-light text-luxury-cream mb-4"
                style={{ color: BRAND_COLORS['barclay-rex'].accent }}
              >
                {barclayRexBrand.tagline}
              </motion.h2>

              {/* Heritage Badge */}
              <motion.div 
                className="hero-text inline-flex items-center px-4 py-2 rounded-full border border-cigar-copper/30 bg-cigar-copper/10 mb-6"
              >
                <span className="text-cigar-copper font-medium">
                  Since 1910
                </span>
              </motion.div>

              {/* Description */}
              <motion.p 
                className="hero-text text-luxury-cream/80 text-lg mb-8 max-w-md mx-auto leading-relaxed"
              >
                Four Generations of Tobacco Excellence
              </motion.p>

              {/* CTA */}
              <motion.button 
                className="hero-text btn-luxury-premium group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Explore Collections</span>
                <svg 
                  className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2 }}
      >
        <div className="flex flex-col items-center text-luxury-cream/60">
          <span className="text-sm mb-2">Scroll to Explore</span>
          <motion.div 
            className="w-6 h-10 border-2 border-luxury-cream/30 rounded-full flex justify-center"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <motion.div 
              className="w-1 h-3 bg-cigar-gold rounded-full mt-2"
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
