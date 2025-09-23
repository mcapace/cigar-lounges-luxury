'use client';

import { useState, useEffect } from 'react';

export function useVenueRotation() {
  const [venueOrder, setVenueOrder] = useState<string[]>(['davidoff-madison', 'davidoff-sixth', 'barclay-rex']);
  const [isClient, setIsClient] = useState(false);
  
  useEffect(() => {
    setIsClient(true);
    
    // This runs only on client side
    if (typeof window !== 'undefined') {
      try {
        // Get last rotation from localStorage
        const lastRotation = parseInt(localStorage.getItem('venueRotation') || '0');
        
        // Calculate next rotation
        const nextRotation = (lastRotation + 1) % 3;
        
        // Save for next time
        localStorage.setItem('venueRotation', nextRotation.toString());
        
        // Define all possible orders
        const rotations = [
          ['davidoff-madison', 'davidoff-sixth', 'barclay-rex'],
          ['barclay-rex', 'davidoff-madison', 'davidoff-sixth'],
          ['davidoff-sixth', 'barclay-rex', 'davidoff-madison']
        ];
        
        // Set the order based on rotation
        setVenueOrder(rotations[nextRotation]);
        
        console.log('Rotation:', nextRotation, 'Order:', rotations[nextRotation]);
      } catch (error) {
        console.error('Error in venue rotation:', error);
        // Fallback to default order
        setVenueOrder(['davidoff-madison', 'davidoff-sixth', 'barclay-rex']);
      }
    }
  }, []);
  
  // Return default order initially, then rotated order after hydration
  return isClient ? venueOrder : ['davidoff-madison', 'davidoff-sixth', 'barclay-rex'];
}
