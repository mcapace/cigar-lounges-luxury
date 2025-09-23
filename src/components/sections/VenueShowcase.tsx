'use client';

import { motion } from 'framer-motion';
import { MapPin, Award } from 'lucide-react';
import { venueData } from '@/data/venues';

export function VenueShowcase() {
  const davidoffBrand = venueData.brands.find(b => b.id === 'davidoff');
  const barclayRexBrand = venueData.brands.find(b => b.id === 'barclay-rex');
  
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-8">
        <h2 className="text-4xl font-normal text-center mb-12 text-charcoal">
          Select Your Experience
        </h2>
        
        {/* Grid with proper cards for all venues */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          
          {/* Davidoff Card (covers both locations) */}
          <motion.div 
            className="bg-white border border-gray-200 p-8 hover:shadow-lg transition"
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
            <h3 className="text-2xl font-normal mb-4 text-charcoal">Davidoff of Geneva</h3>
            <p className="text-gray-600 mb-6 body-text">
              Experience Swiss excellence at two distinguished Manhattan locations
            </p>
            <div className="space-y-4 mb-6">
              <div className="pb-4 border-b border-gray-100">
                <h4 className="font-medium mb-2 text-charcoal">Madison Avenue</h4>
                <p className="text-sm text-gray-600">The Flagship Experience</p>
              </div>
              <div>
                <h4 className="font-medium mb-2 text-charcoal">6th Avenue</h4>
                <p className="text-sm text-gray-600">Downtown Sophistication</p>
              </div>
            </div>
            <a 
              href="https://davidoff.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold hover:underline"
            >
              Explore Davidoff Locations →
            </a>
          </motion.div>
          
          {/* Barclay Rex Card */}
          <motion.div 
            className="bg-white border border-gray-200 p-8 hover:shadow-lg transition"
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
            <div className="mb-6">
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
              className="text-gold hover:underline"
            >
              Explore Barclay Rex →
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}