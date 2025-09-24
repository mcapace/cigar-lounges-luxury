'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { venueData } from '@/data/venues';
import { MapPin, Phone, Clock, Star, ExternalLink } from 'lucide-react';
import { SimpleImageGallery } from '@/components/ui/SimpleImageGallery';

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
      <span className="text-medium-gray">{text}</span>
    </motion.div>
  );
}

interface VenueDetailsProps {
  fullRotation?: string;
}

export function VenueDetails({ fullRotation = 'rotation-0' }: VenueDetailsProps) {
  const davidoffMadison = venueData.brands[0].locations[0];
  const davidoffSixth = venueData.brands[0].locations[1];
  const barclayRex = venueData.brands[1].locations[0];

  return (
    <div className={`venues-sections-container ${fullRotation}`}>
      {/* DAVIDOFF MADISON AVENUE */}
      <section id="davidoff-madison" className="madison-section py-20 bg-white">
        <div className="container mx-auto px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
            
                {/* Image Gallery */}
                <SimpleImageGallery venue="davidoff-madison" />
            
            {/* Content */}
            <div className="space-y-6">
              <div>
                <h2 className="text-4xl font-thin text-charcoal mb-2">
                  Davidoff Madison Avenue
                </h2>
                <p className="text-xl text-gold italic font-serif mb-6">
                  The Flagship Experience
                </p>
              </div>
              
              <div className="prose prose-lg text-gray-700">
                <p>
                  Step into North America's premier Davidoff destination on Madison Avenue, 
                  where Swiss craftsmanship meets Manhattan luxury. This flagship location 
                  represents the pinnacle of the Davidoff experience, offering the most 
                  extensive collection of Davidoff cigars in the United States.
                </p>
              </div>
              
              {/* Features */}
              <div className="space-y-3">
                <h3 className="text-sm uppercase tracking-wider text-gray-500">
                  Signature Features
                </h3>
                <ul className="space-y-2">
                  {davidoffMadison.features.slice(0, 4).map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-gold rounded-full"></span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Info */}
              <div className="pt-6 border-t border-gray-200">
                <div className="space-y-2 text-gray-600">
                  <p className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    {davidoffMadison.address}
                  </p>
                  <p className="flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    {davidoffMadison.phone}
                  </p>
                  <p className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    Mon-Wed: 10AM-7PM | Thu-Sat: 10AM-8PM | Sun: 12PM-6PM
                  </p>
                </div>
              </div>
              
              <a 
                href={davidoffMadison.website}
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="inline-flex items-center gap-2 w-full md:w-auto px-8 py-4 bg-charcoal text-white hover:bg-gold transition-all luxury-button justify-center"
              >
                Visit Davidoff Madison
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Separator */}
      <div className="py-16 flex justify-center">
        <div className="w-32 h-px bg-gradient-to-r from-transparent via-gold to-transparent"></div>
      </div>

      {/* DAVIDOFF 6TH AVENUE */}
      <section id="davidoff-sixth" className="sixth-section py-20 bg-cream">
        <div className="container mx-auto px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
            
            {/* Content */}
            <div className="space-y-6">
              <div>
                <h2 className="text-4xl font-thin text-charcoal mb-2">
                  Davidoff 6th Avenue
                </h2>
                <p className="text-xl text-gold italic font-serif mb-6">
                  Downtown Sophistication
                </p>
              </div>
              
              <div className="prose prose-lg text-gray-700">
                <p>
                  Davidoff 6th Avenue brings Swiss precision to the heart of Manhattan's 
                  creative district. This contemporary sanctuary serves the city's innovators 
                  and tastemakers, offering a more social, energetic take on the Davidoff 
                  experience without compromising the excellence that defines our heritage.
                </p>
              </div>
              
              {/* Features */}
              <div className="space-y-3">
                <h3 className="text-sm uppercase tracking-wider text-gray-500">
                  Signature Features
                </h3>
                <ul className="space-y-2">
                  {davidoffSixth.features.slice(0, 4).map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-gold rounded-full"></span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Info */}
              <div className="pt-6 border-t border-gray-200">
                <div className="space-y-2 text-gray-600">
                  <p className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    {davidoffSixth.address}
                  </p>
                  <p className="flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    {davidoffSixth.phone}
                  </p>
                  <p className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    Mon-Wed: 10AM-9PM | Thu-Sat: 10AM-11PM | Sun: 12PM-8PM
                  </p>
                </div>
              </div>
              
              <a 
                href={davidoffSixth.website}
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="inline-flex items-center gap-2 w-full md:w-auto px-8 py-4 bg-charcoal text-white hover:bg-gold transition-all luxury-button justify-center"
              >
                Visit Davidoff 6th Avenue
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            {/* Image Gallery */}
            <SimpleImageGallery venue="davidoff-sixth" />
          </div>
        </div>
      </section>

      {/* DAVIDOFF HERITAGE SECTION */}
      <section className="davidoff-heritage py-20 bg-white">
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
          
          {/* Davidoff Timeline */}
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
        </div>
      </section>

      {/* Visual Separator */}
      <div className="py-16 flex justify-center">
        <div className="w-32 h-px bg-gradient-to-r from-transparent via-gold to-transparent"></div>
      </div>

      {/* BARCLAY REX */}
      <section id="barclay-rex" className="barclay-section py-20 bg-white">
        <div className="container mx-auto px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
            
                {/* Image Gallery */}
                <SimpleImageGallery venue="barclay-rex" />
            
            {/* Content */}
            <div className="space-y-6">
              <div>
                <h2 className="text-4xl font-thin text-charcoal mb-2">
                  Barclay Rex
                </h2>
                <p className="text-xl text-gold italic font-serif mb-6">
                  A New York Institution
                </p>
              </div>
              
              <div className="prose prose-lg text-gray-700">
                <p>
                  Founded by Vincent Nastri in 1910, Barclay Rex isn't just a tobacconist—it's 
                  a living museum of American cigar history. The same family that opened our 
                  doors over a century ago still greets customers today, maintaining traditions 
                  while embracing innovation.
                </p>
              </div>
              
              {/* Features */}
              <div className="space-y-3">
                <h3 className="text-sm uppercase tracking-wider text-gray-500">
                  Signature Features
                </h3>
                <ul className="space-y-2">
                  {barclayRex.features.slice(0, 4).map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-gold rounded-full"></span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* History */}
              {barclayRex.history && (
                <div className="bg-cream p-4 rounded-lg">
                  <h4 className="text-gold font-medium mb-2">Heritage</h4>
                  <p className="text-gray-600 text-sm">
                    Founded in {barclayRex.history.founded} by {barclayRex.history.founder}
                  </p>
                </div>
              )}
              
              {/* Info */}
              <div className="pt-6 border-t border-gray-200">
                <div className="space-y-2 text-gray-600">
                  <p className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    {barclayRex.address}
                  </p>
                  <p className="flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    {barclayRex.phone}
                  </p>
                  <p className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    Mon-Fri: 8AM-7PM | Sat: 10AM-6PM | Sun: Closed
                  </p>
                </div>
              </div>
              
              <a 
                href={barclayRex.website}
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="inline-flex items-center gap-2 w-full md:w-auto px-8 py-4 bg-charcoal text-white hover:bg-gold transition-all luxury-button justify-center"
              >
                Visit Barclay Rex
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* BARCLAY REX HERITAGE SECTION */}
      <section className="barclay-heritage py-20 bg-cream">
        <div className="container mx-auto px-8 max-w-6xl">
          <div className="text-center mb-12">
            <Image 
              src="/images/Barclay Rex logo.png" 
              alt="Barclay Rex" 
              width={200}
              height={60}
              className="h-12 mx-auto mb-8 object-contain"
              style={{ maxWidth: '200px' }}
            />
            <h2 className="text-4xl font-normal text-charcoal">113 Years on Wall Street</h2>
            <div className="w-20 h-px bg-gold mx-auto mt-6"></div>
          </div>
          
          {/* Introduction */}
          <div className="max-w-4xl mx-auto mb-16 text-center">
            <p className="text-lg text-medium-gray body-text">
              For 113 years, Barclay Rex has stood as Wall Street's tobacconist. 
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
        </div>
      </section>
    </div>
  );
}
