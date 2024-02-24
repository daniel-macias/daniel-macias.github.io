import React, { useEffect, useState } from 'react';
import Link from 'next/link';

const Main = () => {

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Once the component mounts, setIsClient to true to enable client-side only rendering
    setIsClient(true);
  }, []);


  return (
    <div id='home' className='relative w-full h-screen text-center overflow-hidden'>
      {isClient && (
        <div id="bg-wrap" className="absolute top-0 left-0 w-full h-full z-[-1]" style={{ pointerEvents: 'none' }}>
          <svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice" className="w-full h-full block">
          <defs>
          <radialGradient id="Gradient1" cx="50%" cy="50%" fx="0.441602%" fy="50%" r=".5"><animate attributeName="fx" dur="34s" values="0%;3%;0%" repeatCount="indefinite"></animate><stop offset="0%" stop-color="rgba(255, 182, 193, 0.2)"></stop><stop offset="100%" stop-color="rgba(150, 123, 182, 0)"></stop></radialGradient>
          <radialGradient id="Gradient2" cx="50%" cy="50%" fx="2.68147%" fy="50%" r=".5"><animate attributeName="fx" dur="23.5s" values="0%;3%;0%" repeatCount="indefinite"></animate><stop offset="0%" stop-color="rgba(255, 105, 180, 0.2)"></stop><stop offset="100%" stop-color="rgba(75, 0, 130, 0)"></stop></radialGradient>
          <radialGradient id="Gradient3" cx="50%" cy="50%" fx="0.836536%" fy="50%" r=".5"><animate attributeName="fx" dur="21.5s" values="0%;3%;0%" repeatCount="indefinite"></animate><stop offset="0%" stop-color="rgba(255, 20, 147, 0.2)"></stop><stop offset="100%" stop-color="rgba(128, 0, 128, 0)"></stop></radialGradient>
          <radialGradient id="Gradient4" cx="50%" cy="50%" fx="4.56417%" fy="50%" r=".5"><animate attributeName="fx" dur="23s" values="0%;5%;0%" repeatCount="indefinite"></animate><stop offset="0%" stop-color="rgba(255, 182, 193, 0.2)"></stop><stop offset="100%" stop-color="rgba(255, 182, 193, 0)"></stop></radialGradient>
          <radialGradient id="Gradient5" cx="50%" cy="50%" fx="2.65405%" fy="50%" r=".5"><animate attributeName="fx" dur="24.5s" values="0%;5%;0%" repeatCount="indefinite"></animate><stop offset="0%" stop-color="rgba(255, 105, 180, 0.2)"></stop><stop offset="100%" stop-color="rgba(255, 105, 180, 0)"></stop></radialGradient>
          <radialGradient id="Gradient6" cx="50%" cy="50%" fx="0.981338%" fy="50%" r=".5"><animate attributeName="fx" dur="25.5s" values="0%;5%;0%" repeatCount="indefinite"></animate><stop offset="0%" stop-color="rgba(255, 20, 147, 0.2)"></stop><stop offset="100%" stop-color="rgba(255, 20, 147, 0)"></stop></radialGradient>
          </defs>
          <rect x="13.744%" y="1.18473%" width="100%" height="100%" fill="url(#Gradient1)" transform="rotate(334.41 50 50)"><animate attributeName="x" dur="20s" values="25%;0%;25%" repeatCount="indefinite"></animate><animate attributeName="y" dur="21s" values="0%;25%;0%" repeatCount="indefinite"></animate><animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="7s" repeatCount="indefinite"></animateTransform></rect>
          <rect x="-2.17916%" y="35.4267%" width="100%" height="100%" fill="url(#Gradient2)" transform="rotate(255.072 50 50)"><animate attributeName="x" dur="23s" values="-25%;0%;-25%" repeatCount="indefinite"></animate><animate attributeName="y" dur="24s" values="0%;50%;0%" repeatCount="indefinite"></animate><animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="12s" repeatCount="indefinite"></animateTransform>
          </rect>
          <rect x="9.00483%" y="14.5733%" width="100%" height="100%" fill="url(#Gradient3)" transform="rotate(139.903 50 50)"><animate attributeName="x" dur="25s" values="0%;25%;0%" repeatCount="indefinite"></animate><animate attributeName="y" dur="12s" values="0%;25%;0%" repeatCount="indefinite"></animate><animateTransform attributeName="transform" type="rotate" from="360 50 50" to="0 50 50" dur="9s" repeatCount="indefinite"></animateTransform>
          </rect>
          </svg>
        </div>
      )}
      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center z-10'>
        <div>
          <p className='uppercase text-sm tracking-widest text-gray-600 JosefinSansFont font-semibold'>
            Crafting web experiences with a touch of creativity
          </p>
          <h1 className='py-4 text-gray-700'>
            <span className='text-[#b03a83] JosefinSansFont font-semibold'>Daniel Macías R.</span>
          </h1>
          <h2 className='py-2 text-gray-700 JosefinSansFont'>Full-Stack Web Developer</h2>
          <div className='flex items-center justify-between max-w-[330px] m-auto mt-6'>
            <Link href='/#projects'>
              <div className='bg-gray-50 rounded-full shadow-lg shadow-gray-400 px-6 py-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                <span className='text-[#b03a83] JosefinSansFont font-semibold'>PROJECTS</span>
              </div>
            </Link>
            <Link href='/#contact'>
              <div className='bg-gray-50 rounded-full shadow-lg shadow-gray-400 px-6 py-4  cursor-pointer hover:scale-110 ease-in duration-300'>
                <span className='text-[#b03a83] JosefinSansFont font-semibold'>CONTACT ME</span>
              </div>
            </Link>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;