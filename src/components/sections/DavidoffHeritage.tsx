'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export function DavidoffHeritage() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-8 max-w-6xl">
        <div className="text-center mb-12">
          <Image 
            src="/images/Davidoff Logo.png" 
            alt="Davidoff" 
            width={120}
            height={36}
            className="h-12 mx-auto mb-6" 
          />
          <h2 className="text-4xl font-thin text-charcoal">The Davidoff Experience in New York</h2>
          <div className="w-20 h-px bg-gold mx-auto mt-6"></div>
        </div>
        
        <div className="max-w-4xl mx-auto mb-16">
          <p className="text-lg text-medium-gray text-center mb-8 body-text">
            Since Zino Davidoff's founding vision in Geneva, the brand has represented 
            the pinnacle of Swiss craftsmanship in tobacco. Today, New York's two 
            Davidoff locations each offer distinct interpretations of this legacy.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Madison Avenue */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-6">
              <h3 className="text-2xl font-light mb-2 text-charcoal">Madison Avenue</h3>
              <p className="text-gold text-sm uppercase tracking-wider">The Flagship Experience</p>
            </div>
            
            <div className="prose prose-lg text-medium-gray body-text">
              <p className="mb-4">
                The Madison Avenue flagship stands as North America's premier 
                Davidoff destination. Here, among Manhattan's most prestigious 
                addresses, the full breadth of Davidoff excellence is on display.
              </p>
              
              <div className="bg-cream p-6 my-6">
                <h4 className="font-medium mb-3 text-charcoal">Exclusive to Madison:</h4>
                <ul className="space-y-2 text-sm body-text">
                  <li>• The Davidoff Vault - Limited editions and rare releases</li>
                  <li>• Private humidor locker program</li>
                  <li>• Personal shopping with certified ambassadors</li>
                  <li>• Flagship-exclusive limited editions</li>
                  <li>• White glove delivery service</li>
                </ul>
              </div>
              
              <p className="text-sm italic accent-text">
                "Where every detail reflects 100+ years of Swiss precision"
              </p>
            </div>
          </motion.div>
          
          {/* 6th Avenue */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="mb-6">
              <h3 className="text-2xl font-light mb-2 text-charcoal">6th Avenue</h3>
              <p className="text-gold text-sm uppercase tracking-wider">Downtown Sophistication</p>
            </div>
            
            <div className="prose prose-lg text-medium-gray body-text">
              <p className="mb-4">
                The 6th Avenue location brings Davidoff's heritage into conversation 
                with contemporary New York. This modern sanctuary serves Midtown's 
                dynamic community of professionals and connoisseurs.
              </p>
              
              <div className="bg-cream p-6 my-6">
                <h4 className="font-medium mb-3 text-charcoal">Unique to 6th Avenue:</h4>
                <ul className="space-y-2 text-sm body-text">
                  <li>• Contemporary lounge atmosphere</li>
                  <li>• Extended evening hours</li>
                  <li>• Regular tasting events</li>
                  <li>• Full bar program</li>
                  <li>• Master class series</li>
                </ul>
              </div>
              
              <p className="text-sm italic accent-text">
                "Where Swiss tradition meets Manhattan energy"
              </p>
            </div>
          </motion.div>
        </div>
        
        {/* Davidoff Philosophy */}
        <motion.div 
          className="max-w-3xl mx-auto text-center mt-16 pt-16 border-t border-light-gray"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <blockquote className="text-2xl font-light italic text-charcoal mb-4 accent-text">
            "Time beautifully filled"
          </blockquote>
          <p className="text-sm text-medium-gray body-text">
            The philosophy that guides every Davidoff experience
          </p>
        </motion.div>
      </div>
    </section>
  );
}
