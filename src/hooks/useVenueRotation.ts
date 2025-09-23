'use client';

import { useState, useEffect } from 'react';

export function useVenueRotation() {
  const [rotation, setRotation] = useState(0);
  
  useEffect(() => {
    // Sequential rotation - remembers last position for fairness
    if (typeof window !== 'undefined') {
      const lastRotation = parseInt(localStorage.getItem('venueRotation') || '0');
      const nextRotation = (lastRotation + 1) % 3;
      localStorage.setItem('venueRotation', nextRotation.toString());
      setRotation(nextRotation);
    }
  }, []);
  
  // Three different orderings
  const rotations = [
    ['davidoff-madison', 'davidoff-sixth', 'barclay-rex'],
    ['barclay-rex', 'davidoff-madison', 'davidoff-sixth'],
    ['davidoff-sixth', 'barclay-rex', 'davidoff-madison']
  ];
  
  return rotations[rotation];
}
