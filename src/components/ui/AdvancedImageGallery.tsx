'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { Skeleton } from './AdvancedLoading';

interface AdvancedGalleryProps {
  folder: string;
  venueName: string;
  images: string[];
  heroImage: string;
}

export function AdvancedImageGallery({ folder, venueName, images, heroImage }: AdvancedGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set());
  
  const { ref, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: true,
  });

  const currentDisplayImage = selectedImage === 0 ? heroImage : images[selectedImage - 1];

  const handleImageLoad = (index: number) => {
    setLoadedImages(prev => new Set([...prev, index]));
  };

  const handleNext = () => {
    setSelectedImage((prev) => (prev + 1) % (images.length + 1));
  };

  const handlePrev = () => {
    setSelectedImage((prev) => (prev - 1 + images.length + 1) % (images.length + 1));
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (!isLightboxOpen) return;
    
    switch (e.key) {
      case 'Escape':
        setIsLightboxOpen(false);
        break;
      case 'ArrowLeft':
        handlePrev();
        break;
      case 'ArrowRight':
        handleNext();
        break;
    }
  };

  useEffect(() => {
    if (isLightboxOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isLightboxOpen]);

  useEffect(() => {
    if (isIntersecting) {
      setIsLoading(false);
    }
  }, [isIntersecting]);

  // Preload first 3 images immediately
  useEffect(() => {
    if (allImages && allImages.length > 0 && typeof window !== 'undefined') {
      try {
        // Load main image and first two thumbnails
        const toPreload = allImages.slice(0, 3);
        toPreload.forEach((src, index) => {
          if (src) {
            const img = new window.Image();
            img.src = src;
            img.onload = () => {
              setLoadedImages(prev => new Set(prev).add(index));
            };
            img.onerror = () => {
              console.warn(`Failed to load image: ${src}`);
            };
          }
        });
      } catch (error) {
        console.error('Error preloading images:', error);
      }
    }
  }, [allImages]);

  return (
    <div ref={ref} className="space-y-4">
      {/* Main Image */}
      <div 
        className="relative h-[600px] gallery-container image-container cursor-pointer group"
        onClick={() => setIsLightboxOpen(true)}
      >
        {isLoading ? (
          <Skeleton className="w-full h-full" />
        ) : (
          <AnimatePresence mode="wait">
            <motion.div
              key={currentDisplayImage}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              className="absolute inset-0"
            >
              <Image
                src={currentDisplayImage}
                alt={`${venueName} - ${selectedImage === 0 ? 'Hero' : `Gallery ${selectedImage}`}`}
                fill
                className="object-cover gallery-image"
                      priority={true}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                onLoad={() => handleImageLoad(selectedImage)}
              />
            </motion.div>
          </AnimatePresence>
        )}
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
          <span className="text-white text-lg font-medium">View Gallery</span>
        </div>
      </div>
      
      {/* Thumbnail Strip */}
      <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
        {/* Hero image thumbnail */}
        <button
          onClick={() => setSelectedImage(0)}
          className={`relative w-24 h-24 flex-shrink-0 border-2 transition-all duration-200 hover-scale ${
            selectedImage === 0 ? 'border-gold ring-2 ring-gold-light' : 'border-light-gray hover:border-medium-gray'
          }`}
        >
          {loadedImages.has(0) ? (
            <Image
              src={heroImage}
              alt={`${venueName} Hero`}
              fill
              className="object-cover"
              sizes="96px"
            />
          ) : (
            <Skeleton className="w-full h-full" />
          )}
          {selectedImage !== 0 && <div className="absolute inset-0 bg-black/30 hover:bg-transparent transition-colors" />}
        </button>

        {/* Gallery thumbnails */}
        {images.map((img, idx) => (
          <button
            key={idx}
            onClick={() => setSelectedImage(idx + 1)}
            className={`relative w-24 h-24 flex-shrink-0 border-2 transition-all duration-200 hover-scale ${
              selectedImage === idx + 1 ? 'border-gold ring-2 ring-gold-light' : 'border-light-gray hover:border-medium-gray'
            }`}
          >
            {loadedImages.has(idx + 1) ? (
              <Image
                src={img}
                alt={`${venueName} Gallery ${idx + 1}`}
                fill
                className="object-cover"
                sizes="96px"
                onLoad={() => handleImageLoad(idx + 1)}
              />
            ) : (
              <Skeleton className="w-full h-full" />
            )}
            {selectedImage !== idx + 1 && <div className="absolute inset-0 bg-black/30 hover:bg-transparent transition-colors" />}
          </button>
        ))}
      </div>

      {/* Advanced Lightbox */}
      <AnimatePresence>
        {isLightboxOpen && (
          <motion.div
            className="fixed inset-0 bg-black/95 z-[100] flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsLightboxOpen(false)}
          >
            <motion.div
              className="relative w-full h-full max-w-6xl max-h-[90vh]"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={currentDisplayImage}
                alt={`${venueName} - Fullscreen ${selectedImage === 0 ? 'Hero' : `Gallery ${selectedImage}`}`}
                fill
                className="object-contain"
              />
              
              {/* Close Button */}
              <button
                className="absolute top-4 right-4 text-white text-3xl z-10 hover:text-gold transition-colors"
                onClick={() => setIsLightboxOpen(false)}
              >
                &times;
              </button>
              
              {/* Navigation Buttons */}
              <button
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-5xl z-10 p-2 bg-black/30 hover:bg-black/50 rounded-full transition-colors"
                onClick={handlePrev}
              >
                &lsaquo;
              </button>
              <button
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-5xl z-10 p-2 bg-black/30 hover:bg-black/50 rounded-full transition-colors"
                onClick={handleNext}
              >
                &rsaquo;
              </button>
              
              {/* Image Counter */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-sm bg-black/50 px-3 py-1 rounded-full">
                {selectedImage + 1} / {images.length + 1}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
