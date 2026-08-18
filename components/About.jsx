import React from 'react';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';

const About = () => {
  const { t } = useTranslation('common'); //remember to check common.json to see strings

  return (
    <section id='about' className='mx-auto max-w-[900px] px-6 py-24'>
        <div>
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
    </section>
  );
};

export default About;
