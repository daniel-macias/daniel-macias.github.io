import Link from 'next/link';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

const Main = () => {
  return (
    <div id='home' className='w-full h-screen text-center'>
      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
        <div>
          <p className='uppercase text-sm tracking-widest text-gray-600 JosefinSansFont font-semibold'>
            Crafting web experiences with a touch of creativity
          </p>
          <h1 className='py-4 text-gray-700'>
            <span className='text-[#b03a83] JosefinSansFont font-semibold'>Daniel Macías R.</span>
          </h1>
          <h2 className='py-2 text-gray-700 JosefinSansFont'>A Full-Stack Web Developer</h2>
          <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
          <Link href='/#projects'>
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <span className='text-[#b03a83] JosefinSansFont font-semibold'>PROJECTS</span>
              </div>
            </Link>
            <Link href='/#contact'>
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
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