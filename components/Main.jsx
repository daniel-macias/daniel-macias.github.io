import React, { useEffect, useState } from 'react';
import { useTranslation } from 'next-i18next';
import { WavyBackground } from './ui/wavy-background';

const Main = () => {
  const { t } = useTranslation('common');
  console.log(t('name'));

  return (
    <div id='home' className='relative w-full h-screen text-center md:overflow-hidden'>
      <WavyBackground className="mx-auto">
        <h1 className="text-4xl md:text-4xl lg:text-7xl text-[#4B007F] JosefinSansFont font-semibold inter-var text-center">
          {t('name')}
        </h1>
        <h2 className='py-2 text-gray-700 JosefinSansFont'>{t('title')}</h2>
        <p className='uppercase text-sm tracking-widest text-gray-600 JosefinSansFont font-semibold'>
          {t('subtitle')}
        </p>
      </WavyBackground>
    </div>
  );
};

export default Main;
