'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ExternalLink } from 'lucide-react';
import { venueData } from '@/data/venues';

export function VisitPlanning() {
  const davidoffMadison = venueData.brands[0].locations[0];
  const davidoffSixth = venueData.brands[0].locations[1];
  const barclayRex = venueData.brands[1].locations[0];
  const davidoffBrand = venueData.brands[0];
  const barclayRexBrand = venueData.brands[1];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-8 max-w-6xl">
        <h2 className="text-4xl font-normal text-center mb-12 text-charcoal">
          Plan Your Visit
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Davidoff Madison */}
          <motion.div 
            className="bg-cream p-8 rounded-lg"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Image 
              src={davidoffBrand.logo} 
              alt={davidoffBrand.name} 
              width={32}
              height={32}
              className="h-8 mb-6 object-contain" 
            />
            <h3 className="text-xl font-medium mb-4 text-charcoal">{davidoffMadison.name}</h3>
            <div className="space-y-2 text-gray-600 body-text">
              <p className="flex items-start gap-2">
                <span>📍</span>
                <span>{davidoffMadison.address}</span>
              </p>
              <p className="flex items-center gap-2">
                <span>📞</span>
                <span>{davidoffMadison.phone}</span>
              </p>
              <p className="flex items-start gap-2">
                <span>🕐</span>
                <span>Mon-Sat: 10AM-8PM, Sun: 12PM-6PM</span>
              </p>
            </div>
            <a 
              href={davidoffMadison.website} 
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="inline-block mt-6 text-gold hover:underline transition-colors"
            >
              Visit Website →
            </a>
          </motion.div>

          {/* Barclay Rex */}
          <motion.div 
            className="bg-cream p-8 rounded-lg"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Image 
              src={barclayRexBrand.logo} 
              alt={barclayRexBrand.name} 
              width={32}
              height={32}
              className="h-8 mb-6 object-contain" 
            />
            <h3 className="text-xl font-medium mb-4 text-charcoal">{barclayRex.name}</h3>
            <div className="space-y-2 text-gray-600 body-text">
              <p className="flex items-start gap-2">
                <span>📍</span>
                <span>{barclayRex.address}</span>
              </p>
              <p className="flex items-center gap-2">
                <span>📞</span>
                <span>{barclayRex.phone}</span>
              </p>
              <p className="flex items-start gap-2">
                <span>🕐</span>
                <span>Mon-Fri: 8AM-7PM, Sat: 10AM-6PM, Sun: Closed</span>
              </p>
            </div>
            <a 
              href={barclayRex.website} 
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="inline-block mt-6 text-gold hover:underline transition-colors"
            >
              Visit Website →
            </a>
          </motion.div>

          {/* Davidoff 6th Avenue */}
          <motion.div 
            className="bg-cream p-8 rounded-lg"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Image 
              src={davidoffBrand.logo} 
              alt={davidoffBrand.name} 
              width={32}
              height={32}
              className="h-8 mb-6 object-contain" 
            />
            <h3 className="text-xl font-medium mb-4 text-charcoal">{davidoffSixth.name}</h3>
            <div className="space-y-2 text-gray-600 body-text">
              <p className="flex items-start gap-2">
                <span>📍</span>
                <span>{davidoffSixth.address}</span>
              </p>
              <p className="flex items-center gap-2">
                <span>📞</span>
                <span>{davidoffSixth.phone}</span>
              </p>
              <p className="flex items-start gap-2">
                <span>🕐</span>
                <span>Mon-Fri: 10AM-9PM, Sat-Sun: 11AM-8PM</span>
              </p>
            </div>
            <a 
              href={davidoffSixth.website} 
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="inline-block mt-6 text-gold hover:underline transition-colors"
            >
              Visit Website →
            </a>
          </motion.div>
        </div>
        
        <p className="text-center text-sm text-gray-500 mt-8 body-text">
          Hours may vary for holidays. Please check each venue's website for current information.
        </p>
      </div>
    </section>
  );
}
