import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import LogoSide from '../public/assets/logoSide.png'
import { useTranslation } from 'next-i18next';

const About = () => {
  const { t } = useTranslation('common'); //remember to check common.json to see strings

  return (
    <div id='about' className='mx-auto lg:w-10/12 md:h-screen p-2 flex items-center py-16 '> 
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#4B007F] JosefinSansFont '>
            {t('about')}
          </p>
          <h2 className='py-4 text-2xl'>{t('about-title')}</h2>
          <p className='py-2 text-gray-600'>
          {t('about-desc')}
          </p>
          <Link href='/#projects'>
            <p className='py-2 text-gray-600 underline cursor-pointer'>
            {t('about-link')}
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