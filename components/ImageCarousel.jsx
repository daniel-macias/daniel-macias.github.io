import React, { useCallback, useState, useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const ImageCarousel = ({ images, autoplayInterval = 3000 }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    onSelect(); // Initial selection
    return () => emblaApi.off("select", onSelect);
  }, [emblaApi, onSelect]);

  useEffect(() => {
    const autoplay = () => {
      if (emblaApi && isPlaying) {
        emblaApi.scrollNext();
      }
    };

    const autoplayId = setInterval(autoplay, autoplayInterval);

    return () => clearInterval(autoplayId);
  }, [emblaApi, isPlaying, autoplayInterval]);

  return (
    <div 
      className="relative overflow-hidden max-w-full"
      onMouseEnter={() => setIsPlaying(false)}
      onMouseLeave={() => setIsPlaying(true)}
    >
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {images.map((src, index) => (
            <div className="relative flex-[0_0_100%]" key={index}>
              <Image src={src} alt={`Slide ${index}`}  objectFit="contain" />
            </div>
          ))}
        </div>
      </div>
      <FontAwesomeIcon 
        icon={faChevronLeft} 
        onClick={scrollPrev} 
        className="absolute top-1/2 left-5 -translate-y-1/2 z-20 p-3 bg-black bg-opacity-40 text-white cursor-pointer rounded-full" 
        size="lg" 
      />
      <FontAwesomeIcon 
        icon={faChevronRight} 
        onClick={scrollNext} 
        className="absolute top-1/2 right-5 -translate-y-1/2 z-20 p-3 bg-black bg-opacity-40 text-white cursor-pointer rounded-full" 
        size="lg" 
      />
      <div className="flex justify-center mt-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full mx-1 transition-colors ${index === selectedIndex ? "bg-gray-800" : "bg-gray-400"}`}
            onClick={() => emblaApi && emblaApi.scrollTo(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
