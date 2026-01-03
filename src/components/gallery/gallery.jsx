import React, { useState } from 'react';
import ImageCard from './ImageCard';
import Lightbox from './Lightbox';

// Import images from categorized folders
const highlightModules = import.meta.glob('../../static/img/highlight/*.jpg', { eager: true, import: 'default' });
const portraitModules = import.meta.glob('../../static/img/portrait/*.jpg', { eager: true, import: 'default' });
const landscapeModules = import.meta.glob('../../static/img/landscape/*.jpg', { eager: true, import: 'default' });

function getImages() {
  const highlights = Object.values(highlightModules);
  const portraits = Object.values(portraitModules);
  const landscapes = Object.values(landscapeModules);

  const images = [];

  // Deterministic Pattern: 16:9 Based Tiling
  while (highlights.length > 0 || portraits.length > 0 || landscapes.length > 0) {
    if (highlights.length > 0) {
      images.push({ url: highlights.shift(), type: 'highlight' });
      if (portraits.length >= 2) {
        images.push({ url: portraits.shift(), type: 'portrait' });
        images.push({ url: portraits.shift(), type: 'portrait' });
      } else {
        if (portraits.length > 0) images.push({ url: portraits.shift(), type: 'portrait' });
        while (landscapes.length > 0 && images.length % 2 !== 0) {
          images.push({ url: landscapes.shift(), type: 'landscape' });
        }
      }
    }

    if (landscapes.length >= 4) {
      images.push({ url: landscapes.shift(), type: 'landscape' });
      images.push({ url: landscapes.shift(), type: 'landscape' });
      images.push({ url: landscapes.shift(), type: 'landscape' });
      images.push({ url: landscapes.shift(), type: 'landscape' });
    } else if (landscapes.length > 0) {
      images.push({ url: landscapes.shift(), type: 'landscape' });
    }

    if (portraits.length > 0 && highlights.length === 0) {
      images.push({ url: portraits.shift(), type: 'portrait' });
    }
  }
  return images;
}

const Gallery = () => {
  const [lightboxIndex, setLightboxIndex] = useState(-1);
  const images = getImages();

  const openLightbox = (index) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(-1);
  };

  const nextImage = () => {
    setLightboxIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setLightboxIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <>
      <div className="
        grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4
        gap-x-4 gap-y-4 /* Ensure explicit gap-y-4 for consistent vertical spacing */
        auto-rows-min
        grid-flow-dense
      ">
        {images.map((img, index) => (
          <ImageCard
            key={index}
            src={img.url}
            type={img.type}
            index={index}
            onClick={() => openLightbox(index)}
          />
        ))}
      </div>

      {lightboxIndex >= 0 && (
        <Lightbox
          src={images[lightboxIndex].url}
          alt={`Gallery image ${lightboxIndex + 1}`}
          onClose={closeLightbox}
          onNext={nextImage}
          onPrev={prevImage}
        />
      )}
    </>
  );
};

export default Gallery;
