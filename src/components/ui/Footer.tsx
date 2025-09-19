'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { venueData } from '@/data/venues';
import { BRAND_COLORS } from '@/lib/constants';
import { MapPin, Phone, Clock, Mail } from 'lucide-react';

export function Footer() {
  const davidoffBrand = venueData.brands.find(b => b.id === 'davidoff');
  const barclayRexBrand = venueData.brands.find(b => b.id === 'barclay-rex');

  return (
    <footer className="bg-luxury-charcoal border-t border-luxury-slate/20">
      <div className="max-w-7xl mx-auto px-4 py-16">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-12">
          
          {/* About Section */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-luxury-cream mb-6">
                Cigar Aficionado Select
              </h3>
              <p className="text-luxury-cream/80 leading-relaxed mb-6 max-w-lg">
                Cigar Aficionado Select represents our highest honor—partnership with establishments 
                that define excellence in the world of premium tobacco. These aren't simply places 
                to purchase cigars; they are destinations where tradition, expertise, and luxury 
                converge to create experiences worthy of the most discerning aficionado.
              </p>
              
              <div className="bg-cigar-gold/10 border border-cigar-gold/20 rounded-lg p-4">
                <h4 className="text-cigar-gold font-semibold mb-2">Membership Benefits</h4>
                <p className="text-luxury-cream/70 text-sm">
                  Cigar Aficionado members enjoy exclusive privileges at all partner locations, 
                  including priority reservations, member-only events, and first access to limited releases.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Davidoff Section */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-3 mb-6">
                <Image
                  src={davidoffBrand?.logo || ''}
                  alt="Davidoff of Geneva"
                  width={80}
                  height={32}
                  className="filter brightness-0 invert"
                />
              </div>
              
              <div className="space-y-4">
                {davidoffBrand?.locations.map((location) => (
                  <div key={location.id} className="space-y-2">
                    <h4 className="text-luxury-cream font-semibold">
                      {location.shortName}
                    </h4>
                    <div className="space-y-1 text-sm text-luxury-cream/70">
                      <div className="flex items-center space-x-2">
                        <MapPin size={12} className="text-cigar-gold" />
                        <span>{location.neighborhood}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Phone size={12} className="text-cigar-gold" />
                        <span>{location.phone}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock size={12} className="text-cigar-gold" />
                        <span>Mon-Fri: {location.hours.monday}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Barclay Rex Section */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-3 mb-6">
                <Image
                  src={barclayRexBrand?.logo || ''}
                  alt="Barclay Rex"
                  width={80}
                  height={32}
                  className="filter brightness-0 invert"
                />
              </div>
              
              {barclayRexBrand?.locations[0] && (
                <div className="space-y-4">
                  <div className="space-y-2">
                    <h4 className="text-luxury-cream font-semibold">
                      {barclayRexBrand.locations[0].shortName}
                    </h4>
                    <div className="space-y-1 text-sm text-luxury-cream/70">
                      <div className="flex items-center space-x-2">
                        <MapPin size={12} className="text-cigar-copper" />
                        <span>{barclayRexBrand.locations[0].neighborhood}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Phone size={12} className="text-cigar-copper" />
                        <span>{barclayRexBrand.locations[0].phone}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock size={12} className="text-cigar-copper" />
                        <span>Mon-Fri: {barclayRexBrand.locations[0].hours.monday}</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Heritage Badge */}
                  <div className="bg-cigar-copper/10 border border-cigar-copper/20 rounded-lg p-3">
                    <p className="text-cigar-copper font-medium text-sm">
                      Since {barclayRexBrand.locations[0].history?.founded}
                    </p>
                    <p className="text-luxury-cream/60 text-xs mt-1">
                      Founded by {barclayRexBrand.locations[0].history?.founder}
                    </p>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </div>

        {/* Bottom Section */}
        <motion.div 
          className="border-t border-luxury-slate/20 pt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            
            {/* Copyright */}
            <div className="text-luxury-cream/60 text-sm">
              © 2024 Cigar Aficionado Select. All rights reserved.
            </div>

            {/* Quick Links */}
            <div className="flex items-center space-x-6 text-sm">
              <a href="#" className="text-luxury-cream/60 hover:text-cigar-gold transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-luxury-cream/60 hover:text-cigar-gold transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-luxury-cream/60 hover:text-cigar-gold transition-colors">
                Accessibility
              </a>
            </div>

            {/* Contact */}
            <div className="flex items-center space-x-4 text-sm">
              <a href="#" className="text-luxury-cream/60 hover:text-cigar-gold transition-colors">
                <Mail size={16} />
              </a>
              <span className="text-luxury-cream/60">contact@cigaraficionado.com</span>
            </div>
          </div>
        </motion.div>

        {/* Age Verification Notice */}
        <motion.div 
          className="mt-8 pt-6 border-t border-luxury-slate/10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-luxury-cream/50 text-xs text-center max-w-2xl mx-auto">
            You must be 21 years of age or older to purchase tobacco products. 
            Please enjoy responsibly. Cigar smoking is not a safe alternative to cigarettes.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
