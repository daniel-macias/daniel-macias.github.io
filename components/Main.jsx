import React, { useEffect, useState } from 'react';
import { useTranslation, i18n } from 'next-i18next';
import { WavyBackground } from './ui/wavy-background';
import Link from 'next/link';
import { usePathname } from 'next/navigation'


const Main = () => {
  const { t } = useTranslation('common');
  const [currentLocale, setLocale] = useState('en');
  useEffect(() => {
    setLocale(i18n.language);
  }, [i18n.language]);
  

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
        <div className='mt-4'>
          <Link href='/' locale='en'>
            <button className={`shadow-[0_4px_14px_0_rgb(0,0,0,10%)] hover:shadow-[0_6px_20px_rgba(93,93,93,23%)] px-4 py-1 rounded-md rounded-r-none font-light transition duration-200 ease-linear ${currentLocale === 'en' ? 'bg-[#8066c9] text-[#d7d7d7]' : 'bg-[#fff] text-[#696969]'}`}>
              <img src="https://flagsapi.com/GB/flat/64.png" alt="UK Flag" className={`h-4 w-4 inline ${currentLocale === 'en' ? 'mr-2' : ''}`} />
              {currentLocale === 'en' ? 'English' : ''}
            </button>
          </Link>
          <Link href='/es' locale='es'>
            <button className={`shadow-[0_4px_14px_0_rgb(0,0,0,10%)] hover:shadow-[0_6px_20px_rgba(93,93,93,23%)] px-4 py-1 rounded-md rounded-l-none font-light transition duration-200 ease-linear ${currentLocale === 'es' ? 'bg-[#8066c9] text-[#d7d7d7]' : 'bg-[#fff] text-[#696969]'}`}>
              {currentLocale === 'es' ? 'Español' : ''}
              <img src="https://flagsapi.com/ES/flat/64.png" alt="UK Flag" className={`h-4 w-4 inline ${currentLocale === 'es' ? 'ml-2' : ''}`} />
            </button>
          </Link>
        </div>
      </WavyBackground>
    </div>
  );
};

export default Main;
