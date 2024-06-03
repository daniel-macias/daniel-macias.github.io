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
        <h1 className="text-4xl md:text-4xl lg:text-7xl text-[#4B007F] JosefinSansFont font-semibold inter-var text-center">
          Daniel Macías R.
        </h1>
        <h2 className='py-2 text-gray-700 JosefinSansFont'>Full-Stack Web Developer</h2>
        <p className='uppercase text-sm tracking-widest text-gray-600 JosefinSansFont font-semibold'>
              Crafting web experiences with a touch of creativity
            </p>
      </WavyBackground>
    </div>
  );
};

export default Main;