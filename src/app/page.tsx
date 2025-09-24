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
  const [fullRotation, setFullRotation] = useState('rotation-0');
  
  useEffect(() => {
    // Only run on client
    if (typeof window !== 'undefined') {
      // FOR TESTING: Use URL parameter to force rotation
      const urlParams = new URLSearchParams(window.location.search);
      const testRotation = urlParams.get('rotation');
      
      // Use test rotation if provided, otherwise use random rotation
      const orderIndex = testRotation !== null 
        ? parseInt(testRotation) % 3
        : Math.floor(Math.random() * 3); // Random 0, 1, or 2
      
      const newVenueOrder = `order-${orderIndex + 1}`;
      const newFullRotation = `rotation-${orderIndex}`;
      
      setVenueOrder(newVenueOrder);
      setFullRotation(newFullRotation);
      
      console.log(`Venue rotation: ${newVenueOrder} (Random index ${orderIndex})`);
      console.log(`Full rotation: ${newFullRotation}`);
      console.log(`Test with: ?rotation=0, ?rotation=1, or ?rotation=2`);
      console.log(`Refresh page to see different random order!`);
    }
  }, []); // Empty dependency array - run only once on mount
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
                <DavidoffHeritage fullRotation={fullRotation} />
              </ErrorBoundary>
              
              <ErrorBoundary>
                <VenueDetails fullRotation={fullRotation} />
              </ErrorBoundary>
              
              <ErrorBoundary>
                <BarclayRexHeritage fullRotation={fullRotation} />
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