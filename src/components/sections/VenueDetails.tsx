'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { venueData } from '@/data/venues';
import { MapPin, Phone, Clock, Star, ExternalLink, Users } from 'lucide-react';
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
    <div id="heritage" className={`venues-sections-container ${fullRotation}`}>
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
                  New York City - Midtown East
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
                className="inline-flex items-center gap-2 w-full md:w-auto px-8 py-4 bg-gradient-to-r from-charcoal to-gray-700 text-white hover:from-gold hover:to-gold-dark transition-all luxury-button justify-center shadow-lg hover:shadow-xl"
              >
                Visit Davidoff Madison
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

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
                  New York City - Midtown West
                </p>
              </div>
              
              <div className="prose prose-lg text-gray-700">
                <p>
                  {venue.description}
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
                className="inline-flex items-center gap-2 w-full md:w-auto px-8 py-4 bg-gradient-to-r from-charcoal to-gray-700 text-white hover:from-gold hover:to-gold-dark transition-all luxury-button justify-center shadow-lg hover:shadow-xl"
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
              the pinnacle of Swiss craftsmanship in tobacco. From protecting French tobacco 
              during WWII to serving luminaries like Orson Welles and Baron Rothschild, 
              Davidoff's philosophy of "time beautifully filled" continues through New York's 
              two distinguished locations.
            </p>
          </div>
          
          {/* Davidoff Timeline */}
          <div className="max-w-4xl mx-auto mb-16">
            <h3 className="text-2xl font-normal text-center mb-12 text-charcoal">Davidoff Milestones</h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <TimelineItem year="1906" text="Zino Davidoff born in Kiev, Ukraine" />
                <TimelineItem year="1911" text="Family opens Davidoff of Geneva tobacco shop" />
                <TimelineItem year="1930s" text="World's first climate-controlled humidor room" />
              </div>
              <div className="space-y-6">
                <TimelineItem year="1968" text="Iconic white band collection introduced" />
                <TimelineItem year="1987" text="Davidoff of Geneva opens in New York City" />
                <TimelineItem year="2000s" text="Madison Avenue flagship experience" />
                <TimelineItem year="Today" text="65 flagship stores across 700+ merchants worldwide" />
              </div>
            </div>
          </div>
        </div>
      </section>

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
                  <div className="space-y-2">
                    <p className="flex items-start gap-2">
                      <Clock className="w-4 h-4 mt-0.5" />
                      <div>
                        <div className="text-sm font-medium text-charcoal">Store Hours:</div>
                        <div className="text-sm">Mon-Fri: 10AM-8PM, Sat-Sun: 11AM-7PM</div>
                      </div>
                    </p>
                    <p className="flex items-start gap-2">
                      <Users className="w-4 h-4 mt-0.5" />
                      <div>
                        <div className="text-sm font-medium text-charcoal">Club Hours:</div>
                        <div className="text-sm">Mon-Fri: 11AM-1AM, Sat: 2PM-12AM, Sun: 1PM-11PM</div>
                      </div>
                    </p>
                  </div>
                </div>
              </div>
              
              <a 
                href={barclayRex.website}
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="inline-flex items-center gap-2 w-full md:w-auto px-8 py-4 bg-gradient-to-r from-charcoal to-gray-700 text-white hover:from-gold hover:to-gold-dark transition-all luxury-button justify-center shadow-lg hover:shadow-xl"
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
              src="/images/Barclay Rex/barclay_Rex_updated_logo-removebg-preview.png" 
              alt="Barclay Rex" 
              width={200}
              height={60}
              className="h-16 mx-auto mb-8 object-contain"
              style={{ maxWidth: '200px' }}
            />
            <h2 className="text-4xl font-normal text-charcoal">115 Years on Wall Street</h2>
            <div className="w-20 h-px bg-gold mx-auto mt-6"></div>
          </div>
          
          {/* Introduction */}
          <div className="max-w-4xl mx-auto mb-16 text-center">
            <p className="text-lg text-medium-gray body-text">
              For 115 years, Barclay Rex has stood as Wall Street's tobacconist. 
              Founded by Vincent Nastri, a pipe maker from Salerno, Italy, the store 
              was named after its original location between Barclay and Church Streets 
              and Vincent's faithful Great Dane, Rex. Four generations of the Nastri 
              family have preserved traditions while serving everyone from Morgan partners 
              to modern entrepreneurs.
            </p>
          </div>
          
          {/* Historical Timeline */}
          <div className="max-w-5xl mx-auto mb-16">
            <h3 className="text-2xl font-light text-center mb-12 text-charcoal">A Century of Moments</h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <TimelineItem year="1910" text="Vincent Nastri opens between Barclay and Church Streets" />
                <TimelineItem year="1920" text="Survives Prohibition with 'medicinal tobacco' permits" />
                <TimelineItem year="1929" text="Remains open during Black Tuesday crash" />
                <TimelineItem year="1949" text="Moves to Maiden Lane under Vincent Nastri II" />
              </div>
              <div className="space-y-6">
                <TimelineItem year="1960" text="Begins pre-embargo Cuban acquisition program" />
                <TimelineItem year="1987" text="Open during Black Monday, calming nerves" />
                <TimelineItem year="2001" text="First to reopen after 9/11" />
                <TimelineItem year="Today" text="126 Pearl Street - Fourth generation continues the legacy" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
