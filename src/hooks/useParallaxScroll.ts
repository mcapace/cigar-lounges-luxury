'use client';

import { useEffect, useRef, useState } from 'react';

interface ParallaxOptions {
  speed?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  scale?: boolean;
  rotate?: boolean;
  blur?: boolean;
}

export function useParallaxScroll(options: ParallaxOptions = {}) {
  const {
    speed = 0.5,
    direction = 'up',
    scale = false,
    rotate = false,
    blur = false,
  } = options;

  const elementRef = useRef<HTMLElement>(null);
  const [transform, setTransform] = useState('');

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const handleScroll = () => {
      const rect = element.getBoundingClientRect();
      const scrolled = window.pageYOffset;
      const rate = scrolled * -speed;
      
      let transforms: string[] = [];

      // Base parallax movement
      switch (direction) {
        case 'up':
          transforms.push(`translateY(${rate}px)`);
          break;
        case 'down':
          transforms.push(`translateY(${-rate}px)`);
          break;
        case 'left':
          transforms.push(`translateX(${rate}px)`);
          break;
        case 'right':
          transforms.push(`translateX(${-rate}px)`);
          break;
      }

      // Additional effects
      if (scale) {
        const scaleValue = 1 + (scrolled * 0.0001);
        transforms.push(`scale(${Math.max(0.8, Math.min(1.2, scaleValue))})`);
      }

      if (rotate) {
        const rotateValue = scrolled * 0.1;
        transforms.push(`rotate(${rotateValue}deg)`);
      }

      if (blur) {
        const blurValue = Math.min(scrolled * 0.01, 5);
        element.style.filter = `blur(${blurValue}px)`;
      }

      setTransform(transforms.join(' '));
    };

    // Throttle scroll events for performance
    let ticking = false;
    const throttledHandleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', throttledHandleScroll, { passive: true });
    handleScroll(); // Initial call

    return () => {
      window.removeEventListener('scroll', throttledHandleScroll);
    };
  }, [speed, direction, scale, rotate, blur]);

  return { ref: elementRef, transform };
}

// Advanced parallax with intersection observer
export function useAdvancedParallax(options: ParallaxOptions & { threshold?: number } = {}) {
  const { threshold = 0.1, ...parallaxOptions } = options;
  const { ref, transform } = useParallaxScroll(parallaxOptions);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [threshold]);

  return { ref, transform, isVisible };
}
