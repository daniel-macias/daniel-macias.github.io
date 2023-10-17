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
          <p className='uppercase text-sm tracking-widest text-gray-600'>
            Crafting web experiences with a touch of creativity
          </p>
          <h1 className='py-4 text-gray-700'>
            <span className='text-[#5651e5]'>Daniel Macías</span>
          </h1>
          <h1 className='py-2 text-gray-700'>A Full-Stack Web Developer</h1>
          <p className='py-4 text-gray-600 sm:max-w-[70%] m-auto'>
            I'm a versatile web developer with expertise in front-end and back-end development, driven by a passion for crafting exceptional user experiences. With a keen interest in cybersecurity, I ensure that the web applications I build are both user-friendly and secure.
          </p>
          <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
            <a
              href='https://www.linkedin.com/in/daniel-mac%C3%ADas-reynaud-b4b69a152/'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FontAwesomeIcon icon={faLinkedin} />
              </div>
            </a>
            <a
              href='https://github.com/daniel-macias'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FontAwesomeIcon icon={faGithub} />
              </div>
            </a>
            <Link href='/#contact'>
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FontAwesomeIcon icon={faEnvelope} />
              </div>
            </Link>
            <Link href='/resume'>
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FontAwesomeIcon icon={faEnvelope} />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;