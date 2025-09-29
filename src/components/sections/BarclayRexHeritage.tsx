'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Archive, Users, Award } from 'lucide-react';

interface TimelineItemProps {
  year: string;
  text: string;
}

function TimelineItem({ year, text }: TimelineItemProps) {
  return (
    <motion.div 
      className="flex items-start gap-4"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="w-16 h-8 bg-gold/20 rounded-full flex items-center justify-center flex-shrink-0">
        <span className="text-xs font-medium text-charcoal">{year}</span>
      </div>
      <p className="text-sm text-medium-gray body-text">{text}</p>
    </motion.div>
  );
}

interface BarclayRexHeritageProps {
  fullRotation?: string;
}

export function BarclayRexHeritage({ fullRotation = 'rotation-0' }: BarclayRexHeritageProps) {
  return (
    <div className={`heritage-container ${fullRotation}`}>
      <section className="barclay-heritage py-20 bg-cream">
      <div className="container mx-auto px-8 max-w-6xl">
        <div className="text-center mb-12">
          <Image 
            src="/images/Barclay Rex/barclay Rex updated logo.PNG" 
            alt="Barclay Rex" 
            width={200}
            height={60}
            className="h-12 mx-auto mb-8 object-contain"
            style={{ maxWidth: '200px' }}
          />
          <h2 className="text-4xl font-normal text-charcoal">115 Years on Wall Street</h2>
          <div className="w-20 h-px bg-gold mx-auto mt-6"></div>
        </div>
        
        {/* Introduction */}
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <p className="text-lg text-medium-gray body-text">
            For 115 years, Barclay Rex has stood as Wall Street's tobacconist. 
            Four generations of the Nastri family have preserved traditions while 
            serving everyone from Morgan partners to modern entrepreneurs.
          </p>
        </div>
        
        {/* Historical Timeline */}
        <div className="max-w-5xl mx-auto mb-16">
          <h3 className="text-2xl font-light text-center mb-12 text-charcoal">A Century of Moments</h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <TimelineItem year="1910" text="Vincent Nastri opens doors on Wall Street" />
              <TimelineItem year="1920" text="Survives Prohibition with 'medicinal tobacco' permits" />
              <TimelineItem year="1929" text="Remains open during Black Tuesday crash" />
              <TimelineItem year="1945" text="V-E Day celebration depletes entire inventory" />
            </div>
            <div className="space-y-6">
              <TimelineItem year="1960" text="Begins pre-embargo Cuban acquisition program" />
              <TimelineItem year="1987" text="Open during Black Monday, calming nerves" />
              <TimelineItem year="2001" text="First to reopen after 9/11" />
              <TimelineItem year="Today" text="Fourth generation continues the legacy" />
            </div>
          </div>
        </div>
        
        {/* Unique Offerings */}
        <motion.div 
          className="bg-white p-12 rounded-lg"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl font-light text-center mb-8 text-charcoal">The Barclay Rex Tradition</h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Archive className="w-8 h-8 text-gold" />
              </div>
              <h4 className="font-medium mb-2 text-charcoal">The Vault</h4>
              <p className="text-sm text-medium-gray body-text">
                Pre-embargo Cubans and vintages dating to the 1960s
              </p>
            </motion.div>
            
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-gold" />
              </div>
              <h4 className="font-medium mb-2 text-charcoal">Custom Blending</h4>
              <p className="text-sm text-medium-gray body-text">
                Personal blends crafted since 1910
              </p>
            </motion.div>
            
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-gold" />
              </div>
              <h4 className="font-medium mb-2 text-charcoal">The Rex Club</h4>
              <p className="text-sm text-medium-gray body-text">
                Limited to 100 members worldwide
              </p>
            </motion.div>
          </div>
        </motion.div>
        
        {/* Family Quote */}
        <motion.div 
          className="max-w-3xl mx-auto text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <blockquote className="text-xl font-light italic text-charcoal accent-text">
            "We don't just sell cigars. We preserve traditions, 
            maintain relationships, and continue a family legacy 
            that spans four generations."
          </blockquote>
          <p className="text-sm text-medium-gray mt-4 body-text">
            — The Nastri Family
          </p>
        </motion.div>
      </div>
    </section>
    </div>
  );
}
