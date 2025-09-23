'use client';

import { motion } from 'framer-motion';
import { MapPin, Award } from 'lucide-react';
import { venueData } from '@/data/venues';
import { useVenueRotation } from '@/hooks/useVenueRotation';

export function VenueShowcase() {
  const venueOrder = useVenueRotation();
  
  const getVenueData = (venueId: string) => {
    const allVenues = venueData.brands.flatMap(brand => brand.locations);
    return allVenues.find(venue => venue.id === venueId);
  };

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
        
        {/* Venue Cards - Dynamic based on rotation */}
        <div className="grid md:grid-cols-3 gap-12 max-w-7xl mx-auto">
          {venueOrder.map((venueId, index) => {
            const venue = getVenueData(venueId);
            if (!venue) return null;
            
            const brand = venueData.brands.find(b => b.locations.some(l => l.id === venueId));
            
            return (
              <motion.div 
                key={venueId}
                className="bg-white border border-light-gray p-8 hover:shadow-xl transition-all hover-lift glass-morphism h-full flex flex-col"
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                {/* Header Section */}
                <div className="mb-6">
                  <div className="mb-3">
                    <span className="text-lg font-bold text-charcoal">{brand?.name}</span>
                  </div>
                  <h3 className="venue-name text-2xl mb-3">{venue.name}</h3>
                  <p className="body-text text-medium-gray leading-relaxed text-sm">
                    {venue.description.substring(0, 120)}...
                  </p>
                </div>
                
                {/* Features Section */}
                <div className="space-y-4 mb-8 flex-grow">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-gold mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-charcoal text-sm">{venue.neighborhood}</p>
                      <p className="text-xs text-medium-gray">{venue.address}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Award className="w-4 h-4 text-gold mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-charcoal text-sm">{venue.tagline}</p>
                      <p className="text-xs text-medium-gray">{venue.phone}</p>
                    </div>
                  </div>
                </div>
                
                {/* Button Section */}
                <button 
                  className="w-full py-3 border border-charcoal text-charcoal hover:bg-charcoal hover:text-white transition luxury-button font-medium text-sm"
                  onClick={() => document.getElementById(venueId)?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Explore {venue.name}
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}