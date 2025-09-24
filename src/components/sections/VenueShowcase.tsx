'use client';

import { motion } from 'framer-motion';
import { MapPin, Award } from 'lucide-react';
import { venueData } from '@/data/venues';

interface VenueShowcaseProps {
  venueOrder?: string;
}

export function VenueShowcase({ venueOrder = 'order-1' }: VenueShowcaseProps) {
  const davidoffBrand = venueData.brands.find(b => b.id === 'davidoff');
  const barclayRexBrand = venueData.brands.find(b => b.id === 'barclay-rex');
  
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-8">
        <h2 className="text-4xl font-normal text-center mb-12 text-charcoal">
          Select Your Experience
        </h2>
        
        {/* Venue container with rotation */}
        <div className={`venue-container ${venueOrder}`}>
          
          {/* Davidoff Madison Card */}
          <motion.div 
            className="venue-item venue-madison bg-white border border-gray-200 p-10 hover:shadow-lg transition h-full flex flex-col"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img 
              src="/images/Davidoff Logo.png" 
              alt="Davidoff"
              className="h-10 mb-6 object-contain"
            />
            <h3 className="text-2xl font-normal mb-4 text-charcoal">Davidoff Madison Avenue</h3>
            <p className="text-gray-600 mb-6 body-text">
              The flagship experience on Madison Avenue - North America's premier Davidoff destination
            </p>
            <div className="mb-8 flex-grow">
              <div className="pb-4">
                <h4 className="font-medium mb-2 text-charcoal">Flagship Features</h4>
                <p className="text-sm text-gray-600">Exclusive limited editions, private lockers, white glove service</p>
              </div>
            </div>
            <a 
              href="https://davidoff.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-charcoal text-white hover:bg-gold transition-all duration-300 font-medium text-center w-full"
            >
              Visit Davidoff Website →
            </a>
          </motion.div>
          
          {/* Davidoff 6th Avenue Card */}
          <motion.div 
            className="venue-item venue-sixth bg-white border border-gray-200 p-10 hover:shadow-lg transition h-full flex flex-col"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <img 
              src="/images/Davidoff Logo.png" 
              alt="Davidoff"
              className="h-10 mb-6 object-contain"
            />
            <h3 className="text-2xl font-normal mb-4 text-charcoal">Davidoff 6th Avenue</h3>
            <p className="text-gray-600 mb-6 body-text">
              Downtown sophistication - where Swiss tradition meets Manhattan energy
            </p>
            <div className="mb-8 flex-grow">
              <div className="pb-4">
                <h4 className="font-medium mb-2 text-charcoal">Contemporary Features</h4>
                <p className="text-sm text-gray-600">Extended hours, full bar, master classes, tasting events</p>
              </div>
            </div>
            <a 
              href="https://davidoff.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-charcoal text-white hover:bg-gold transition-all duration-300 font-medium text-center w-full"
            >
              Visit Davidoff Website →
            </a>
          </motion.div>
          
          {/* Barclay Rex Card */}
          <motion.div 
            className="venue-item venue-barclay bg-white border border-gray-200 p-10 hover:shadow-lg transition h-full flex flex-col"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <img 
              src="/images/Barclay Rex logo.png" 
              alt="Barclay Rex"
              className="h-10 mb-6 object-contain"
            />
            <h3 className="text-2xl font-normal mb-4 text-charcoal">Barclay Rex</h3>
            <p className="text-gray-600 mb-6 body-text">
              New York's original tobacconist, serving Wall Street since 1910
            </p>
            <div className="mb-8 flex-grow">
              <div className="pb-4">
                <h4 className="font-medium mb-2 text-charcoal">Wall Street</h4>
                <p className="text-sm text-gray-600">113 Years of Tradition</p>
                <p className="text-sm text-gray-600 mt-2">Family-owned heritage</p>
              </div>
            </div>
            <a 
              href="https://barclayrex.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-charcoal text-white hover:bg-gold transition-all duration-300 font-medium text-center w-full"
            >
              Visit Barclay Rex Website →
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}