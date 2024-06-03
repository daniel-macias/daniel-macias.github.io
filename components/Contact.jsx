import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faAnglesUp } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import LogoSide from '../public/assets/logoSide.png';

const Contact = () => {
  return (
    <div id='contact' className='w-full lg:h-screen'>
      <div className='max-w-[1240px] m-auto px-2 py-16 lg:w-10/12'>
        <p className='text-xl tracking-widest uppercase text-[#4B007F] font-semibold JosefinSansFont'>
          Contact
        </p>
        <h2 className='py-4 font-semibold JosefinSansFont'>Get In Touch</h2>
        <div className='grid lg:grid-cols-4 gap-8'>
          {/* Left column */}
          <div className='col-span-1 w-full h-full shadow-xl shadow-gray-400 rounded-sm p-4 flex items-center justify-center'>
            <Image
              className='rounded-sm hover:scale-105 ease-in duration-300'
              src={LogoSide}
              alt='/'
            />
          </div>

          {/* Right column */}
          <div className='col-span-3 w-full h-full shadow-xl shadow-gray-400 rounded-sm p-4'>
            <div className='p-4'>
              <div className='pb-4'>
                <h2 className='py-2 font-semibold JosefinSansFont'>Daniel Macías</h2>
                <p>Full-Stack Developer</p>
                <p className='py-4'>
                  I am available for freelance or full-time positions. Contact me and let`&apos;`s talk.
                </p>
              </div>
              <div>
                <p className='uppercase pt-8'>Connect With Me</p>
                <div className='flex items-center justify-between py-4'>
                  <a
                    href='https://www.linkedin.com/in/daniel-mac%C3%ADas-reynaud-b4b69a152/'
                    target='_blank'
                    rel='noreferrer'
                    className='flex items-center space-x-2'
                  >
                    <div className='rounded-sm shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                      <FontAwesomeIcon size="2x" icon={faLinkedin} />
                      <span className='hidden md:inline ml-6 text-lg'>Daniel Macías Reynaud</span>
                    </div>
                    
                  </a>
                  <a
                    href='https://github.com/daniel-macias'
                    target='_blank'
                    rel='noreferrer'
                    className='flex items-center space-x-2'
                  >
                    <div className='rounded-sm shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                      <FontAwesomeIcon size="2x" icon={faGithub} />
                      <span className='hidden md:inline ml-6 text-lg'>daniel-macias</span>
                    </div>
                    
                  </a>
                  <a href='mailto:maciasreyaud@gmail.com'>
                    <div className='rounded-sm shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                      <FontAwesomeIcon size="2x" icon={faEnvelope} />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='flex justify-center py-12'>
          <Link href='/'>
            <div className='rounded-sm shadow-lg shadow-gray-400 py-4 px-5 cursor-pointer hover:scale-110 ease-in duration-300'>
              <FontAwesomeIcon icon={faAnglesUp} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
