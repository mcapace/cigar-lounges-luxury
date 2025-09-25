'use client';

import { useState } from 'react';

interface SimpleImageGalleryProps {
  venue: string;
}

export function SimpleImageGallery({ venue }: SimpleImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(0);
  
  // Define images directly - don't use complex loading
  const images = {
    'davidoff-madison': [
      '/images/Davidoff Madison/Facade_Davidoff_NYMadison_04a.jpg',
      '/images/Davidoff Madison/Humidor_Davidoff_NYMadison_02_V2.jpg',
      '/images/Davidoff Madison/LL LOunge_Davidoff_NYMadison_07.jpg',
      '/images/Davidoff Madison/UL Lounge_Davidoff_NYMadison_05.jpg',
    ],
    'davidoff-sixth': [
      '/images/Davidoff Sixth Ave/Davidoff_6Av_01_V2_RGB.jpg',
      '/images/Davidoff Sixth Ave/Davidoff_6Av_02a_V2_RGB.jpg',
      '/images/Davidoff Sixth Ave/Davidoff_6Av_03a_V2_RGB.jpg',
      '/images/Davidoff Sixth Ave/Davidoff_6Av_04_V2_RGB.jpg',
    ],
    'barclay-rex': [
      '/images/Barclay Rex/EFuerniss_KAMI_BarclayRex_6889 copy 2.jpg',
      '/images/Barclay Rex/EFuerniss_KAMI_BarclayRex_7007 copy 1.jpg',
      '/images/Barclay Rex/EFuerniss_KAMI_BarclayRex_7096.jpg',
      '/images/Barclay Rex/EFuerniss_KAMI_BarclayRex_7181.jpg',
      '/images/Barclay Rex/image1.jpeg',
      '/images/Barclay Rex/image2.jpeg',
      '/images/Barclay Rex/image3.jpeg',
    ]
  };
  
  const venueImages = images[venue as keyof typeof images] || [];
  
  if (venueImages.length === 0) {
    return <div className="bg-gray-100 h-96 rounded flex items-center justify-center">No images available</div>;
  }
  
  return (
    <div className="space-y-4">
      {/* Main Image - Simple img tag */}
      <div className="relative h-[500px] bg-gray-100 rounded overflow-hidden">
        <img 
          src={venueImages[selectedImage]}
          alt={venue}
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Thumbnails */}
      <div className="flex gap-2 justify-center overflow-x-auto">
        {venueImages.map((img, idx) => (
          <button
            key={idx}
            onClick={() => setSelectedImage(idx)}
            className={`w-24 h-24 overflow-hidden rounded flex-shrink-0 ${
              selectedImage === idx ? 'ring-2 ring-gold' : ''
            }`}
          >
            <img 
              src={img}
              alt={`Thumbnail ${idx + 1}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
