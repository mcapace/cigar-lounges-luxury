'use client';

import { motion } from 'framer-motion';
import { MapPin, Award } from 'lucide-react';
import { venueData } from '@/data/venues';
import { useVenueRotation } from '@/hooks/useVenueRotation';

export function VenueShowcase() {
  const venueOrder = useVenueRotation();
  const davidoffBrand = venueData.brands.find(b => b.id === 'davidoff');
  const barclayRexBrand = venueData.brands.find(b => b.id === 'barclay-rex');
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-8">
        
        {/* Section header with space */}
        <div className="text-center mb-20">
          <h2 className="section-title text-charcoal">
            Select Your Experience
          </h2>
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-gold to-transparent mx-auto"></div>
        </div>
        
        {/* Venue Cards - Perfectly aligned and symmetrical */}
        <div className="grid md:grid-cols-2 gap-16 max-w-7xl mx-auto">
          
          {/* Davidoff Card (spans both locations) */}
          <motion.div 
            className="bg-white border border-light-gray p-10 hover:shadow-xl transition-all hover-lift glass-morphism h-full flex flex-col"
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            whileHover={{ y: -8, scale: 1.02 }}
          >
            {/* Header Section */}
            <div className="mb-8">
              <div className="mb-4">
                <span className="text-2xl font-bold text-charcoal">Davidoff</span>
              </div>
              <h3 className="venue-name text-3xl mb-4">Davidoff of Geneva</h3>
              <p className="body-text text-medium-gray leading-relaxed">
                Experience Swiss precision at two distinguished Manhattan locations
              </p>
            </div>
            
            {/* Features Section */}
            <div className="space-y-5 mb-10 flex-grow">
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-gold mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium text-charcoal">Madison Avenue</p>
                  <p className="text-sm text-medium-gray">Flagship Experience</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-gold mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium text-charcoal">6th Avenue</p>
                  <p className="text-sm text-medium-gray">Downtown Sophistication</p>
                </div>
              </div>
            </div>
            
            {/* Button Section */}
            <button 
              className="w-full py-4 border border-charcoal text-charcoal hover:bg-charcoal hover:text-white transition luxury-button font-medium"
              onClick={() => document.getElementById('davidoff-madison')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Explore Davidoff
            </button>
          </motion.div>
          
          {/* Barclay Rex Card */}
          <motion.div 
            className="bg-white border border-light-gray p-10 hover:shadow-xl transition-all hover-lift glass-morphism h-full flex flex-col"
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            whileHover={{ y: -8, scale: 1.02 }}
          >
            {/* Header Section */}
            <div className="mb-8">
              <div className="mb-4">
                <span className="text-2xl font-bold text-charcoal">Barclay Rex</span>
              </div>
              <h3 className="venue-name text-3xl mb-4">Barclay Rex</h3>
              <p className="body-text text-medium-gray leading-relaxed">
                New York's original tobacconist, serving Wall Street since 1910
              </p>
            </div>
            
            {/* Features Section */}
            <div className="space-y-5 mb-10 flex-grow">
              <div className="flex items-start gap-4">
                <Award className="w-5 h-5 text-gold mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium text-charcoal">113 Years of Excellence</p>
                  <p className="text-sm text-medium-gray">Family-owned tradition</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-gold mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium text-charcoal">Financial District</p>
                  <p className="text-sm text-medium-gray">Historic Wall Street location</p>
                </div>
              </div>
            </div>
            
            {/* Button Section */}
            <button 
              className="w-full py-4 border border-charcoal text-charcoal hover:bg-charcoal hover:text-white transition luxury-button font-medium"
              onClick={() => document.getElementById('barclay-rex')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Explore Barclay Rex
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}