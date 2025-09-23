'use client';

import { motion } from 'framer-motion';

interface SkeletonProps {
  className?: string;
  width?: string;
  height?: string;
}

export function Skeleton({ className = '', width = '100%', height = '1rem' }: SkeletonProps) {
  return (
    <div
      className={`skeleton rounded ${className}`}
      style={{ width, height }}
    />
  );
}

export function ImageSkeleton({ className = '' }: { className?: string }) {
  return (
    <div className={`bg-light-gray rounded overflow-hidden ${className}`}>
      <div className="skeleton w-full h-full" />
    </div>
  );
}

export function CardSkeleton() {
  return (
    <div className="bg-white border border-light-gray p-8 space-y-4">
      <Skeleton height="2rem" width="60%" />
      <Skeleton height="1.5rem" width="80%" />
      <Skeleton height="1rem" width="100%" />
      <Skeleton height="1rem" width="90%" />
      <div className="pt-4">
        <Skeleton height="3rem" width="100%" />
      </div>
    </div>
  );
}

export function PageLoader() {
  return (
    <motion.div
      className="fixed inset-0 bg-white z-50 flex items-center justify-center"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-center space-y-6">
        <motion.div
          className="w-16 h-16 border-4 border-light-gray border-t-gold rounded-full mx-auto"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
        />
        <motion.p
          className="text-medium-gray font-light"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Loading Experience...
        </motion.p>
      </div>
    </motion.div>
  );
}
