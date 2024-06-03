import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { WavyBackground } from './ui/wavy-background';

const Main = () => {

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Once the component mounts, setIsClient to true to enable client-side only rendering
    setIsClient(true);
  }, []);


  return (
    <div id='home' className='relative w-full h-screen text-center md:overflow-hidden'>
          <WavyBackground className="mx-auto">
      <p className="text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center">
        Hero waves are cool
      </p>
      <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center">
        Leverage the power of canvas to create a beautiful hero section
      </p>
    </WavyBackground>
    </div>
  );
};

export default Main;