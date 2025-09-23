'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface TimelineItemProps {
  year: string;
  text: string;
}

function TimelineItem({ year, text }: TimelineItemProps) {
  return (
    <motion.div 
      className="flex gap-4"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <span className="text-gold font-medium min-w-[60px]">{year}</span>
      <span className="text-medium-gray body-text">{text}</span>
    </motion.div>
  );
}

export function DavidoffHeritage() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-8 max-w-6xl">
        <div className="text-center mb-12">
          <Image 
            src="/images/Davidoff Logo.png" 
            alt="Davidoff" 
            width={200}
            height={60}
            className="h-12 mx-auto mb-8 object-contain"
            style={{ maxWidth: '200px' }}
          />
          <h2 className="text-4xl font-normal text-charcoal">A Legacy of Swiss Excellence</h2>
          <div className="w-20 h-px bg-gold mx-auto mt-6"></div>
        </div>
        
        <div className="max-w-4xl mx-auto mb-16">
          <p className="text-lg text-medium-gray text-center mb-8 body-text">
            Since Zino Davidoff's founding vision in Geneva, the brand has represented 
            the pinnacle of Swiss craftsmanship in tobacco. Today, New York's two 
            Davidoff locations each offer distinct interpretations of this legacy.
          </p>
        </div>
        
        {/* Davidoff Timeline to balance with Barclay Rex */}
        <div className="max-w-4xl mx-auto mb-16">
          <h3 className="text-2xl font-normal text-center mb-12 text-charcoal">Davidoff Milestones</h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <TimelineItem year="1906" text="Zino Davidoff born in Kiev" />
              <TimelineItem year="1911" text="Family opens tobacco shop in Geneva" />
              <TimelineItem year="1968" text="Iconic white band introduced" />
              <TimelineItem year="1970" text="First Château series launched" />
            </div>
            <div className="space-y-6">
              <TimelineItem year="1990" text="Dominican production begins" />
              <TimelineItem year="2000s" text="Madison Avenue flagship opens" />
              <TimelineItem year="2010s" text="6th Avenue location established" />
              <TimelineItem year="Today" text="Leading luxury cigar brand globally" />
            </div>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-16">
          {/* Madison Avenue */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col"
          >
            <div className="mb-6">
              <h3 className="text-2xl font-normal mb-2 text-charcoal">Madison Avenue</h3>
              <p className="text-gold text-sm uppercase tracking-wider font-medium">The Flagship Experience</p>
            </div>
            
            <div className="prose prose-lg text-medium-gray body-text flex-grow">
              <p className="mb-6 text-charcoal">
                The Madison Avenue flagship stands as North America's premier 
                Davidoff destination. Here, among Manhattan's most prestigious 
                addresses, the full breadth of Davidoff excellence is on display.
              </p>
              
              <div className="bg-cream p-6 my-6 rounded">
                <h4 className="font-medium mb-4 text-charcoal">Exclusive to Madison:</h4>
                <ul className="space-y-2 text-sm body-text text-charcoal">
                  <li>• The Davidoff Vault - Limited editions and rare releases</li>
                  <li>• Private humidor locker program</li>
                  <li>• Personal shopping with certified ambassadors</li>
                  <li>• Flagship-exclusive limited editions</li>
                  <li>• White glove delivery service</li>
                </ul>
              </div>
              
              <p className="text-sm italic accent-text mt-6">
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
            className="flex flex-col"
          >
            <div className="mb-6">
              <h3 className="text-2xl font-normal mb-2 text-charcoal">6th Avenue</h3>
              <p className="text-gold text-sm uppercase tracking-wider font-medium">Downtown Sophistication</p>
            </div>
            
            <div className="prose prose-lg text-medium-gray body-text flex-grow">
              <p className="mb-6 text-charcoal">
                The 6th Avenue location brings Davidoff's heritage into conversation 
                with contemporary New York. This modern sanctuary serves Midtown's 
                dynamic community of professionals and connoisseurs.
              </p>
              
              <div className="bg-cream p-6 my-6 rounded">
                <h4 className="font-medium mb-4 text-charcoal">Unique to 6th Avenue:</h4>
                <ul className="space-y-2 text-sm body-text text-charcoal">
                  <li>• Contemporary lounge atmosphere</li>
                  <li>• Extended evening hours</li>
                  <li>• Regular tasting events</li>
                  <li>• Full bar program</li>
                  <li>• Master class series</li>
                </ul>
              </div>
              
              <p className="text-sm italic accent-text mt-6">
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
