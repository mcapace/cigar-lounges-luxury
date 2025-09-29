import { ImageAsset } from '@/lib/imageInventory';

export interface VenueHours {
  monday: string;
  tuesday: string;
  wednesday: string;
  thursday: string;
  friday: string;
  saturday: string;
  sunday: string;
}

export interface ClubHours {
  monday: string;
  tuesday: string;
  wednesday: string;
  thursday: string;
  friday: string;
  saturday: string;
  sunday: string;
}

export interface VenueLocation {
  id: string;
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  address: string;
  website: string;
  neighborhood: string;
  phone: string;
  email?: string;
  hours: VenueHours;
  clubHours?: ClubHours;
  images: {
    hero: string;
    gallery: string[];
  };
  features: string[];
  signature: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  experience?: {
    headline: string;
    description: string;
    atmosphere: string;
  };
  collection?: {
    featured: string[];
    exclusive: string[];
    vintage?: string[];
  };
  perfectFor: string[];
  history?: {
    founded: number;
    founder: string;
    milestones: Array<{
      year: number;
      event: string;
    }>;
  };
}

export interface Brand {
  id: string;
  name: string;
  logo: string;
  tagline: string;
  description: string;
  accentColor: string;
  locations: VenueLocation[];
}

export const venueData: { brands: Brand[] } = {
  brands: [
    {
      id: 'davidoff',
      name: 'Davidoff of Geneva',
      logo: '/images/Davidoff Logo.png',
      tagline: 'Swiss Excellence Since 1911',
      description: 'From Davidoff\'s Swiss excellence across two Manhattan locations to Barclay Rex\'s century-old Wall Street legacy, discover where New York\'s most discerning aficionados gather to celebrate the art of fine cigars.',
      accentColor: '#D4AF37', // Gold
      locations: [
        {
          id: 'davidoff-madison',
          name: 'Davidoff Madison Avenue',
          shortName: 'Madison Flagship',
          tagline: 'New York City - Midtown East',
          description: 'Globally renowned tobacconist. North America\'s premier cigar destination.',
          address: '515 Madison Avenue, New York, NY 10022',
          website: 'https://us.davidoffgeneva.com/',
          neighborhood: 'Midtown East',
          phone: '(212) 751-9060',
          email: 'madison@davidoffgeneva.com',
          hours: {
            monday: '10:00 AM - 8:00 PM',
            tuesday: '10:00 AM - 8:00 PM',
            wednesday: '10:00 AM - 10:00 PM',
            thursday: '10:00 AM - 10:00 PM',
            friday: '10:00 AM - 8:00 PM',
            saturday: '10:00 AM - 6:00 PM',
            sunday: '12:00 PM - 6:00 PM',
          },
          images: {
            hero: '/images/Davidoff Madison/Facade_Davidoff_NYMadison_04a.jpg',
            gallery: [
              '/images/Davidoff Madison/Humidor_Davidoff_NYMadison_02_V2.jpg',
              '/images/Davidoff Madison/UL Lounge_Davidoff_NYMadison_05.jpg',
              '/images/Davidoff Madison/Sales Area_Davidoff_NYMadison_01_V2.jpg',
              '/images/Davidoff Madison/UL Lounge_Davidoff_NYMadison_06_V2.jpg',
              '/images/Davidoff Madison/LL LOunge_Davidoff_NYMadison_07.jpg',
              '/images/Davidoff Madison/LL Lounge_Davidoff_NYMadison_08.jpg',
              '/images/Davidoff Madison/Facade_Davidoff_NYMadison_04b.jpg',
            ],
          },
          features: [
            'Exclusive and Rare Limited Editions',
            'Private Humidor Lockers',
            'World-Class Sales Professionals',
            'The Davidoff Vault Experience',
            'Private Master Classes',
            'Private Event Lounge Rental',
          ],
          signature: 'Home to exclusive flagship-only releases and the most comprehensive Davidoff selection in North America. Your journey begins the moment you enter our Madison Avenue sanctuary.',
          experience: {
            headline: 'Where Swiss Excellence Reaches Its Pinnacle',
            description: 'Your journey begins the moment you enter our Madison Avenue sanctuary. Greeted by certified Davidoff ambassadors, you\'ll discover a world where every detail reflects 100 years of Swiss precision.',
            atmosphere: 'From our temperature-controlled walk-in humidor to private tasting lounges, this is more than a destination—it\'s a transformation of the ordinary into the extraordinary.'
          },
          collection: {
            featured: [
              'Complete Davidoff Winston Churchill Collection',
              'Rare Aged Reserve Collections',
              'Davidoff Oro Blanco (when available)',
              'Exclusive Pre-Release Access'
            ],
            exclusive: [
              'Flagship Limited Editions',
              'Private Vault Selections',
              'Personal Collection Curation'
            ]
          },
          perfectFor: [
            'Executive meetings requiring absolute privacy',
            'Celebrating milestone achievements',
            'Building your personal collection',
            'Experiencing the pinnacle of Swiss luxury',
            'International visitors seeking the ultimate Davidoff experience'
          ],
          coordinates: { lat: 40.7614, lng: -73.9776 },
        },
        {
          id: 'davidoff-sixth',
          name: 'Davidoff 6th Avenue',
          shortName: '6th Avenue',
          tagline: 'New York City - Midtown West',
          description: 'Located in the heart of midtown. Sophisticated, elegant and intimate cigar experience.',
          address: '1390 6th Avenue, New York, NY 10019',
          website: 'https://us.davidoffgeneva.com/',
          neighborhood: 'Midtown West',
          phone: '(212) 757-3167',
          email: 'sixthavenue@davidoffgeneva.com',
          hours: {
            monday: '9:30 AM - 8:00 PM',
            tuesday: '9:30 AM - 8:00 PM',
            wednesday: '9:30 AM - 8:00 PM',
            thursday: '9:30 AM - 8:00 PM',
            friday: '9:30 AM - 8:00 PM',
            saturday: '11:00 AM - 7:00 PM',
            sunday: '12:00 PM - 6:00 PM',
          },
          images: {
            hero: '/images/Davidoff Sixth Ave/Davidoff_6Av_01_V2_RGB.jpg',
            gallery: [
              '/images/Davidoff Sixth Ave/Davidoff_6Av_04_V2_RGB.jpg',
              '/images/Davidoff Sixth Ave/Davidoff_6Av_02a_V2_RGB.jpg',
              '/images/Davidoff Sixth Ave/Davidoff_6Av_03a_V2_RGB.jpg',
              '/images/Davidoff Sixth Ave/Davidoff_6Av_05_V2_RGB.jpg',
            ],
          },
          features: [
            'Tasting Events',
            'Exclusive and Rare Products',
            'Private Lockers',
            'Private Event Lounge Rental',
            'Master Classes',
            'Contemporary Ventilation System',
          ],
          signature: 'Contemporary sanctuary for innovators and tastemakers. Designed for the modern aficionado, our 6th Avenue location pulses with the energy of New York.',
          experience: {
            headline: 'Where Swiss Excellence Meets New York Energy',
            description: 'Designed for the modern aficionado, our 6th Avenue location pulses with the energy of New York. Floor-to-ceiling windows frame the urban landscape while inside, contemporary design meets old-world craftsmanship.',
            atmosphere: 'This is where business deals close, creative minds meet, and the next generation of cigar culture takes shape.'
          },
          collection: {
            featured: [
              'Complete Davidoff Nicaragua Series',
              'Davidoff Escurio Collection',
              'Limited Edition Releases',
              'Extensive Dominican Selection'
            ],
            exclusive: [
              'Emerging Artisanal Brands',
              'New Release Previews',
              'Master Class Exclusives'
            ]
          },
          perfectFor: [
            'After-work unwinding',
            'Social business meetings',
            'Pre-theater indulgence',
            'Weekend afternoons with friends',
            'Discovering new favorites'
          ],
          coordinates: { lat: 40.7489, lng: -73.9857 },
        },
      ],
    },
    {
      id: 'barclay-rex',
      name: 'Barclay Rex',
      logo: '/images/Barclay Rex/barclay Rex updated logo.PNG',
      tagline: "New York's Original. Since 1910.",
      description: 'Before the towers rose, before Wall Street became the world\'s financial capital, there was Barclay Rex. For 115 years, this family-owned institution has been the keeper of New York\'s cigar heritage, surviving Prohibition, the Great Depression, and every transformation of the city around it.',
      accentColor: '#8B4513', // Vintage brown
      locations: [
        {
          id: 'barclay-rex-wall-st',
          name: 'Barclay Rex',
          shortName: 'Wall Street',
          tagline: 'A New York Institution',
          description: 'Founded by Vincent Nastri in 1910, Barclay Rex isn\'t just a tobacconist—it\'s a living museum of American cigar history. The same family that opened our doors 115 years ago still greets customers today, maintaining traditions while embracing innovation.',
          address: '126 Pearl Street, New York, NY 10005',
          website: 'https://barclayrex.com/',
          neighborhood: 'Financial District',
          phone: '(212) 962-3355',
          email: 'info@barclayrex.com',
          hours: {
            monday: '10:00 AM - 8:00 PM',
            tuesday: '10:00 AM - 8:00 PM',
            wednesday: '10:00 AM - 8:00 PM',
            thursday: '10:00 AM - 8:00 PM',
            friday: '10:00 AM - 8:00 PM',
            saturday: '11:00 AM - 7:00 PM',
            sunday: '11:00 AM - 7:00 PM',
          },
          clubHours: {
            monday: '11:00 AM - 1:00 AM',
            tuesday: '11:00 AM - 1:00 AM',
            wednesday: '11:00 AM - 1:00 AM',
            thursday: '11:00 AM - 1:00 AM',
            friday: '11:00 AM - 1:00 AM',
            saturday: '2:00 PM - 12:00 AM',
            sunday: '1:00 PM - 11:00 PM',
          },
          images: {
            hero: '/images/Barclay Rex/EFuerniss_KAMI_BarclayRex_6889 copy 2.jpg',
            gallery: [
              '/images/Barclay Rex/EFuerniss_KAMI_BarclayRex_7096.jpg',
              '/images/Barclay Rex/EFuerniss_KAMI_BarclayRex_7007 copy 1.jpg',
              '/images/Barclay Rex/EFuerniss_KAMI_BarclayRex_7181.jpg',
              '/images/Barclay Rex/EFuerniss_KAMI_BarclayRex_6889 copy 2.jpg',
              '/images/Barclay Rex/image1.jpeg',
              '/images/Barclay Rex/image2.jpeg',
              '/images/Barclay Rex/image3.jpeg',
            ],
          },
          features: [
            'Public & Private Lounge Areas',
            'Largest Cigar Selection in NYC',
            'Only Pipe & Pipe Tobacco Retail Store in NYC',
            'Pre-Embargo Cuban Collection',
            'Custom Blending Since 1910',
            'Historic Vault',
            'The Rex Club (100 members only)',
            'The Barclay Rex Museum',
            'Wall Street Traditions',
          ],
          signature: 'Keeper of New York\'s cigar heritage for 115 years. Our humidor contains not just cigars, but stories: pre-embargo Cubans that survived Prohibition in hidden vaults, vintage boxes from defunct manufacturers, and blends created exclusively for Wall Street\'s titans of industry.',
          experience: {
            headline: 'Four Generations of Tobacco Excellence',
            description: 'Today, our fourth-generation master blender continues this tradition, creating personalized cigars that become family heirlooms. Our humidor contains not just cigars, but stories.',
            atmosphere: 'No corporate oversight. No focus groups. Every decision is made by the family that bears the name, ensuring that Barclay Rex remains true to its founding principles while serving the modern aficionado.'
          },
          collection: {
            featured: [
              'Pre-Embargo Cuban Collection (viewing by appointment)',
              'Vintage Cigars from the 1960s-1980s',
              'Discontinued Brands Archive',
              'Historic House Blends unchanged since the 1920s'
            ],
            exclusive: [
              'Modern Craft & Boutique Selections',
              'Custom Blend Development',
              'Private Vault Access'
            ],
            vintage: [
              'Pre-Embargo Cuban Treasures',
              'Vintage Boxes from Defunct Manufacturers',
              'Historic Memorabilia'
            ]
          },
          perfectFor: [
            'Experiencing authentic New York history',
            'Discovering rare and vintage cigars',
            'Custom blend consultations',
            'Private celebrations with historical significance',
            'Collectors seeking the extraordinary'
          ],
          coordinates: { lat: 40.7074, lng: -74.0113 },
          history: {
            founded: 1910,
            founder: 'Vincent Nastri',
            milestones: [
              { year: 1910, event: 'Vincent Nastri opens doors on Wall Street' },
              { year: 1920, event: 'Survives Prohibition through "medicinal tobacco" permits' },
              { year: 1929, event: 'Remains open through Black Tuesday and Great Depression' },
              { year: 1945, event: 'V-Day celebration depletes entire inventory' },
              { year: 1960, event: 'Begins pre-embargo Cuban preservation program' },
              { year: 1987, event: 'Stays open during Black Monday to calm nerves' },
              { year: 2001, event: 'First to reopen after 9/11, providing comfort to the community' },
              { year: 2008, event: 'Weathered financial crisis alongside Wall Street' },
              { year: 2023, event: 'Fourth generation takes the helm' },
            ],
          },
        },
      ],
    },
  ],
};

// Utility functions
export function getAllVenues(): VenueLocation[] {
  return venueData.brands.flatMap(brand => brand.locations);
}

export function getVenueById(id: string): VenueLocation | undefined {
  return getAllVenues().find(venue => venue.id === id);
}

export function getBrandById(id: string): Brand | undefined {
  return venueData.brands.find(brand => brand.id === id);
}

export function getVenuesByBrand(brandId: string): VenueLocation[] {
  const brand = getBrandById(brandId);
  return brand ? brand.locations : [];
}

export function getFeaturedVenues(): VenueLocation[] {
  return getAllVenues().filter(venue => 
    venue.id === 'davidoff-madison' || 
    venue.id === 'barclay-rex-wall-st'
  );
}
