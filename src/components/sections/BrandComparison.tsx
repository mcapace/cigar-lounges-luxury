'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import { venueData } from '@/data/venues';
import { BRAND_COLORS } from '@/lib/constants';
import { Crown, Building, Clock, Users } from 'lucide-react';

// Register GSAP ScrollTrigger
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export function BrandComparison() {
  const [selectedProfile, setSelectedProfile] = useState<string | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const davidoffBrand = venueData.brands.find(b => b.id === 'davidoff');
  const barclayRexBrand = venueData.brands.find(b => b.id === 'barclay-rex');

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Profile cards animation
      gsap.fromTo('.profile-card', 
        { opacity: 0, y: 50, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Recommendation reveal
      gsap.fromTo('.recommendation-card', 
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.recommendation-card',
            start: 'top 90%',
            toggleActions: 'play none none reverse',
          },
        }
      );

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const profiles = [
    {
      id: 'power-player',
      title: 'For the Power Player',
      icon: <Crown className="w-8 h-8 text-cigar-gold" />,
      description: 'When privacy and prestige are paramount',
      brand: 'davidoff-madison',
      venue: davidoffBrand?.locations[0],
      highlights: [
        'Executive meetings requiring absolute privacy',
        'Celebrating milestone achievements',
        'Building your personal collection',
        'Experiencing the pinnacle of Swiss luxury'
      ],
      color: BRAND_COLORS.davidoff.primary,
      bgColor: 'from-cigar-gold/10 to-transparent'
    },
    {
      id: 'modern-connoisseur',
      title: 'For the Modern Connoisseur',
      icon: <Building className="w-8 h-8 text-cigar-gold" />,
      description: 'Where deals close over aged rum and creative minds gather',
      brand: 'davidoff-sixth',
      venue: davidoffBrand?.locations[1],
      highlights: [
        'After-work unwinding',
        'Social business meetings',
        'Pre-theater indulgence',
        'Discovering new favorites'
      ],
      color: BRAND_COLORS.davidoff.primary,
      bgColor: 'from-cigar-gold/10 to-transparent'
    },
    {
      id: 'heritage-seeker',
      title: 'For the Heritage Seeker',
      icon: <Clock className="w-8 h-8 text-cigar-copper" />,
      description: 'Some things can\'t be bought—only earned through time',
      brand: 'barclay-rex-wall-st',
      venue: barclayRexBrand?.locations[0],
      highlights: [
        'Experiencing authentic New York history',
        'Discovering rare and vintage cigars',
        'Custom blend consultations',
        'Collectors seeking the extraordinary'
      ],
      color: BRAND_COLORS['barclay-rex'].primary,
      bgColor: 'from-cigar-copper/10 to-transparent'
    }
  ];

  if (!davidoffBrand || !barclayRexBrand) return null;

  return (
    <section ref={sectionRef} className="py-20 bg-luxury-black">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-luxury-cream mb-6">
            <span className="gradient-text">Find Your Perfect</span> Experience
          </h2>
          <p className="text-xl text-luxury-cream/70 max-w-3xl mx-auto">
            Three legendary destinations, each offering a unique atmosphere while maintaining 
            our unwavering commitment to luxury and excellence.
          </p>
        </motion.div>

        {/* Profile Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {profiles.map((profile, index) => (
            <motion.div
              key={profile.id}
              className={`profile-card cursor-pointer group`}
              onClick={() => setSelectedProfile(profile.id)}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className={`
                relative p-8 rounded-2xl border-2 transition-all duration-300
                ${selectedProfile === profile.id 
                  ? 'border-cigar-gold bg-cigar-gold/5' 
                  : 'border-luxury-slate/20 bg-luxury-slate/10 hover:border-luxury-slate/40'
                }
                backdrop-blur-sm
              `}>
                
                {/* Background Gradient */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${profile.bgColor} opacity-50`} />
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Icon & Title */}
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="p-3 rounded-lg bg-luxury-slate/20">
                      {profile.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-luxury-cream">
                        {profile.title}
                      </h3>
                      <p className="text-luxury-cream/60 text-sm">
                        {profile.description}
                      </p>
                    </div>
                  </div>

                  {/* Venue Preview */}
                  {profile.venue && (
                    <div className="mb-6">
                      <div className="flex items-center space-x-3 mb-3">
                        <Image
                          src={profile.id === 'heritage-seeker' ? barclayRexBrand.logo : davidoffBrand.logo}
                          alt={profile.venue.name}
                          width={60}
                          height={24}
                          className="filter brightness-0 invert"
                        />
                        <span className="text-cigar-gold font-medium">
                          {profile.venue.name}
                        </span>
                      </div>
                      <p className="text-luxury-cream/80 text-sm leading-relaxed">
                        {profile.venue.signature}
                      </p>
                    </div>
                  )}

                  {/* Highlights */}
                  <div className="space-y-2">
                    {profile.highlights.slice(0, 3).map((highlight, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <div 
                          className="w-2 h-2 rounded-full"
                          style={{ backgroundColor: profile.color }}
                        />
                        <span className="text-luxury-cream/70 text-sm">
                          {highlight}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <motion.button
                    className={`
                      w-full mt-6 py-3 rounded-lg font-semibold transition-all duration-300
                      ${selectedProfile === profile.id
                        ? 'bg-cigar-gold text-luxury-charcoal'
                        : 'bg-transparent border border-luxury-slate/30 text-luxury-cream hover:border-cigar-gold'
                      }
                    `}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {selectedProfile === profile.id ? 'Selected' : 'Select This Experience'}
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Recommendation Card */}
        <AnimatePresence>
          {selectedProfile && (
            <motion.div
              className="recommendation-card max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-luxury-slate/10 backdrop-blur-sm rounded-2xl border border-luxury-slate/20 p-8 lg:p-12">
                {(() => {
                  const profile = profiles.find(p => p.id === selectedProfile);
                  if (!profile || !profile.venue) return null;

                  return (
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      
                      {/* Venue Image */}
                      <div className="relative">
                        <div className="aspect-video rounded-lg overflow-hidden">
                          <Image
                            src={profile.venue.images.hero}
                            alt={profile.venue.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        
                        {/* Brand Badge */}
                        <div className="absolute top-4 left-4">
                          <div className="bg-luxury-charcoal/90 backdrop-blur-sm rounded-lg p-3">
                            <Image
                              src={profile.id === 'heritage-seeker' ? barclayRexBrand.logo : davidoffBrand.logo}
                              alt="Brand Logo"
                              width={80}
                              height={32}
                              className="filter brightness-0 invert"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="space-y-6">
                        <div>
                          <h3 className="text-2xl lg:text-3xl font-bold text-luxury-cream mb-2">
                            {profile.venue.name}
                          </h3>
                          <p className="text-cigar-gold text-lg mb-4">
                            {profile.venue.tagline}
                          </p>
                          <p className="text-luxury-cream/80 leading-relaxed">
                            {profile.venue.description}
                          </p>
                        </div>

                        {/* Features */}
                        <div>
                          <h4 className="text-luxury-cream font-semibold mb-3">Signature Features:</h4>
                          <div className="grid grid-cols-2 gap-2">
                            {profile.venue.features.slice(0, 4).map((feature, idx) => (
                              <div key={idx} className="flex items-center space-x-2">
                                <div 
                                  className="w-2 h-2 rounded-full"
                                  style={{ backgroundColor: profile.color }}
                                />
                                <span className="text-luxury-cream/70 text-sm">
                                  {feature}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Location Info */}
                        <div className="space-y-3">
                          <div className="flex items-center space-x-3 text-luxury-cream/70">
                            <Users size={16} className="text-cigar-gold" />
                            <span className="text-sm">{profile.venue.neighborhood}</span>
                          </div>
                          <div className="flex items-center space-x-3 text-luxury-cream/70">
                            <Clock size={16} className="text-cigar-gold" />
                            <span className="text-sm">{profile.venue.hours.monday}</span>
                          </div>
                        </div>

                        {/* CTA */}
                        <motion.button
                          className="w-full bg-cigar-gold text-luxury-charcoal py-4 rounded-lg font-semibold hover:bg-cigar-gold/90 transition-colors"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          Reserve Your Visit
                        </motion.button>
                      </div>
                    </div>
                  );
                })()}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Footer Message */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="text-luxury-cream/60 max-w-2xl mx-auto">
            Cigar Aficionado Select represents our highest honor—partnership with establishments 
            that define excellence in the world of premium tobacco.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
