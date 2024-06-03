import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import LogoDMR from '../public/assets/logoSide.png'
import { useRouter } from 'next/router';
import path from 'path';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState('transparent');
  const [linkColor, setLinkColor] = useState('#1f2937');
  const { pathname } = useRouter(); // Get the current path

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
        setNavBg('#ecf0f3');
      } else {
        setShadow(false);
        setNavBg('transparent');
      }
    };
    window.addEventListener('scroll', handleShadow);
  }, []);

  return (
    <div
      style={{ backgroundColor: `${navBg}` }}
      className={
        shadow
          ? 'fixed w-full h-20 shadow-xl z-[100] ease-in-out duration-300'
          : 'fixed w-full h-20 z-[100]'
      }
    >
      <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
        <Link href='/'>
            <Image
              src={LogoDMR}
              alt='/'

              height='50'
              className='cursor-pointer'
            />
        </Link>
        <div>
          <ul style={{ color: `${linkColor}` }} className='hidden md:flex'>
            <li className='ml-10 text-sm uppercase hover:border-b'>
              <Link href='/'><span className='text-[#3d3d3d] JosefinSansFont font-semibold'>HOME</span></Link>
            </li>
            <li className='ml-10 text-sm uppercase hover:border-b'>
              <Link href='/#about'><span className='text-[#3d3d3d] JosefinSansFont font-semibold'>ABOUT</span></Link>
            </li>
            <li className='ml-10 text-sm uppercase hover:border-b'>
              <Link href='/#skills'><span className='text-[#3d3d3d] JosefinSansFont font-semibold'>SKILLS</span></Link>
            </li>
            <li className='ml-10 text-sm uppercase hover:border-b'>
              <Link href='/#projects'><span className='text-[#3d3d3d] JosefinSansFont font-semibold'>PROJECTS</span></Link>
            </li>
            <li className='ml-10 text-sm uppercase hover:border-b'>
              <Link href='/#contact'><span className='text-[#3d3d3d] JosefinSansFont font-semibold'>CONTACT</span></Link>
            </li>
          </ul>
          {/* Hamburger Icon */}
          <div
            style={{ color: `${linkColor}` }}
            onClick={handleNav}
            className='md:hidden'
          >
            <FontAwesomeIcon icon={faBars} />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {/* Overlay */}
      <div
        className={
          nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''
        }
      >
        {/* Side Drawer Menu */}
        <div
          className={
            nav
              ? ' fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500'
              : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
          }
        >
          <div>
            <div className='flex w-full items-center justify-between'>
              <Link href='/'>
                  <Image
                    src={LogoDMR}

                    height='35'
                    alt='/'
                  />
              </Link>
              <div
                onClick={handleNav}
                className='rounded-sm shadow-lg shadow-gray-400 p-3 cursor-pointer'
              >
                <FontAwesomeIcon icon={faXmark} />
              </div>
            </div>
            <div className='border-b border-gray-300 my-4'>
              <p className='w-[85%] md:w-[90%] py-4'>
                <span className='text-[#3d3d3d] JosefinSansFont font-semibold'>Daniel M Reynaud</span>
                
              </p>
            </div>
          </div>
          <div className='py-4 flex flex-col'>
            <ul className='uppercase'>
              <Link href='/'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                    <span className='text-[#3d3d3d] JosefinSansFont font-semibold'>HOME</span>
                </li>
              </Link>
              <Link href='/#about'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                    <span className='text-[#3d3d3d] JosefinSansFont font-semibold'>ABOUT</span>
                </li>
              </Link>
              <Link href='/#skills'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                    <span className='text-[#3d3d3d] JosefinSansFont font-semibold'>SKILLS</span>
                </li>
              </Link>
              <Link href='/#projects'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                    <span className='text-[#3d3d3d] JosefinSansFont font-semibold'>PROJECTS</span>
                </li>
              </Link>
              <Link href='/#contact'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                    <span className='text-[#3d3d3d] JosefinSansFont font-semibold'>CONTACT</span>
                </li>
              </Link>
            </ul>
            <div className='pt-40'>
              <p className='uppercase tracking-widest text-[#4B007F] JosefinSansFont font-semibold'>
                Let&#39;s Talk
              </p>
              <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                <a
                  href='https://www.linkedin.com/in/daniel-mac%C3%ADas-reynaud-b4b69a152/'
                  target='_blank'
                  rel='noreferrer'
                >
                  <div className='rounded-sm shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <FontAwesomeIcon icon={faLinkedin} />
                  </div>
                </a>
                <a
                  href='https://github.com/daniel-macias/'
                  target='_blank'
                  rel='noreferrer'
                >
                  <div className='rounded-sm shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <FontAwesomeIcon icon={faGithub} />
                  </div>
                </a>
                <Link href='/#contact'>
                  <div
                    onClick={() => setNav(!nav)}
                    className='rounded-sm shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'
                  >
                    <FontAwesomeIcon icon={faEnvelope} />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;