import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import LogoSide from '../public/assets/logoSide.png'

const About = () => {
  return (
    <div id='about' className='mx-auto lg:w-10/12 md:h-screen p-2 flex items-center py-16 '> 
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#9f3e7d] JosefinSansFont '>
            About
          </p>
          <h2 className='py-4 text-2xl'>Who I Am</h2>
          <p className='py-2 text-gray-600'>
            I&apos;m a seasoned web developer with a strong background in game development, specializing in crafting immersive web experiences. My passion for creative design is complemented by my commitment to cybersecurity, ensuring that every project I undertake not only captivates users but also prioritizes their data security.
          </p>
          <Link href='/#projects'>
            <p className='py-2 text-gray-600 underline cursor-pointer'>
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className='w-50 h-auto m-auto flex items-center justify-center sm:p-10 pt-10 px-40'>
          <Image src={LogoSide} alt='/' />
        </div>
      </div>
    </div>
  );
};

export default About;