import React, { useCallback, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const ImageCarousel = ({ images }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

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

  // Setup emblaApi event listeners
  React.useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    onSelect(); // Initial selection
    return () => emblaApi.off("select", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {images.map((src, index) => (
            <div className="embla__slide" key={index}>
              <Image src={src} alt={`Slide ${index}`} objectFit="contain" />
            </div>
          ))}
        </div>
      </div>
      {/* Left Arrow */}
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
      <div className="embla__dots">
        {images.map((_, index) => (
          <button
            key={index}
            className={`embla__dot ${index === selectedIndex ? "is-selected" : ""}`}
            onClick={() => emblaApi && emblaApi.scrollTo(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;