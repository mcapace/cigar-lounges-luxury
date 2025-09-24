'use client';

import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useRef } from 'react';

interface AdvancedMotionProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'fade' | 'slide' | 'scale' | 'rotate' | 'blur' | 'magnetic';
  delay?: number;
  duration?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  distance?: number;
  stiffness?: number;
  damping?: number;
}

export function AdvancedMotion({
  children,
  className = '',
  variant = 'fade',
  delay = 0,
  duration = 0.6,
  direction = 'up',
  distance = 50,
  stiffness = 100,
  damping = 20,
}: AdvancedMotionProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const springConfig = { stiffness, damping };
  const y = useSpring(useTransform(scrollYProgress, [0, 1], [distance, -distance]), springConfig);
  const opacity = useSpring(useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]), springConfig);
  const scale = useSpring(useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]), springConfig);
  const rotate = useSpring(useTransform(scrollYProgress, [0, 1], [0, 360]), springConfig);
  const blur = useSpring(useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [10, 0, 0, 10]), springConfig);

  const getVariants = () => {
    const baseVariants = {
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
    };

    switch (variant) {
      case 'fade':
        return {
          ...baseVariants,
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        };
      
      case 'slide':
        const slideDirection = {
          up: { y: distance },
          down: { y: -distance },
          left: { x: distance },
          right: { x: -distance },
        };
        return {
          ...baseVariants,
          hidden: slideDirection[direction],
          visible: { x: 0, y: 0 },
        };
      
      case 'scale':
        return {
          ...baseVariants,
          hidden: { scale: 0.8, opacity: 0 },
          visible: { scale: 1, opacity: 1 },
        };
      
      case 'rotate':
        return {
          ...baseVariants,
          hidden: { rotate: -180, scale: 0.8 },
          visible: { rotate: 0, scale: 1 },
        };
      
      case 'blur':
        return {
          ...baseVariants,
          hidden: { filter: 'blur(10px)', opacity: 0 },
          visible: { filter: 'blur(0px)', opacity: 1 },
        };
      
      case 'magnetic':
        return {
          ...baseVariants,
          hidden: { scale: 0.9, opacity: 0 },
          visible: { scale: 1, opacity: 1 },
        };
      
      default:
        return baseVariants;
    }
  };

  const getScrollStyle = () => {
    switch (variant) {
      case 'fade':
        return { opacity };
      case 'slide':
        return { y, opacity };
      case 'scale':
        return { scale, opacity };
      case 'rotate':
        return { rotate, opacity };
      case 'blur':
        return { filter: `blur(${blur}px)`, opacity };
      default:
        return { opacity };
    }
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      variants={getVariants()}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      style={getScrollStyle()}
      whileHover={variant === 'magnetic' ? { scale: 1.05 } : {}}
      whileTap={variant === 'magnetic' ? { scale: 0.95 } : {}}
    >
      {children}
    </motion.div>
  );
}

// Magnetic hover effect component
export function MagneticHover({ children, className = '', strength = 0.3 }: { children: React.ReactNode; className?: string; strength?: number }) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    ref.current.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
  };

  const handleMouseLeave = () => {
    if (!ref.current) return;
    ref.current.style.transform = 'translate(0px, 0px)';
  };

  return (
    <div
      ref={ref}
      className={`transition-transform duration-300 ease-out ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </div>
  );
}

// Text reveal animation
export function TextReveal({ children, className = '', delay = 0 }: { children: string; className?: string; delay?: number }) {
  const words = children.split(' ');

  return (
    <div className={`overflow-hidden ${className}`}>
      {words.map((word, index) => (
        <motion.span
          key={index}
          className="inline-block mr-2"
          initial={{ y: '100%', opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            delay: delay + index * 0.1,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        >
          {word}
        </motion.span>
      ))}
    </div>
  );
}
