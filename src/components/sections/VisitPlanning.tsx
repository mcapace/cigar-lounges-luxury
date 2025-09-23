'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ExternalLink } from 'lucide-react';
import { useVenueRotation } from '@/hooks/useVenueRotation';
import { venueData } from '@/data/venues';

export function VisitPlanning() {
  const venueOrder = useVenueRotation();
  
  const getVenueData = (venueId: string) => {
    const allVenues = venueData.brands.flatMap(brand => brand.locations);
    return allVenues.find(venue => venue.id === venueId);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-8 max-w-6xl">
        <h2 className="text-4xl font-thin text-center mb-12 text-charcoal">
          Plan Your Visit
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {venueOrder.map((venueId, index) => {
            const venue = getVenueData(venueId);
            if (!venue) return null;
            
            const brand = venueData.brands.find(b => b.locations.some(l => l.id === venueId));
            
            return (
              <motion.div 
                key={venueId}
                className="bg-cream p-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Image 
                  src={brand?.logo || ''} 
                  alt={brand?.name || ''} 
                  width={32}
                  height={32}
                  className="h-8 mb-4" 
                />
                <h3 className="text-xl font-medium mb-2 text-charcoal">{venue.name}</h3>
                <div className="space-y-3 text-sm text-medium-gray body-text">
                  <p>📍 {venue.address}</p>
                  <p>📞 {venue.phone}</p>
                  <p>🕐 {Object.values(venue.hours).join(', ')}</p>
                </div>
                <a 
                  href={venue.website} 
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="inline-flex items-center gap-1 mt-4 text-gold hover:underline transition-colors"
                >
                  Visit Website
                  <ExternalLink className="w-3 h-3" />
                </a>
              </motion.div>
            );
          })}
        </div>
        
        <div className="text-center mt-12 text-sm text-medium-gray body-text">
          Hours may vary. Please visit each venue's website for current information.
        </div>
      </div>
    </section>
  );
}
