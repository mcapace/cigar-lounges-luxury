'use client';

import { motion } from 'framer-motion';
import { Briefcase, Users, Award } from 'lucide-react';

export function BrandComparison() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-8">
        <h2 className="section-title text-center text-charcoal">
          Find Your Perfect Experience
        </h2>
        <div className="w-32 h-px bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-16"></div>
        
        <div className="grid md:grid-cols-3 gap-12 max-w-7xl mx-auto">
          
          {/* For the Executive */}
          <div className="text-center p-10 border border-light-gray hover:border-gold transition-all h-full flex flex-col">
            <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-8">
              <Briefcase className="w-8 h-8 text-gold" />
            </div>
            <h4 className="text-2xl font-thin mb-6 text-charcoal">For the Executive</h4>
            <p className="text-medium-gray mb-8 leading-relaxed flex-grow">
              When privacy and prestige are paramount
            </p>
            <p className="font-medium text-charcoal text-lg">
              → Davidoff Madison Avenue
            </p>
          </div>
          
          {/* For the Modernist */}
          <div className="text-center p-10 border border-light-gray hover:border-gold transition-all h-full flex flex-col">
            <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-8">
              <Users className="w-8 h-8 text-gold" />
            </div>
            <h4 className="text-2xl font-thin mb-6 text-charcoal">For the Modernist</h4>
            <p className="text-medium-gray mb-8 leading-relaxed flex-grow">
              Where energy meets sophistication
            </p>
            <p className="font-medium text-charcoal text-lg">
              → Davidoff 6th Avenue
            </p>
          </div>
          
          {/* For the Purist */}
          <div className="text-center p-10 border border-light-gray hover:border-gold transition-all h-full flex flex-col">
            <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-8">
              <Award className="w-8 h-8 text-gold" />
            </div>
            <h4 className="text-2xl font-thin mb-6 text-charcoal">For the Purist</h4>
            <p className="text-medium-gray mb-8 leading-relaxed flex-grow">
              Authentic heritage and rare finds
            </p>
            <p className="font-medium text-charcoal text-lg">
              → Barclay Rex
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}