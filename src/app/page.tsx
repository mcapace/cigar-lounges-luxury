'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { SponsoredContentDisclosure } from '@/components/ui/SponsoredContentDisclosure';
import { RefinedNavigation } from '@/components/ui/RefinedNavigation';
import { HeroSection } from '@/components/sections/HeroSection';
import { VenueShowcase } from '@/components/sections/VenueShowcase';
import { DavidoffHeritage } from '@/components/sections/DavidoffHeritage';
import { VenueDetails } from '@/components/sections/VenueDetails';
import { BarclayRexHeritage } from '@/components/sections/BarclayRexHeritage';
import { VisitPlanning } from '@/components/sections/VisitPlanning';
import { ScrollProgress } from '@/components/ui/ScrollProgress';
import { ScrollToTop } from '@/components/ui/ScrollToTop';
import { Footer } from '@/components/ui/Footer';
import { ErrorBoundary, VenueErrorBoundary } from '@/components/ui/ErrorBoundary';
import { ResponsiveTest } from '@/components/ui/ResponsiveTest';
import { PerformanceMonitor } from '@/components/ui/PerformanceMonitor';
import { AccessibilityToolbar, SkipToMainContent, KeyboardNavigation, HighContrastStyles } from '@/components/ui/AccessibilityFeatures';
import { ContentValidator } from '@/components/ui/ContentValidator';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP ScrollTrigger
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Home() {
  const [venueOrder, setVenueOrder] = useState('order-1');
  
  useEffect(() => {
    // Only run on client
    if (typeof window !== 'undefined') {
      // Get current date-based rotation (changes daily)
      const dayOfYear = Math.floor((Date.now() - new Date(new Date().getFullYear(), 0, 0).getTime()) / 86400000);
      const orderIndex = dayOfYear % 3;
      setVenueOrder(`order-${orderIndex + 1}`);
      
      // For testing - uncomment this line and comment the above for random rotation on each page load:
      // const orderIndex = Math.floor(Math.random() * 3);
      // setVenueOrder(`order-${orderIndex + 1}`);
      
      console.log(`Venue rotation: ${venueOrder} (Day ${dayOfYear} of year)`);
    }
  }, [venueOrder]);
  return (
        <ErrorBoundary>
          <div className="min-h-screen bg-off-white">
            <SkipToMainContent />
            <SponsoredContentDisclosure />
            <RefinedNavigation />
            
            <main id="main-content">
              <ErrorBoundary>
                <HeroSection />
              </ErrorBoundary>
              
              <VenueErrorBoundary>
                <VenueShowcase venueOrder={venueOrder} />
              </VenueErrorBoundary>
              
              <ErrorBoundary>
                <DavidoffHeritage />
              </ErrorBoundary>
              
              <ErrorBoundary>
                <VenueDetails />
              </ErrorBoundary>
              
              <ErrorBoundary>
                <BarclayRexHeritage />
              </ErrorBoundary>
              
              <ErrorBoundary>
                <VisitPlanning />
              </ErrorBoundary>
            </main>
            
            <Footer />
            
            {/* Scroll Progress and Back to Top */}
            <ScrollProgress />
            <ScrollToTop />
            
            {/* Luxury features */}
            <AccessibilityToolbar />
            <KeyboardNavigation />
            <HighContrastStyles />
            
            {/* Development tools */}
            <ResponsiveTest />
            <PerformanceMonitor />
            <ContentValidator />
          </div>
        </ErrorBoundary>
  );
}