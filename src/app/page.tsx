'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Navigation } from '@/components/ui/Navigation';
import { HeroSection } from '@/components/sections/HeroSection';
import { VenueShowcase } from '@/components/sections/VenueShowcase';
import { BrandComparison } from '@/components/sections/BrandComparison';
import { Footer } from '@/components/ui/Footer';
import { ErrorBoundary, VenueErrorBoundary } from '@/components/ui/ErrorBoundary';
import { ResponsiveTest } from '@/components/ui/ResponsiveTest';
import { PerformanceMonitor } from '@/components/ui/PerformanceMonitor';
import { LuxuryCursor } from '@/components/ui/LuxuryCursor';
import { AccessibilityToolbar, SkipToMainContent, KeyboardNavigation, HighContrastStyles } from '@/components/ui/AccessibilityFeatures';
import { LuxuryPageLoader } from '@/components/ui/LuxuryLoadingStates';
import { ContentValidator } from '@/components/ui/ContentValidator';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP ScrollTrigger
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time for smooth experience
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LuxuryPageLoader />;
  }

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-luxury-charcoal">
        <SkipToMainContent />
        <Navigation />
        
        <main id="main-content">
          <ErrorBoundary>
            <HeroSection />
          </ErrorBoundary>
          
          <VenueErrorBoundary>
            <VenueShowcase />
          </VenueErrorBoundary>
          
          <ErrorBoundary>
            <BrandComparison />
          </ErrorBoundary>
        </main>
        
        <Footer />
        
        {/* Luxury features */}
        <LuxuryCursor />
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