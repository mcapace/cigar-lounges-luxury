'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import { venueData } from '@/data/venues';
import { BRAND_COLORS } from '@/lib/constants';
import { MapPin, Phone, Clock, Star } from 'lucide-react';
import { SmartCTA, VenueSpecificCTA } from '@/components/ui/SmartCTA';

// Register GSAP ScrollTrigger
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export function VenueShowcase() {
  const [activeDavidoffLocation, setActiveDavidoffLocation] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const davidoffBrand = venueData.brands.find(b => b.id === 'davidoff');
  const barclayRexBrand = venueData.brands.find(b => b.id === 'barclay-rex');

  useEffect(() => {
    if (!sectionRef.current || !davidoffBrand || !barclayRexBrand) return;

    const ctx = gsap.context(() => {
      // Section reveal animation
      gsap.fromTo('.venue-section', 
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Card hover animations
      gsap.utils.toArray('.venue-card').forEach((card: any) => {
        gsap.set(card, { transformOrigin: 'center center' });
        
        card.addEventListener('mouseenter', () => {
          gsap.to(card, { scale: 1.02, duration: 0.3, ease: 'power2.out' });
        });
        
        card.addEventListener('mouseleave', () => {
          gsap.to(card, { scale: 1, duration: 0.3, ease: 'power2.out' });
        });
      });

    }, sectionRef);

    return () => ctx.revert();
  }, [davidoffBrand, barclayRexBrand]);

  if (!davidoffBrand || !barclayRexBrand) return null;

  return (
    <section ref={sectionRef} className="py-20 bg-luxury-charcoal">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16 venue-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-luxury-cream mb-6">
            <span className="gradient-text">Discover</span> Your Perfect Experience
          </h2>
          <p className="text-xl text-luxury-cream/70 max-w-3xl mx-auto">
            From Swiss precision to New York heritage, find the cigar lounge that speaks to your soul
          </p>
        </motion.div>

        {/* Davidoff Section */}
        <motion.div 
          className="mb-20 venue-section"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center mb-12">
            <Image
              src={davidoffBrand.logo}
              alt="Davidoff of Geneva"
              width={200}
              height={80}
              className="filter brightness-0 invert"
            />
          </div>

          {/* Location Tabs */}
          <div className="flex justify-center mb-8">
            <div className="bg-luxury-slate/20 rounded-lg p-1 backdrop-blur-sm">
              {davidoffBrand.locations.map((location, index) => (
                <button
                  key={location.id}
                  onClick={() => setActiveDavidoffLocation(index)}
                  className={`
                    px-6 py-3 rounded-md transition-all duration-300 font-medium
                    ${activeDavidoffLocation === index
                      ? 'bg-cigar-gold text-luxury-charcoal'
                      : 'text-luxury-cream/70 hover:text-luxury-cream'
                    }
                  `}
                >
                  {location.shortName}
                </button>
              ))}
            </div>
          </div>

          {/* Davidoff Locations Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {davidoffBrand.locations.map((location, index) => (
              <AnimatePresence key={location.id} mode="wait">
                {activeDavidoffLocation === index && (
                  <motion.div
                    key={`${location.id}-${index}`}
                    className="venue-card bg-luxury-slate/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-luxury-slate/20"
                    initial={{ opacity: 0, x: index === 0 ? -50 : 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: index === 0 ? -50 : 50 }}
                    transition={{ duration: 0.5 }}
                  >
                    {/* Hero Image */}
                    <div className="relative h-64 lg:h-80 overflow-hidden">
                      <Image
                        src={location.images.hero}
                        alt={location.name}
                        fill
                        className="object-cover transition-transform duration-700 hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-luxury-charcoal/80 via-transparent to-transparent" />
                      
                      {/* Location Badge */}
                      <div className="absolute top-4 left-4">
                        <div className="bg-cigar-gold/90 text-luxury-charcoal px-3 py-1 rounded-full text-sm font-medium">
                          {location.neighborhood}
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 lg:p-8">
                      <h3 className="text-2xl lg:text-3xl font-bold text-luxury-cream mb-2">
                        {location.name}
                      </h3>
                      <p className="text-cigar-gold text-lg mb-4">
                        {location.tagline}
                      </p>
                      <p className="text-luxury-cream/80 mb-6 leading-relaxed">
                        {location.description}
                      </p>

                      {/* Features */}
                      <div className="mb-6">
                        <div className="flex flex-wrap gap-2">
                          {location.features.slice(0, 4).map((feature) => (
                            <span
                              key={feature}
                              className="bg-cigar-gold/10 text-cigar-gold px-3 py-1 rounded-full text-sm border border-cigar-gold/20"
                            >
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Location Info */}
                      <div className="space-y-3 mb-6 text-luxury-cream/70">
                        <div className="flex items-center space-x-3">
                          <MapPin size={16} className="text-cigar-gold" />
                          <span className="text-sm">{location.address}</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Phone size={16} className="text-cigar-gold" />
                          <span className="text-sm">{location.phone}</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Clock size={16} className="text-cigar-gold" />
                          <span className="text-sm">Mon-Fri: {location.hours.monday}</span>
                        </div>
                      </div>

                      {/* CTA */}
                      <motion.button
                        className="w-full bg-cigar-gold text-luxury-charcoal py-3 rounded-lg font-semibold hover:bg-cigar-gold/90 transition-colors"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        Reserve Visit
                      </motion.button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            ))}
          </div>
        </motion.div>

        {/* Barclay Rex Section - Enhanced for Visual Balance */}
        <motion.div 
          className="venue-section"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center mb-12">
            <Image
              src={barclayRexBrand.logo}
              alt="Barclay Rex"
              width={200}
              height={80}
              className="filter brightness-0 invert"
            />
          </div>

          {/* Barclay Rex Enhanced Card */}
          <div className="max-w-4xl mx-auto">
            <div className="venue-card bg-luxury-slate/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-luxury-slate/20">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                
                {/* Image Gallery */}
                <div className="relative">
                  <div className="relative h-64 lg:h-full min-h-[400px] overflow-hidden">
                    <Image
                      src={barclayRexBrand.locations[0].images.hero}
                      alt={barclayRexBrand.locations[0].name}
                      fill
                      className="object-cover transition-transform duration-700 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-luxury-charcoal/80 via-transparent to-transparent" />
                    
                    {/* Heritage Badge */}
                    <div className="absolute top-4 left-4">
                      <div className="bg-cigar-copper/90 text-luxury-cream px-3 py-1 rounded-full text-sm font-medium">
                        Since 1910
                      </div>
                    </div>

                    {/* Gallery Preview */}
                    <div className="absolute bottom-4 right-4">
                      <div className="flex space-x-2">
                        {barclayRexBrand.locations[0].images.gallery.slice(0, 3).map((img, index) => (
                          <div key={index} className="w-12 h-12 rounded-lg overflow-hidden border-2 border-luxury-cream/30">
                            <Image
                              src={img}
                              alt={`Gallery ${index + 1}`}
                              width={48}
                              height={48}
                              className="object-cover w-full h-full"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Enhanced Content */}
                <div className="p-6 lg:p-8">
                  <h3 className="text-2xl lg:text-3xl font-bold text-luxury-cream mb-2">
                    {barclayRexBrand.locations[0].name}
                  </h3>
                  <p className="text-cigar-copper text-lg mb-4">
                    {barclayRexBrand.locations[0].tagline}
                  </p>
                  <p className="text-luxury-cream/80 mb-6 leading-relaxed">
                    {barclayRexBrand.locations[0].description}
                  </p>

                  {/* Signature */}
                  <div className="bg-cigar-copper/10 border border-cigar-copper/20 rounded-lg p-4 mb-6">
                    <p className="text-cigar-copper font-medium italic">
                      "{barclayRexBrand.locations[0].signature}"
                    </p>
                  </div>

                  {/* Enhanced Features */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {barclayRexBrand.locations[0].features.map((feature) => (
                        <span
                          key={feature}
                          className="bg-cigar-copper/10 text-cigar-copper px-3 py-1 rounded-full text-sm border border-cigar-copper/20"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Location Info */}
                  <div className="space-y-3 mb-6 text-luxury-cream/70">
                    <div className="flex items-center space-x-3">
                      <MapPin size={16} className="text-cigar-copper" />
                      <span className="text-sm">{barclayRexBrand.locations[0].address}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone size={16} className="text-cigar-copper" />
                      <span className="text-sm">{barclayRexBrand.locations[0].phone}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Clock size={16} className="text-cigar-copper" />
                      <span className="text-sm">Mon-Fri: {barclayRexBrand.locations[0].hours.monday}</span>
                    </div>
                  </div>

                  {/* History Highlight */}
                  {barclayRexBrand.locations[0].history && (
                    <div className="mb-6 p-4 bg-luxury-slate/5 rounded-lg border border-luxury-slate/10">
                      <h4 className="text-cigar-copper font-medium mb-2">Heritage</h4>
                      <p className="text-luxury-cream/70 text-sm">
                        Founded in {barclayRexBrand.locations[0].history.founded} by {barclayRexBrand.locations[0].history.founder}
                      </p>
                    </div>
                  )}

                  {/* CTA */}
                  <motion.button
                    className="w-full bg-cigar-copper text-luxury-cream py-3 rounded-lg font-semibold hover:bg-cigar-copper/90 transition-colors"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Reserve Visit
                  </motion.button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
