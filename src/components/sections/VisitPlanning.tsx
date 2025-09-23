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

  // Show loading state while order is being determined
  if (venueOrder.length === 0) {
    return (
      <section className="py-20 bg-white">
        <div className="container mx-auto px-8 max-w-6xl">
          <h2 className="text-4xl font-normal text-center mb-12 text-charcoal">
            Plan Your Visit
          </h2>
          <div className="text-center">Loading venues...</div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-8 max-w-6xl">
        <h2 className="text-4xl font-normal text-center mb-12 text-charcoal">
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
                className="bg-cream p-8 rounded-lg"
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
                  className="h-8 mb-6 object-contain" 
                />
                <h3 className="text-xl font-medium mb-4 text-charcoal">{venue.name}</h3>
                <div className="space-y-2 text-gray-600 body-text">
                  <p className="flex items-start gap-2">
                    <span>📍</span>
                    <span>{venue.address}</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <span>📞</span>
                    <span>{venue.phone}</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span>🕐</span>
                    <span>
                      {venueId === 'davidoff-madison' && 'Mon-Sat: 10AM-8PM, Sun: 12PM-6PM'}
                      {venueId === 'davidoff-sixth' && 'Mon-Fri: 10AM-9PM, Sat-Sun: 11AM-8PM'}
                      {venueId === 'barclay-rex' && 'Mon-Fri: 8AM-7PM, Sat: 10AM-6PM, Sun: Closed'}
                    </span>
                  </p>
                </div>
                <a 
                  href={venue.website} 
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="inline-block mt-6 text-gold hover:underline transition-colors"
                >
                  Visit Website →
                </a>
              </motion.div>
            );
          })}
        </div>
        
        <p className="text-center text-sm text-gray-500 mt-8 body-text">
          Hours may vary for holidays. Please check each venue's website for current information.
        </p>
      </div>
    </section>
  );
}
